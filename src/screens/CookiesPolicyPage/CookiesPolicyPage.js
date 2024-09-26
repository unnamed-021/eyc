import React, { useEffect, useRef, useState } from "react";
import { Container, Section, SectionWrapper } from "./CookiesPolicyPage.styles";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const CookiesPolicyPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "termly-jssdk";
    script.src = "https://app.termly.io/embed-policy.min.js";
    const embedElement = embedRef.current;
    if (embedElement) {
      embedElement.appendChild(script);
    }

    return () => {
      if (embedElement && embedElement.contains(script)) {
        embedElement.removeChild(script);
      }
    };
  }, []);

  /* SCROLL ANIMATION */
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  const embedRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
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
          <div
            style={{ width: "100%" }}
            name="termly-embed"
            data-id="22d02c34-2738-4812-b97c-d690f0a6712a"
            ref={embedRef}
          ></div>
        </SectionWrapper>
      </Section>
      <Footer />
    </Container>
  );
};

export default CookiesPolicyPage;
