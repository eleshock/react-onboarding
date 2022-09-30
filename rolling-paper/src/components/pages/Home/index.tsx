import React from "react";
import PaperInput from "../../ui/features/PaperInput";
import PaperViewer from "../../ui/features/PaperViewer";
import StickerSelect from "../../ui/features/StickerSelector";
import ToastViewer from "../../ui/features/ToastViewer";
import "./style.scss";

function HomePage() {
  return (
    <>
      <div className="home-container">
        <PaperInput />
        <StickerSelect />
        <PaperViewer />
        <ToastViewer />
      </div>
    </>
  );
}

export default HomePage;
