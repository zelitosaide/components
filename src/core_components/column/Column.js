export const Column = ({ children, ...props }) => {
  return (
    <div {...props} style={{ ...column, ...props.style }}>
      {children}
    </div>
  )
}

const column = {
  float: 'left',
  boxSizing: 'border-box'
}
