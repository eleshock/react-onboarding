const FIRE_TOAST = "toast/FIRE_TOAST";
const REMOVE_TOAST = "toast/REMOVE_TOAST";

export const fireToast = (toastId) => ({
  type: FIRE_TOAST,
  toastId,
});
export const removeToast = (toastId) => ({
  type: REMOVE_TOAST,
  toastId,
});

const initialState = {
  toasts: [],
};

export default function toast(state = initialState, action) {
  switch (action.type) {
    case FIRE_TOAST:
      return { ...state, toasts: [...state.toasts, action.toastId] };
    case REMOVE_TOAST:
      return { ...state, toasts: {state.filter(toasts) => toasts.id !== toastId} };
    default:
      return state;
  }
}
