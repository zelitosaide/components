export function Input({ value, onChange, disabled, type = "text" }) {
  return (
    <input
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  );
}
