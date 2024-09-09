import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  Link,
  StyledDescription,
  StyledNewColumn,
  Iframe,
} from "./NewsDetailsPage.styles";

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
    text: `In today's marketing world, authenticity and brand safety are not just beneficial—they're essential. EyCrowd is revolutionizing this space by not only fostering deep, authentic connections with consumers but also by setting new standards in brand safety, making it the most secure promotional platform on the planet.<br/><br/>Building Authentic Connections<br/><br/>Traditional advertising often fails to resonate deeply with consumers, feeling more forced than genuine. EyCrowd breaks this mold by ensuring that brand events and activities are fully aligned with the values and interests of their audience, creating interactions that are not just meaningful but personal. This approach enhances brand credibility and fosters a community of loyal customers, driving engagement that feels organic and sincere.<br/><br/>Deepening Brand Engagement<br/><br/>Unlike the ephemeral nature of traditional ads, EyCrowd creates lasting connections through immersive brand activities that captivate consumers for hours, forming unforgettable experiences. This level of engagement significantly impacts consumer loyalty and brand perception, establishing a memorable presence far beyond typical advertising exposures.<br/><br/>Ensuring Brand Safety<br/><br/>EyCrowd stands out for its commitment to brand safety. The platform's robust system meticulously verifies every user activity and brand experience event, ensuring they align with the brand's core values and objectives. This strict adherence to authenticity and appropriateness not only protects the brand's image but also ensures that promotions resonate positively with targeted audiences. Employing advanced AI technologies, EyCrowd guarantees that all interactions are genuine, enhancing the brand's image and strengthening customer loyalty.<br/><br/>Authentic Conclusions<br/><br/>EyCrowd offers a unique combination of deep consumer engagement, authentic connections based on shared values, and an unparalleled level of brand safety. For marketing executives and brand managers, this platform provides a powerful tool to transform passive audiences into active brand advocates, ensuring that each campaign not only reaches but profoundly resonates with consumers. By embracing EyCrowd's approach, brands can achieve a significant competitive advantage, fostering a loyal community and maintaining rigorous standards of safety and authenticity.`,
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

const NewsDetailsPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
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
          <NewPhoto src={state?.thumbnail} />
          <NewColumn>
            <Date>{state?.date}</Date>
            <NewsTitle>{state?.title}</NewsTitle>
            <Description>{state?.description}</Description>

            <Description>
              {state?.text.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </Description>

            {state?.linkedin && (
              <StyledNewColumn>
                <Description>LinkedIn Profiles:</Description>
                <Link
                  onClick={() => {
                    window.open(state?.linkedin?.link1);
                  }}
                >
                  {state?.linkedin?.link1}
                </Link>
                <Link
                  onClick={() => {
                    window.open(state?.linkedin?.link2);
                  }}
                >
                  {state?.linkedin?.link2}
                </Link>
              </StyledNewColumn>
            )}

            <Link
              onClick={() => {
                window.open(state?.link);
              }}
            >
              {state?.link}
            </Link>
            {state?.ios && state?.android && (
              <NewColumn>
                <StyledDescription>
                  📲 Download the EyCrowd™ 2.0 App for iOS and Android
                </StyledDescription>
                <StyledDescription>
                  iOS:
                  <Link
                    onClick={() => {
                      window.open(state?.ios);
                    }}
                  >
                    {state?.ios}
                  </Link>
                </StyledDescription>
                <StyledDescription>
                  Android:
                  <Link
                    onClick={() => {
                      window.open(state?.android);
                    }}
                  >
                    {state?.android}
                  </Link>
                </StyledDescription>
              </NewColumn>
            )}
            {state?.video && (
              <Iframe
                src={`https://www.youtube.com/embed/${state?.video}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </NewColumn>
          <Button title={"Back to News"} onClick={() => navigate(-1)} />
        </SectionWrapper>
      </Section>

      <Footer />
    </Container>
  );
};

export default NewsDetailsPage;
