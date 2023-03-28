import { ButtonHTMLAttributes } from "react";

export type ButtonVariants =
  | "solid"
  | "ghost"
  | "link"
  | "neutral"
  | "outlined";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "button" | "reset";
  variant?: ButtonVariants;
  loading?: boolean;
  children: React.ReactNode;
}
