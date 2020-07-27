import React, { useState } from "react";
import CardComponents from "./CardComponents";

import FckingBusy from "../Assets/FckingBusy.png";
import Medon from "../Assets/Medon.png";
import UEFPS from "../Assets/uefps.png";
import CS from "../Assets/cs.png";
import CR from "../Assets/cr.jpg";
import Risa from "../Assets/risa.jpg";
import Meowmer from "../Assets/mm.png";
import EPIC from "../Assets/EPIC.png";
import ROOM from "../Assets/room.png";

export default function Proper() {
  const projects = [
    { imgsrc: EPIC, name: "EPIC" },
    { imgsrc: ROOM, name: "ROOM" },
    { imgsrc: FckingBusy, name: "Fxcking Busy" },
    { imgsrc: Medon, name: "Medon Adventure" },
    { imgsrc: UEFPS, name: "Unreal Engine FPS First Try" },
    { imgsrc: CS, name: "Counter Stark" },
    { imgsrc: CR, name: "Crxsh Rxyale" },
    { imgsrc: Risa, name: "Homesick Riza" },
    { imgsrc: Meowmer, name: "Mr.Meowmer" },
  ];
  return (
    <div>
      <div className="spacer h-20 bg-gray-800"></div>
      <div className="flex w-full justify-center">
        <div
          className="flex flex-wrap mb-4 justify-center"
          style={{ width: "80%" }}
        >
          {projects.map((project) => (
            <CardComponents imgsrc={project.imgsrc} name={project.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
