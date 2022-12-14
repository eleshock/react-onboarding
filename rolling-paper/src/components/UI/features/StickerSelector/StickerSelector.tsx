import React, { useState } from "react";
import Button from "../../basics/Button";
import "./stickerSelector.scss";

function StickerSelector() {
  const stickers = ["π", "π", "π€ͺ"];
  const [selectedSticker, setSelectedSticker] = useState("");

  const toggleSelectedSticker = (sticker: string) => {
    if (sticker !== selectedSticker) {
      setSelectedSticker(sticker);
    }
  };

  return (
    <>
      <div className="stickerContainer">
        <div>μ€ν°μ»€ λλ₯΄κΈ°</div>
        <div className="stickerList">
          {stickers.map((sticker) => (
            <Button
              key={sticker}
              content={sticker}
              backgroundColor="white"
              selected={selectedSticker === sticker}
              selectedBorderColor="blackBorder"
              onClick={(e: React.MouseEvent) => {
                toggleSelectedSticker(sticker);
                console.log(sticker);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default StickerSelector;
