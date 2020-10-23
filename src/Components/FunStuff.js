import React from "react";
import CustomCarousel from "./CustomCarousel";
import CardComponents from "./CardComponents";
import Fckly from "../Assets/Fckly.png";
import Multi from "../Assets/Multi.png";
import FckingBall from "../Assets/FckingBall.png";
import Medon from "../Assets/Medon.png";
import UEFPS from "../Assets/uefps.png";
import CS from "../Assets/cs.png";
import CR from "../Assets/cr.jpg";
import Risa from "../Assets/risa.jpg";
import CC from "../Assets/cc.png";
import Meowmer from "../Assets/mm.png";
import BIGTU from "../Assets/review.png";
import Bomber from "../Assets/bomber.png";
import ModelPic from "../Assets/Model.png";
import LowpolyMap from "../Assets/lowpolymap.png";
import KENDORS from "../Assets/kendors.png";

export default function FunStuff() {
  const projects = [
    {
      imgsrc: Fckly,
      name: "Fxckly Bird",
      link: "https://github.com/JoeKooler/FxcklyBird",
    },
    { imgsrc: FckingBall, name: "Fxcking Ball" },
    { imgsrc: Medon, name: "Medon Adventure" },
    {
      imgsrc: Meowmer,
      name: "Mr.Meowmer",
      link: "https://github.com/JoeKooler/MR.MEOWMER",
    },
    {
      imgsrc: CS,
      name: "Counter Stark",
      link:
        "https://drive.google.com/file/d/1R7Ps-_wdhCnP_TXKSY5IEYe0Nap_S5DT/view?usp=sharing",
    },
    { imgsrc: CR, name: "Crxsh Rxyale" },
    {
      imgsrc: Risa,
      name: "Homesick Riza",
      link: "https://globalgamejam.org/2019/games/homesick-risa",
    },
    {
      imgsrc: Multi,
      name: "Number racer",
      link: "https://github.com/JoeKooler/guess-number-game",
    },
    { imgsrc: CC, name: "Custom Carousel Component" },
    { imgsrc: BIGTU, name: "Game Review UI Design" },
    { imgsrc: ModelPic, name: "Assasins Creed Lowpoly Model" },
    { imgsrc: LowpolyMap, name: "Lowpoly FPS Map" },
    { imgsrc: Bomber, name: "Startale Bomber Drawing" },
    { imgsrc: KENDORS, name: "KENDORS" },
  ];

  return (
    <div>
      <CustomCarousel images={[CC, UEFPS, LowpolyMap]} />
      <div className="h-128 spacer"></div>
      <div className="flex w-full justify-center">
        <div
          className="flex flex-wrap mb-4 justify-center"
          style={{ width: "80%" }}
        >
          {projects.map((project) => (
            <CardComponents
              imgsrc={project.imgsrc}
              name={project.name}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
