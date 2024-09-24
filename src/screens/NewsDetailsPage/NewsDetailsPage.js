import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Section,
  SectionWrapper,
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

import Button from "../../components/utils/Button/Button";

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
                    window.open("https://www.linkedin.com/in/cowdrey/");
                  }}
                >
                  {state?.linkedin?.link1}
                </Link>
                <Link
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/aymanalzamil/");
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
