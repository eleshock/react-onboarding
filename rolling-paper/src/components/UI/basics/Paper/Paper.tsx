import React from "react";
import classNames from "classnames";
import "./paper.scss";

interface PaperProps {
  body: string;
  author: string;
  color: string;
}

function Paper({ props }: { props: PaperProps }) {
  const { body, author, color } = props;
  return (
    <div className={classNames("paper", color)}>
      <div>{body}</div>
      <div>{author}</div>
    </div>
  );
}

export default Paper;
