import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Section,
  Subtitle,
  Title,
  TitleContainer,
  ButtonsContainer,
  TitleWrapper,
  Image,
  ImageRow,
  StyledSectionWrapper,
  SmallText,
  BigText,
  ImgColumn,
  AbsoluteImage,
  ImgRow,
  Icon,
  BgEYC,
  CardContainer,
  CardRow,
  StyledImage,
} from "./BusinessPage.styles";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Image1 from "../../assets/images/img1.png";
import Image2 from "../../assets/images/img3.png";
import Image3 from "../../assets/images/img4.png";
import Image4 from "../../assets/images/img2.png";
import Image5 from "../../assets/images/imag6.png";
import FootImg from "../../assets/images/foot.svg";
import Food from "../../assets/images/food.svg";
import FoodBig from "../../assets/images/bigFood.svg";
import Online from "../../assets/images/cart.svg";
import Box from "../../assets/images/box.svg";
import Circle from "../../assets/images/circle.svg";
import HomeImg from "../../assets/images/market.svg";
import HomeImgBig from "../../assets/images/bigMarket.svg";
import WatchImg from "../../assets/images/watch.svg";
import DotGreen from "../../assets/images/dotGreen.svg";
import Dot from "../../assets/images/dotBlue.svg";
import Bg from "../../assets/images/bgeyc.png";
import Check from "../../assets/images/check.svg";
import Consumer from "../../assets/images/consumer.svg";
import CircleBig from "../../assets/images/bigCircle.svg";
import BigHeart from "../../assets/images/bigHeart.svg";

import Button from "../../components/utils/Button/Button";
import {
  BigCircleImg,
  CenterRelative,
  CircleImg,
  ImageContainer,
} from "../../components/Header/Header.styles";
import MyTable from "../../components/utils/Table";

const BusinessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* SCROLL ANIMATION */

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isIntersecting2, setIsIntersecting2] = useState(false);
  const [isIntersecting3, setIsIntersecting3] = useState(false);
  const [isIntersecting4, setIsIntersecting4] = useState(false);
  const [isIntersecting5, setIsIntersecting5] = useState(false);
  const [isIntersecting6, setIsIntersecting6] = useState(false);
  const [isIntersecting7, setIsIntersecting7] = useState(false);
  const [isIntersecting8, setIsIntersecting8] = useState(false);
  const [isIntersecting9, setIsIntersecting9] = useState(false);
  const [isIntersecting10, setIsIntersecting10] = useState(false);
  const [isIntersecting11, setIsIntersecting11] = useState(false);
  const [isIntersecting12, setIsIntersecting12] = useState(false);

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const ref11 = useRef(null);
  const ref12 = useRef(null);

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
  useEffect(() => handleIntersection(setIsIntersecting7, ref7, "slide-in"), []);
  useEffect(() => handleIntersection(setIsIntersecting8, ref8, "slide-in"), []);
  useEffect(() => handleIntersection(setIsIntersecting9, ref9, "slide-in"), []);
  useEffect(
    () => handleIntersection(setIsIntersecting12, ref12, "slide-in"),
    []
  );
  useEffect(
    () => handleIntersection(setIsIntersecting11, ref11, "slide-in"),
    []
  );
  useEffect(
    () => handleIntersection(setIsIntersecting10, ref10, "slide-in"),
    []
  );

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
    handleClassToggle(isIntersecting7, ref7, "slide-in");
    handleClassToggle(isIntersecting8, ref8, "slide-in");
    handleClassToggle(isIntersecting9, ref9, "slide-in");
    handleClassToggle(isIntersecting10, ref10, "slide-in");
    handleClassToggle(isIntersecting11, ref11, "slide-in");
    handleClassToggle(isIntersecting12, ref12, "slide-in");
  }, [
    isIntersecting,
    isIntersecting2,
    isIntersecting3,
    isIntersecting4,
    isIntersecting5,
    isIntersecting6,
    isIntersecting7,
    isIntersecting8,
    isIntersecting9,
    isIntersecting10,
    isIntersecting11,
    isIntersecting12,
  ]);

  const scrollToAbout = () => {
    if (ref6.current) {
      ref6.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.state) {
      scrollToAbout();
    }
  }, [location]);

  return (
    <Container>
      <Header onAboutClick={scrollToAbout} />
      <Section $firstSection ref={ref}>
        <StyledSectionWrapper>
          <TitleWrapper>
            <TitleContainer>
              <Title>
                Revolutionize Your Brand with Authentic, Fun, and Engaging Brand
                Experiences.
              </Title>
              <Subtitle>
                Bring a large, vibrant, and fast-growing community of consumers
                to interact with your brand, in-person and online.
              </Subtitle>

              <ButtonsContainer>
                <Button
                  title={"Get Started"}
                  containerStyle={{ width: "48%" }}
                  onClick={() => navigate("/request-form")}
                />
                <Button
                  onClick={() => navigate("/eMagazine")}
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
        </StyledSectionWrapper>
      </Section>

      <Section $grey ref={ref7}>
        <StyledSectionWrapper>
          <TitleWrapper>
            <Image
              src={Image5}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <TitleContainer>
              <Title>EyCrowd Brand Experiences: The Future of Marketing</Title>
              <Subtitle>
                Advertising today is a one-way conversation, but EyCrowd changes
                the game. With authentic, app-guided brand experiences, we
                connect your brand with new consumers in ways that are fun,
                interactive, and memorable. EyCrowd brings new consumers to your
                brand, products, and services—in-store, online.
              </Subtitle>

              <ButtonsContainer>
                <Button
                  title={"Get Started"}
                  onClick={() => navigate("/request-form")}
                  containerStyle={{ width: "48%" }}
                />
                <Button
                  onClick={() => navigate("/eMagazine")}
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
        </StyledSectionWrapper>
      </Section>

      <Section ref={ref8} $paddingBottom>
        <StyledSectionWrapper>
          <Title>Benefits for Your Industry</Title>
          <ImageRow>
            <ImgRow>
              <ImageContainer>
                <CenterRelative>
                  <CircleImg src={Circle} />
                  <Icon
                    src={Box}
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: ".3s" },
                    }}
                  />
                </CenterRelative>
                <AbsoluteImage src={Dot} />
              </ImageContainer>
              <ImgColumn>
                <SmallText>
                  BRING NEW SHOPPERS TO YOUR PRODUCTS AND SERVICES
                </SmallText>
                <BigText>Consumer Products</BigText>
              </ImgColumn>
            </ImgRow>
            <ImgRow>
              <ImageContainer>
                <CenterRelative>
                  <CircleImg src={Circle} />
                  <Icon
                    src={HomeImg}
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: ".3s" },
                    }}
                  />
                </CenterRelative>
                <AbsoluteImage src={Dot} />
              </ImageContainer>
              <ImgColumn>
                <SmallText>
                  BRING NEW VISITORS TO YOUR PHYSICAL AND ONLINE STORES
                </SmallText>
                <BigText>Retail</BigText>
              </ImgColumn>
            </ImgRow>
            <ImgRow>
              <ImageContainer>
                <CenterRelative>
                  <CircleImg src={Circle} />
                  <Icon
                    src={Food}
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: ".3s" },
                    }}
                  />
                </CenterRelative>
                <AbsoluteImage src={Dot} />
              </ImageContainer>
              <ImgColumn>
                <SmallText>
                  BRING NEW DINNERS TO YOUR PHYSICAL AND ONLINE LOCATIONS
                </SmallText>
                <BigText>Food Service</BigText>
              </ImgColumn>
            </ImgRow>
          </ImageRow>
          <Title $marginTop>Turnkey Solutions for Your Market</Title>
          <ImageRow>
            <ImgRow>
              <ImageContainer>
                <CenterRelative>
                  <CircleImg src={Circle} />
                  <Icon
                    src={FootImg}
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: ".3s" },
                    }}
                  />
                </CenterRelative>
                <AbsoluteImage src={DotGreen} />
              </ImageContainer>
              <ImgColumn>
                <SmallText>
                  BRING NEW SHOPPERS TO YOUR PHYSICAL LOCATIONS
                </SmallText>
                <BigText>Boost Foot Traffic</BigText>
              </ImgColumn>
            </ImgRow>
            <ImgRow>
              <ImageContainer>
                <CenterRelative>
                  <CircleImg src={Circle} />
                  <Icon
                    src={Online}
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: ".3s" },
                    }}
                  />
                </CenterRelative>
                <AbsoluteImage src={DotGreen} />
              </ImageContainer>
              <ImgColumn>
                <SmallText>
                  BRING NEW VISITORS TO YOUR DIGITAL TOUCH-POINTS
                </SmallText>
                <BigText>Grow Online Visits</BigText>
              </ImgColumn>
            </ImgRow>
            <ImgRow>
              <ImageContainer>
                <CenterRelative>
                  <CircleImg src={Circle} />
                  <Icon
                    src={WatchImg}
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: ".3s" },
                    }}
                  />
                </CenterRelative>
                <AbsoluteImage src={DotGreen} />
              </ImageContainer>
              <ImgColumn>
                <SmallText style={{ maxWidth: 170 }}>
                  BRING NEW CONSUMERS TO YOUR PRODUCTS AND SERVICES
                </SmallText>
                <BigText>Add Product Interactions</BigText>
              </ImgColumn>
            </ImgRow>
          </ImageRow>
        </StyledSectionWrapper>
        <BgEYC src={Bg} />
      </Section>

      <Section $grey ref={ref2}>
        <StyledSectionWrapper>
          <TitleWrapper>
            <Image
              src={Consumer}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />

            <TitleContainer>
              <Title>Consumer Products</Title>
              <Subtitle>
                Instantly bring waves of new shoppers to engage with your
                products at physical and digital stores with EyCrowd.
              </Subtitle>
              <Subtitle>
                Mobilize surges of untapped consumers to your brand ecosystem,
                both digitally and at retail. Boost product visibility and
                product recall with authentic user content, engagement, and
                social media buzz from authentic consumers.
              </Subtitle>
              <ButtonsContainer>
                <Button
                  onClick={() => navigate("/request-form")}
                  title={"Get Started"}
                  containerStyle={{ width: "48%" }}
                />
                <Button
                  onClick={() => navigate("/eMagazine")}
                  title={"See Case Studies"}
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
            <StyledImage
              src={Image1}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <StyledImage
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
          <TitleWrapper $reverse>
            <CenterRelative style={{ width: 240, height: 240 }}>
              <BigCircleImg src={CircleBig} />
              <Icon src={HomeImgBig} />
            </CenterRelative>
            <TitleContainer>
              <Title>Retail</Title>
              <Subtitle>
                Bring streams of new shoppers to your stores and website,
                boosting quality foot traffic and online visits with EyCrowd.
              </Subtitle>
              <Subtitle>
                Deliver waves of ideal consumers to your brand's retail
                channels, in-person and online. Boost foot traffic and brand
                recall through authentic shopper experiences generating
                user-generated content and social engagement from real
                consumers.
              </Subtitle>
              <ButtonsContainer>
                <Button
                  onClick={() => navigate("/request-form")}
                  title={"Get Started"}
                  containerStyle={{ width: "48%" }}
                />
                <Button
                  onClick={() => navigate("/eMagazine")}
                  title={"See Case Studies"}
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
              src={Image2}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <StyledImage
              src={Image3}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <StyledImage
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
            <CenterRelative style={{ width: 240, height: 240 }}>
              <BigCircleImg src={CircleBig} />
              <Icon src={FoodBig} />
            </CenterRelative>

            <TitleContainer>
              <Title>Food Service</Title>
              <Subtitle>
                Instantly bring a cascade of new diners to your restaurants and
                creations with EyCrowd.
              </Subtitle>
              <Subtitle>
                Populate your locations with ideal clientele who are yet to
                discover your brand. Enjoy unprecedented brand recall and social
                proof with authentic user-generated content and social
                engagement from genuine consumers.
              </Subtitle>
              <ButtonsContainer>
                <Button
                  onClick={() => navigate("/request-form")}
                  title={"Get Started"}
                  containerStyle={{ width: "48%" }}
                />
                <Button
                  onClick={() => navigate("/eMagazine")}
                  title={"See Case Studies"}
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
            <StyledImage
              src={Image4}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <StyledImage
              src={Image4}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
          </ImageRow>
        </StyledSectionWrapper>
      </Section>

      <Section ref={ref9} $paddingBottom>
        <StyledSectionWrapper>
          <CardContainer>
            <Title>Getting Started is Easy</Title>
            <CardRow>
              <img src={Check} alt="checkMark" />
              <Subtitle>
                Tell us how many new consumers to bring to your brand, your
                target audience, and your budget.
              </Subtitle>
            </CardRow>
            <CardRow>
              <img src={Check} alt="checkMark" />
              <Subtitle>
                Our world-class platform and team handles everything. You don't
                have to lift a finger. Results guaranteed.
              </Subtitle>
            </CardRow>
            <ButtonsContainer>
              <Button
                title={"Get Started"}
                onClick={() => navigate("/request-form")}
                containerStyle={{ width: "48%" }}
              />
              <Button
                onClick={() => navigate("/eMagazine")}
                title={"See Case Studies"}
                containerStyle={{
                  width: "48%",
                  backgroundColor: "white",
                  border: "2px solid #FE5F55",
                }}
                titleStyle={{ color: "#FE5F55" }}
              />
            </ButtonsContainer>
          </CardContainer>
        </StyledSectionWrapper>
        <BgEYC src={Bg} />
      </Section>

      <Section $grey ref={ref10}>
        <StyledSectionWrapper>
          <TitleWrapper>
            <CenterRelative style={{ width: 240, height: 240 }}>
              <BigCircleImg src={CircleBig} />
              <Icon src={BigHeart} />
            </CenterRelative>

            <TitleContainer>
              <Title>Why Consumers Love EyCrowd</Title>
              <Subtitle>
                EyCrowd is loved by its user community for its innovative "brand
                experiences" that offer authentic and fun ways to engage while
                earning with brands they believe in, both in-person and online.
              </Subtitle>
              <Subtitle>
                Participants eagerly join fun, interactive EyCrowd “brand
                experiences” on our app where they share their authentic voice,
                socialize, and earn rewards with brands that share their
                values—in-person and online.
              </Subtitle>
              <ButtonsContainer>
                <Button
                  onClick={() => navigate("/request-form")}
                  title={"Get Started"}
                  containerStyle={{ width: "48%" }}
                />
                <Button
                  onClick={() => navigate("/eMagazine")}
                  title={"See Case Studies"}
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
            <StyledImage
              src={Image4}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <StyledImage
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
            <Title $center>How Does EyCrowd Stack Up?</Title>
            <Subtitle $center>
              Unlock game-changing value with EyCrowd brand experiences.
            </Subtitle>
          </TitleContainer>
          <ImageContainer style={{ width: "100%", height: "100%" }}>
            <MyTable />
          </ImageContainer>
        </StyledSectionWrapper>
      </Section>

      <Section $grey ref={ref12}>
        <StyledSectionWrapper>
          <TitleWrapper>
            <TitleContainer>
              <Title>Ready to Elevate Your Brand with EyCrowd?</Title>
              <Subtitle>
                Whether you're looking to increase foot traffic, amplify online
                visits, boost product interactions, or amplify brand awareness,
                EyCrowd delivers tailored, fun, and impactful brand experiences
                that engage consumers both in-person and online. Let us handle
                the heavy lifting while you watch your brand thrive with genuine
                customer engagement and social buzz.
              </Subtitle>

              <ButtonsContainer>
                <Button
                  onClick={() => navigate("/request-form")}
                  title={"Get Started"}
                  containerStyle={{ width: "48%" }}
                />
                <Button
                  onClick={() => navigate("/eMagazine")}
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
        </StyledSectionWrapper>
      </Section>

      <Section ref={ref11} $paddingBottom>
        <StyledSectionWrapper>
          <CardContainer>
            <Title>Get Started Today!</Title>
            <CardRow>
              <img src={Check} alt="checkMark" />
              <Subtitle>
                Tell us how many new consumers to bring to your brand, your
                target audience, and your budget.
              </Subtitle>
            </CardRow>
            <CardRow>
              <img src={Check} alt="checkMark" />
              <Subtitle>
                Our world-class platform and team handles everything. You don't
                have to lift a finger. Results guaranteed.
              </Subtitle>
            </CardRow>
            <ButtonsContainer>
              <Button
                title={"Get Started"}
                onClick={() => navigate("/request-form")}
                containerStyle={{ width: "48%" }}
              />
              <Button
                onClick={() => navigate("/eMagazine")}
                title={"See Case Studies"}
                containerStyle={{
                  width: "48%",
                  backgroundColor: "white",
                  border: "2px solid #FE5F55",
                }}
                titleStyle={{ color: "#FE5F55" }}
              />
            </ButtonsContainer>
          </CardContainer>
        </StyledSectionWrapper>
        <BgEYC src={Bg} />
      </Section>

      <Section $grey ref={ref6}>
        <StyledSectionWrapper $center>
          <TitleContainer $center>
            <Title $center>About EyCrowd</Title>
            <Subtitle $center>
              Advertising is a one-way conversation. Many products go unnoticed.
              Stores and websites struggle to stay busy and attract new
              customers. We believe brands and people should talk and have fun
              together, in-person and online. <br />
              <br />
              This is why EyCrowd invented brand experiences, the authentic way
              to market. Fun, app-guided experiences that brands and consumers
              love and cherish. EyCrowd bring our large, fast-growing community
              of enthusiastic consumers to your brand, in-person and online.
            </Subtitle>
            <ButtonsContainer $center>
              <Button
                title={"Get Started"}
                containerStyle={{ width: "48%" }}
                onClick={() => navigate("/request-form")}
              />
              <Button
                onClick={() => navigate("/connect")}
                title={"Contact Us"}
                containerStyle={{
                  width: "48%",
                  backgroundColor: "white",
                  border: "2px solid #FE5F55",
                }}
                titleStyle={{ color: "#FE5F55" }}
              />
            </ButtonsContainer>
          </TitleContainer>
        </StyledSectionWrapper>
      </Section>

      <Footer />
    </Container>
  );
};

export default BusinessPage;
