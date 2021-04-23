import PropTypes from 'prop-types';

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

Button.propTypes = {
  customClass: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;
