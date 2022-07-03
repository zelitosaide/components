export const Fieldset = ({ children, legend, legendStyle, error, ...props }) => {
  return (
    <>
      <fieldset {...props} style={{ ...fieldset, ...props.style }}>
        <legend style={{ ...__legend, ...legendStyle }}>{legend}</legend>
        {children}
      </fieldset>
      <div style={{}}>{error}</div>
    </>
  )
}

const fieldset = {
  border: '1px solid var(--main-border-color)',
  // boxShadow: 'var(--box-shadow)',
  background: 'white',
  borderRadius: '0.3rem',
  margin: '0.5rem'
}

const __legend = {
  fontSize: '0.8rem',
  fontWeight: 900,
  color: '#555',
  padding: '0.5rem',
  background: '#E9E9ED'
}