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
import vue from "../images/skills/Vue.png";
import pinia from "../images/skills/pinia.png";
import ant from "../images/skills/ant.png";
import supabase from "../images/skills/supabase.png";
import google from "../images/skills/google.png";
import github from "../images/skills/GitHub.png";
import openai from "../images/skills/openai.png";

type Skill = {
  name: string;
  image: string;
};

export const frontSkills: Skill[] = [
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
    name: "Vue",
    image: vue,
  },
  {
    name: "Pinia",
    image: pinia,
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
    name: "Scss",
    image: scss,
  },
  {
    name: "Material UI",
    image: mui,
  },
  {
    name: "Ant Design",
    image: ant,
  },
];

export const backSkills = [
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
    name: "GitHub",
    image: github,
  },
  {
    name: "Azure",
    image: azure,
  },
  {
    name: "Heroku",
    image: heroku,
  },

  {
    name: "Netlify",
    image: netlify,
  },
  {
    name: "Google API",
    image: google,
  },
  {
    name: "Supabase",
    image: supabase,
  },
  {
    name: "OpenAI",
    image: openai,
  },
  {
    name: "Passport",
    image: passport,
  },
];

// export default skills;
