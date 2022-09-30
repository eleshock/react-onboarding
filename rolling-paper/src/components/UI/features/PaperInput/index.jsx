import React, { useState } from "react";
import "./Submit.scss";
import Input from "../../basics/Input";
import Button from "../../basics/Button";
import { useDispatch } from "react-redux";
import { setPaperList } from "../../../../reducers/memo";

function PaperInput() {
  const dispatch = useDispatch();
  const uploadPaper = () => {
    if (body !== "" && author !== "") {
      const newPaper = { body, author, color };
      dispatch(setPaperList(newPaper));
    }
  };

  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("#EEEEEE");
  const colorList = { pink: "#FED3DC", green: "#E2FFE9", yellow: "#FFFEAF" };
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
        onChange={(value) => setAuthor(value)}
        placeholder="작성자"
        label="작성자"
      />
      <div style={{ display: "flex", gap: "12px" }}>
        {Object.entries(colorList).map(([selectedColor, colorCode]) => (
          <Button
            key={colorCode}
            content={`${colorCode}`}
            onClick={() => {
              setColor(colorCode);
            }}
            backgroundColor={selectedColor}
            selected={colorCode === color}
            selectedBorderColor="blackBorder"
          />
        ))}
      </div>
      <div className="Submit" onClick={uploadPaper}>
        작성하기
      </div>
    </div>
  );
}

export default PaperInput;
