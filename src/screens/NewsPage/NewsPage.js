import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Section,
  SectionWrapper,
  ImagesContainer,
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
  ImageShadow,
} from "./NewsPage.styles";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Img111 from "../../assets/images/n1.svg";
import Img222 from "../../assets/images/n1.svg";
import Img333 from "../../assets/images/n1.svg";
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
    text: `In today's marketing world, authenticity and brand safety are not just beneficial—they're essential. EyCrowd is revolutionizing this space by not only fostering deep, authentic connections with consumers but also by setting new standards in brand safety, making it the most secure promotional platform on the planet.\n \nBuilding Authentic Connections\n \n\Traditional advertising often fails to resonate deeply with consumers, feeling more forced than genuine. EyCrowd breaks this mold by ensuring that brand events and activities are fully aligned with the values and interests of their audience, creating interactions that are not just meaningful but personal. This approach enhances brand credibility and fosters a community of loyal customers, driving engagement that feels organic and sincere.\n \nDeepening Brand Engagement\n \nUnlike the ephemeral nature of traditional ads, EyCrowd creates lasting connections through immersive brand activities that captivate consumers for hours, forming unforgettable experiences. This level of engagement significantly impacts consumer loyalty and brand perception, establishing a memorable presence far beyond typical advertising exposures.\n \nEnsuring Brand Safety\n \nnEyCrowd stands out for its commitment to brand safety. The platform's robust system meticulously verifies every user activity and brand experience event, ensuring they align with the brand's core values and objectives. This strict adherence to authenticity and appropriateness not only protects the brand's image but also ensures that promotions resonate positively with targeted audiences. Employing advanced AI technologies, EyCrowd guarantees that all interactions are genuine, enhancing the brand's image and strengthening customer loyalty.\n \nAuthentic Conclusions\n \nEyCrowd offers a unique combination of deep consumer engagement, authentic connections based on shared values, and an unparalleled level of brand safety. For marketing executives and brand managers, this platform provides a powerful tool to transform passive audiences into active brand advocates, ensuring that each campaign not only reaches but profoundly resonates with consumers. By embracing EyCrowd's approach, brands can achieve a significant competitive advantage, fostering a loyal community and maintaining rigorous standards of safety and authenticity.`,
  },
  {
    id: 2,
    title: "EyCrowd Updates Now Available on the Client Portal",
    description: "",
    date: "May 3, 2024",
    thumbnail: Img222,
    text: `The enhanced EyCrowd Client Portal is a dedicated online resource designed to keep our marketing experts and partners fully informed about the latest developments at EyCrowd. This interactive hub is now regularly updated with all the new features, enhancements, and strategic changes being made to our app, platform and services. It serves as a central place for our partners to access crucial updates, ensuring they are always equipped with the latest information to maximize their engagement with our solutions.\nThis client portal not only includes detailed announcements and version release notes but also offers in-depth insights, video tutorials, and live recorded sessions led by our product teams. These resources are aimed at helping  you understand and utilize the full potential of the EyCrowd brand experience platform. Additionally, the portal encourages interaction through a feedback system, where users can leave comments, suggest improvements, and ask questions directly to our development team. By providing this comprehensive, up-to-date information and facilitating a two-way communication channel, the EyCrowd Client Portal ensures that our community of marketing experts and partners are well-supported and actively involved in the evolution of our offerings.\nEyCrowd for business accounts are free and allow you to access this and all educational content for the EyCrowd app and platform. Sign up now at:`,
    link: "https://app.eycrowd.com/register",
  },
  {
    id: 3,
    title: "Q&A with the CEO",
    description: "",
    date: "May 2, 2024",
    thumbnail: Img333,
    text: `EyCrowd's CEO directly responds to the most critical questions from our community of marketing experts about our product developments and strategic vision. In a new section of the EyCrowd Client Portal, you'll find an extensive series of insightful videos where the CEO shares the enhancements made to the EyCrowd 2.0 App and Smart Platform, highlighting how your feedback has directly influenced these updates. The videos also explore EyCrowd’s strategic goals, the future of our marketing landscape, and our efforts to deepen relationships with our partners to continuously improve our offerings.\nWe invite you to engage further by submitting your own questions or feedback through pur team, emphasizing our commitment to ongoing dialogue and collaboration. Join our newsletter to stay updated on EyCrowd’s progress and to receive regular communications directly from our leadership, ensuring you remain connected to our journey toward delivering exceptional brand experiences.\nEyCrowd for business accounts are free and allow you to access this and all educational content for the EyCrowd app and platform. Sign up now at:`,
    link: "https://app.eycrowd.com/register",
    video: "rcnR8DwJHDQ",
  },
  {
    id: 4,
    title: "EyCrowd™ 2.0 Has Arrived: Video",
    description: "",
    date: "May 1, 2024",
    thumbnail: Img444,
    link: "https://www.youtube.com/@eycrowd",
    text: `EyCrowd 2.0 is more than just an app—it's a whole new way to engage with brands by combining entertainment with genuine promotion. Connect with others who share your interests and values, enjoy great experiences, and earn fantastic cash rewards that you can redeem. This changes everything. Welcome to the EyCrowd community!\nEnjoy all of our updated videos at`,
    ios: "https://apps.apple.com/us/app/eycrowd",
    android: "https://play.google.com/store/apps/eycrowd",
    video: "IvMN9PdLxG4",
  },
  {
    id: 5,
    title:
      "Genuine Voices, Real Connections, Authentic Marketing: The EyCrowd Mission Unfolds",
    description: "",
    date: "October 24, 2023",
    thumbnail: Img5,
    linkedin: { link1: "Brad Cowdrey", link2: "Ayman Al-Zamil" },
    text: `In 2019, we (Ayman Al-Zamil and Brad Cowdrey) united around a novel idea: to empower everyday people to rally behind the brands they adore and genuinely believe in. Our vision was to foster engaging brand experiences where individuals could express their authentic voices, enjoy time with friends who share their beliefs, and connect with others who have similar interests, values, and experiences. We envisioned a space where people could share real images and genuine videos of their daily enjoyment of products, services, restaurants, and cuisines they love.\nThe core idea was to conceptualize an app that would encapsulate all these elements within an easy-to-use, fun interface. An app that could enable anyone, anywhere to connect and champion brands, big or small, that resonate with them and earn extra money in the process.\nThe first question that crossed our minds was, how could we bring this vision to fruition? What could we do to amalgamate these kinds of experiences? How would people react to the idea of monetizing while retaining authenticity? What would they think about engaging with brands while preserving their values? How would people perceive this new spectrum of experiences? And, what name would suit this incredible venture?\nOne thing was clear: everyone adored the idea. The concept captivated us so much that we sought opinions from everyone we encountered, keen on understanding how it could potentially shape the future. Astoundingly, the response was unanimous—from executives to individual contributors, everyday people to business leaders. Everyone agreed that this was a great if not groundbreaking idea, and indeed, it became our sole focus. We intuitively sensed that this was the onset of a grand journey, brimming with excitement, challenges, and fulfillment. This intuition proved to be more accurate than we could have ever imagined.\nConvinced about the potential, we sprung into action. Brad relocated to San Francisco, California, recognizing it as the ideal locale to cultivate the technology and concepts for the project. Simultaneously, on the other side of the globe, Ayman and his team dove into developing our brand strategy and materials. We reached out to our professional networks, particularly global business leaders and thought leaders, including our professors at Harvard Business School and beyond. We engaged with everyone we respected and knew would provide honest thoughts on the venture.\nOur efforts not only garnered invaluable insights from remarkable individuals but also helped us secure the necessary funding for this grand adventure. And as they say, the rest is history; we were off to the races.\nEvery day at EyCrowd, we immerse ourselves in a learning odyssey. As we conduct numerous data-driven experiments and explore varied techniques and approaches, each week unfolds with new learnings, discoveries to be made, and horizons to be explored. We've honed the ability to rapidly integrate new insights and feedback, tackle uncharted territories, and apply best practices and proven techniques concurrently. The level of commitment, energy, and horsepower required to bring EyCrowd to the world is immense. We are forever grateful to our investors, partners, advisors, and our exceptional team for their relentless efforts in realizing EyCrowd's vision. EyCrowd truly is a game-changer. Welcome to the EyCrowd journey 🙏 🚀.\nBest,\nBrad and Ayman`,
  },
  {
    id: 6,
    title: "Discover EyCrowd™: Start-to-Finish App Walkthrough",
    description: "",
    date: "September 1, 2023",
    thumbnail: Img6,
    video: "k3dvUee--_M",
    text: `Welcome to EyCrowd™, a new way to market. Imagine a place where being unapologetically YOU pays! With EyCrowd™, champion brands you adore, bond with kindred spirits who share your interests and values, and watch your earnings grow. Dive into the future of fun—download EyCrowd™ today!"`,
  },
  {
    id: 7,
    title: "Discover EyCrowd™: Receive Payment (Part 7)",
    description: "",
    date: "August 21, 2023",
    thumbnail: Img7,
    video: "19MDFKcmx9I",
    text: `Curious about your earnings on EyCrowd™? Simply tap the 'hamburger' button to access your wallet, showcasing your balance from all campaigns. Withdrawing is straightforward, and with our financial partner, your details remain secure. Celebrate your success—cha-ching!`,
  },
  {
    id: 8,
    title: "Discover EyCrowd™: Finish Campaign (Part 6)",
    description: "",
    date: "August 20, 2023",
    thumbnail: Img8,
    video: "YpZH9ZdDMpM",
    text: `To wrap up your campaign journey on EyCrowd™, ensure you've tackled all tasks. After hitting the "finish campaign" button, EyCrowd™ applauds your progress and values your feedback. The essence of EyCrowd™ lies in savoring brand experiences you're passionate about.`,
  },
  {
    id: 9,
    title: "Discover EyCrowd™: Performing POST-Tasks (Part 5)",
    description: "",
    date: "August 19, 2023",
    thumbnail: Img9,
    video: "QnSlbg4Q1uY",
    text: `POST-Tasks are designed to be enjoyable and user-friendly. Successfully completing POST-Tasks brings users closer to wrapping up their campaign experience.`,
  },
  {
    id: 10,
    title: "Discover EyCrowd™: Performing LIVE-Tasks (Part 4)",
    description: "",
    date: "August 18, 2023",
    thumbnail: Img10,
    video: "0kOmhTQXhTU",
    text: `On campaign day, users transition to LIVE campaign tasks, the highlight of the EyCrowd™ experience. Tasks include easy-to-follow actions like taking a picture using the EyCrowd™ gallery and posting it on your story, with the mobile app seamlessly redirecting you to your social platform. Upon completion, EyCrowd™ acknowledges your achievements, and users can proceed to enjoy the remaining LIVE tasks.`,
  },
  {
    id: 11,
    title: "Discover EyCrowd™: Performing PRE-Tasks (Part 3)",
    description: "",
    date: "August 17, 2023",
    video: "ldcg1qvrvhQ",
    text: `After joining a campaign, users can immediately perform PRE-campaign tasks, which are straightforward and interactive. Simply follow the on-screen instructions, and tapping certain links will automate actions, like redirecting to your social app. Complete all PRE-tasks and await the campaign's kickoff.`,
    thumbnail: Img11,
  },
  {
    id: 12,
    title: "Discover EyCrowd™: Joining a Campaign (Part 2)",
    description: "",
    date: "August 16, 2023",
    thumbnail: Img12,
    video: "Gae7o9oZ6ZM",
    text: `Joining a campaign experience on the mobile app is straightforward; if space is available, users can immediately join, but slots tend to fill up rapidly. Once you've successfully joined, the app celebrates your entry by providing a QR code. This QR code serves as your unique campaign ID.`,
  },
  {
    id: 13,
    title: "Discover EyCrowd™: Summary Screen (Part 1)",
    description: "",
    date: "August 15, 2023",
    thumbnail: Img13,
    video: "6XI8vVSAxvo",
    text: `Upon opening the EyCrowd™ mobile app, users are presented with a list of campaign experiences. The app's summary screen provides detailed information about potential earnings, campaign duration, and brand values. EyCrowd™ aims to connect users with brands that align with their passions.`,
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
            <ImageLeft
              bgImage={newsData[0].thumbnail}
              onClick={() => navigate("/news-details", { state: newsData[0] })}
            >
              <ImageShadow />

              <ImageTitle>{newsData[0].title}</ImageTitle>
            </ImageLeft>

            <RightSide>
              <ImageRight
                bgImage={newsData[3].thumbnail}
                onClick={() =>
                  navigate("/news-details", { state: newsData[3] })
                }
              >
                <ImageShadow />

                <ImageTitle>{newsData[3].title}</ImageTitle>
              </ImageRight>
              <ImageRow>
                <ImageRightSmall
                  bgImage={newsData[6].thumbnail}
                  onClick={() =>
                    navigate("/news-details", { state: newsData[6] })
                  }
                >
                  <ImageShadow />
                  <ImageTitle>{newsData[6].title}</ImageTitle>
                </ImageRightSmall>
                <ImageRightSmall
                  bgImage={newsData[10].thumbnail}
                  onClick={() =>
                    navigate("/news-details", { state: newsData[10] })
                  }
                >
                  <ImageShadow />
                  <ImageTitle>{newsData[10].title}</ImageTitle>
                </ImageRightSmall>
              </ImageRow>
            </RightSide>
          </ImagesContainer>

          <NewsContainer ref={ref}>
            {newsData.map((data) => (
              <NewContainer key={data.id}>
                <NewPhoto src={data.thumbnail} />
                <NewColumn>
                  <Date>{data.date}</Date>
                  <NewsTitle>{data.title}</NewsTitle>
                  <Description>{data.description}</Description>

                  <Button
                    title={"Read More"}
                    onClick={() => navigate("/news-details", { state: data })}
                  />
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
