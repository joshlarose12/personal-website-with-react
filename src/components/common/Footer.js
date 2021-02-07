import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-white" style={{ height: 30 }}>
      <div className="row text-center">
        <div className="col-sm ">
          <a
            className="badge badge-light"
            href="https://www.linkedin.com/in/joshlarose"
          >
            Connect on LinkedIn
          </a>
        </div>
        <div className="col-sm ">
          <a
            className="badge badge-light"
            href="https://github.com/joshlarose12"
          >
            My GitHub
          </a>
        </div>
        <div className="col-sm">
          <p>Phone: 249-995-0224</p>
        </div>
        <div className="col-sm">
          <p>Email: joshlarose12@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
