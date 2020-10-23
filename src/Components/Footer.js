import React from "react";
import FacebookIcon from "../Assets/facebook.png";
import TwitterIcon from "../Assets/twitter.png";
import LineIcon from "../Assets/line.png";

export default function Footer() {
  return (
    <div className="p-10 w-full bg-gray-800 text-white flex">
      <div className="left-section max-w-3xl px-64">
        <div className="flex">
          <img
            className="p-1"
            style={{ maxWidth: "2rem" }}
            src={FacebookIcon}
            alt="rip"
          />
          <h1 className="pl-3">/JosephKoolerson</h1>
        </div>

        <div className="flex">
          <img
            className="p-1"
            style={{ maxWidth: "2rem" }}
            src={TwitterIcon}
            alt="rip"
          />
          <h1 className="pl-3">@JosephKoolerson</h1>
        </div>

        <div className="flex">
          <img
            className="p-1"
            style={{ maxWidth: "2rem" }}
            src={LineIcon}
            alt="rip"
          />
          <h1 className="pl-3">@/JosephKoolerson</h1>
        </div>
        <h1>©2020 All Rights Reserved JoeKooler</h1>
      </div>
    </div>
  );
}
