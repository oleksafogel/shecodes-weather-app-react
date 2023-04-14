import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        This website is coded by Oleksandra Fogel and is open-sourced on{" "}
        <a
          href="https://github.com/Alexas444/shecodes-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        ,{" "}
        <a
          href="https://celebrated-biscuit-c577d2.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted
        </a>{" "}
        on{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
        .
      </small>
    </div>
  );
}
