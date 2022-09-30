import React from "react";
import { useToast } from "../../../../hooks/toast";

import "./toast.scss";

export interface ToastProps {
  id: string;
  message: string;
}

const Toast = (toast: ToastProps) => {
  const { removeToast } = useToast();

  return (
    <div
      className="toast"
      onAnimationEnd={() => {
        removeToast(toast.id);
      }}
    >
      {toast.message}
    </div>
  );
};

export default Toast;
