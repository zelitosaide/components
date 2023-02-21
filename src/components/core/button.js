export function Button({ children, onClick, style, disabled }) {
  return (
    <button
      style={{
        ...style,
        backgroundColor: "hsl(119, 72%, 35%)",
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
