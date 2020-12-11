import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Power3 } from "gsap";
import styled from "styled-components";

const OverlayWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #3d5af1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  overflow-x: hidden;
  div {
    overflow: hidden;
    h1 {
      font-size: 3rem;
      color: #e2f3f5;
    }
  }
`;

function Overlay() {
  let screen = useRef(null);

  useEffect(() => {
    var tl = new gsap.timeline();
    tl.to(screen.firstElementChild.firstElementChild, {
      duration: 0.6,
      height: 0,
      transformOrigin: "top",
      ease: Power3.easeInOut,
      delay: 1.4,
    });
    tl.to(
      screen,
      {
        duration: 1.2,
        x: "100%",
        ease: Power3.easeInOut,
        delay: 2,
      },
      -0.6
    );
  }, []);
  return (
    <OverlayWrapper ref={(el) => (screen = el)}>
      <div>
        <h1>Get Help Quickly!</h1>
      </div>
    </OverlayWrapper>
  );
}

export default Overlay;
