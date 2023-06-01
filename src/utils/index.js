import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Utility function to store data in local storage
export const storeDataInLocalStorage = (key, value) => {
  let data = JSON.parse(localStorage.getItem(key));
  if (data) {
    data.push(value);
  } else {
    data = [value];
  }
  localStorage.setItem(key, JSON.stringify(data));
};

// Utility function to retrieve data from local storage
export const getDataFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

export const showNotification = (type, value) => {
  switch (type) {
    case "success":
      toast.success(value, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      break;
    case "error":
      toast.error(value, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      break;
    case "warning":
      toast.warning(value, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      break;
    default:
      toast(value, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
  }
};
