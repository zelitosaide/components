export function Input({ value, onChange, disabled, type = "text" }) {
  return (
    <input
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        background: "#131417",
        color: "hsla(0, 0%, 100%, 0.7)",
        border: "none",
        outline: "none",
        padding: 6,
        fontSize: 12,
      }}
    />
  );
}
