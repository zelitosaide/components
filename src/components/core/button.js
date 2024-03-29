export function Button({ children, onClick, style, disabled }) {
  return (
    <button
      style={{
        backgroundColor: "hsl(119, 72%, 35%)",
        border: "none",
        color: "white",
        padding: "5px 8px",
        borderRadius: 5,
        ...style,
      }}
      onClick={function (e) {
        e.stopPropagation();
        onClick();
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
