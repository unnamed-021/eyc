import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  HeaderContainer,
  NavLinks,
  Link,
  HeaderWrapper,
  HamburgerMenu,
  Row,
  StyledNavLinks,
  Login,
} from "./Header.styles";
import Menu from "../utils/Menu";

import { ReactComponent as Logo } from "../../assets/icons/logoEYC.svg";
import Button from "../utils/Button/Button";

const Header = ({ onAboutClick }) => {
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
      document.documentElement.style.overflowY = "scroll";
    }
  }, [menuOpen]);

  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollUpY, setLastScrollUpY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const lastScrollTop = lastScrollTopRef.current;

      if (currentScrollTop === 0) {
        setHeaderVisible(true);
        setLastScrollUpY(currentScrollTop);
        setScrollDirection(null);
        lastScrollTopRef.current = currentScrollTop;
        return;
      }

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection("down");
        setLastScrollUpY(currentScrollTop);
      } else {
        setScrollDirection("up");
      }

      if (scrollDirection === "up" && currentScrollTop < lastScrollUpY - 350) {
        setHeaderVisible(true);
        setLastScrollUpY(currentScrollTop);
      }

      if (
        scrollDirection === "down" &&
        currentScrollTop > lastScrollUpY + 350
      ) {
        setHeaderVisible(false);
      }

      lastScrollTopRef.current = currentScrollTop;
    };

    const handleScrollDebounced = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollDebounced);

    return () => {
      window.removeEventListener("scroll", handleScrollDebounced);
    };
  }, [scrollDirection]);

  return (
    <HeaderContainer
      $open={menuOpen}
      style={{
        opacity: headerVisible ? 1 : 0,
        transform: headerVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <HeaderWrapper>
        <Logo
          style={{ marginTop: -5 }}
          onClick={() => {
            navigate("/", { state: false });
            window.scrollTo(0, 0);
          }}
        />

        <NavLinks>
          <Link
            $active={pathname === "/"}
            onClick={() => {
              navigate("/", { state: false });
              window.scrollTo(0, 0);
            }}
          >
            Home
          </Link>

          <Link
            $active={pathname === "/business"}
            onClick={() => {
              navigate("/business", { state: false });
              window.scrollTo(0, 0);
            }}
          >
            For Business
          </Link>

          <Link
            onClick={() => {
              if (pathname === "/business") {
                onAboutClick();
              } else {
                navigate("/business", { state: true });
              }
            }}
          >
            About
          </Link>

          <Link
            $active={pathname === "/news"}
            onClick={() => {
              navigate("/news", { state: false });
              window.scrollTo(0, 0);
            }}
          >
            News
          </Link>
        </NavLinks>
        <Login>Login</Login>
      </HeaderWrapper>

      <HamburgerMenu>
        <Row $open={menuOpen}>
          <Logo
            onClick={() => {
              navigate("/", { state: false });
              window.scrollTo(0, 0);
            }}
          />
          <Menu onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
        </Row>

        {isVisible && (
          <StyledNavLinks $open={menuOpen}>
            <Link
              $active={pathname === "/"}
              onClick={() => {
                navigate("/", { state: false });
                window.scrollTo(0, 0);
              }}
            >
              Home
            </Link>

            <Link
              $active={pathname === "/business"}
              onClick={() => {
                navigate("/business", { state: false });
                window.scrollTo(0, 0);
              }}
            >
              For Business
            </Link>

            <Link
              onClick={() => {
                if (pathname === "/business") {
                  onAboutClick();
                  setMenuOpen(false);
                } else {
                  navigate("/business", { state: true });
                }
              }}
            >
              About
            </Link>

            <Link
              $active={pathname === "/news"}
              onClick={() => {
                navigate("/news", { state: false });
                window.scrollTo(0, 0);
              }}
            >
              News
            </Link>
            <Login>Login</Login>
          </StyledNavLinks>
        )}
      </HamburgerMenu>
    </HeaderContainer>
  );
};

export default Header;
