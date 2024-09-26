import React, { useEffect, useRef, useState } from "react";

import {
  Container,
  Section,
  SectionWrapper,
  Title,
  LogoIcon,
  BoldText,
  Text,
  TextContainer,
} from "./BusinessFAQsPage.styles";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const BusinessFAQsPage = () => {
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
          <LogoIcon />
          <Title>
            Enjoy real brand experiences with your crowd @EyCrowd 😀.
          </Title>
          <Title $red>Frequently Asked Questions</Title>

          <TextContainer>
            <BoldText>What is EyCrowd?</BoldText>
            <Text>
              EyCrowd is the world's first brand experience app and smart
              platform. EyCrowd fosters authentic engagement between brands and
              their devoted customers, engaging in online and in-person brand
              experiences that entertain and reward, deepening loyalty among
              your top consumers and fans. Real people. Real connection. Brand
              safe.
            </Text>
            <Text>Welcome to the future of marketing.</Text>
            <BoldText $margin>
              What are the key features offered to marketers by EyCrowd?
            </BoldText>
            <Text>Create Lasting Customer Memories 🤩with the EyCrowd App</Text>
            <Text $italic $marginLeft>
              • Providing unforgettable experiences that captivate and entertain
              your best customers, connecting them to spend hours interacting
              with and endorsing your brand through engaging activities on the
              EyCrowd App.
            </Text>
            <Text>
              Empower Fans, Amplify Reach, and Ignite Growth 🚀 with EyCrowd
            </Text>
            <Text $italic $marginLeft>
              • Engage and reward loyal customers through entertaining in-person
              and online brand experiences managed by our platform. Foster human
              connections, championing your brand on social media and in-person
              experiences igniting word-of-mouth ripple effects.
            </Text>
            <Text>Brand safety is priority #1 with EyCrowd 👏.</Text>
            <Text $italic $marginLeft>
              • Each experience interaction by your EyVocate users within the
              EyCrowd app undergoes a thorough assessment for authenticity and
              adherence to brand integrity, powered by our cutting-edge AI
              technology platform. Rest easy, genuine brand experiences that are
              tangible and verifiable have arrived.
            </Text>
            <Text>
              Effortlessly Design Experiences with EyLa AI 🧚 from EyCrowd
            </Text>
            <Text $italic $marginLeft>
              • With EyCrowd, seamlessly create consistent, engaging brand
              experiences that captivate. Just incorporate activities and
              EyVocates to amplify your brand experiences's impact, guaranteeing
              resonant and effective interactions. Our AI scrutinizes each user
              action for genuineness and brand safety, delivering secure brand
              outcomes. Experience the advantage of entirely authentic
              engagement and undeniable value you can see and prove.
            </Text>
            <BoldText $margin>
              What value does EyCrowd provide for marketers?
            </BoldText>
            <Text $italic $marginLeft>
              • Brand Impact{" "}
              <Text>
                You Can Prove: Drive your brand's influence with authentic
                online and in-person engagement, testimonials, in-depth surveys,
                personal narratives, direct consumer-brand interactions, organic
                discovery of products and services, and much more. Garner
                sustained brand attention, genuine viewership, and verifiable
                word-of-mouth advocacy. 100% real people and real results.
              </Text>
            </Text>
            <Text $italic $marginLeft>
              • User-Generated Content:{" "}
              <Text>
                Elevate your brand with credible visuals and narratives through
                real photographs, videos, surveys, critiques, peer-to-peer
                discussions, and more.
              </Text>
            </Text>
            <Text $italic $marginLeft>
              • Online Engagement:{" "}
              <Text>
                Strengthen your brand's digital footprint with trustworthy
                social posts, shares, follows, comments, likes, and mentions,
                alongside authentic web traffic and engagement. Real people,
                real connection, zero artificial ingredients.
              </Text>
            </Text>
            <Text $italic $marginLeft>
              • In-Person Engagement:{" "}
              <Text>
                Boost your brand's presence with actual foot traffic, authentic
                on-site enthusiasm, genuine face-to-face interactions,
                spontaneous conversations, true on-location visits, and more.
              </Text>
            </Text>
            <Text $italic $marginLeft>
              • Expansion Opportunities:{" "}
              <Text>
                Discover additional benefits with our intuitive brand experience
                experience builder, powered by AyLa AI, to easily create brand
                experiences, access pricing, and forecast the impact of your
                brand's experiences.
              </Text>
            </Text>
            <Text $italic $marginLeft>
              • Partners of EyCrowd Receive More Benefits:{" "}
              <Text>
                Be a trailblazer in authenticity with brand experiences from
                EyCrowd. Benefit from special incentives, leads, expert
                training, direct contact with our executive team, and more while
                you shape the next era of marketing alongside us. Welcome to the
                future of experience marketing.
              </Text>
            </Text>
            <BoldText $margin>What is an EyCrowd brand experience?</BoldText>
            <Text>
              Brand experiences represent a cutting-edge, adaptable approach to
              marketing "micro-events'' available in-person, online, or as
              hybrid engagements through the EyCrowd app. Here, EyVocates delve
              into captivating, autonomous activities, each verified for brand
              safety by our advanced AI-driven platform. With minimal effort,
              customize and craft your brand's experiences, predicting their
              impact to match your goals and budget, all within a few simple
              clicks!
            </Text>
            <BoldText $margin>What is an EyVocate?</BoldText>
            <Text>
              EyVocates are users of the EyCrowd app, comprising your customers,
              brand advocates, and individuals aligned with your brand's ethos,
              who genuinely support and endorse brands they trust and believe
              in. They share a connection with your brand with others who share
              similar values as they participate in your entertaining and
              rewarding brand experiences.
            </Text>
            <BoldText $margin>
              What's the financial transaction process with EyVocates?
            </BoldText>
            <Text>
              EyVocates receive their earnings through Stripe once they've
              successfully finished and earned a high rating for every brand
              experience. This method guarantees safety for your brand and
              maintains both privacy and financial protection for the EyVocates.
            </Text>
            <BoldText>
              How many brand experiences can an EyVocate join at once?
            </BoldText>
            <Text>
              While digital experiences have no limits, in-person experiences
              are capped at one per day for each EyVocate.
            </Text>
            <BoldText>
              Is it mandatory for EyVocates to have public social media
              profiles?
            </BoldText>
            <Text>
              Yes, public profiles are required in order to join and participate
              in brand experiences on the EyCrowd App.
            </Text>
            <BoldText>
              What happened when an EyVocate's account is suspended?
            </BoldText>
            <Text>
              EyVocates should reach out to us through our support page to
              understand and rectify account issues.
            </Text>
            <BoldText>
              What's the current active user count on the EyCrowd app?
            </BoldText>
            <Text>
              The app boasts tens of thousands of active EyVocates in the U.S.,
              with the community growing weekly.
            </Text>
            <BoldText>
              How frequently do EyVocates engage with the app?
            </BoldText>
            <Text>
              Thousands of EyVocates engage with the app weekly, indicating a
              robust and expanding user base.
            </Text>
            <BoldText>
              Do EyVocates consistently complete brand experiences?
            </BoldText>
            <Text>
              Yes they do, brand experiences are quickly "sold out", many times
              in a matter of minutes, showing high commitment from our user
              base.
            </Text>
            <BoldText>How does an EyCrowd brand experience work?</BoldText>
            <Text $marginLeft>
              • Seamlessly design unlimited brand experiences using our
              straightforward creation tool, featuring EyLa AI. Think of EyLa AI
              as an innovative addition to your branding team, guiding your
              creative process with just a few sentences of input.
            </Text>
            <Text $marginLeft>
              • Feel free to converse with EyLa AI as you would with a teammate;
              she is designed to understand you and grasp your objectives. Rest
              assured, we're here to support you every step of the way. You've
              got this.
            </Text>
            <Text $marginLeft>
              • Effortlessly create and personalize your brand's experiences
              with the help of EyLa AI, or by crafting them yourself using our
              campaign experience builder. Launch with confidence, adjusting the
              scope of your brand experience to match your budget and objectives
              based on our projected value forecast.
            </Text>
            <Text $marginLeft>
              • After launching your brand experience, send a special invitation
              to your customers and EyVocates through a distinctive link in the
              EyCrowd app. You have the flexibility to welcome public users on
              the EyCrowd app by setting your experience to public, or you can
              tailor private and public versions of your experience. Managing
              this is straightforward and entirely under your control.
            </Text>
            <Text $marginLeft>
              • See and feel the growth of brand loyalty as your brand safe
              experience progresses, catalyzing genuine advocacy and amplifying
              your brand's influence through dynamic word-of-mouth momentum.
            </Text>
            <BoldText $margin>
              Can you tailor the goals and tasks for brand experiences?
            </BoldText>
            <Text>
              Yes, EyCrowd offers customizable objectives and activities for
              your brand experiences, powered by EyLa AI. This allows you to
              infuse your brand's unique style and tone into a variety of
              engaging activities, from live events to social media interactions
              and content creation. Leverage the power of EyLa AI within our
              campaign experience builder to craft an unlimited array of
              tailored brand experiences.
            </Text>
            <BoldText>What exactly is the campaign experience window?</BoldText>
            <Text>
              The campaign experience window is the allocated time frame in
              which EyVocate users can perform all the planned activities for
              your brand experience. It defines the start and end of the active
              period for your campaign experience.
            </Text>
            <BoldText>
              What are the meanings of “Pre,” “Live,” and “Post” activities in
              brand experiences?
            </BoldText>
            <Text>
              These terms are used to organize the schedule of activities around
              your brand experience. "Pre" activities are those that can be
              completed from the moment they join your brand experience. "Live"
              activities are performed during the campaign experience window.
              Lastly, "Post" activities may be carried out both during and after
              the brand experience's live period. Completion of these activities
              is required for EyVocates to receive their compensation.
            </Text>
            <BoldText>
              How do you extend invites for newly launched brand experiences?
            </BoldText>
            <Text>
              The process is in your hands. When you publish a brand experience,
              a unique URL link is generated for you to share with your
              customers and brand enthusiasts. For public brand experiences, we
              proactively notify our community of EyVocate users about the
              latest experience opportunities via the EyCrowd app notifications,
              directing users with interests aligned to your brand straight to
              your experience.
            </Text>
            <BoldText>
              Is it possible to invite my customer base to brand experiences?
            </BoldText>
            <Text>
              Yes, incorporating 60%-80% of your own customers is recommended.
              EyVocates with matching profiles receive notifications to view and
              join your brand experience in the EyCrowd app.
            </Text>
            <BoldText>What is the EyCrowd App's gallery function?</BoldText>
            <Text>
              The EyCrowd gallery serves as a secure digital space within the
              app to store and access user-generated content captured during
              campaign experiences for your brand.
            </Text>
            <BoldText>
              Which online platforms can I use with brand experiences?
            </BoldText>
            <Text>
              Activities can be linked with various platforms including
              Instagram, Twitter, Facebook, and TikTok in addition to any web
              URL.
            </Text>
            <BoldText>
              What if fewer participants complete the experience than were paid
              for?
            </BoldText>
            <Text>
              Clients are issued prorated refunds for any shortfall in
              participation. EyVocate user ratings are linked to their timely
              participation.
            </Text>
            <BoldText>
              How can clients access content, particularly from private
              accounts?
            </BoldText>
            <Text>
              Content can be downloaded through the client portal, ensuring
              clients have access to the campaign results.
            </Text>
            <BoldText>
              Can experiences be exclusive to EyVocates with public social
              accounts?
            </BoldText>
            <Text>
              To ensure maximum engagement, we require EyVocates to have public
              social media profiles to join and participate in brand
              experiences.
            </Text>
            <BoldText>
              What does "time window" mean for a brand experience?
            </BoldText>
            <Text>
              The duration of a brand experience can be adjusted to last
              anywhere from 1 to 7 days to align with your specific campaign
              experience goals. Within this period, known as the campaign
              experience window, EyVocate users will carry out all the
              activities associated with your brand experience.
            </Text>
            <BoldText>
              What amount of advance planning is required for initiating a brand
              experience?
            </BoldText>
            <Text>
              You can publish a brand experience instantly on our platform.
              However, it's advisable to schedule the start of the brand
              experience a few days post-publication, allowing ample time for
              your dedicated customers and enthusiasts to discover and engage
              with your brand experience.
            </Text>
            <BoldText>
              Is it possible for clients to specify a minimum number of
              followers for participants?
            </BoldText>
            <Text>
              No, such a requirement is unnecessary with EyCrowd, as our
              emphasis on authenticity means we don't limit participation based
              on follower counts. We value real individuals with a sincere
              interest in your brand's success over mere numbers. It's a whole
              new world. Welcome to the new era of genuine, impactful marketing
              through brand experiences with EyCrowd.
            </Text>
            <BoldText>
              Can EyVocate users evaluate my products and services?
            </BoldText>
            <Text>
              Absolutely. You'll be responsible for distributing your products
              and services to customers before the brand experience begins. Once
              that's handled, you can leverage EyCrowd and our pioneering EyLa
              AI to craft the ideal unboxing and trial experience tailored to
              your brand's needs. Gather essential feedback and engagement via
              the EyCrowd app. Bear in mind that EyVocate users are fervent
              supporters of your brand and will value the genuine connection
              they make during your brand experience.
            </Text>
            <BoldText>
              What happens if an EyVocate doesn't fulfill the requirements of an
              experience?
            </BoldText>
            <Text>
              At EyCrowd, authenticity, brand safety, and tangible value
              priority one. Our sophisticated AI system scrutinizes each
              activity and immediately provides a real-time rating to the
              EyVocate as they go. If the score falls short of perfection,
              EyVocates are encouraged to retry the activity to improve their
              rating, adding an element of fun and incentive to the experience.
              If the your results don't meet the projected value, EyCrowd will
              gladly offers a prorated credit appropriate.
            </Text>
            <BoldText>
              Does EyCrowd offer the services of professional content creators
              for events?
            </BoldText>
            <Text>
              No. We place a higher value on genuine user-generated photos and
              videos over professional-grade content. Our platform is dedicated
              to fostering authenticity and enjoyment while ensuring brand
              safety via real, authentic content. We invite you to experience
              the future of real user-generated content with EyCrowd.
            </Text>
            <BoldText>
              How can I become more proficient with the EyCrowd platform?
            </BoldText>
            <Text>
              By joining the EyCrowd partner program, you'll gain access to
              comprehensive training, direct engagement with our team, exclusive
              incentives, potential leads, and a trove of best practices. You'll
              also have the opportunity to contribute to the evolution of brand
              experience marketing. Once you're part of our partnership program,
              arrange a web meeting via our business page to delve into
              strategies for leveraging the full power of the platform.
            </Text>
            <BoldText>
              Are EyVocate users eligible for partial credit or payment if they
              complete a portion of a brand experience successfully?
            </BoldText>
            <Text>
              To ensure the highest quality of engagement, EyVocates are
              rewarded when they fully complete and excel in each aspect of the
              brand experience, achieving a rating of 3 or higher. 100%
              completion is essential for compensation, fostering a culture of
              excellence. It's our commitment to an all-or-nothing standard of
              success.
            </Text>
          </TextContainer>
        </SectionWrapper>
      </Section>

      <Footer />
    </Container>
  );
};

export default BusinessFAQsPage;
