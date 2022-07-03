import { Fieldset } from '../core_components/fieldset/Fieldset'
import { TimesIcon } from '../core_components/icons/icons'
import { Input } from '../core_components/input/Input'

export const Buttons = () => {
  return (
    <Fieldset legend='Buttons'>
      <Input style={{ display: 'inline-block' }}>
        <button>Click me</button>
      </Input>

      <Input style={{ display: 'inline-block' }}>
        <button
          style={{
            background: 'var(--main-white-color)',
            color: 'var(--main-font-color)',
            border: '1px solid var(--main-border-color)',
            fontWeight: 'var(--bold-font-weight)'
          }}
        >
          Cancel
        </button>
      </Input>

      <Input
        style={{
          '--bg-color': 'rgb(20, 111, 18)',
          '--bg-hover': 'rgb(27, 154, 25)',
          '--bg-active': 'rgb(27, 154, 25)',
          '--outline-color': 'rgb(35, 197, 32)',
          display: 'inline-block'
        }}
      >
        <button>Click me</button>
      </Input>

      <Input
        style={{
          display: 'inline-block',
          '--bg-color': 'rgb(239, 71, 111)',
          '--bg-hover': 'rgb(237, 44, 89)',
          '--bg-active': 'rgb(237, 44, 89)',
          '--outline-color': 'rgb(245, 138, 163)'
        }}
      >
        <button>Click me</button>
      </Input>

      <Input style={{ display: 'inline-block' }}>
        <button style={{ padding: 0, width: '1.4rem', height: '1.4rem' }}>
          <TimesIcon />
        </button>
      </Input>
    </Fieldset>
  )
}