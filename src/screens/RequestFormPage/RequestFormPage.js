import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  Column,
  ColumnsRow,
  Container,
  FirstColumn,
  FormColumn,
  FormContainer,
  FormRow,
  Img,
  InfoImg,
  InputLabel,
  InputValue,
  Label,
  Locations,
  P,
  Photo,
  Row,
  Search,
  SecondColumn,
  Section,
  SectionWrapper,
  SmallRow,
  StyledInput,
  Subtitle,
  Title,
  UploadButton,
  Value,
  ValueContainer,
} from "./RequestFormPage.styles";

import Img1 from "../../assets/images/opt.png";
import Check from "../../assets/images/check.png";
import Info from "../../assets/images/info.png";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Button from "../../components/utils/Button/Button";

const RequestFormPage = () => {
  const navigate = useNavigate();
  const [numberOfNewConsumers, setNumberOfNewConsumers] = useState(10);
  const [budgetPerNewConsumers, setBudgetPerNewConsumers] = useState(10);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectGender, setSelectGender] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchInterests, setSearchInterests] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [webSite, setWebSite] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      console.log("Uploaded file:", file);
    }
  };

  const locations = [
    "United States",
    "California, USA",
    "San Diego County, CA",
    "Los Angeles County, CA",
    "Orange County, CA",
    "United States",
    "California, USA",
    "San Diego County, CA",
    "Los Angeles County, CA",
    "Orange County, CA",
  ];

  const interests = [
    "All",
    "interest",
    "interest",
    "interest",
    "interest",
    "interest",
    "interest",
    "interest",
  ];

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  const filteredInterests = interests.filter((interest) =>
    interest.toLowerCase().includes(searchInterests.toLowerCase())
  );

  const handleCheckboxChange = (group, setValue) => {
    setValue((prevValue) =>
      prevValue.includes(group)
        ? prevValue.filter((v) => v !== group)
        : [...prevValue, group]
    );
  };

  /* SCROLL ANIMATION */

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

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

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email format is invalid";
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d+$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number must contain only numbers";
    }

    if (!webSite) {
      newErrors.webSite = "Website is required";
    } else if (
      !/^(https?:\/\/)?([\w\d-]+\.){1,2}[\w\d-]+(\/[\w\d-]*)?$/.test(webSite)
    ) {
      newErrors.webSite = "Website URL is invalid";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid, submitting...");
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <Container>
      <Header />
      <Section ref={ref}>
        <SectionWrapper>
          <Title>
            Welcome to White-Glove Service: Let's bring waves of new consumers
            from our community to your brand.
          </Title>
          <Row>
            <Column>
              <SmallRow>
                <Img src={Check} />
                <Subtitle>
                  Tell us how many new consumers to bring to your brand from our
                  vibrant community, define your target audience, and set your
                  budget.
                </Subtitle>
              </SmallRow>
              <SmallRow>
                <Img src={Check} />
                <Subtitle>
                  Our world-class platform and team handles everything. You
                  don't have to lift a finger. Results guaranteed.
                </Subtitle>
              </SmallRow>
            </Column>
            <Photo src={Img1} alt="Photo-1" />
          </Row>
          <FormContainer>
            <FormRow>
              <Label>Number of New Consumers:</Label>
              <InfoImg src={Info} />
              <ValueContainer>
                <Value>{numberOfNewConsumers}</Value>
              </ValueContainer>
              <input
                type="range"
                min="10"
                max="600"
                value={numberOfNewConsumers}
                onChange={(e) => {
                  setNumberOfNewConsumers(e.target.value);
                }}
                style={{ width: 240 }}
              />
            </FormRow>
            <FormRow>
              <Label>Budget Per New Consumers:</Label>
              <InfoImg src={Info} />
              <ValueContainer>
                <Value>{budgetPerNewConsumers}</Value>
              </ValueContainer>
              <input
                type="range"
                min="10"
                max="150"
                value={budgetPerNewConsumers}
                onChange={(e) => {
                  setBudgetPerNewConsumers(e.target.value);
                }}
                style={{ width: 240 }}
              />
            </FormRow>
            <FormRow>
              <Label>Total Budget</Label>
              <InfoImg src={Info} />
              <ValueContainer>
                <Value>${budgetPerNewConsumers * numberOfNewConsumers}</Value>
              </ValueContainer>
            </FormRow>

            <FormRow $flexStart>
              <Label>Your Customer Interests:</Label>
              <InfoImg src={Info} />
              <FormColumn>
                <Search
                  type="text"
                  placeholder="Search interests"
                  value={searchInterests}
                  onChange={(e) => setSearchInterests(e.target.value)}
                />

                <Locations>
                  {!!filteredInterests.length > 0 ? (
                    filteredInterests.map((interest, index) => (
                      <CheckboxContainer key={index}>
                        <Checkbox
                          type="checkbox"
                          checked={selectedInterests.includes(interest)}
                          onChange={() =>
                            handleCheckboxChange(interest, setSelectedInterests)
                          }
                        />
                        <CheckboxLabel>{interest}</CheckboxLabel>
                      </CheckboxContainer>
                    ))
                  ) : (
                    <p>No matching Interests</p>
                  )}
                </Locations>
              </FormColumn>
            </FormRow>

            <FormRow $flexStart>
              <Label>Your Customer Ages:</Label>
              <InfoImg src={Info} />
              <FormColumn>
                <CheckboxContainer>
                  <Checkbox
                    type="checkbox"
                    checked={selectedAges.includes("All")}
                    onChange={() =>
                      handleCheckboxChange("All", setSelectedAges)
                    }
                  />
                  <CheckboxLabel>All</CheckboxLabel>
                </CheckboxContainer>
                <ColumnsRow>
                  <FirstColumn>
                    <CheckboxContainer>
                      <Checkbox
                        type="checkbox"
                        checked={
                          selectedAges.includes("18-24") ||
                          selectedAges.includes("All")
                        }
                        onChange={() =>
                          handleCheckboxChange("18-24", setSelectedAges)
                        }
                      />
                      <CheckboxLabel>18 - 24</CheckboxLabel>
                    </CheckboxContainer>
                    <CheckboxContainer>
                      <Checkbox
                        type="checkbox"
                        checked={
                          selectedAges.includes("25-34") ||
                          selectedAges.includes("All")
                        }
                        onChange={() =>
                          handleCheckboxChange("25-34", setSelectedAges)
                        }
                      />
                      <CheckboxLabel>25 - 34</CheckboxLabel>
                    </CheckboxContainer>
                  </FirstColumn>

                  <SecondColumn>
                    <CheckboxContainer>
                      <Checkbox
                        type="checkbox"
                        checked={
                          selectedAges.includes("35-54") ||
                          selectedAges.includes("All")
                        }
                        onChange={() =>
                          handleCheckboxChange("35-54", setSelectedAges)
                        }
                      />
                      <CheckboxLabel>35 - 54</CheckboxLabel>
                    </CheckboxContainer>
                    <CheckboxContainer>
                      <Checkbox
                        type="checkbox"
                        checked={
                          selectedAges.includes("55+") ||
                          selectedAges.includes("All")
                        }
                        onChange={() =>
                          handleCheckboxChange("55+", setSelectedAges)
                        }
                      />
                      <CheckboxLabel>55+</CheckboxLabel>
                    </CheckboxContainer>
                  </SecondColumn>
                </ColumnsRow>
              </FormColumn>
            </FormRow>

            <FormRow $flexStart>
              <Label>Your Customer Gender:</Label>
              <InfoImg src={Info} />
              <FormColumn>
                <CheckboxContainer>
                  <Checkbox
                    type="checkbox"
                    checked={selectGender.includes("All")}
                    onChange={() =>
                      handleCheckboxChange("All", setSelectGender)
                    }
                  />
                  <CheckboxLabel>All</CheckboxLabel>
                </CheckboxContainer>
                <ColumnsRow>
                  <FirstColumn>
                    <CheckboxContainer>
                      <Checkbox
                        type="checkbox"
                        checked={
                          selectGender.includes("Mostly Female") ||
                          selectGender.includes("All")
                        }
                        onChange={() =>
                          handleCheckboxChange("Mostly Female", setSelectGender)
                        }
                      />
                      <CheckboxLabel>Mostly Female</CheckboxLabel>
                    </CheckboxContainer>
                  </FirstColumn>

                  <SecondColumn>
                    <CheckboxContainer>
                      <Checkbox
                        type="checkbox"
                        checked={
                          selectGender.includes("Mostly Male") ||
                          selectGender.includes("All")
                        }
                        onChange={() =>
                          handleCheckboxChange("Mostly Male", setSelectGender)
                        }
                      />
                      <CheckboxLabel>Mostly Male</CheckboxLabel>
                    </CheckboxContainer>
                  </SecondColumn>
                </ColumnsRow>
              </FormColumn>
            </FormRow>

            <FormRow $flexStart>
              <Label>Your Customer Locations:</Label>
              <InfoImg src={Info} />
              <FormColumn>
                <Search
                  type="text"
                  placeholder="Search locations"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />

                <Locations>
                  {!!filteredLocations.length > 0 ? (
                    filteredLocations.map((location, index) => (
                      <CheckboxContainer key={index}>
                        <Checkbox
                          type="checkbox"
                          checked={selectedLocations.includes(location)}
                          onChange={() =>
                            handleCheckboxChange(location, setSelectedLocations)
                          }
                        />
                        <CheckboxLabel>{location}</CheckboxLabel>
                      </CheckboxContainer>
                    ))
                  ) : (
                    <p>No matching locations</p>
                  )}
                </Locations>
              </FormColumn>
            </FormRow>

            <FormRow>
              <Label>Look-alike List (optional):</Label>
              <InfoImg src={Info} />
              <UploadButton>
                <input
                  type="file"
                  accept=".csv,.xlsx,.xls,.pdf"
                  onChange={handleFileUpload}
                  style={{ display: "none" }}
                  id="upload"
                />
                <InputLabel htmlFor="upload">
                  Click to upload Look-alike list
                </InputLabel>
              </UploadButton>
              {uploadedFile && <P>Uploaded: {uploadedFile.name}</P>}
            </FormRow>

            <FormRow>
              <Label>Your Brand Website</Label>
              <InfoImg src={Info} />
              <StyledInput
                $error={errors.webSite}
                type="text"
                placeholder="Your Brand Website"
                value={webSite}
                onChange={(e) => {
                  setWebSite(e.target.value);
                }}
              />
            </FormRow>

            <FormRow>
              <Label>Your Name</Label>
              <InfoImg src={Info} />
              <StyledInput
                $error={errors.name}
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FormRow>

            <FormRow>
              <Label>Your Work Email</Label>
              <InfoImg src={Info} />
              <StyledInput
                $error={errors.email}
                type="email"
                placeholder="Your Work Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormRow>

            <FormRow>
              <Label>Your Phone Number</Label>
              <InfoImg src={Info} />
              <StyledInput
                $error={errors.phoneNumber}
                type="number"
                placeholder="Your Phone Number"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </FormRow>
            <Button
              title="Submit my Request"
              onClick={handleSubmit}
              containerStyle={{ width: 240 }}
            />

            <Subtitle $large>
              We will follow up with you right away (within four business
              hours), confirm your details, and launch! Results typically take
              three to four weeks. Feel free to call us at 1.XXX.XXX.XXXX or
              xxxxx@eycrowd.com.
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
        </SectionWrapper>
      </Section>

      <Footer />
    </Container>
  );
};

export default RequestFormPage;
