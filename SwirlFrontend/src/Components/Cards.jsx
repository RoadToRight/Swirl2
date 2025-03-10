import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Context1 from "../Context/Context1";
import { MdOutlinePlayCircle } from "react-icons/md";
import styled from "styled-components";

const Cards = ({ img, title, text, img2, text2, url }) => {
  const { DarkLight, PlayYouTubeCard, setYoutubeUrl } = useContext(Context1);

  let Textcolor = DarkLight ? "black" : "white";

  return (
    <CardDiv>
      <Card
        className="cardsss"
        style={{
          width: "18rem",
          border: "none",
          backgroundColor: "transparent",
        }}
      >
        <div className="play absolute top-[115px] left-[10px] bg-white py-1 pr-4 pl-2 rounded-full text-start flex gap-2">
          <MdOutlinePlayCircle
            className={`text-[25px] cursor-pointer`}
            onClick={() => {
              PlayYouTubeCard();
              setYoutubeUrl(url);
            }}
          />
        </div>

        <Card.Img variant="top" src={`${img}`} />
        <Card.Body>
          <Card.Title
            style={{ fontSize: "22px", fontWeight: "bold", lineHeight: "27px" }}
            className={`text-${Textcolor} text-title`}
          >
            {title}
          </Card.Title>
          <Card.Text className={`text-${Textcolor}`}>{text}</Card.Text>
          {/* <Card.Img
            variant="top"
            src={`${img2}`}
            className="imgcard"
            style={{ width: "89px", height: "39px" }}
          /> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item
            style={{ border: "none", backgroundColor: "transparent" }}
            className={`text-${Textcolor}`}
          >
            {text2}
          </ListGroup.Item>
          <div className="flex ml-4 py-2">
            {[1, 2, 3, 4,5].map((x) => {
              return (
                <Card.Img
                  variant="top"
                  src={`https://res.cloudinary.com/diyha1kd9/image/upload/v1741214470/Star_rwu8sl.webp`}
                  style={{ width: "21px", height: "21px" }}
                />
              );
            })}
          </div>
        </ListGroup>
      </Card>
    </CardDiv>
  );
};

export default Cards;

const CardDiv = styled.div`
  .video-container {
    position: fixed;
    top: 0%;
    left: 0%;
    z-index: 1000;
    background-color: #0000005d;
    backdrop-filter: blur(20px);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cardsss {
    @media (max-width: 725px) {
      font-size: 12px;
    }
  }

  .text-title {
    @media (max-width: 725px) {
      line-height: 10px !important;
    }
  }
`;
