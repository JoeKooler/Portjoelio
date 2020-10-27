import React from "react";
import CardComponents, { TeamComponents } from "./CardComponents";
import Joe from "../Assets/Joe.jpg";
import Joe2 from "../Assets/Joe2.jpg";
import Mink from "../Assets/Mink.jpg";
import EPIC from "../Assets/EPIC.png";
import Fckly from "../Assets/Fckly.png";
import GISAVIA from "../Assets/GISAVIA.png";

export default function Homepage() {
  const stackList = [
    "HTML CSS and JavaScript",
    "jQuery",
    "ReactJS , React Native",
    "NodeJS",
    "Java",
    "C#",
    "Unity",
  ];

  const team = [
    {
      imgsrc: Joe,
      name: "Joe",
      details:
        "The founder of the Game Dev Boi freelance team and game developers team",
    },
    {
      imgsrc: Mink,
      name: "Mink",
      details:
        "The co-founder of the Game Dev Boi freelance team and game developers team",
    },
  ];

  const projects = [
    {
      imgsrc: EPIC,
      name: "EPIC",
      details:
        'The so called "Excellent Prototype Infrared Controller" is one of our smarthome remote prototype that mostly based on the infrared remote system that use to control most of the device using a firebase realtime database for a webservice and a native Java Android for a fast User Interface',
      link: "https://github.com/JoeKooler/EPIC",
    },
    {
      imgsrc: Fckly,
      name: "Fckly Bird",
      details:
        "The angry bird like game pack with a challenging shooting style along with crazy fun items made by Unity C#",
      link: "https://github.com/JoeKooler/FxcklyBird",
    },
    {
      imgsrc: GISAVIA,
      name: "GISAVIA Air Navigation Coverage",
      details:
        "An aircraft coverage analysis using a line-of-sight with multi angle to analyze the signal coverage in the area using Java as a backend and CesiumJS as a data visualizer",
      link: "https://github.com/JoeKooler/GISTDA-Airnav",
    },
  ];

  const PageHeader = () => (
    <div className="bg-black relative shadow-xl">
      <div
        className="p-64 bg-fixed bg-cover bg-bottom overflow-hidden hover:opacity-50 duration-500"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) ,url(" +
            require("../Assets/Joe.png") +
            ")",
        }}
      ></div>
      <h1
        className="absolute top-1/2 left-1/2 text-white text-3xl"
        style={{
          WebkitTransform: "translate(-50%,-50%)",
          transform: "translate(-50%,-50%)",
        }}
      >
        I'm JoeKooler a Full stack and Game Developer
      </h1>
    </div>
  );

  const AboutMeSection = () => (
    <section className="flex flex-wrap justify-center m-32 ">
      <img className="rounded-lg" src={Joe2} alt="zzZZ" />
      <div className="pl-6 max-w-xl">
        <div className="uppercase tracking-wide text-6xl text-indigo-600 font-bold">
          A bit about me
        </div>
        <a
          href="/"
          className="pt-6 block text-lg leading-tight font-semibold text-gray-900 hover:underline"
        >
          Hi I'm Chitsanupong Klaithin
        </a>
        <p className="mt-2 text-gray-600">
          The Full-stack and Game Developer. I have been doing some fun projects
          for about 2 years now ... please hire me so i can just move to Canada
          Also If the project is a large scale i also have my quality team to
          solve your problem with ease.
        </p>

        <div
          href="#"
          className="pt-10 block text-lg leading-tight font-semibold text-gray-900"
        >
          The stacks that i'm familiar with
        </div>
        <div className="mt-2 text-gray-600">
          {stackList.map((stack) => (
            <p className="pl-4 mt-2">- {stack}</p>
          ))}
        </div>
      </div>
    </section>
  );

  const TeamSection = () => (
    <div>
      <h1 className="text-6xl font-bold text-center m-5 text-gray-700">
        The Quality Team
      </h1>
      <div className="flex flex-wrap mb-4 justify-center">
        {team.map((member) => (
          <TeamComponents
            imgsrc={member.imgsrc}
            name={member.name}
            details={member.details}
          />
        ))}
      </div>
    </div>
  );

  const ProjectSection = () => (
    <div>
      <h1 className="text-6xl font-bold text-center m-5 text-gray-700">
        Projects Example
      </h1>
      <div className="flex flex-wrap mb-4 justify-center">
        {projects.map((project) => (
          <CardComponents
            imgsrc={project.imgsrc}
            name={project.name}
            details={project.details}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-full z-40">
      <PageHeader />
      <AboutMeSection />
      <TeamSection />
      <ProjectSection />
    </div>
  );
}
