import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Section,
  Subtitle,
  Title,
  TitleContainer,
  ButtonsContainer,
  SectionWrapper,
  TitleWrapper,
  Image,
  ImageRow,
  StyledSectionWrapper,
  SmallText,
  BigText,
  ImgColumn,
  AbsoluteImage,
  ImgRow,
} from "./BusinessPage.styles";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Image1 from "../../assets/images/img1.png";
import Image2 from "../../assets/images/img3.png";
import Image3 from "../../assets/images/img4.png";
import Image4 from "../../assets/images/img2.png";
import Image5 from "../../assets/images/imag6.png";
import FootImg from "../../assets/images/realFoot.png";
import HomeImg from "../../assets/images/realHome.png";
import WatchImg from "../../assets/images/realWatch.png";
import Dot from "../../assets/images/dot.png";
import Subs from "../../assets/images/sub2.png";

import Button from "../../components/utils/Button/Button";
import { ImageContainer } from "../../components/Header/Header.styles";

const BusinessPage = () => {
  const navigate = useNavigate();

  /* SCROLL ANIMATION */

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isIntersecting2, setIsIntersecting2] = useState(false);
  const [isIntersecting3, setIsIntersecting3] = useState(false);
  const [isIntersecting4, setIsIntersecting4] = useState(false);
  const [isIntersecting5, setIsIntersecting5] = useState(false);
  const [isIntersecting6, setIsIntersecting6] = useState(false);

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

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
  useEffect(() => handleIntersection(setIsIntersecting5, ref5, "slide-in"), []);
  useEffect(() => handleIntersection(setIsIntersecting6, ref6, "slide-in"), []);

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
    handleClassToggle(isIntersecting5, ref5, "slide-in");
    handleClassToggle(isIntersecting6, ref6, "slide-in");
  }, [
    isIntersecting,
    isIntersecting2,
    isIntersecting3,
    isIntersecting4,
    isIntersecting5,
    isIntersecting6,
  ]);
  return (
    <Container>
      <Header />
      <Section $firstSection ref={ref}>
        <StyledSectionWrapper>
          <TitleWrapper>
            <TitleContainer>
              <Title>
                Introducing the World's First Brand Experience Platform
              </Title>
              <Subtitle>
                Advertising is a one-way conversation. Many products go
                unnoticed. Stores and websites struggle to stay busy. We believe
                brands and people should talk and have fun together, in-person
                and online.
              </Subtitle>
              <Subtitle>
                This is why EyCrowd invented brand experiences, the authentic
                way to market. Fun, app-guided experiences that people love.
              </Subtitle>

              <ButtonsContainer>
                <Button
                  title={"Create a Brand Experience"}
                  containerStyle={{ width: "48%" }}
                />
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

            <Image
              src={Image5}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
          </TitleWrapper>

          <ImageRow>
            <ImgRow>
              <ImageContainer>
                <Image
                  $small
                  src={FootImg}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: ".3s" },
                  }}
                />
                <AbsoluteImage src={Dot} />
              </ImageContainer>
              <ImgColumn>
                <SmallText>Real people on your physical locations</SmallText>
                <BigText>Real Foot Traffic</BigText>
              </ImgColumn>
            </ImgRow>
            <ImgRow>
              <ImageContainer>
                <Image
                  $small
                  src={HomeImg}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: ".3s" },
                  }}
                />
                <AbsoluteImage src={Dot} />
              </ImageContainer>
              <ImgColumn>
                <SmallText style={{ maxWidth: 120 }}>
                  Real people on your online store
                </SmallText>
                <BigText>Real Online Store Visits</BigText>
              </ImgColumn>
            </ImgRow>
            <ImgRow>
              <ImageContainer>
                <Image
                  $small
                  src={WatchImg}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: ".3s" },
                  }}
                />
                <AbsoluteImage src={Dot} />
              </ImageContainer>
              <ImgColumn>
                <SmallText>Real products on your physical locations</SmallText>
                <BigText>Real Product Interactions</BigText>
              </ImgColumn>
            </ImgRow>
          </ImageRow>
        </StyledSectionWrapper>
      </Section>

      <Section $grey ref={ref2}>
        <StyledSectionWrapper>
          <TitleWrapper>
            <Image
              src={FootImg}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />

            <TitleContainer>
              <Title>Real Foot Traffic</Title>
              <Subtitle>
                EyCrowd brings real people to your physical locations, instantly
                adding foot traffic with extensive dwell times across multiple
                stores and locations for your brand.
              </Subtitle>
              <Subtitle>
                Instantly add fun, authentic foot traffic, brand recall, and
                buzz.
              </Subtitle>
              <ButtonsContainer>
                <Button
                  title={"Create a Brand Experience"}
                  containerStyle={{ width: "48%" }}
                />
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
          </TitleWrapper>

          <ImageRow>
            <Image
              src={Image1}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <Image
              src={Image1}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <Image
              src={Image1}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
          </ImageRow>
        </StyledSectionWrapper>
      </Section>

      <Section ref={ref3}>
        <StyledSectionWrapper>
          <TitleWrapper>
            <TitleContainer>
              <Title>Real Online Store Visits</Title>
              <Subtitle>
                EyCrowd brings real people to your online store, instantly
                adding authentic traffic and long session times for your brand.
              </Subtitle>
              <Subtitle>
                Instantly add genuine ecommerce visits, brand recall, and more.
              </Subtitle>
              <ButtonsContainer>
                <Button
                  title={"Create a Brand Experience"}
                  containerStyle={{ width: "48%" }}
                />
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
            <Image
              src={HomeImg}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
          </TitleWrapper>

          <ImageRow>
            <Image
              src={Image2}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <Image
              src={Image3}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <Image
              src={Image2}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
          </ImageRow>
        </StyledSectionWrapper>
      </Section>

      <Section $grey ref={ref4}>
        <StyledSectionWrapper>
          <TitleWrapper>
            <Image
              src={WatchImg}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />

            <TitleContainer>
              <Title>Real Product Interactions</Title>
              <Subtitle>
                EyCrowd brings real people who interact with your products and
                services, anywhere your brand lives. Get instant customer
                insights and social proof for your brand.
              </Subtitle>
              <Subtitle>
                Instantly add authentic product interactions, social proof,
                brand recall, and more.
              </Subtitle>
              <ButtonsContainer>
                <Button
                  title={"Create a Brand Experience"}
                  containerStyle={{ width: "48%" }}
                />
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
          </TitleWrapper>

          <ImageRow>
            <Image
              src={Image4}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <Image
              src={Image4}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <Image
              src={Image4}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
          </ImageRow>
        </StyledSectionWrapper>
      </Section>

      <Section ref={ref5}>
        <StyledSectionWrapper $center>
          <TitleContainer $center>
            <Title $center>Why EyCrowd?</Title>
            <Subtitle $center>
              Here's how you benefit when you create high-performing EyCrowd
              experiences.
            </Subtitle>
          </TitleContainer>
          <ImageContainer>
            <Image
              src={Subs}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            {/* <Absolute>
              <Button
                title={"Try EyCrowd now"}
                containerStyle={{ width: 170, height: 37 }}
              />
            </Absolute> */}
          </ImageContainer>
        </StyledSectionWrapper>
      </Section>

      <Section $grey ref={ref6}>
        <SectionWrapper $center>
          <TitleContainer $center>
            <Title $center>About EyCrowd</Title>
            <Subtitle $center>
              Bring real people to your brand with EyCrowd, boosting physical
              and online store traffic at scale. Generate authentic foot
              traffic, online visits, product interactions, and more instantly.
              Marketers design experiences on our site in minutes, published on
              the EyCrowd app for participation. Transform advertising into
              memorable experiences with results you can see. Our app guides
              participants; our platform handles the rest—no extra staff or
              logistics needed. Set your budget, pay per use, no subscription
              required.
            </Subtitle>
            <ButtonsContainer $center>
              <Button
                title={"Create a Brand Experience"}
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

export default BusinessPage;
