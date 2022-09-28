import React from "react";
import PaperInput from "../../ui/features/PaperInput";
import PaperViewer from "../../ui/features/PaperViewer";
import StickerSelect from "../../ui/features/StickerSelector";

function HomePage() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <PaperInput />
        <StickerSelect />
        <PaperViewer />
      </div>
    </>
  );
}

export default HomePage;
