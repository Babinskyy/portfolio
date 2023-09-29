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
import html from "../images/skills/html.png";
import css from "../images/skills/css.png";
import scss from "../images/skills/scss.png";
import passport from "../images/skills/passport.png";
import redux from "../images/skills/redux.png";

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
    name: "Redux",
    image: redux,
  },
  {
    name: "Ionic",
    image: ionic,
  },
  {
    name: "HTML",
    image: html,
  },
  {
    name: "CSS",
    image: css,
  },
  {
    name: "Sass",
    image: scss,
  },
  {
    name: "Material UI",
    image: mui,
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
    name: "PostgreSQL",
    image: postgres,
  },
  {
    name: "MongoDB",
    image: mongo,
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
    name: "Netlify",
    image: netlify,
  },
];

export default skills;
