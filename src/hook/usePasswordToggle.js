import React from "react";
import { useState } from "react";
const usePasswordToggle = () => {
  const [visibility, setVisibility] = useState(false);
  const inputType = visibility ? "text" : "password";

  return [inputType];
};

export default usePasswordToggle;
