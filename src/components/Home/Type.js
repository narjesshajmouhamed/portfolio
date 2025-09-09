import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "3rd Year Engineering Student at Sup'Com",
          "AI & IoT Enthusiast",
          "Web & Mobile Developer",
          "Open Source Contributor"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
