import { ReactNode } from "react";

export interface ICard {
  label: string;
  value: number | string;
  navigateTo: string;
  color: string;
  icon?: ReactNode;
}
