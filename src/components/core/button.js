export function Button({ children, onClick, style }) {
  return (
    <button
      style={{ ...style }}
      onClick={function (e) {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}
