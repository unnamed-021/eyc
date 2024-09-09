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
  Video,
} from "./HomePage.styles";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import EYCApp from "../../assets/images/eycApp.png";
import EYCApp2 from "../../assets/images/eycApp2.png";
import EYCApp3 from "../../assets/images/eycApp3.png";
import EYCVideo from "../../assets/videos/videoEYCApp.mp4";

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
            <Title>Have Fun and Earn with Brands You Believe In</Title>
            <Subtitle>
              EyCrowd's interactive, app-guided brand experiences let you
              connect with the brands you believe in and earn rewards while
              doing it, in-person and online!
            </Subtitle>
            <StyledSubtitle>Watch the video 👉</StyledSubtitle>
            <StyledSubtitle>Download and earn!👇</StyledSubtitle>
            <ButtonsContainer>
              <Button title={"Download"} containerStyle={{ width: "48%" }} />
            </ButtonsContainer>
          </TitleContainer>

          <Img
            style={{ width: "258px", height: "559px", cursor: "pointer" }}
            src={EYCApp}
            effect="blur"
            onClick={() => {
              window.open(
                "https://www.youtube.com/watch?v=IvMN9PdLxG4&t=1s",
                "_blank"
              );
            }}
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
            <Title>Engage, Socialize, and Earn with Brands You Love</Title>
            <Subtitle>
              EyCrowd lets you participate in fun and interactive "brand
              experiences" where you can share your authentic voice, socialize
              with friends, and earn money while experiencing brands that share
              your values.
            </Subtitle>
            <StyledSubtitle>Enjoy and earn!👇</StyledSubtitle>
            <ButtonsContainer>
              <Button title={"Download"} containerStyle={{ width: "48%" }} />
            </ButtonsContainer>
          </TitleContainer>
        </SectionWrapper>
      </Section>

      <Section ref={ref3}>
        <SectionWrapper>
          <TitleContainer>
            <Title>Our Community Loves EyCrowd</Title>
            <Subtitle>
              Earning rewards, discovering new brands, and connecting with
              like-minded people through fun, brand-guided experiences feels
              amazing. From in-person events to online engagements, EyCrowd
              makes it easy to enjoy experiences with your favorite brands
              authentically.
            </Subtitle>
            <StyledSubtitle>Have fun and earn!👇</StyledSubtitle>
            <ButtonsContainer>
              <Button title={"Download"} containerStyle={{ width: "48%" }} />
              {/* <Button
                title={"Learn More"}
                containerStyle={{
                  width: "48%",
                  backgroundColor: "white",
                  border: "2px solid #FE5F55",
                }}
                titleStyle={{ color: "#FE5F55" }}
              /> */}
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
              with the world! With EyCrowd™, authentic people like you can
              participate in exciting app-guided brand experience, earn extra
              money, and share your unique voice while socializing with others,
              in-person and online. It's all about genuine people connecting
              with each other while spreading the word about products and
              services they truly believe in. So let's have some fun, meet
              people who share your interests, and bring your authentic self to
              this amazing community. Welcome to EyCrowd™ - where everyone's
              voice matters!
            </Subtitle>
            <ButtonsContainer $center>
              <Button title={"Download"} containerStyle={{ width: "25rem" }} />
            </ButtonsContainer>
          </TitleContainer>
        </SectionWrapper>
      </Section>

      <Footer />
    </Container>
  );
};

export default HomePage;
