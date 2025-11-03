import React from "react";

const Button = ({
  children,
  variant = "foreground",
  width = "fit",
  className = "",
  ...props
}) => {
  // Color variant styles
  const variantStyles = {
    foreground: "bg-foreground text-white hover:bg-foreground/90",
    white: "bg-white text-foreground hover:bg-gray-100",
    orange: "bg-orange text-white hover:bg-orange/90",
  };

  // Width variant styles
  const widthStyles = {
    fit: "w-fit",
    full: "w-full",
  };

  const baseStyles =
    "px-6 py-3 text-sm font-bold tracking-wider uppercase transition-colors duration-200 rounded-none";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles[width]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
