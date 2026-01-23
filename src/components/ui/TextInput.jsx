import './TextInput.css';

const TextInput = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '',
  disabled = false,
  maxLength,
  required = false
}) => {
  return (
    <input
      type={type}
      className={`text-input ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      maxLength={maxLength}
      required={required}
    />
  );
};

export default TextInput;

