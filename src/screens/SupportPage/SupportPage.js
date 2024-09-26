import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Section,
  SectionWrapper,
  Title,
  LogoIcon,
  InputContainer,
  Input,
  Label,
  TextArea,
} from "./SupportPage.styles";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/utils/Button/Button";
import openToast from "../../utils/toast";

const SupportPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const toastId = useRef(null);

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});

  const handleOnChange = (value, setValue) => {
    setValue(value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!fullName) newErrors.fullName = "First name and Last name is required";
    if (!description) newErrors.description = "Description is required";
    if (!phoneNumber) newErrors.phoneNumber = "Mobile phone number is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email format is invalid";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const resetValues = () => {
    setFullName("");
    setEmail("");
    setDescription("");
    setPhoneNumber("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // dispatch()
      //   .unwrap()
      //   .then(() => {
      //     openToast(
      //       toastId,
      //       "submit-message",
      //       "success",
      //       `Thank you, ${fullName}! Your support request has been successfully submitted.`
      //     );
      //     resetValues();
      //   })
      //   .catch((err) => console.log(err.message));
    }
  };

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

  return (
    <Container>
      <Header />
      <Section $firstSection ref={ref}>
        <SectionWrapper>
          <LogoIcon />
          <Title>Submit Your Support Request</Title>
          <InputContainer>
            <Label>First and Last Name:</Label>
            <Input
              placeholder="Enter your first name and last name"
              $error={errors.fullName}
              value={fullName}
              onChange={(e) => handleOnChange(e.target.value, setFullName)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Email:</Label>
            <Input
              placeholder="Enter your email address"
              $error={errors.email}
              value={email}
              onChange={(e) => handleOnChange(e.target.value, setEmail)}
            />
          </InputContainer>
          <InputContainer>
            <Label>
              Mobile Phone Number (associated with your EyCrowd app):
            </Label>
            <Input
              placeholder="Enter your mobile phone number"
              $error={errors.phoneNumber}
              value={phoneNumber}
              onChange={(e) => handleOnChange(e.target.value, setPhoneNumber)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Description:</Label>
            <TextArea
              placeholder="Please provide a complete description of your support request"
              $error={errors.description}
              value={description}
              onChange={(e) => handleOnChange(e.target.value, setDescription)}
            />
            <Button
              title={"Submit"}
              onClick={handleSubmit}
              containerStyle={{
                width: "80%",
                alignSelf: "center",
                marginTop: 40,
              }}
            />
          </InputContainer>
        </SectionWrapper>
      </Section>

      <Footer />
    </Container>
  );
};

export default SupportPage;
