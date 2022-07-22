import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as DotsXIcon } from "./assets/icons/solid/dots-horizontal.svg";

const Icon = ({
  name = "archive",
  size = 16,
  fill = "#000",
  type = "solid",
  ...rest
}) => {
  return <DotsXIcon width={size} height={size} fill={fill} {...rest} />;
};

export default Icon;
