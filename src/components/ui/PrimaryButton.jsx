import './PrimaryButton.css';

const PrimaryButton = ({ children, onClick, disabled = false, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      className={`primary-button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

