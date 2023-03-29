import React, { LabelHTMLAttributes } from "react";
import { generateButtonClassName } from "./button.styles";
import { ButtonProps } from "./button.types";

interface LabelButtonProps extends LabelHTMLAttributes<HTMLLabelElement> {
  variant?: ButtonProps["variant"];
  children: React.ReactNode;

  htmlFor: string;
}

function LabelButton({
  variant = "solid",
  children,
  className,
  htmlFor,
  ...rest
}: LabelButtonProps) {
  const labelClassnames = generateButtonClassName({ variant, className });
  return (
    <label htmlFor={htmlFor} className={labelClassnames} {...rest}>
      {children}
    </label>
  );
}

export default LabelButton;
