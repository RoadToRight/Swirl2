import React, { useContext, useState } from "react";
import styled from "styled-components";
import Context1 from "../Context/Context1";

const Home = () => {

  const {isVideoLoaded, setIsVideoLoaded} = useContext(Context1);
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };
  const handleCanPlayThrough = () => {
    setIsVideoLoaded(false)
  }

  return (
    <HomeDiv>
      <div className="video-div">
        {/* <video muted loop autoPlay="autoplay" preload="auto">
          <source src="/SOHAIB SHOWREEL_4.mp4" type="video/mp4"></source>
        </video> */}
 {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/_w7RCCjtMdI?autoplay=1&mute=1&loop=1&playlist=_w7RCCjtMdI&controls=0&modestbranding=1&showinfo=0&iv_load_policy=3" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

{/* <iframe src="https://drive.google.com/file/d/1mE654PVC9oSaV1jRCs1qq2xifX9itubh/preview" width="640" height="480" allow="autoplay"></iframe> */}

<div style={{padding:"56.25% 0 0 0",position:"relative"}}><iframe src="https://player.vimeo.com/video/1050521393?h=cf6f64a7e1&badge=0&autoplay=1&loop=1&muted=1&controls=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}} title="SOHAIB SHOWREEL_4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

        <div className="background"></div> 
        <div className="text z-1 absolute flex justify-center items-center w-full h-full">
          {/* <div className="hr"></div> */}
           <div className="sec">
           <div className="sec-1 font-bold text-[54px] text-center leading-[70px] text-white"></div>
           <div className="sec-2 font-bold text-[54px] text-center leading-[70px] text-white"></div>
           </div>
            {/* <div className="hr"></div> */}
        </div>
      </div>
    </HomeDiv>
  );
};

export default Home;

const HomeDiv = styled.div`

min-height: 100vh;

.video-div {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
/* iframe{
  position: absolute;
    width: auto;
    height: auto;
    min-width: 100vw;
    min-height: 100vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  z-index: -1;
  object-fit: cover;
} */
/* .video-div video {
    position: absolute;
    width: auto;
    height: auto;
    min-width: 100vw;
    min-height: 100vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  z-index: -1;
  object-fit: cover;
} */
/* .iframeDiv{
 
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
} */
.background{
    position: absolute;
    top: 0px;
    background-color: black;
    height: 100%;
    width: 100%;
    opacity: 0.6;

}
.hr{
  width: 200px;
  height:2px;
  background-color: white;
  @media (max-width:992px) {
      width: 100px;
  }
  @media (max-width:680px) {
      width: 80px;
      height: 4px;
      margin-top: -80px;
  }
  @media (max-width:538px) {
      width: 60px;
      height: 4px;
      margin-top: -120px;
    
  }
}

.sec-1{
  @media (max-width:680px) {
      font-size: 40px;
      margin-top: -80px;
  }
  @media (max-width:538px) {
    font-size: 30px;
    font-weight: 1000;
    margin-top: -120px;
  }
}
.sec-2{
  @media (max-width:680px) {
      font-size: 40px;
  }
  @media (max-width:538px) {
    font-size: 30px;
    font-weight: 1000;
  }
} 
`;
