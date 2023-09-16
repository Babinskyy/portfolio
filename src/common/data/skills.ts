import js from "../images/skills/js.png";
import ts from "../images/skills/typescript.jpeg";
import react from "../images/skills/react.png";
import mongo from "../images/skills/mongo.jpg";
import postgres from "../images/skills/postgres.png";
import node from "../images/skills/node.png";
import express from "../images/skills/express.png";
import ionic from "../images/skills/ionic.png";
import heroku from "../images/skills/heroku.png";
import azure from "../images/skills/azure.png";
import mui from "../images/skills/mui.png";
import netlify from "../images/skills/netlify.png";

type Skill = {
  name: string;
  image: string;
};

const skills: Skill[] = [
  {
    name: "JavaScript",
    image: js,
  },
  {
    name: "TypeScript",
    image: ts,
  },
  {
    name: "React",
    image: react,
  },
  {
    name: "MongoDB",
    image: mongo,
  },
  {
    name: "PostgreSQL",
    image: postgres,
  },
  {
    name: "Node",
    image: node,
  },
  {
    name: "Express",
    image: express,
  },
  {
    name: "Ionic",
    image: ionic,
  },
  {
    name: "Heroku",
    image: heroku,
  },
  {
    name: "Azure",
    image: azure,
  },
  {
    name: "Mui",
    image: mui,
  },
  {
    name: "Netlify",
    image: netlify,
  },
];

export default skills;
