import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Link, useNavigate } from "react-router-dom";
const Navigation = ({ DarkLight, setDarkLight }) => {
  const [NavOpenCondi, setNavOpenCondi] = useState(false);
  const [windowidth, setwindowidth] = useState(window.innerWidth);
  const [mobileNavWidth, setmobileNavWidth] = useState("330px");
  const [mobileWidthgconfirm, setmobileWidthgconfirm] = useState();
  const [scrolled, setScrolled] = useState(false);
  let bgcolor = DarkLight ? "bg-white" : "bg-black";
  let Textcolor = DarkLight ? "black" : "white";
  let Textcolor2 = DarkLight && scrolled ? "black" :DarkLight && mobileWidthgconfirm ? "black" : "white";
  let bgcolor2 = DarkLight ? "bg-black" : "bg-white";
  let bgcolor3 = DarkLight && scrolled ? "bg-white" : DarkLight && mobileWidthgconfirm ? "bg-white" : mobileWidthgconfirm ? "bg-black" :"bg-transparent";
  let bgcolor4 = DarkLight && scrolled ? "bg-black" : "bg-white";
  const [logoLoad, setlogoLoad] = useState(false)
  let Navigate = useNavigate();
  let logo =
    DarkLight && scrolled
      ? "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214455/navblack-wtbg_wpcpcr.webp"
      : "https://res.cloudinary.com/diyha1kd9/image/upload/v1741214454/Layer_8_ojif9p.webp";

      // "/Project IMG/navblack.jpg"
      let shadow =
      DarkLight && scrolled
        ? "3px 4px 12px 1px rgba(0,0,0,0.25)"
        : !DarkLight && scrolled ? "3px 4px 12px 1px rgba(255, 248, 248, 0.15) " : "";
let logoSize =    DarkLight && scrolled ? "w-[150px]" : "w-[150px]"
// console.log(logoSize)
  useEffect(() => {
    // Function to check if page is scrolled beyond a certain point
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // You can adjust the 100 value to your needs
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  // const {DarkLight, setDarkLight} = useContext(Context1)
  // console.log(NavOpenCondi);
  const ModeChanger = () => {
    setDarkLight((props) => !props);
  };

  const NavOpen = () => {
    setNavOpenCondi((props) => !props);

  };
const NavOpen2 = () => {
    setNavOpenCondi(false);

  };
  useEffect(() => {
    // Function to update the window width
    const handleResize = () => {
      setwindowidth(window.innerWidth);
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowidth <= 486) {
      setmobileWidthgconfirm(true);
      setmobileNavWidth("100vw");
    } else if (windowidth <= 992) {
      setmobileWidthgconfirm(true);
      setmobileNavWidth("350px");
    } else {
      setmobileWidthgconfirm(false);
      setNavOpenCondi(false)
      setmobileNavWidth("330px");
    }
  }, [windowidth]);
// console.log(logoLoad)
  return (
    <NavDiv className={`${scrolled ? bgcolor : " bg-transparent"}`} style={{boxShadow:`${shadow}`}}>
      <a href={"/"}><div className="logo cursor-pointer ">
        <LazyLoadImage effect="blur" src={`${logo}`} alt="" className={`${logoSize} cursor-pointer ${logoLoad ? "block" : "hidden"} `} onClick={() => Navigate("/")} onLoad={() => setlogoLoad(true)} onLoadStart={() => setlogoLoad(false)}/>
        {/* <img src={`/Project IMG/navblack.jpg`} alt="" className={`${logoSize} cursor-pointer d-none`} onClick={() => Navigate("/")}/> */}
      </div></a>
      <div className="nav-links  flex justify-center items-center">
        <ul
          className={`flex items-center justify-center  gap-4 mt-6  text-${Textcolor}  ${bgcolor3} `}
          style={{
            width: `${
              NavOpenCondi
                ? mobileNavWidth
                : mobileWidthgconfirm
                ? "0px"
                : "auto"
            }`,
            padding: `${NavOpenCondi ? "0px 100px" : "0px 0px"}`,
            boxShadow: `${
              NavOpenCondi
                ? "3px 4px 12px 1px rgba(0,0,0,0.25)"
                : ""
            }`
          }}
        >
          <a
            className={`link text-${Textcolor2}`}
            href={"/"}
            onClick={() => {scrollToTop();NavOpen2()}}
          >
            <li>HOME</li>
          </a>
          <Link
            className={`link text-${Textcolor2}`}
            to={"/creations/All"}
            onClick={() => {scrollToTop();NavOpen2()}}
          >
            <li>CREATIONS</li>
          </Link>
          <Link
            className={`link text-${Textcolor2}`}
            to={"/pricing"}
            onClick={() => {scrollToTop();NavOpen2()}}
          >
            <li>PRICING</li>
          </Link>
          <Link
            className={`link text-${Textcolor2}`}
            to={"/aboutus"}
            onClick={() => {scrollToTop();NavOpen2()}}
          >
            <li>ABOUT US</li>
          </Link>
          <Link
            className={`link text-${Textcolor2}`}
            to={"/contactus"}
            onClick={() => {scrollToTop();NavOpen2()}}
          >
            <li>CONTACT</li>
          </Link>

          <div>
            <label class="switch" for="switch">
              <input
                id="switch"
                type="checkbox"
                class="circle"
                checked={DarkLight}
                onClick={() => ModeChanger()}
              />
              <svg
                viewBox="0 0 384 512"
                xmlns="http://www.w3.org/2000/svg"
                class="moon svg"
              >
                <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
              </svg>
              <div class="sun svg">
                <span class="dot"></span>
              </div>
            </label>
          </div>
          <div className="cross" onClick={() => NavOpen()}>
            <div
              className={`line2 line21 ${bgcolor2}`}
              style={{
                transform: `${
                  NavOpenCondi
                    ? "translate(-50%, -50%) rotate(45deg)"
                    : "translate(0%, 0%) rotate(0deg)"
                }`,
                transition: "transform 0.3s ease-in-out",
             
              }}
            ></div>

            <div
              className={`line2 line22 ${bgcolor2}`}
              style={{
                transform: `${
                  NavOpenCondi
                    ? "translate(-50%, -50%) rotate(-45deg)"
                    : "translate(0%, 0%) rotate(0deg)"
                }`,
                transition: "transform 0.3s ease-in-out",
              }}
            ></div>
          </div>
        </ul>
      </div>
      <div className="hamburger" onClick={() => NavOpen()}>
        <div className={`line ${bgcolor4}`}></div>
        <div className={`line ${bgcolor4}`}></div>
        <div className={`line ${bgcolor4}`}></div>
      </div>
    </NavDiv>
  );
};

export default Navigation;

const NavDiv = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  /* background: transparent; */
  display: flex; // Change this to block or grid if sticky still doesn’t work
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px;
  padding-top: 30px;
  width: 100%;
  overflow: visible;

  top: 0px;
  @media (max-width: 992px) {
    padding: 27px 25px;
  }
  @media (max-width: 468px) {
    padding: 27px 25px;
  }
  .nav-links {
    letter-spacing: 0.7px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    @media (max-width: 992px) {
      position: absolute;
      right: 0px;
      top: 0px;
    }
    ul {
      height: 50px;
      margin-top: 0px;
      @media (max-width: 992px) {
        flex-direction: column;
        margin-top: 20px;
        height: 102vh;
        position: absolute;
        right: 0px;
        /* top: 50%; */
        top: -30px;
        width: 0px;
        transition: all 300ms ease-in-out;
        overflow: hidden;
      }
      @media (max-width: 468px) {
        width: 100vw;
      }
    }
  }
  .nav-links ul li {
    cursor: pointer;
  }
  .nav-links ul li::after {
    content: "";
    display: block;
    width: 0px;
    height: 5px;
    background-color: #c707e4;
    position: relative;
    border-radius: 30px;
    z-index: 2;
  }

  .nav-links ul li:hover::after {
    content: "";
    width: 100%;
    height: 5px;
    display: block;
    background-color: #c707e4;
    transition: all 300ms ease-in-out;
    z-index: 2;
  }

  /* From Uiverse.io by 3bdel3ziz-T */
  /* The switch container */
  .switch {
    --transition: 300ms;
    --transition500: 500ms;
    --color-dark: #0c0f14;
    --color-darkGray: #21262e;
    --color-gray: #52555a;
    --color-offwhite: #cecece;
    --shadow-color: var(--color-dark);
    position: relative;
    display: flex;
    align-items: center;
    width: 60px;
    height: fit-content;
    background-color: var(--color-dark);
    border-radius: 30px;
    padding: 4px;
    transition: var(--transition500);
    user-select: none;
    cursor: pointer;
    overflow: hidden;
  }

  /* Svg styles */
  .switch .svg {
    transition: var(--transition);
    position: absolute;
    left: 5px;
  }
  .switch .moon {
    width: 18px;
    fill: var(--color-gray);
    opacity: 1;
  }

  .switch .sun {
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    left: calc(100% - 21.5px);
    top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    scale: 0.8;
    opacity: 0;
  }

  .switch .sun .dot {
    positon: relative;
    display: block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: var(--color-dark);
    background: white;
    z-index: 1;
    box-shadow: 11px 0px 0px var(--shadow-color),
      10.3px 0px 0px var(--shadow-color), -11px 0px 0px var(--shadow-color),
      -10.3px 0px 0px var(--shadow-color), 0px -11px 0px var(--shadow-color),
      0px -10.3px 0px var(--shadow-color), 0px 11px 0px var(--shadow-color),
      0px 10.3px 0px var(--shadow-color), 8px 8px 0px var(--shadow-color),
      7.3px 7.3px 0px var(--shadow-color), 8px -8px 0px var(--shadow-color),
      7.3px -7.3px 0px var(--shadow-color), -8px -8px 0px var(--shadow-color),
      -7.3px -7.3px 0px var(--shadow-color), -8px 8px 0px var(--shadow-color),
      -7.3px 7.3px 0px var(--shadow-color);
  }

  .switch .sun .dot::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    border: 2px solid var(--color-dark);
  }

  /*checkbox styles */
  .switch .circle {
    appearance: none;
    position: relative;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    left: 0;
    background-color: var(--color-darkGray);
    border: 1px solid var(--color-darkGray);
    transition: var(--transition500);
    box-shadow: 1px 1px 20px 3px var(--color-darkGray);
  }

  .switch:has(.circle:checked) {
    background: var(--color-offwhite);
  }

  .switch .circle:hover {
    margin-left: 3px;
  }
  .switch .circle:checked:hover {
    margin-left: -3px;
  }

  .switch .circle:checked {
    left: calc(100% - 24px);
    background: white;
    border-color: white;
    box-shadow: 1px 1px 30px 12px white;
  }

  .switch:has(.circle:checked) > .sun {
    opacity: 1;
  }

  .switch:has(.circle:checked) > .moon {
    opacity: 0;
  }

  .cross {
    display: none;
    cursor: pointer;
    @media (max-width: 992px) {
      padding: 20px;
      margin-top: 35px;
      margin-right: 18px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 26px;
      right: 10px;
      gap: 10px;
      transition: all 300ms ease-out;
    }
    .line2 {
      height: 3px;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform-origin: center;
    }
  }

  .hamburger {
    display: none;
    cursor: pointer;
    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }
  .line {
    height: 3px;
    width: 40px;
  }

  .link {
    text-decoration: none;
  }
`;
