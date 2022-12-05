import React from "react";

interface IMcButtonProps {
  label: string;
}

const McButton: React.FC<IMcButtonProps> = (props: IMcButtonProps) => {
  return <button>{props.label}</button>;
};

export default McButton;
