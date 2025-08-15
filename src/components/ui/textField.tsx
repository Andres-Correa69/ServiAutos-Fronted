import React, { forwardRef } from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string | null;
  type?: "text" | "email" | "password" | "number" | "tel";
  required?: boolean;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      errorText,
      type = "text",
      required = false,
      className = "",
      ...props
    },
    ref,
  ) => {
    const hasError =
      errorText !== null && errorText !== undefined && errorText !== "";

    return (
      <div className="w-full space-y-1">
        {label && (
          <label
            htmlFor={props.id || props.name}
            className="block text-[14px] md:text-[18px] font-medium text-primary mb-[10px]"
          >
            {label}
            {required && <span className="text-[#0071CE]">*</span>}
          </label>
        )}

        <input
          ref={ref}
          type={type}
          className={`
            w-full px-5 h-[45px] md:h-[52px] rounded-[100px] border transition-colors duration-200
            focus:outline-none focus:ring-[0.5px]
            placeholder:text-[#808080]
            ${
              hasError
                ? "border-error focus:border-error focus:ring-error/20"
                : "border-[#000000]/30 focus:border-primary"
            }
            ${className}
          `}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${props.name}-error` : undefined}
          {...props}
        />

        {hasError && (
          <p
            id={`${props.name}-error`}
            className="text-error text-[14px] mt-2"
            role="alert"
          >
            {errorText}
          </p>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";

export default TextField;
