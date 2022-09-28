import React, { useState } from "react";

import Button from "../../basics/Button";

function PaperViewer() {
  const [columns, setColumns] = useState(1);
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
    </>
  );
}

export default PaperViewer;
