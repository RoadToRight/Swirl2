import React, { useContext, useEffect, useRef, useState } from "react";
import Context1 from "../Context/Context1";
import styled, { keyframes, css } from "styled-components";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.0/gsap.min.js";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
const TopBrandsWithCircle = () => {
  const { DarkLight } = useContext(Context1);
  const [ setcircle] = useState(3);
  const [WindowWidth, setWindowWidth] = useState(window.innerWidth)
  const [brandsAnimation, setbrandsAnimation] = useState(false)
  let top = useRef(null);
  
  const animation = useRef(null);
  let Textcolor = DarkLight ? "black" : "white";
  let bgcolor = DarkLight ? "white" : "transparent";

  useEffect(() => {
    // Function to update the window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    useEffect(() => {
      
        if(WindowWidth < 1490){
          setbrandsAnimation(true)
 
        }else{
          setbrandsAnimation(false)
        }
    }, [WindowWidth])

    const row1 = [
      "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214474/top1_ihuoum.webp",
      "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214475/top2_titjho.webp",
      "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214475/top3_trmuto.webp",
      "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214476/top4_riqcet.webp",
      "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214479/top9_exwzgi.webp",
      "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214478/top7_zek0qc.webp",
      "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214478/top8_a8cyis.webp",
      "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214464/q6_sznw0e.webp" 
    ];
  return (
    <TopBrandsDiv className={`bg-${bgcolor}`} onClick={() => setcircle(60)}>
      <div>
        <div className="text text-[17px] font-bold leading-[25px] text-center mb-6 text-[#C707E4]">
          Testimonials
        </div>
        <div
          className={`text text-[17px] font-medium leading-[25px] text-center text-${Textcolor}`}
        >
          Used by over 450+ of the world's best startups and established
          enterprises
        </div>

        {
          brandsAnimation ? <>
              <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
          </> : 
          <div className="logos mt-6" ref={top}>
          <div className="img-div"
          >
            <LazyLoadImage effect="blur"  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214474/top1_ihuoum.webp" alt="" />
            <LazyLoadImage effect="blur"  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214475/top2_titjho.webp" alt="" />
            <LazyLoadImage effect="blur"  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214475/top3_trmuto.webp" alt="" />
            <LazyLoadImage effect="blur"  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214476/top4_riqcet.webp" alt="" />
            <LazyLoadImage effect="blur"  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214464/q6_sznw0e.webp" alt="" />
            <LazyLoadImage effect="blur"  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214479/top9_exwzgi.webp" alt="" />
            <LazyLoadImage effect="blur"  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214478/top7_zek0qc.webp" alt="" />
            <LazyLoadImage effect="blur"  src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214478/top8_a8cyis.webp" alt="" />
         
            
          </div>
        
        </div>
        }
        
      </div>
    </TopBrandsDiv>
  );
};

export default TopBrandsWithCircle;

const TopBrandsDiv = styled.div`
  padding: 70px 10px 10px 10px;

  transition: all 300ms ease;

  .logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    transition: all 300ms ease;
  }

  .img-div {
    display: flex;
    flex-shrink: 0;
    gap: 20px;
    align-items: center;
    justify-content: center;
    /* animation: slide 5s infinite linear; */
    will-change: transform;  /* Hint for the browser to optimize animations */
    transition: all 300ms ease;
  }

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-60%); /* Adjust percentage based on the desired amount of scrolling */
    }
    100% {
      transform: translateX(0);
    }
  }
`;
const AppContainer = styled.div`
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;

`;
