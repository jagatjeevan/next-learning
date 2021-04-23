const Button = (props) => {
  const { customClass, onClick, variant, type, disabled, children } = props;

  function handleButtonClick(values) {
    if (onClick) onClick(values);
  }

  return (
    <button
      type={type}
      className={`${customClass} ${variant}`}
      disabled={disabled}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  customClass: '',
  type: 'button',
  disabled: false,
  variant: 'primary',
};
// variant : primary, secondary
export default Button;
