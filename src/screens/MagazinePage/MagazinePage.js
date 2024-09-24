import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  Column,
  Container,
  Input,
  Photo,
  Section,
  SectionWrapper,
  Subtitle,
  Title,
} from "./MagazinePage.styles";

import Img2 from "../../assets/images/magazine.png";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/utils/Button/Button";

import { FORM_TYPES } from "../../utils/constants";

import { websiteForm } from "../../store/slice/posts/asyncThunk";
import { selectWebsiteForm } from "../../store/slice/posts/slice";

const MagazinePage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectWebsiteForm);

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [errors, setErrors] = useState({});

  const handleOnChange = (value, setValue) => {
    setValue(value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!fullName) newErrors.fullName = "Name is required";
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(
        websiteForm({
          email: email,
          fullName: fullName,
          type: FORM_TYPES.E_MAGAZINE,
          data: {},
        })
      )
        .unwrap()
        .then(() => {
          toast.success(
            `Thank you, ${fullName}! You've successfully subscribed.`
          );
          resetValues();
        })
        .catch((err) => console.log(err.message));
    } else {
      console.log("Form validation failed");
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
            <Title>
              Subscribe for exclusive insights into the world of authentic
              marketing with EyCrowd “brand experiences”.
            </Title>
            <Subtitle>
              Stay informed with the latest insights on how innovative brands
              are utilizing EyCrowd's dynamic community and cutting-edge “brand
              experiences” to bring fresh new faces to physical stores, digital
              platforms, and product touch-points.
            </Subtitle>
            <Subtitle>
              Content includes detailed case studies, examples of authentic UGC,
              leading professional profiles and more.
            </Subtitle>
            <Input
              placeholder="Full Name"
              value={fullName}
              $error={errors.fullName}
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
            <Button
              title={"Get my eMagazine"}
              onClick={handleSubmit}
              containerStyle={{ width: 240 }}
              disabled={loading}
              loading={loading}
            />
          </Column>
          <Photo src={Img2} alt="Photo-1" />
        </Section>
      </SectionWrapper>

      <Footer />
    </Container>
  );
};

export default MagazinePage;
