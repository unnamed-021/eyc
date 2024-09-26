import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopupModal } from "react-calendly";
import openToast from "../../utils/toast";
import {
  BannerContainer,
  Column,
  ColumnsRow,
  Container,
  FirstColumn,
  FormColumn,
  FormContainer,
  FormRow,
  FreeTrail,
  Img,
  InfoImg,
  InputValue,
  Label,
  List,
  Photo,
  Row,
  SecondColumn,
  Section,
  SectionWrapper,
  SmallRow,
  StyledInput,
  Subtitle,
  Text,
  Title,
  Value,
} from "./RequestFormPage.styles";

import Img1 from "../../assets/images/imag6.png";
import Check from "../../assets/images/check.svg";
import Info from "../../assets/images/info.png";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/utils/Button/Button";
import CheckboxComponent from "../../components/utils/Checkbox/Checkbox";

import { formatNumberWithCommas } from "../../utils/utils";
import { FORM_TYPES } from "../../utils/constants";

import { websiteForm } from "../../store/slice/posts/asyncThunk";
import { selectWebsiteForm } from "../../store/slice/posts/slice";

const RequestFormPage = () => {
  const dispatch = useDispatch();
  const toastId = useRef(null);
  const { loading } = useSelector(selectWebsiteForm);

  const [numberOfNewConsumers, setNumberOfNewConsumers] = useState(50);
  const [budgetPerNewConsumers, setBudgetPerNewConsumers] = useState(15);
  const [numberOfLocations, setNumberOfLocations] = useState(2);
  const [selectIdealCustomers, setSelectIdealCustomers] = useState([]);
  const [selectLocationTypes, setSelectLocationTypes] = useState("");
  const [selectBrandIndustry, setSelectBrandIndustry] = useState("");
  const [minutes, setMinutes] = useState(41);

  const [webSite, setWebSite] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [errors, setErrors] = useState({});

  const [tab, setTab] = useState(0);

  const handleCheckboxChange = (group, setValue) => {
    setValue((prevValue) =>
      prevValue.includes(group)
        ? prevValue.filter((v) => v !== group)
        : [...prevValue, group]
    );
  };

  const validateForm = () => {
    const newErrors = {};

    if (!selectBrandIndustry) {
      newErrors.brandIndustry = "Brand Industry is required";
    }
    if (!selectLocationTypes) {
      newErrors.locationTypes = "Location Type is required";
    }
    if (selectIdealCustomers.length === 0) {
      newErrors.idealCustomers = "Ideal Customers is required";
    }
    if (!name) {
      newErrors.name = "Name is required";
    }
    if (!brand) {
      newErrors.brand = "Brand is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email format is invalid";
    }

    if (phoneNumber) {
      if (!/^\d+$/.test(phoneNumber)) {
        newErrors.phoneNumber = "Phone number must contain only numbers";
      }
    }

    if (webSite) {
      if (
        !/^(https?:\/\/)?([\w\d-]+\.){1,2}[\w\d-]+(\/[\w\d-]*)?$/.test(webSite)
      ) {
        newErrors.webSite = "Website URL is invalid";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (selectIdealCustomers.includes("Luxury")) {
      setBudgetPerNewConsumers(58);
      setMinutes(60);
    } else if (selectIdealCustomers.includes("Premium")) {
      setBudgetPerNewConsumers(38);
      setMinutes(52);
    } else if (selectIdealCustomers.includes("Value")) {
      setBudgetPerNewConsumers(22);
      setMinutes(44);
    } else if (selectIdealCustomers.includes("Mass Market")) {
      setBudgetPerNewConsumers(15);
      setMinutes(41);
    }
  }, [selectIdealCustomers]);

  useEffect(() => {
    if (+numberOfLocations > 100) {
      return setNumberOfLocations(100);
    }
  }, [numberOfLocations]);

  useEffect(() => {
    if (+numberOfNewConsumers > 2000) {
      return setNumberOfNewConsumers(2000);
    }
  }, [numberOfNewConsumers]);

  const manHours = (minutes * numberOfNewConsumers) / 60;

  const totalMonthlyBudget =
    budgetPerNewConsumers * numberOfLocations * numberOfNewConsumers;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(
        websiteForm({
          email: email,
          fullName: name,
          type: FORM_TYPES.CAMPAIGN_REQUEST,
          data: {
            brandIndustry: selectBrandIndustry,
            idealCustomers: selectIdealCustomers,
            numOfNewConsumers: numberOfNewConsumers,
            locationType: selectLocationTypes,
            numOfLocations: numberOfLocations,
            budgetPerNewConsumers: budgetPerNewConsumers,
            totalMonthlyBudget: totalMonthlyBudget,
            fullName: name,
            workEmail: email,
            brandName: brand,
            ...(webSite && { webSite }),
            ...(phoneNumber && { phoneNumber }),
          },
        })
      )
        .unwrap()
        .then(() => {
          openToast(
            toastId,
            "submit-message",
            "success",
            `Thank you, ${name}! Your request has been successfully submitted.`
          );

          setTab(1);
          window.scrollTo(0, 0);
        })
        .catch((err) => console.log(err.message));
    } else {
      openToast(
        toastId,
        "submit-error",
        "error",
        "Please fill in all required fields."
      );
    }
  };

  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    if (tab === 1) {
      setOpenPopup(true);
    }
  }, [tab]);

  /* SCROLL ANIMATION */

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIntersection = (setIntersecting, ref) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  };

  useEffect(() => handleIntersection(setIsIntersecting, ref, "slide-in"), []);

  useEffect(() => {
    const handleClassToggle = (isIntersecting, ref, className) => {
      ref.current.querySelectorAll("div").forEach((el) => {
        if (isIntersecting) {
          el.classList.add(className);
        } else {
          el.classList.remove(className);
        }
      });
    };

    handleClassToggle(isIntersecting, ref, "slide-in");
  }, [isIntersecting]);

  const inputRange = document.getElementById("inputRange");
  const inputRange2 = document.getElementById("inputRange");
  const activeColor = "#338891";
  const inactiveColor = "#3388911f";

  const updateRangeBackground = (inputElement) => {
    const ratio =
      ((inputElement.value - inputElement.min) /
        (inputElement.max - inputElement.min)) *
      100;
    inputElement.style.background = `linear-gradient(90deg, ${activeColor} ${ratio}%, ${inactiveColor} ${ratio}%)`;
  };

  inputRange?.addEventListener("input", function () {
    updateRangeBackground(this);
  });

  inputRange2?.addEventListener("input", function () {
    updateRangeBackground(this);
  });

  return (
    <Container>
      <Header />
      <Section ref={ref}>
        <SectionWrapper>
          <Row>
            <Column>
              <Title>
                Welcome to White-Glove Service: Let's bring waves of new
                consumers from our community to your brand.
              </Title>
              <SmallRow $noWrap>
                <Img src={Check} />
                <Subtitle>
                  Tell us how many new consumers to bring from our vibrant
                  community to your brand, define your target audience, and set
                  your budget.
                </Subtitle>
              </SmallRow>
              <SmallRow $noWrap>
                <Img src={Check} />
                <Subtitle>
                  Our world-class platform and team handles everything. You
                  don't have to lift a finger. Results guaranteed.
                </Subtitle>
              </SmallRow>
            </Column>
            <Photo src={Img1} alt="Photo-1" />
          </Row>

          {tab === 0 && (
            <FormContainer>
              <FormRow $flexStart>
                <Label $error={errors.brandIndustry}>
                  Your Brand Industry:
                </Label>
                <InfoImg src={Info} />
                <FormColumn>
                  <ColumnsRow>
                    <FirstColumn>
                      <CheckboxComponent
                        checked={selectBrandIndustry === "Retail"}
                        onChange={() => setSelectBrandIndustry("Retail")}
                        label={"Retail"}
                      />

                      <CheckboxComponent
                        checked={selectBrandIndustry === "Consumer Goods"}
                        onChange={() =>
                          setSelectBrandIndustry("Consumer Goods")
                        }
                        label={"Consumer Goods"}
                      />
                    </FirstColumn>

                    <SecondColumn>
                      <CheckboxComponent
                        checked={selectBrandIndustry === "E-commerce"}
                        onChange={() => {
                          setSelectBrandIndustry("E-commerce");
                          setSelectLocationTypes("");
                        }}
                        label={"E-commerce"}
                      />

                      <CheckboxComponent
                        checked={selectBrandIndustry === "Food Service"}
                        onChange={() => setSelectBrandIndustry("Food Service")}
                        label={"Food Service"}
                      />
                    </SecondColumn>
                  </ColumnsRow>
                </FormColumn>
                {/* <BannerContainer>
                  <FreeTrail>Free Trail</FreeTrail>
                  <List>
                    <Text>
                      23 Fresh Faces <br />1 Location <br />
                      for One Month
                    </Text>
                  </List>
                </BannerContainer> */}
              </FormRow>

              <FormRow $flexStart>
                <Label $error={errors.idealCustomers}>
                  Your Ideal Customers:
                </Label>
                <InfoImg src={Info} />
                <FormColumn>
                  <ColumnsRow>
                    <FirstColumn>
                      <CheckboxComponent
                        checked={selectIdealCustomers.includes("Mass Market")}
                        onChange={() =>
                          handleCheckboxChange(
                            "Mass Market",
                            setSelectIdealCustomers
                          )
                        }
                        label={"Mass Market"}
                      />

                      <CheckboxComponent
                        checked={selectIdealCustomers.includes("Premium")}
                        onChange={() =>
                          handleCheckboxChange(
                            "Premium",
                            setSelectIdealCustomers
                          )
                        }
                        label={"Premium"}
                      />
                    </FirstColumn>

                    <SecondColumn>
                      <CheckboxComponent
                        checked={selectIdealCustomers.includes("Value")}
                        onChange={() =>
                          handleCheckboxChange("Value", setSelectIdealCustomers)
                        }
                        label={"Value"}
                      />
                      <CheckboxComponent
                        checked={selectIdealCustomers.includes("Luxury")}
                        onChange={() =>
                          handleCheckboxChange(
                            "Luxury",
                            setSelectIdealCustomers
                          )
                        }
                        label={"Luxury"}
                      />
                    </SecondColumn>
                  </ColumnsRow>
                </FormColumn>
              </FormRow>

              <FormRow>
                <Label>
                  Number of New Consumers
                  <br />
                  (brought to your locations monthly):
                </Label>
                <InfoImg src={Info} />
                <InputValue
                  value={numberOfNewConsumers}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      setNumberOfNewConsumers(value);
                    }

                    const inputRangeElement =
                      document.getElementById("inputRange");
                    if (inputRangeElement) {
                      inputRangeElement.value = value;
                      updateRangeBackground(inputRangeElement);
                    }
                  }}
                />
                <input
                  type="range"
                  className="inputRange"
                  id="inputRange"
                  min="20"
                  max="2000"
                  value={numberOfNewConsumers}
                  onChange={(e) => {
                    setNumberOfNewConsumers(e.target.value);
                    updateRangeBackground(e.target);
                  }}
                />
              </FormRow>

              <FormRow $flexStart>
                <Label $error={errors.locationTypes}>
                  Location Types <br />
                  (to bring new consumers):
                </Label>
                <InfoImg src={Info} />
                <FormColumn>
                  <ColumnsRow>
                    <FirstColumn>
                      <CheckboxComponent
                        disabled={selectBrandIndustry === "E-commerce"}
                        checked={selectLocationTypes === "Physical"}
                        onChange={() => setSelectLocationTypes("Physical")}
                        label={"Physical"}
                      />
                    </FirstColumn>

                    <SecondColumn>
                      <CheckboxComponent
                        checked={selectLocationTypes === "Online"}
                        onChange={() => setSelectLocationTypes("Online")}
                        label={"Online"}
                      />
                    </SecondColumn>
                  </ColumnsRow>
                </FormColumn>
              </FormRow>

              <FormRow>
                <Label>
                  Number of Locations
                  <br />
                  (to bring new consumers):
                </Label>
                <InfoImg src={Info} />
                <InputValue
                  value={numberOfLocations}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      setNumberOfLocations(value);
                    }
                    const inputRangeElement =
                      document.getElementById("inputRange2");
                    if (inputRangeElement) {
                      inputRangeElement.value = value;
                      updateRangeBackground(inputRangeElement);
                    }
                  }}
                />

                <input
                  className="inputRange2"
                  id="inputRange2"
                  type="range"
                  min="1"
                  max="100"
                  value={numberOfLocations}
                  onChange={(e) => {
                    setNumberOfLocations(e.target.value);
                    updateRangeBackground(e.target);
                  }}
                />
              </FormRow>

              <FormRow>
                <Label>Budget Per New Consumer:</Label>
                <InfoImg src={Info} />
                <Value>${budgetPerNewConsumers}</Value>
              </FormRow>

              <FormRow $flexStart>
                <Label>Total Monthly Budget and Results:</Label>
                <InfoImg src={Info} />
                <Value $wrap>
                  For ${formatNumberWithCommas(totalMonthlyBudget)}, bring{" "}
                  {formatNumberWithCommas(numberOfNewConsumers)} new consumers
                  to {numberOfLocations} locations every month for a total of{" "}
                  {formatNumberWithCommas(
                    numberOfLocations * numberOfNewConsumers
                  )}{" "}
                  fresh faces for your brand
                </Value>
              </FormRow>

              <FormRow $flexStart>
                <Label>Additional Benefits:</Label>
                <InfoImg src={Info} />
                <Value $wrap>
                  You also receive{" "}
                  {formatNumberWithCommas(4 * numberOfNewConsumers)} rated UGC
                  photos, {formatNumberWithCommas(manHours.toFixed(0))} man
                  hours of brand exposure, and{" "}
                  {formatNumberWithCommas(3 * numberOfNewConsumers)}{" "}
                  interactions with new consumers for your brand every month!
                </Value>
              </FormRow>

              <FormRow>
                <Label>Your Name:</Label>
                <InfoImg src={Info} />
                <StyledInput
                  $error={errors.name}
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </FormRow>

              <FormRow>
                <Label>Your Work Email:</Label>
                <InfoImg src={Info} />
                <StyledInput
                  $error={errors.email}
                  type="email"
                  placeholder="Work Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormRow>

              <FormRow>
                <Label>Your Brand:</Label>
                <InfoImg src={Info} />
                <StyledInput
                  $error={errors.brand}
                  type="text"
                  placeholder="Brand Name"
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                />
              </FormRow>

              <FormRow>
                <Label>Your Brand Website (optional):</Label>
                <InfoImg src={Info} />
                <StyledInput
                  $error={errors.webSite}
                  type="text"
                  placeholder="Brand Website Url"
                  value={webSite}
                  onChange={(e) => {
                    setWebSite(e.target.value);
                  }}
                />
              </FormRow>
              <FormRow>
                <Label>Your Phone Number (optional):</Label>
                <InfoImg src={Info} />

                <StyledInput
                  $error={errors.phoneNumber}
                  type="text"
                  placeholder="Mobile Phone Number"
                  value={phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      setPhoneNumber(value);
                    }
                  }}
                />
              </FormRow>
              <Button
                title="Submit and Book a Call"
                onClick={handleSubmit}
                loading={loading}
                disabled={loading}
                containerStyle={{ width: 240 }}
              />

              <Subtitle $large>
                Click submit and then select a time to speak with our
                world-class team on Zoom or by phone. Volume and early-bird
                discounts available.
                <br />
                <br />
                We can confirm details in minutes and deliver initial results
                within days. Full results in 3 to 4 weeks.
                <br />
                <br />
                Rest assured, our world-class platform and team handles
                everything. Results are guaranteed. You don't have to lift a
                finger.
                <br />
                <br />
                Welcome to EyCrowd!
              </Subtitle>
            </FormContainer>
          )}

          {tab === 1 && (
            <FormContainer>
              <Subtitle $large>
                Thank you for your submission. Please select a time to speak
                with our team.
              </Subtitle>

              <PopupModal
                url="https://calendly.com/ashley-4ec/30min?back=1"
                pageSettings={{
                  textColor: "#000",
                  primaryColor: "#FE5F55",
                }}
                open={openPopup}
                onModalClose={() => setOpenPopup(false)}
                rootElement={document.getElementById("root")}
              />

              <Subtitle $large>
                We will confirm your details, identify any additional
                requirements, and launch! Results typically take three to four
                weeks. Feel free to email us on support@eycrowd.com.
                <br />
                <br />
                Rest assured, our world-class platform and team handles
                everything. Results are guaranteed. You don't have to lift a
                finger.
                <br />
                <br />
                Welcome to EyCrowd!
              </Subtitle>
            </FormContainer>
          )}
        </SectionWrapper>
      </Section>

      <Footer />
    </Container>
  );
};

export default RequestFormPage;
