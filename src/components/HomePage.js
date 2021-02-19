import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="pt-3" style={{ marginTop: 80 }}>
      <div>
        <h2 className="display-5 text-center">
          Thank you for visiting my website!
        </h2>
        <p className="container lead">
          My name is Josh LaRose and I am a 4th year student at Western
          University studying software engineering. This website is a work in
          progress as I am continuing to learn React. At the top you can select
          resume to see a web version of my resume. The about page contains some
          more information about me. Thanks for stopping by!
        </p>
      </div>

      <p className="lead">
        See my resume <Link to="/resume">here</Link> or read more about me{" "}
        <Link to="/about">here</Link>.
      </p>
      <p className="lead">
        If you want to see my LinkedIn page click{" "}
        <a
          href="https://www.linkedin.com/in/joshlarose"
          rel="noreferrer"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <p className="lead">
        You can email me at <b>joshlarose12@gmail.com</b> or call at{" "}
        <b>249-995-0224</b>
      </p>
    </div>
  );
}

export default HomePage;
