import React from "react";
import classNames from "classnames";
import "./Paper.scss";

export type PaperProps = {
  body: string;
  author: string;
  color: string;
};

function Paper({ props }: { props: PaperProps }) {
  const { body, author, color } = props;
  return (
    <div className={classNames("Paper", color)}>
      <div>{body}</div>
      <div>{author}</div>
    </div>
  );
}

export default Paper;
