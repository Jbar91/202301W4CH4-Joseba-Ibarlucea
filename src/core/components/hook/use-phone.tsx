import { useState } from "react";

export type UsePhoneStructure = ReturnType<typeof usePhone>;

export function usePhone() {
  const initialKeyboard: string = "";

  let [keyboard, setKeyboard] = useState(initialKeyboard);

  const handleClickNumber = (number: string) => {
    setKeyboard(keyboard + number);
  };

  const handleDelete = () => {
    setKeyboard((keyboard = ""));
  };

  const displayLength = () => {
    return keyboard.length === 9 ? true : false;
  };

  return {
    keyboard,
    handleClickNumber,
    handleDelete,
    displayLength,
  };
}
