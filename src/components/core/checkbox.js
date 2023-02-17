export function Checkbox({ value, onChange }) {
  return (
    <input
      type="checkbox"
      checked={value}
      onChange={function (e) {
        onChange(e.target.checked);
      }}
    />
  );
}
