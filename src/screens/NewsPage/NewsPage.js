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
  ImagesContainer,
  LeftSide,
  ImageContainer,
  ImageLeft,
  ImageTitle,
  RightSide,
  ImageRight,
  ImageRow,
  ImageRightSmall,
  NewsContainer,
  NewContainer,
  NewPhoto,
  NewColumn,
  Description,
  Date,
  NewsTitle,
} from "./NewsPage.styles";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Img1 from "../../assets/images/news1.png";
import Img2 from "../../assets/images/news2.png";
import Img3 from "../../assets/images/news3.png";
import Img4 from "../../assets/images/news4.png";
import Img111 from "../../assets/images/n1.png";
import Img222 from "../../assets/images/n2.png";
import Img333 from "../../assets/images/n3.png";
import Img444 from "../../assets/images/n4.png";
import Img5 from "../../assets/images/n5.png";
import Img6 from "../../assets/images/n6.png";
import Img7 from "../../assets/images/n7.png";
import Img8 from "../../assets/images/n8.png";
import Img9 from "../../assets/images/n8.png";
import Img10 from "../../assets/images/n10.png";
import Img11 from "../../assets/images/n11.png";
import Img12 from "../../assets/images/n12.png";
import Img13 from "../../assets/images/n13.png";

import Button from "../../components/utils/Button/Button";

const newsData = [
  {
    id: 1,
    title: "Activate Your Fans' True Voice, Energize Your Brand",
    description: "Activate Your Fans' True Voice, Energize Your Brand",
    date: "May 8, 2024",
    thumbnail: Img111,
  },
  {
    id: 2,
    title: "EyCrowd Updates Now Available on the Client Portal",
    description: "",
    date: "May 3, 2024",
    thumbnail: Img222,
  },
  {
    id: 3,
    title: "Q&A with the CEO",
    description: "",
    date: "May 2, 2024",
    thumbnail: Img333,
  },
  {
    id: 4,
    title: "EyCrowd™ 2.0 Has Arrived: Video",
    description: "",
    date: "May 1, 2024",
    thumbnail: Img444,
  },
  {
    id: 5,
    title:
      "Genuine Voices, Real Connections, Authentic Marketing: The EyCrowd Mission Unfolds",
    description: "",
    date: "October 24, 2023",
    thumbnail: Img5,
  },
  {
    id: 6,
    title: "Discover EyCrowd™: Start-to-Finish App Walkthrough",
    description: "",
    date: "September 1, 2023",
    thumbnail: Img6,
  },
  {
    id: 7,
    title: "Discover EyCrowd™: Receive Payment (Part 7)",
    description: "",
    date: "August 21, 2023",
    thumbnail: Img7,
  },
  {
    id: 8,
    title: "Discover EyCrowd™: Finish Campaign (Part 6)",
    description: "",
    date: "August 20, 2023",
    thumbnail: Img8,
  },
  {
    id: 9,
    title: "Discover EyCrowd™: Performing POST-Tasks (Part 5)",
    description: "",
    date: "August 19, 2023",
    thumbnail: Img9,
  },
  {
    id: 10,
    title: "Discover EyCrowd™: Performing LIVE-Tasks (Part 4)",
    description: "",
    date: "August 18, 2023",
    thumbnail: Img10,
  },
  {
    id: 11,
    title: "Discover EyCrowd™: Performing PRE-Tasks (Part 3)",
    description: "",
    date: "August 17, 2023",
    thumbnail: Img11,
  },
  {
    id: 12,
    title: "Discover EyCrowd™: Joining a Campaign (Part 2)",
    description: "",
    date: "August 16, 2023",
    thumbnail: Img12,
  },
  {
    id: 13,
    title: "Discover EyCrowd™: Summary Screen (Part 1)",
    description: "",
    date: "August 15, 2023",
    thumbnail: Img13,
  },
];

const NewsPage = () => {
  const navigate = useNavigate();

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

  return (
    <Container>
      <Header />
      <Section $firstSection ref={ref}>
        <SectionWrapper>
          <ImagesContainer>
            <ImageContainer>
              <ImageLeft src={Img1} />
              <ImageTitle>
                Activate Your Fans' True Voice, Energize Your Brand
              </ImageTitle>
            </ImageContainer>

            <RightSide>
              <ImageContainer>
                <ImageRight src={Img2} />
                <ImageTitle>
                  EyCrowd Updates Now Available on the Client Portal
                </ImageTitle>
              </ImageContainer>
              <ImageRow>
                <ImageContainer>
                  <ImageRightSmall src={Img3} />
                  <ImageTitle>Start-to-Finish App Walkthrough</ImageTitle>
                </ImageContainer>
                <ImageContainer>
                  <ImageRightSmall src={Img4} />
                  <ImageTitle>Performing POST-Tasks</ImageTitle>
                </ImageContainer>
              </ImageRow>
            </RightSide>
          </ImagesContainer>
          <NewsContainer>
            {newsData.map((data) => (
              <NewContainer key={data.id}>
                <NewPhoto src={data.thumbnail} />
                <NewColumn>
                  <Date>{data.date}</Date>
                  <NewsTitle>{data.title}</NewsTitle>
                  <Description>{data.description}</Description>
                  <Button title={"Read More"} />
                </NewColumn>
              </NewContainer>
            ))}
          </NewsContainer>
        </SectionWrapper>
      </Section>

      <Footer />
    </Container>
  );
};

export default NewsPage;
