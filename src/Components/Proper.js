import React from "react";
import CardComponents from "./CardComponents";

import EPIC from "../Assets/EPIC.png";

export default function Proper() {
  const projects = [
    { imgsrc: EPIC, name: "EPIC", link: "https://github.com/JoeKooler/EPIC" },
  ];
  return (
    <div>
      <div className="spacer h-20 bg-gray-800"></div>
      <div className="flex w-full justify-center">
        <div className="flex flex-wrap mb-4 justify-center width-4/5">
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
