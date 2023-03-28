import React, { HTMLAttributes, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface ParentProps {
  icon?: React.ReactNode;
}

function Input({
  icon,
  type,
  name,
  value,
  ...props
}: ParentProps & InputProps) {
  return (
    <div className="flex w-full items-center overflow-hidden rounded border bg-white focus-within:shadow-ring">
      <label htmlFor={name} className="px-2">
        {icon}
      </label>
      <input
        aria-label={name}
        type={type}
        name={name}
        id={name}
        className="w-full border-none text-sm focus:shadow-none focus-visible:ring-0"
        {...props}
      />
    </div>
  );
}

export default Input;
