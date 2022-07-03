import { Input } from '../../core_components/input/Input'

export const Outlined = ({ text, ...props }) => {
  return (
    <Input style={{ ...props.style }}>
      <button
        onClick={props.onClick}
        style={{
          background: 'var(--main-white-color)',
          color: 'var(--main-font-color)',
          border: '1px solid var(--main-border-color)',
          fontWeight: 'var(--bold-font-weight)'
        }}
      >
        {text}
      </button>
    </Input >
  )
}