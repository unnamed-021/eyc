import Lottie from "lottie-react";
import React, { useEffect, useRef, useState } from "react";

const LottieAnimation = ({
  lottieAnimation,
  height,
  width,
  autoplay,
  loop,
  click,
  position,
  right,
  left,
  top,
  bottom,
  zIndex,
  playSegment,
  opacity,
  onClick,
  mixBlendMode,
  stopAtFrame,
}) => {
  const animationRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMenuClick = () => {
    if (!isPlaying) {
      animationRef.current.setDirection(1);
      animationRef.current.play();
    } else {
      animationRef.current.setDirection(-1);
      animationRef.current.play();
    }
    if (onClick) {
      onClick();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (animationRef.current && playSegment) {
      animationRef.current.playSegments(playSegment, true);
    }
  }, [playSegment]);

  useEffect(() => {
    if (animationRef.current && stopAtFrame) {
      animationRef.current.goToAndStop(stopAtFrame, true);
    }
  }, [stopAtFrame]);

  return (
    <Lottie
      onClick={click ? handleMenuClick : () => {}}
      lottieRef={animationRef}
      animationData={lottieAnimation}
      loop={loop ?? false}
      autoplay={autoplay ?? false}
      style={{
        width: width,
        height: height,
        position: position,
        top: top,
        bottom: bottom,
        left: left,
        zIndex: zIndex,
        mixBlendMode: mixBlendMode,
        right: right,
        opacity: opacity,
        cursor: click ? "pointer" : "default",
      }}
    />
  );
};

export default LottieAnimation;
