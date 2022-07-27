import React, { useState, useEffect, useRef } from "react";

const Icon = ({ size = 16, component: Component, color, ...rest }) => {
  const classNames = [];
  switch (color) {
    case "primary":
      classNames.push("fill-primary");
      break;
    case "secondary":
      classNames.push("fill-secondary");
      break;
    case "success":
      classNames.push("fill-success");
      break;
    case "warning":
      classNames.push("fill-warning");
      break;
    case "danger":
      classNames.push("fill-danger");
      break;
    default:
      classNames.push("fill-primary");
      break;
  }

  if (Component) {
    return <Component width={size} height={size} {...rest} />;
  }
  return null;
};

export default Icon;
