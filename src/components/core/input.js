export function Input({ value, onChange, disabled, label, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={label}
      disabled={disabled}
      value={value}
      onChange={function (e) {
        onChange(e.target.value);
      }}
    />
  );
}
