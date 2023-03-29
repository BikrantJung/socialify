import clsx from "clsx";
import { ButtonProps } from "./button.types";

export function generateButtonClassName({
  variant = "solid",
  className,
}: Omit<ButtonProps, "children">) {
  const classNames = clsx([
    "relative cursor-pointer h-8 w-fit min-w-[2.5rem] flex items-center gap-1 justify-center rounded px-2  text-sm  transition disabled:cursor-not-allowed",
    className,
    {
      "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 disabled:hover:bg-blue-500":
        variant === "solid",
      "bg-gray-100 text-black hover:bg-gray-200 active:bg-gray-300 disabled:hover:bg-gray-100":
        variant === "neutral",
      "bg-transparent text-black border hover:bg-gray-50 active:bg-gray-100 disabled:hover:bg-transparent":
        variant === "outlined",
    },
  ]);
  return classNames;
}
