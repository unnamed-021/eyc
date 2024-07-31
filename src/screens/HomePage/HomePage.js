import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Section,
  StyledSubtitle,
  Subtitle,
  Title,
  TitleContainer,
  ButtonsContainer,
  SectionWrapper,
  Img,
} from "./HomePage.styles";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import EYCApp from "../../assets/images/eycApp.png";
import EYCApp2 from "../../assets/images/eycApp2.png";
import EYCApp3 from "../../assets/images/eycApp3.png";

import Button from "../../components/utils/Button/Button";

const HomePage = () => {
  const navigate = useNavigate();

  /* SCROLL ANIMATION */

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isIntersecting2, setIsIntersecting2] = useState(false);
  const [isIntersecting3, setIsIntersecting3] = useState(false);
  const [isIntersecting4, setIsIntersecting4] = useState(false);

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

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
  useEffect(() => handleIntersection(setIsIntersecting2, ref2, "slide-in"), []);
  useEffect(() => handleIntersection(setIsIntersecting3, ref3, "slide-in"), []);
  useEffect(() => handleIntersection(setIsIntersecting4, ref4, "slide-in"), []);

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
    handleClassToggle(isIntersecting2, ref2, "slide-in");
    handleClassToggle(isIntersecting3, ref3, "slide-in");
    handleClassToggle(isIntersecting4, ref4, "slide-in");
  }, [isIntersecting, isIntersecting2, isIntersecting3, isIntersecting4]);

  return (
    <Container>
      <Header />
      <Section $firstSection ref={ref}>
        <SectionWrapper>
          <TitleContainer>
            <Title>
              App-Guided Brand Experiences: Be Real, Have Fun, Meet People, &
              Earn
            </Title>
            <Subtitle>
              Join fun app-guided experiences with EyCrowd, online and
              in-person. Earn money, advocate for brands you value, and connect
              with old and new friends while being your authentic self.
            </Subtitle>
            <StyledSubtitle>Take a look at the video 👉</StyledSubtitle>
            <ButtonsContainer>
              <Button title={"Try Now"} containerStyle={{ width: "48%" }} />
              <Button
                title={"Learn More"}
                containerStyle={{
                  width: "48%",
                  backgroundColor: "white",
                  border: "2px solid #FE5F55",
                }}
                titleStyle={{ color: "#FE5F55" }}
              />
            </ButtonsContainer>
          </TitleContainer>

          <Img
            style={{ width: "258px", height: "559px" }}
            src={EYCApp}
            effect="blur"
            wrapperProps={{
              style: { transitionDelay: ".3s" },
            }}
          />
        </SectionWrapper>
      </Section>

      <Section $grey ref={ref2}>
        <SectionWrapper>
          <Img
            style={{ width: "258px", height: "559px" }}
            src={EYCApp2}
            effect="blur"
            wrapperProps={{
              style: { transitionDelay: ".3s" },
            }}
          />

          <TitleContainer>
            <Title>Enjoy In-Person Experiences</Title>
            <Subtitle>
              Join fun experiences with your favorite brands at their locations,
              guided by our app. Meet up with old friends and make new ones
              while you earn.
            </Subtitle>
            <ButtonsContainer>
              <Button title={"Try Now"} containerStyle={{ width: "48%" }} />
              <Button
                title={"Learn More"}
                containerStyle={{
                  width: "48%",
                  backgroundColor: "white",
                  border: "2px solid #FE5F55",
                }}
                titleStyle={{ color: "#FE5F55" }}
              />
            </ButtonsContainer>
          </TitleContainer>
        </SectionWrapper>
      </Section>

      <Section ref={ref3}>
        <SectionWrapper>
          <TitleContainer>
            <Title>Enjoy In-Person Experiences</Title>
            <Subtitle>
              Join fun experiences with your favorite brands at their locations,
              guided by our app. Meet up with old friends and make new ones
              while you earn.
            </Subtitle>
            <ButtonsContainer>
              <Button title={"Try Now"} containerStyle={{ width: "48%" }} />
              <Button
                title={"Learn More"}
                containerStyle={{
                  width: "48%",
                  backgroundColor: "white",
                  border: "2px solid #FE5F55",
                }}
                titleStyle={{ color: "#FE5F55" }}
              />
            </ButtonsContainer>
          </TitleContainer>

          <Img
            style={{ width: "258px", height: "559px" }}
            src={EYCApp3}
            effect="blur"
            wrapperProps={{
              style: { transitionDelay: ".3s" },
            }}
          />
        </SectionWrapper>
      </Section>

      <Section $grey ref={ref4}>
        <SectionWrapper $center>
          <TitleContainer $center>
            <Title $center>
              Enjoy Real Brand Experiences with Your Crowd @EyCrowd
            </Title>
            <Subtitle $center>
              Get ready to become an EyVocate™ and share your love for brands
              with the world! With EyCrowd™, everyday people like you can
              participate in exciting brand experience events, earn some extra
              money, and share your unique voice with others in-person and
              online. It's all about authentic people connecting with each other
              while spreading the word about products and services they truly
              believe in. So let's have some fun, meet cool people who share
              your interests, and bring your authentic self to the world of
              marketing. Welcome to EyCrowd™ - where everyone's voice matters!
            </Subtitle>
            <ButtonsContainer $center>
              <Button
                title={"EyCrowd for Business"}
                containerStyle={{ width: "fit-content" }}
              />
            </ButtonsContainer>
          </TitleContainer>
        </SectionWrapper>
      </Section>

      <Footer />
    </Container>
  );
};

export default HomePage;
