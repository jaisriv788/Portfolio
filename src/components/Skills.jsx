import React from "react";
import SkillCard from "./SkillCard";

const data = [
  {
    icon: "../../assets/html.png",
    name: "HTML",
  },
  {
    icon: "../../assets/css.png",
    name: "CSS",
  },
  {
    icon: "../../assets/js.png",
    name: "JavaScript",
  },
  {
    icon: "../../assets/typescript.png",
    name: "TypeScript",
  },
  {
    icon: "../../assets/mongodb-icon.svg",
    name: "MongoDB",
  },
  {
    icon: "../../assets/icons8-express-js-48 (1).png",
    name: "ExpressJS",
  },
  {
    icon: "../../assets/reactjs-icon.svg",
    name: "ReactJS",
  },
  {
    icon: "../../assets/programing.png",
    name: "NodeJS",
  },
  {
    icon: "../../assets/postgresql-icon.svg",
    name: "Postgres",
  },
  {
    icon: "../../assets/tailwindcss-icon.svg",
    name: "Tailwind",
  },
  {
    icon: "../../assets/icons8-git-144.png",
    name: "Git",
  },
  {
    icon: "../../assets/github-tile.svg",
    name: "Github",
  },
  {
    icon: "../../assets/file_type_light_prisma.svg",
    name: "Prisma",
  },
  {
    icon: "../../assets/mongoose-original.svg",
    name: "Mongoose",
  },
  {
    icon: "https://zod.dev/logo.svg",
    name: "Zod",
  },
  {
    icon: "../../assets/docker-tile.svg",
    name: "Docker",
  },
  {
    icon: "../../assets/cloudflare-icon.svg",
    name: "Cloudflare",
  },
  {
    icon: "../../assets/amazon_aws-icon.svg",
    name: "AWS",
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
