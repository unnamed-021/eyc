import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  HeaderContainer,
  NavLinks,
  Link,
  HeaderWrapper,
  HamburgerMenu,
  Row,
  StyledNavLinks,
} from "./Header.styles";
import Menu from "../utils/Menu";

import { ReactComponent as Logo } from "../../assets/icons/logoEYC.svg";
import Button from "../utils/Button/Button";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(menuOpen);

  useEffect(() => {
    let timer;
    if (menuOpen) {
      setIsVisible(true);
    } else {
      timer = setTimeout(() => setIsVisible(false), 250);
    }

    return () => clearTimeout(timer);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflowY = "hidden";
      document.documentElement.style.paddingLeft = 0;
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [menuOpen]);

  return (
    <HeaderContainer $open={menuOpen}>
      <HeaderWrapper>
        <Logo
          style={{ marginTop: -5 }}
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        />

        <NavLinks>
          <Link
            $active={pathname === "/"}
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          >
            Home
          </Link>
          {pathname === "/business" ? (
            <Link
              $active={pathname === "/"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              News
            </Link>
          ) : (
            <Link
              $active={pathname === "/business"}
              onClick={() => {
                navigate("/business");
                window.scrollTo(0, 0);
              }}
            >
              For Business
            </Link>
          )}

          {pathname === "/business" ? (
            <Link
              $active={pathname === "/"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              About Us
            </Link>
          ) : (
            <Link
              $active={pathname === "/business"}
              onClick={() => {
                navigate("/business");
                window.scrollTo(0, 0);
              }}
            >
              News
            </Link>
          )}
        </NavLinks>
        <Button title={"Create Experience"} />
      </HeaderWrapper>

      <HamburgerMenu>
        <Row $open={menuOpen}>
          <Logo
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          />
          <Menu onClick={() => setMenuOpen(!menuOpen)} />
        </Row>

        {isVisible && (
          <StyledNavLinks $open={menuOpen}>
            <Link
              $active={pathname === "/"}
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            >
              Home
            </Link>

            <Link
              $active={pathname === "/business"}
              onClick={() => {
                // navigate("/business");
                window.scrollTo(0, 0);
              }}
            >
              For Business
            </Link>

            <Link
              $active={pathname === "/news"}
              onClick={() => {
                // navigate("/news");
                window.scrollTo(0, 0);
              }}
            >
              News
            </Link>
          </StyledNavLinks>
        )}
      </HamburgerMenu>
    </HeaderContainer>
  );
};

export default Header;
