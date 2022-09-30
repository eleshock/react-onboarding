import { useDispatch } from "react-redux";
import { ToastProps } from "../components/ui/basics/Toast/Toast";
import { v4 as uuidV4 } from "uuid";
import { fireToast, removeToast } from "../reducers/toast";

export const useToast = () => {
  const dispatch = useDispatch();

  // const removeToast = (toastID: ToastProps["id"]) => {
  //   setToasts((prev) => prev.filter((toast) => toast.id !== toastID));
  // };

  const fireToast = (toast: Omit<ToastProps, "id">) => {
    const toastId = uuidV4();
    dispatch(fireToast(toast));
  };

  return { fireToast, removeToast };
};
