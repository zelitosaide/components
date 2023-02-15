export function Input({ value, onChange, disabled, label }) {
  return (
    <input
      placeholder={label}
      disabled={disabled}
      value={value}
      onChange={function (e) {
        onChange(e.target.value);
      }}
    />
  );
}
