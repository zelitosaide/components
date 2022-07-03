import { AnimatePresence, motion } from 'framer-motion'
import { TimesIcon } from '../icons/icons'
import { Input } from '../input/Input'

export const Alert = ({ children, visible, setVisible, ...props }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          {...props}
          style={{
            ...alert,
            top: props.style?.top === undefined && props.style?.bottom === undefined ? 0 : props.style?.top,
            right: props.style?.right === undefined && props.style?.left === undefined ? 0 : props.style?.right,
            left: props.style?.left,
            bottom: props.style?.bottom,
            ...props.style
          }}
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ type: 'tween', duration: 0.5 }}
        >
          <Input
            style={{
              display: 'inline-block',
              position: 'absolute',
              right: '0.4rem',
              top: '0.4rem',
              borderRadius: 'var(--border-radius-large)',
              '--bg-color': 'rgb(255, 255, 255)',
              '--bg-hover': 'var(--background-hover-color)',
              '--bg-active': 'var(--background-active-color)',
              '--outline-color': 'rgb(255, 255, 255)',
            }}
          >
            <button
              style={{
                padding: 0,
                width: '1.1rem',
                height: '1.1rem',
                color: 'var(--main-stroke-svg-color)'
              }}
              onClick={() => setVisible(false)}
            >
              <TimesIcon />
            </button>
          </Input>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}


const alert = {
  position: 'fixed',
  zIndex: 2000,
  minWidth: '20rem',
  minHeight: '4.6rem',
  margin: '1rem',
  borderRadius: 'var(--border-radius-large)',
  background: 'var(--main-white-color)',
}