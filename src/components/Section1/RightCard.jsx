import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full bg-red-600 w-70 rounded-3xl overflow-hidden relative shrink-0">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt="card Pic"
      />
      <RightCardContent id={props.id} tag={props.tag} intro={props.intro}/>
    </div>
  );
};

export default RightCard;
