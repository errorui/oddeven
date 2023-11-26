import React from "react";

const Start = (props: any) => {
  let color = props.color;
  return (
    <button
      onClick={props.onClick}
      className={` px-4 py-2 w-[200px] rounded-lg mt-2 mx-auto`}
      style={{ backgroundColor: color }}
    >
      {props.children}
    </button>
  );
};

export default Start;
