import { cssTransition, toast } from "react-toastify";

const TOAST_TYPE = {
  SUCCESS: "success",
  INFO: "info",
  ERROR: "error",
  WARNING: "warning",
};

const swirl = cssTransition({
  enter: "swing",
  exit: "roll-out",
  collapse: false,
});

function openToast(ref, toastId, type, message) {
  if (ref && ref.current && toast.isActive(ref.current)) {
    toast.update(ref.current, { transition: null, render: message });
    toast.update(ref.current, { transition: swirl, render: message });
  } else {
    switch (type) {
      case TOAST_TYPE.ERROR:
        ref.current = toast.error(message, { toastId });
        break;
      case TOAST_TYPE.SUCCESS:
        ref.current = toast.success(message, { toastId });
        break;
      case TOAST_TYPE.INFO:
        ref.current = toast.info(message, { toastId });
        break;
      case TOAST_TYPE.WARNING:
        ref.current = toast.warning(message, { toastId });
        break;
      default:
        console.log("show toast");
    }
  }
}

export default openToast;
