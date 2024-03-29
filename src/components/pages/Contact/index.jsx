import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
export default function Contact() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center p-20 bg-gray-200">
        <div className="border border-black p-20 m-5 rounded-lg">
          <a
            // href="https://docs.google.com/document/d/1Rt9jybR8QDlO13gPpARZHHjeICpMOe892L_k8xWpXz8/export?format=pdf"

            href="https://docs.google.com/document/d/1GAbMZLubFtei26jwZtMoDxGtVL8bX2iNgeOJtB9NZ-w/export?format=pdf"
            alt="A link to a downloadable pdf of Thomas Johnson's resume"
            target="_blank"
          >
            <FaRegNewspaper size="4em"></FaRegNewspaper>
            <span className="flex justify-center">Resume</span>
          </a>
        </div>
        <div className="border border-black p-20 m-5 rounded-lg">
          <a
            href="https://www.linkedin.com/in/thomas-johnson-678383276/"
            alt="A link to Thomas Johnson's LinkedIn page"
            target="_blank"
          >
            <BsLinkedin size="4em"></BsLinkedin>
            <span className="flex justify-center">LinkedIn</span>
          </a>
        </div>
        <div className="border border-black p-20 m-5 rounded-lg">
          <a
            href="https://www.github.com/TJGit11"
            alt="A link to Thomas Johnson's github page"
            target="_blank"
          >
            <BsGithub size="4em"></BsGithub>
            <span className="flex justify-center">Github</span>
          </a>
        </div>
        <div className="border border-black p-20 m-5 rounded-lg">
          <a
            href="mailto: thomasjjohnson9311@gmail.com"
            alt="A link to send Thomas Johnson an email"
            target="_blank"
          >
            <MdMail size="4em"></MdMail>
            <span className="flex justify-center">Email</span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-center border border-black p-10 rounded-lg">
        <div>
          <h3 className="column-title">Front-End:</h3>
          <ul className="column-list">
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Materialize</li>
            <li>DaisyUI</li>
          </ul>
        </div>
        <div>
          <h3 className="column-title">Back-End:</h3>
          <ul className="column-list">
            <li>MySQL</li> <li>MongoDB</li> <li>Express.js</li> <li>Node.js</li>
            <li>Sequelize</li> <li>Mongoose</li> <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
