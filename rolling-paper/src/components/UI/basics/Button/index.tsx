import classNames from "classnames";
import React from "react";
import "./Button.scss";

interface ButtonStyles {
  backgroundColor: string;
  selected: boolean;
  selectedBorderColor: string;
}

interface ButtonProps extends ButtonStyles {
  content: string;
  onClick: (e: React.MouseEvent) => void;
}

function Button(props: ButtonProps) {
  const { content, onClick, backgroundColor, selected, selectedBorderColor } =
    props;
  return (
    <div
      className={classNames("Button", backgroundColor, selectedBorderColor, {
        selected,
      })}
      onClick={onClick}
    >
      {content}
    </div>
  );
}

export default Button;
