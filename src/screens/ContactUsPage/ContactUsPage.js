import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import openToast from "../../utils/toast";

import {
  Column,
  Container,
  Input,
  Photo,
  Section,
  SectionWrapper,
  Subtitle,
  TextArea,
  Title,
} from "./ContactUsPage.styles";

import Img1 from "../../assets/images/opt.png";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/utils/Button/Button";

import { FORM_TYPES } from "../../utils/constants";

import { selectWebsiteForm } from "../../store/slice/posts/slice";
import { websiteForm } from "../../store/slice/posts/asyncThunk";

const ContactUsPage = () => {
  const dispatch = useDispatch();
  const toastId = useRef(null);
  const { loading } = useSelector(selectWebsiteForm);

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [additional, setAdditional] = useState("");
  const [errors, setErrors] = useState({});

  const handleOnChange = (value, setValue) => {
    setValue(value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!fullName) newErrors.fullName = "Name is required";
    if (!additional) newErrors.additional = "Additional is required";
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
    setAdditional("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(
        websiteForm({
          email: email,
          fullName: fullName,
          type: FORM_TYPES.HELP,
          data: {
            additionalInfo: additional,
          },
        })
      )
        .unwrap()
        .then(() => {
          openToast(
            toastId,
            "submit-message",
            "success",
            `Thank you, ${fullName}! Your inquiry has been successfully submitted.`
          );

          resetValues();
        })
        .catch((err) => console.log(err.message));
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
      <SectionWrapper ref={ref}>
        <Section>
          <Column>
            <Title>Let's Connect - We're Here to Help!</Title>
            <Subtitle>
              EyCrowd connects your brand with new, highly engaged consumers
              from our large, vibrant community—bringing fresh faces to interact
              with your products and services both in-person and online.
            </Subtitle>
            <Subtitle>
              Have questions or need assistance? Fill out the form below, and
              our team will respond promptly. Whether you're seeking more
              information, support, or just want to explore how we can help grow
              your brand, we're here for you every step of the way!
            </Subtitle>
            <Input
              placeholder="Full Name"
              $error={errors.fullName}
              value={fullName}
              onChange={(e) => {
                handleOnChange(e.target.value, setFullName);
              }}
            />
            <Input
              placeholder="Email"
              $error={errors.email}
              value={email}
              onChange={(e) => {
                handleOnChange(e.target.value, setEmail);
              }}
            />
            <TextArea
              placeholder="Additional information"
              $error={errors.additional}
              value={additional}
              onChange={(e) => {
                handleOnChange(e.target.value, setAdditional);
              }}
            />
            <Button
              title={"Submit"}
              containerStyle={{ width: 240 }}
              onClick={handleSubmit}
              disabled={loading}
              loading={loading}
            />
          </Column>
          <Photo src={Img1} alt="Photo-2" $borderRadius />
        </Section>
      </SectionWrapper>

      <Footer />
    </Container>
  );
};

export default ContactUsPage;
