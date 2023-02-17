export function Checkbox({ value, onChange }) {
  return (
    <input
      type="checkbox"
      checked={value}
      onChange={onChange}
    />
  );
}
