import React, { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import styled from "styled-components";
import Lenis from "lenis";

const Scroll = () => {
  const [Scroll, setScroll] = useState();
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef(null);
  let { y } = useWindowScroll();

  useEffect(() => {

    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScroll((y / height) * 100);
  }, [y]);

  //Lenis Scroll

  // useEffect(() => {
    
  
  //     // const lenis= new Lenis({
  //     //     duration:0.3,// Increase the duration for a smoother effect
  //     //     easing: (t) => 1 - Math.pow(1 - t, 4), // Custom easing function for smoother scroll
  //     //     smooth: true,
  //     // })
  //   const lenis = new Lenis();
  //   lenis.on("scroll",(e) => {

  //   })

  //     const raf = (time) => {
  //       lenis.raf(time)
  //       requestAnimationFrame(raf)
  //     }
   
  //     requestAnimationFrame(raf);

  //     const onScroll = () => {
  //       setScrollY(window.scrollY);
  //     };

  //     window.addEventListener("scroll",onScroll);
  //     return () => {
  //       window.removeEventListener("scroll",onScroll)
  //     }

  // }, [])

  return (
    <ScrollDiv ref={scrollRef} >
      <div className="indicator" style={{ width: `${Scroll}%`, }}></div>
    </ScrollDiv>
  );
};

export default Scroll;

const ScrollDiv = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  height: 10px;
  z-index: 1000;
  .indicator {
    transition: all 300ms ease-out;
    background: linear-gradient(135deg, #202a66, #82155a);
    box-shadow: inset 0px 0px 5px 5px rgba(255, 255, 255, 0.3);
    height: 100%;
    position: sticky;
    top: 10px;
    border-radius: 1px;
  }
`;
