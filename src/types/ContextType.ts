import { Dispatch, SetStateAction } from "react";

export type BasicContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
