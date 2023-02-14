export function Button({ children, onClick }) {
  return (
    <button
      onClick={function (e) {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}
