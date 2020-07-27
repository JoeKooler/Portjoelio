import React from "react";
import Joe3 from "../Assets/Joe3.jpg";

export default function AboutUs() {
  const stackList = [
    "HTML CSS and JavaScript",
    "jQuery",
    "PHP",
    "ReactJS , React Native",
    "VueJS",
    "NodeJS",
    "Java",
    "C#",
    "Unity",
  ];
  return (
    <div>
      <div className="spacer h-20 bg-gray-800"></div>
      <section className="flex justify-center m-32 ">
        <img className="rounded-lg max-w-2xl" src={Joe3} alt="zzZZ" />
        <div className="pl-6 max-w-xl">
          <div className="uppercase tracking-wide text-6xl text-indigo-600 font-bold">
            About Me
          </div>
          <p className="pt-6 block text-lg leading-tight font-semibold text-gray-900">
            Hi I'm Chitsanupong Klaithin
          </p>
          <p className="mt-2 text-gray-600">
            The Full-stack and Game Developer. I have been doing some fun
            projects for about 2 years now ... please hire me so i can just move
            to Canada Also If the project is a large scale i also have my
            quality team to solve your problem with ease.
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
    </div>
  );
}
