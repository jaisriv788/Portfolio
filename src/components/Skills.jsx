import React from "react";
import SkillCard from "./SkillCard";

const data = [
  {
    icon: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
    name: "HTML",
  },
  {
    icon: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
    name: "CSS",
  },
  {
    icon: "https://upload.vectorlogo.zone/logos/javascript/images/806c2e30-cf85-4b36-81bb-037049603c34.svg",
    name: "JavaScript",
  },
  {
    icon: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
    name: "TypeScript",
  },
  {
    icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    name: "MongoDB",
  },
  {
    icon: "https://upload.vectorlogo.zone/logos/expressjs/images/a1b5cb1f-dae7-4971-ab5b-68efce751b0f.svg",
    name: "ExpressJS",
  },
  {
    icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    name: "ReactJS",
  },
  {
    icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    name: "NodeJS",
  },
  {
    icon: "https://upload.vectorlogo.zone/logos/nextjs/images/abcffb25-b56d-475f-9c82-26818776dc33.svg",
    name: "NextJS",
  },
  {
    icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
    name: "Postgres",
  },
  {
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    name: "Tailwind",
  },
  {
    icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    name: "Git",
  },
  {
    icon: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
    name: "Github",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg",
    name: "Prisma",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongoose/mongoose-original-wordmark.svg",
    name: "Mongoose",
  },
  {
    icon: "https://zod.dev/logo.svg",
    name: "Zod",
  },
  {
    icon: "https://www.vectorlogo.zone/logos/docker/docker-tile.svg",
    name: "Docker",
  },
  {
    icon: "https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg",
    name: "Cloudflare",
  },
];

function Skills() {
  return (
    <div className="bg1 py-8 px-10 lg:px-20 text-white">
      <div className="flex flex-col items-center gap-5">
        <div className="bg-about h-fit px-5 py-1 rounded-3xl w-fit text-xl">
          Skills
        </div>
        <div>The skills, tools and technology I am really good at:</div>
      </div>
      <div className=" pt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9  place-items-center gap-y-10">
        {data.map((item) => {
          return <SkillCard src={item.icon} name={item.name} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
