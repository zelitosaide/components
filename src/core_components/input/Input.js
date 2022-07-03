import styles from './Input.module.css'

export const Input = ({ children, label, error, ...props }) => {
  const bgColor = props?.style?.['--bg-color'] || 'rgb(243, 114, 44)'
  const bgHover = props?.style?.['--bg-hover'] || 'rgb(241, 93, 14)'
  // const bgActive = props?.style?.['--bg-active'] || 'rgb(217, 84, 13)'
  const bgActive = props?.style?.['--bg-active'] || 'rgb(241, 93, 14)'
  const outlineColor = props?.style?.['--outline-color'] || 'rgb(245, 142, 86)'

  return (
    <div
      {...props}
      className={styles.input}
      style={{
        ...props.style,
        '--bg-color': bgColor,
        '--bg-hover': bgHover,
        '--bg-active': bgActive,
        '--outline-color': outlineColor
      }}
    >
      {!!label && (
        <label htmlFor={label} className={styles.label}>
          {label}
          {children?.props?.required && <span style={{ color: bgColor }}>&nbsp;*</span>}
        </label>
      )}
      {children}
      {!!error && <div className={styles.error}>{error}</div>}
    </div>
  )
}