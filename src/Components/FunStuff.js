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
      imgsrc: "https://i.imgur.com/mUxeAr5.png",
      name: "Sawasdee wan-chan bot",
      link: "https://github.com/JoeKooler/Sawasdee-Wanchan-Bot  ",
    },
    {
      imgsrc: "https://i.imgur.com/P2PH6LB.jpg",
      name: "Daily Dog",
      link: "https://github.com/JoeKooler/Daily-Dog/tree/main",
    },
    {
      imgsrc: "https://i.imgur.com/dEFVTQ4.jpg",
      name: "Line Todo",
      link: "https://github.com/JoeKooler/Line-Todo",
    },
    {
      imgsrc: Fckly,
      name: "Fxckly Bird",
      link: "https://github.com/JoeKooler/FxcklyBird",
    },
    {
      imgsrc: FckingBall,
      name: "Fxcking Ball",
      link:
        "https://drive.google.com/file/d/16jvgd6Z9aHjKkaMgTqmp4M1_IHAO6zbR/view?fbclid=IwAR37UjjTd_nc5qS-GWahvjbxuzxMvVFkqC2_lKJQSF-aWYnFkITxeP3UPiU",
    },
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
    {
      imgsrc: CR,
      name: "Siam Arena 2077",
      link:
        "https://drive.google.com/file/d/15D-9hHxJSiNRBf7oQY9aHLWdjl9RIPHh/view?usp=sharing",
    },
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
    {
      imgsrc: CC,
      name: "Custom Carousel Component",
      link:
        "https://github.com/JoeKooler/Portjoelio/blob/master/src/Components/CustomCarousel.js",
    },
    {
      imgsrc: BIGTU,
      name: "Game Review UI Design",
      link:
        "https://drive.google.com/file/d/1SXaRW68sQvhDQAF6PLnf5b16icrqcW2a/view?usp=sharing",
    },
    {
      imgsrc: ModelPic,
      name: "Assasins Creed Lowpoly Model",
      link: "https://youtu.be/ivSpfdB01_4",
    },
    {
      imgsrc: LowpolyMap,
      name: "Lowpoly FPS Map",
      link:
        "https://drive.google.com/file/d/16V_esk_Xy_3edqwTXP3sZTCB5x7kBCrF/view?usp=sharing",
    },
    {
      imgsrc: Bomber,
      name: "Startale Bomber Drawing",
      link:
        "https://drive.google.com/file/d/1Lw4x-gKKLnrvm1LQLnMp6JlZ85RYldSp/view?usp=sharing",
    },
    {
      imgsrc: KENDORS,
      name: "KENDORS",
      link:
        "https://drive.google.com/file/d/1UfeZWg1a-VHFECx85eLz0TWkIYLlNolj/view?usp=sharing",
    },
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
