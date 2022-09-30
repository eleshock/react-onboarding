import React from "react";
// import { useToast } from "../../../../hooks/toast";
import Toast from "../../basics/Toast";
import { useSelector } from "react-redux";
import "./toastViewer.scss";

function ToastViewer() {
  // const { toasts } = useToast();
  const toasts = useSelector((state) => state.toast.toasts);
  return (
    <div className="toasts">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
}

export default ToastViewer;
