import React, { useState } from "react";
import "./paperInput.scss";
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
  const [color, setColor] = useState("gray");
  const colorList = { pink: "#FED3DC", green: "#E2FFE9", yellow: "#FFFEAF" };
  return (
    <div className="submit-container">
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
      <div className="color-selector">
        {Object.entries(colorList).map(([selectedColor, colorCode]) => (
          <Button
            key={colorCode}
            content={`${colorCode}`}
            onClick={() => {
              setColor(selectedColor);
            }}
            backgroundColor={selectedColor}
            selected={selectedColor === color}
            selectedBorderColor="blackBorder"
          />
        ))}
      </div>
      <div className="submit-button" onClick={uploadPaper}>
        작성하기
      </div>
    </div>
  );
}

export default PaperInput;
