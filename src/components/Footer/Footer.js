import React from "react";
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
  StyledNavLinks,
} from "./Footer.styles";
import { ReactComponent as Logo } from "../../assets/icons/logoEYCWhite.svg";
import AppStore from "../../assets/images/applestore.png";
import GooglePlay from "../../assets/images/googleplay.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <NavLinks>
          <Text>Links</Text>
          <Link
            // $active={pathname === ""}
            onClick={() => {}}
          >
            Home
          </Link>

          <Link
            // $active={pathname === ""}
            onClick={() => {}}
          >
            Create a Brand Experience
          </Link>
          <Link
            // $active={pathname === ""}
            onClick={() => {}}
          >
            Business FAQ's
          </Link>

          <Link
            // $active={pathname === ""}
            onClick={() => {}}
          >
            Support
          </Link>
          <Link
            // $active={pathname === ""}
            onClick={() => {}}
          >
            Cookie Policy
          </Link>

          <Link
            // $active={pathname === ""}
            onClick={() => {}}
          >
            Terms and Conditions
          </Link>

          <Link
            // $active={pathname === ""}
            onClick={() => {}}
          >
            End User License Agreement
          </Link>

          <Link
            // $active={pathname === ""}
            onClick={() => {}}
          >
            Disclaimer
          </Link>

          <Link
            // $active={pathname === ""}
            onClick={() => {}}
          >
            Privacy Policy
          </Link>
          <Link
            // $active={pathname === ""}
            onClick={() => {}}
          >
            Data Subject Access Request
          </Link>

          <Link
            // $active={pathname === ""}
            onClick={() => {}}
          >
            Do Not Sell My Info
          </Link>
          <Link
            // $active={pathname === ""}
            onClick={() => {}}
          >
            Cookie Preferences
          </Link>
          <Logo style={{ marginTop: 20 }} />
        </NavLinks>

        <NavLinks>
          <Text>Connect With Us</Text>
          <SocialMediaRow>
            <Instagram />
            <SocialMediaLabel>Instagram</SocialMediaLabel>
          </SocialMediaRow>

          <SocialMediaRow>
            <Facebook />
            <SocialMediaLabel>Facebook</SocialMediaLabel>
          </SocialMediaRow>

          <SocialMediaRow>
            <LinkedIn />
            <SocialMediaLabel>LinkedIn</SocialMediaLabel>
          </SocialMediaRow>

          <SocialMediaRow>
            <Twitter />
            <SocialMediaLabel>Twitter</SocialMediaLabel>
          </SocialMediaRow>

          <SocialMediaRow>
            <Linktree />
            <SocialMediaLabel>Linktree</SocialMediaLabel>
          </SocialMediaRow>

          <HoverImage src={GooglePlay} />
          <HoverImage src={AppStore} />
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
