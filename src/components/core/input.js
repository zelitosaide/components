export function Input({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={function (e) {
        onChange(e.target.value);
      }}
    />
  );
}
