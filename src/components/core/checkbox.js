export function Checkbox({ value, onChange, disabled }) {
  return (
    <input
      type="checkbox"
      checked={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}
