import React from "react";
import { useNavigate } from "react-router-dom";
import {
  NavLinks,
  Link,
  FooterContainer,
  FooterWrapper,
  Text,
  Instagram,
  SocialMediaRow,
  SocialMediaLabel,
  Facebook,
  LinkedIn,
  Twitter,
  Linktree,
  CopyText,
  StyledText,
  AddressContainer,
  Address,
  HoverImage,
} from "./Footer.styles";

import { ReactComponent as Logo } from "../../assets/icons/logoEYCWhite.svg";

import AppStore from "../../assets/images/applestore.png";
import GooglePlay from "../../assets/images/googleplay.png";

const Footer = () => {
  const navigate = useNavigate();
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <NavLinks>
          <Text>Links</Text>
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/");
            }}
          >
            Home
          </Link>

          <Link
            onClick={() => {
              openLink("https://app.eycrowd.com/create-campaign");
            }}
          >
            Create a Brand Experience
          </Link>
          <Link
            onClick={() => {
              openLink("https://www.eycrowd.com/businessfaqs");
            }}
          >
            Business FAQ's
          </Link>

          <Link
            onClick={() => {
              // openLink("https://www.eycrowd.com/supportrequest");
            }}
          >
            Support
          </Link>
          <Link
            onClick={() => {
              openLink("https://www.eycrowd.com/cookie-policy");
            }}
          >
            Cookie Policy
          </Link>

          <Link
            onClick={() => {
              openLink("https://www.eycrowd.com/terms-and-conditions");
            }}
          >
            Terms and Conditions
          </Link>

          <Link
            onClick={() => {
              openLink("https://www.eycrowd.com/eula");
            }}
          >
            End User License Agreement
          </Link>

          <Link
            onClick={() => {
              openLink("https://www.eycrowd.com/disclaimer");
            }}
          >
            Disclaimer
          </Link>

          <Link
            onClick={() => {
              openLink("https://www.eycrowd.com/privacy");
            }}
          >
            Privacy Policy
          </Link>
          <Link
            onClick={() => {
              openLink("https://www.eycrowd.com/dsaf");
            }}
          >
            Data Subject Access Request
          </Link>

          <Link
            onClick={() => {
              openLink("https://www.eycrowd.com/dsaf");
            }}
          >
            Do Not Sell My Info
          </Link>
          <Link
            onClick={() => {
              openLink("https://www.eycrowd.com/cookie-policy");
            }}
          >
            Cookie Preferences
          </Link>
          <Logo style={{ marginTop: 20 }} />
        </NavLinks>

        <NavLinks>
          <Text>Connect With Us</Text>
          <SocialMediaRow
            onClick={() => {
              openLink("https://www.instagram.com/eycrowd/");
            }}
          >
            <Instagram />
            <SocialMediaLabel>Instagram</SocialMediaLabel>
          </SocialMediaRow>

          <SocialMediaRow
            onClick={() => {
              openLink("https://www.facebook.com/eycrowd/");
            }}
          >
            <Facebook />
            <SocialMediaLabel>Facebook</SocialMediaLabel>
          </SocialMediaRow>

          <SocialMediaRow
            onClick={() => {
              openLink(
                "https://www.linkedin.com/company/eycrowd/posts/?feedView=all"
              );
            }}
          >
            <LinkedIn />
            <SocialMediaLabel>LinkedIn</SocialMediaLabel>
          </SocialMediaRow>

          <SocialMediaRow
            onClick={() => {
              openLink("https://x.com/eycrowdinc");
            }}
          >
            <Twitter />
            <SocialMediaLabel>Twitter</SocialMediaLabel>
          </SocialMediaRow>

          <SocialMediaRow
            onClick={() => {
              openLink("https://linktr.ee/eycrowd");
            }}
          >
            <Linktree />
            <SocialMediaLabel>Linktree</SocialMediaLabel>
          </SocialMediaRow>

          <HoverImage
            src={GooglePlay}
            onClick={() => {
              openLink(
                "https://play.google.com/store/apps/details?id=com.eycrowd.application"
              );
            }}
          />
          <HoverImage
            src={AppStore}
            onClick={() => {
              openLink("https://apps.apple.com/us/app/eycrowd/id1559741643");
            }}
          />
          <CopyText>
            Copyright © 2023 EyCrowd, Inc. - All Rights Reserved.
          </CopyText>
        </NavLinks>

        <NavLinks>
          <Text>Offices</Text>

          <StyledText>United States of America</StyledText>
          <AddressContainer>
            <Address>Levis Plaza</Address>
            <Address>San Francisco, California</Address>
          </AddressContainer>
          <AddressContainer>
            <Address>Millennium Playa Vista</Address>
            <Address>Los Angeles, California</Address>
          </AddressContainer>
          <AddressContainer>
            <Address>Civica Cherry Greek</Address>
            <Address>Denver, Colorado</Address>
          </AddressContainer>
          <AddressContainer>
            <Address>Headquarters: Galleria Office Tower</Address>
            <Address>Houston, Texas</Address>
          </AddressContainer>
          <AddressContainer>
            <Address>Mail: 945 McKinney Street, #17965</Address>
            <Address>Houston, Texas 77002</Address>
          </AddressContainer>

          <StyledText>Kingdom of Saudi Arabia</StyledText>
          <AddressContainer>
            <Address>Smart Tower</Address>
            <Address>Riyadh 12313</Address>
          </AddressContainer>

          <StyledText>Republic of Serbia</StyledText>
          <AddressContainer>
            <Address>Futoska</Address>
            <Address>Novi Sad 21000</Address>
          </AddressContainer>
        </NavLinks>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
