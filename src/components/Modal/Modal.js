import React, { useEffect, useState } from "react";
import {
  ModalBackground,
  ModalContainer,
  ModalContent,
  ModalContentFade,
} from "./Modal.styles";

const Modal = ({
  open,
  children,
  width,
  close,
  height,
  fade,
  padding,
  backgroundColor,
  border,
}) => {
  const [isVisible, setIsVisible] = useState(open);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    let timer;
    if (open) {
      setIsVisible(true);
    } else {
      timer = setTimeout(() => setIsVisible(false), 250);
    }

    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (isVisible) {
      document.documentElement.style.overflowY = "hidden";
      document.documentElement.style.paddingLeft = 0;
      // window.scrollTo(0, 0);
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [isVisible]);

  return (
    isVisible &&
    (fade ? (
      <ModalBackground $open={open}>
        <ModalContainer $center>
          <ModalContentFade
            $open={open}
            style={{
              height: height,
              width: width,
              padding: padding,
              border: border,
              backgroundColor: backgroundColor,
            }}
          >
            {children}
          </ModalContentFade>
        </ModalContainer>
      </ModalBackground>
    ) : (
      <ModalBackground $open={open}>
        <ModalContainer>
          <ModalContent $open={open} style={{ height: height, width: width }}>
            {children}
          </ModalContent>
        </ModalContainer>
      </ModalBackground>
    ))
  );
};

export default Modal;
