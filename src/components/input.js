import React, { forwardRef } from "react";

function Input({ name, label, placeholder, ...rest }, ref) {
  return (
    <div className="input-block">
      <label htmlFor={name}> {label} </label>{" "}
      <input type="text" ref={ref} {...rest} />
    </div>
  );
}

export default forwardRef(Input);
