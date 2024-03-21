const Button = ({
  variation,
  type,
  children,
  onClick,
  className,
  disabled = false,
}) => {
  // STYLE LIST BUTTON
  const getButtonVariation = (variation) => {
    switch (variation) {
      case "primary":
        return "bg-blue-primary hover:bg-white border rounded-xl border-blue-primary text-white hover:text-blue-primary";
      case "secondary":
        return "hover:bg-blue-primary bg-white border rounded-xl border-blue-primary hover:text-white text-blue-primary";
      default:
        return "";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonVariation(variation)}
         font-medium rounded-lg py-2 md:py-2.5 px-3 md:px-4 text-sm md:text-base transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
