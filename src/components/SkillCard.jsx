import React from "react";

function SkillCard(props) {
  return (
    <div className="w-fit hover:scale-125 transition ease-in-out duration-200 h-fit flex flex-col items-center gap-2">
      <div>
        <img loading="lazy" width={"70px"} src={props.src} alt={props.name} />
      </div>
      <div className="font-bold text-lg">{props.name}</div>
    </div>
  );
}

export default SkillCard;
