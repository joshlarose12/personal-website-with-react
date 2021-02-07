import React from "react";
import Footer from "./common/Footer";

export default function ResumePage() {
  return (
    <div>
      <div className="container" style={{ marginTop: 80 }}>
        <h1 className="text-center">
          <b>Resume</b>
        </h1>
        <h2>Education</h2>

        <p>
          Bachelor of Engineering Science, Software Engineering (BESc) Expected
          2021
        </p>
        <h2>Projects</h2>
        <h4>TrackR</h4>
        <ul>
          <li>
            Developing an app that will collect and store email receipts to
            incentivise consumers to choose email receipts rather than a paper
            copy
          </li>
          <li>Learning new React Native, Node.js, and JavaScript skills </li>
        </ul>
        <h4>Survival Game</h4>
        <ul>
          <li>Created a survival game in the Unity Game Engine</li>
          <li>
            Wrote efficient code to create in game mechanics such as inventory
            system
          </li>
          <li>Gained experienced using scripts and objects in a game conp</li>
        </ul>
        <h4>HabitHero</h4>
        <ul>
          <li>
            Created an android app using Android Studio to help user overcome
            bad habits
          </li>
          <li>
            Worked as a team and followed the agile software development method{" "}
          </li>
          <li>
            Gained experience with peer-programing and software development as a
            team
          </li>
        </ul>
        <h4>Train Schedule Database</h4>
        <ul>
          <li>
            Designed a database to store information about train routes and
            tickets using MySQL
          </li>
          <li>Implemented a front-end website to access database</li>
          <li>Designed complex SQL queries</li>
        </ul>
        <h4>Music Review Website</h4>
        <ul>
          <li>Created a music review web application using a RESTful API</li>
          <li>Implemented front end using Angular</li>
          <li>Implemented back end using Node.js and mongoDB</li>
        </ul>
        <h2>Work Experience</h2>
        <h3>Crew Leader</h3>
        <h5>Student Works Painting, Huntsville, Ontario</h5>
        <ul>
          <li>Led a crew of three and supervised painting jobs</li>
          <li>Delegated and organized work at job sites</li>
          <li>
            Gained time management skills by completing jobs on time and on
            budget
          </li>
        </ul>
        <h2>Software Skills</h2>
        <div>
          <p>
            <b>Programming Languages:</b> C++, C#, Java, JavaScript
          </p>
        </div>
        <div>
          <p>
            <b>Front End:</b> HTML, Angular4, React
          </p>
        </div>
        <div>
          <p>
            <b>Back End:</b> Node.js, mongoDB, SQL
          </p>
        </div>
        <div>
          <p>
            <b>Other:</b> React Native, Google Cloud Services, Unity, JavaFX,
            Git
          </p>
        </div>
        <h2>Awards and Scholarships</h2>
        <h4>PEO Engineering Award</h4>
        <p>
          In recognition of outstanding scholastic performance, community
          experience, volunteerism, an interest in the engineering profession
        </p>
        <h4>Computer Science Award</h4>
        <p>
          Awarded to the student with the highest average in grade twelve
          computer science
        </p>
        <h4>The Western Scholarship of Excellence </h4>
        <p>Awarded for having an average 90-94.9% in grade twelve</p>
        <h4>Legion Medal of Excellence </h4>
        <p>
          Awarded for outstanding community service and leadership at cadets
        </p>
        <h4>Model Cadet Award </h4>
        <p>Awarded to the cadet voted most for model cadet in 2015 - 2016</p>
      </div>
      <Footer />
    </div>
  );
}
