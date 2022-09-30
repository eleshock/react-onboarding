import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../basics/Button";
import Paper from "../../basics/Paper";
import "./paperViewer.scss";

function PaperViewer() {
  const [columns, setColumns] = useState(1);
  const paperList = useSelector((state) => state.memo.paperList);
  console.log(paperList);
  return (
    <>
      <div className="align-container">
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
      <div className={`paper grid-${columns}`}>
        {paperList.map((paper, index) => (
          <Paper key={index} props={paper} />
        ))}
      </div>
    </>
  );
}

export default PaperViewer;
