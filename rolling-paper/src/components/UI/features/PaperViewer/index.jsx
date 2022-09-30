import classNames from "classnames";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../basics/Button";
import Paper from "../../basics/Paper";
import "./PaperViewer.scss";

function PaperViewer() {
  const [columns, setColumns] = useState(1);
  const paperList = useSelector((state) => state.memo.paperList);
  console.log(paperList);
  return (
    <>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <div>정렬 방식 선택</div>
        {[1, 2, 3].map((number) => (
          <Button
            key={number}
            content={`${number}`}
            onClick={() => setColumns(number)}
            backgroundColor="gray"
            selected={number === columns}
            selectedBorderColor="grayBorder"
          />
        ))}
      </div>
      <div className={`Paper grid-${columns}`}>
        {paperList.map((paper, index) => (
          <Paper key={index} props={paper} />
        ))}
      </div>
    </>
  );
}

export default PaperViewer;
