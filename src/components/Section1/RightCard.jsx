import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="bg-red-600 w-[18rem] lg:w-70 h-[24rem] lg:h-full rounded-3xl overflow-hidden relative shrink-0">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt="card Pic"
      />
      <RightCardContent id={props.id} tag={props.tag} intro={props.intro} />
    </div>
  );
};

export default RightCard;
