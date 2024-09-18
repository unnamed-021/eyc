import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Column,
  Container,
  Input,
  Photo,
  Row,
  Section,
  SectionWrapper,
  Subtitle,
  Title,
} from "./OptInPage.styles";

import Img1 from "../../assets/images/opt.png";
import Img2 from "../../assets/images/magazine.png";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Button from "../../components/utils/Button/Button";

const OptInPage = () => {
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
      <SectionWrapper ref={ref}>
        <Section>
          <Title>
            6 playbooks and case studies to bring new consumers to your brand.
          </Title>

          <Row>
            <Column>
              <Subtitle>
                Access our comprehensive guide on harnessing EyCrowd's vibrant
                community and innovative brand experiences to drive waves of new
                consumers to your brand.
              </Subtitle>
              <Input placeholder="Full Name" />
              <Input placeholder="Email" />
              <Button title={"Grab my eBook"} containerStyle={{ width: 240 }} />
            </Column>
            <Photo src={Img1} alt="Photo-1" />
          </Row>
        </Section>

        <Section>
          <Title>
            Subscribe for exclusive insights into the world of authentic
            marketing with EyCrowd brand experiences.
          </Title>

          <Row>
            <Column>
              <Subtitle>
                Stay updated with ongoing coverage of top brand leaders as they
                leverage EyCrowd's vibrant community and innovative brand
                experiences to bring waves of new consumers to their physical
                stores, digital platforms, and product interactions.
              </Subtitle>
              <Input placeholder="Full Name" />
              <Input placeholder="Email" />
              <Button
                title={"Get my eMagazine"}
                containerStyle={{ width: 240 }}
              />
            </Column>
            <Photo
              src={Img2}
              alt="Photo-2"
              style={{ width: 263, height: 374, borderRadius: 0 }}
            />
          </Row>
        </Section>

        <Section>
          <Title>
            Book a demo to see the future of authentic marketing in action.
          </Title>

          <Row>
            <Column>
              <Subtitle>
                Book a demo and experience firsthand the future of authentic
                marketing with EyCrowd's vibrant community and innovative brand
                experiences, bringing waves of new consumers to your brand!
              </Subtitle>
              <Input placeholder="Full Name" />
              <Input placeholder="Email" />
              <Button title={"Book my Demo"} containerStyle={{ width: 240 }} />
            </Column>
            <Photo src={Img1} alt="Photo-3" />
          </Row>
        </Section>
      </SectionWrapper>

      <Footer />
    </Container>
  );
};

export default OptInPage;
