export function Button({ children, onClick, style, disabled }) {
  return (
    <button
      style={{ ...style }}
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
