import React, { useState } from "react";
import Input from "../../basics/Input";

function PaperInput() {
  const uploadPaper = () => {};

  const [body, setBody] = useState("");
  const [sender, setSender] = useState("");
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Input
        onSubmit={uploadPaper}
        onChange={(value) => setBody(value)}
        placeholder="내용"
        label="내용"
      />
      <Input
        onSubmit={uploadPaper}
        onChange={(value) => setSender(value)}
        placeholder="작성자"
        label="작성자"
      />
      <div
        style={{
          fontSize: 26,
          cursor: "pointer",
        }}
        onClick={uploadPaper}
      >
        작성하기
      </div>
    </div>
  );
}

export default PaperInput;
