import { useDispatch } from "react-redux";
import { ToastProps } from "../components/ui/basics/Toast/Toast";
import { v4 as uuidV4 } from "uuid";
import { fireToast, removeToast } from "../reducers/toast";

export const useToast = () => {
  const dispatch = useDispatch();

  const toastOff = (toastID: ToastProps["id"]) => {
    dispatch(removeToast(toastID));
  };

  const toastOn = () => {
    const toastId = uuidV4();
    dispatch(fireToast(toastId));
  };

  return { toastOn, toastOff };
};
