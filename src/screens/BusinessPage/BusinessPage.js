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
  ImgRow,
  BgEYC,
  CardContainer,
  CardRow,
  StyledImage,
  IconContainer,
  GreenDotIcon,
  BlueDotIcon,
  CircleIcon,
  BigCircleIcon,
  CenterRelative,
  ImageContainer,
} from "./BusinessPage.styles";

// COMPONENTS
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MyTable from "../../components/utils/Table";
import Button from "../../components/utils/Button/Button";

// IMAGES

import Image5 from "../../assets/images/imag6.png";
import Bg from "../../assets/images/bgeyc.png";
import LegoImg from "../../assets/images/imageL.png";
import OilImg from "../../assets/images/OilnVingear.png";
import OilImg1 from "../../assets/images/OilandVinegar1.png";
import OilImg2 from "../../assets/images/oil2.png";
import OilImg3 from "../../assets/images/oil3.png";
import LoveEyC1 from "../../assets/images/weloveeyc.png";
import Junior1 from "../../assets/images/Junior1.png";
import TacoImg from "../../assets/images/taco.png";
import PizzaImg from "../../assets/images/pizzafood.png";
import PeopleImg from "../../assets/images/people.png";
import LoveEyC2 from "../../assets/images/weloveeyc1.png";
import LoveEyC3 from "../../assets/images/weloveeyc2.png";
import LoveEyC4 from "../../assets/images/weloveeyc4.png";
import RetailImg from "../../assets/images/retail1.png";
import RetailImg2 from "../../assets/images/retail2.png";
import ReadyImg from "../../assets/images/ready1.png";

// ICONS
import { ReactComponent as FootIcon } from "../../assets/images/foot.svg";
import { ReactComponent as FoodIcon } from "../../assets/images/food.svg";
import { ReactComponent as FoodBigIcon } from "../../assets/images/bigFood.svg";
import { ReactComponent as OnlineIcon } from "../../assets/images/cart.svg";
import { ReactComponent as BoxIcon } from "../../assets/images/box.svg";
import { ReactComponent as HomeIcon } from "../../assets/images/market.svg";
import { ReactComponent as HomeBigIcon } from "../../assets/images/bigMarket.svg";
import { ReactComponent as WatchIcon } from "../../assets/images/watch.svg";
import { ReactComponent as HeartBigIcon } from "../../assets/images/bigHeart.svg";
import { ReactComponent as ConsumerIcon } from "../../assets/images/consumer.svg";
import { ReactComponent as CheckIcon } from "../../assets/images/check.svg";

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
              src={PeopleImg}
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
          <Title $flexStart>Benefits for Your Industry</Title>
          <ImageRow>
            <ImgRow>
              <ImageContainer>
                <CenterRelative>
                  <CircleIcon />
                  <BoxIcon />
                </CenterRelative>
                <BlueDotIcon />
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
                  <CircleIcon />

                  <HomeIcon />
                </CenterRelative>
                <BlueDotIcon />
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
                  <CircleIcon />

                  <FoodIcon />
                </CenterRelative>
                <BlueDotIcon />
              </ImageContainer>
              <ImgColumn>
                <SmallText>
                  BRING NEW DINNERS TO YOUR PHYSICAL AND ONLINE LOCATIONS
                </SmallText>
                <BigText>Food Service</BigText>
              </ImgColumn>
            </ImgRow>
          </ImageRow>
          <Title $marginTop $flexStart>
            Turnkey Solutions for Your Market
          </Title>
          <ImageRow>
            <ImgRow>
              <ImageContainer>
                <CenterRelative>
                  <CircleIcon />

                  <FootIcon />
                </CenterRelative>
                <GreenDotIcon />
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
                  <CircleIcon />

                  <OnlineIcon />
                </CenterRelative>
                <GreenDotIcon />
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
                  <CircleIcon />

                  <WatchIcon />
                </CenterRelative>
                <GreenDotIcon />
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
            <ConsumerIcon />

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
              src={OilImg}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <StyledImage
              src={LegoImg}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <StyledImage
              src={OilImg3}
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
              <BigCircleIcon />
              <HomeBigIcon />
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
              src={OilImg1}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <StyledImage
              src={RetailImg}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <StyledImage
              src={RetailImg2}
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
              <BigCircleIcon />

              <FoodBigIcon />
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
              src={Junior1}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <StyledImage
              src={PizzaImg}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <StyledImage
              src={TacoImg}
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
              <IconContainer>
                <CheckIcon />
              </IconContainer>

              <Subtitle $flexStart>
                Tell us how many new consumers to bring to your brand, your
                target audience, and your budget.
              </Subtitle>
            </CardRow>
            <CardRow>
              <IconContainer>
                <CheckIcon />
              </IconContainer>
              <Subtitle $flexStart>
                Our world-class platform and team handles everything. You don't
                have to lift a finger. Results guaranteed.
              </Subtitle>
            </CardRow>
            <ButtonsContainer>
              <Button
                title={"Get Started"}
                onClick={() => navigate("/request-form")}
                containerStyle={{ width: "80%" }}
              />
              <Button
                onClick={() => navigate("/eMagazine")}
                title={"See Case Studies"}
                containerStyle={{
                  width: "80%",
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
              <BigCircleIcon />

              <HeartBigIcon />
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
              src={OilImg2}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <StyledImage
              src={LoveEyC1}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".3s" },
              }}
            />
            <StyledImage
              src={LoveEyC4}
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
              src={ReadyImg}
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
              <IconContainer>
                <CheckIcon />
              </IconContainer>

              <Subtitle $flexStart>
                Tell us how many new consumers to bring to your brand, your
                target audience, and your budget.
              </Subtitle>
            </CardRow>
            <CardRow>
              <IconContainer>
                <CheckIcon />
              </IconContainer>

              <Subtitle $flexStart>
                Our world-class platform and team handles everything. You don't
                have to lift a finger. Results guaranteed.
              </Subtitle>
            </CardRow>
            <ButtonsContainer>
              <Button
                title={"Get Started"}
                onClick={() => navigate("/request-form")}
                containerStyle={{ width: "80%" }}
              />
              <Button
                onClick={() => navigate("/eMagazine")}
                title={"See Case Studies"}
                containerStyle={{
                  width: "80%",
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
              This is why we invented brand experiences, the authentic way to
              market. Fun, app-guided experiences that brands and consumers love
              and cherish. EyCrowd bring our large, fast-growing community of
              enthusiastic consumers to your brand, in-person and online.
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
