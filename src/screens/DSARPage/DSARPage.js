import React, { useEffect, useRef, useState } from "react";
import { Container, Section, SectionWrapper } from "./DSARPage.styles";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const DSARPage = () => {
  /* SCROLL ANIMATION */
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleIntersection = (setIntersecting, ref) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-300px" }
      );

      observer.observe(ref.current);
      return () => observer.disconnect();
    };

    handleIntersection(setIsIntersecting, ref);
  }, []);

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

    handleClassToggle(isIntersecting, ref, "fade-in");
  }, [isIntersecting]);

  return (
    <Container>
      <Header />
      <Section $firstSection ref={ref}>
        <SectionWrapper>
          <iframe
            style={{ width: "100%", height: "100%" }}
            src="https://app.termly.io/notify/438a754a-82f5-4960-b33d-6de69749192e"
          />
        </SectionWrapper>
      </Section>
      <Footer />
    </Container>
  );
};

export default DSARPage;
