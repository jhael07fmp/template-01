import { Dispatch, SetStateAction } from "react";

export type BasicContextType = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
};
