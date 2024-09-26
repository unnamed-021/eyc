import React, { useEffect, useRef, useState } from "react";
import { Container, Video } from "./SplashScreen.styles";
import SplashVideo from "../../assets/videos/splash.mp4";

const SplashScreen = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container $fade={fade}>
      <Video ref={videoRef} autoPlay loop muted playsInline>
        <source src={SplashVideo} type="video/mp4" />
      </Video>
    </Container>
  );
};

export default SplashScreen;
