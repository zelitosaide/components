import { Input } from '../../core_components/input/Input'

export const IconButton = ({ children, ...props }) => {
  return (
    <Input style={{ ...props.style }}>
      <button
        onClick={props.onClick}
        style={{ 
          padding: 2, 
          width: '1.4rem',
          height: '1.4rem'
        }}
      >
        {children}
      </button>
    </Input>
  )
}