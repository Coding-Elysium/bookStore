import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        className="bg-primary rounded-lg"
        style={{
          width: `${props.width}px`,
          height: `${props.height}px`,
          color: `${props.color}`,
        }}
      >
        {props.name}
      </button>
    </>
  );
};

export default Button;
