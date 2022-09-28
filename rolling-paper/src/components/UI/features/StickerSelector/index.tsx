import React, { useState } from "react";
import Button from "../../basics/Button";

function StickerSelector() {
  const stickers = ["👍", "💖", "🤪"];
  const [selectedSticker, setSelectedSticker] = useState("");

  const toggleSelectedSticker = (sticker: string) => {
    if (sticker !== selectedSticker) {
      setSelectedSticker(sticker);
    }
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>스티커 누르기</div>
        <div style={{ display: "flex", fontSize: "20px" }}>
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
