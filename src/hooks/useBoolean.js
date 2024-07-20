import { useState } from "react";

const useBoolean = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleOpen = () => {
    setValue(true);
  };

  const handleClose = () => {
    setValue(false);
  };

  return [value, handleOpen, handleClose];
};

export default useBoolean;
