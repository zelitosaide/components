import styles from './Row.module.css'

export const Row = ({ children, ...props}) => {
  return (
    <div {...props} style={{ ...props.style}} className={styles.row}>
      {children}
    </div>
  )
}