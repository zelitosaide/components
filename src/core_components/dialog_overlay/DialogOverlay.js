import { AnimatePresence, motion } from 'framer-motion'
import { TimesIcon } from '../icons/icons'
import { Input } from '../input/Input'

export const DialogOverlay = ({ children, visible, setVisible, backdrop, ...props }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          style={dialogOverlay}
          onClick={() => !!backdrop && setVisible(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            {...props}
            style={{ ...dialogContent, ...props.style }}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: 10 }}
            transition={{ type: 'tween' }}
          >
            <Input
              style={{
                display: 'inline-block',
                position: 'absolute',
                right: '0.3rem',
                top: '0.3rem',
                borderRadius: 'var(--border-radius-large)',
                '--bg-color': 'rgb(255, 255, 255)',
                '--bg-hover': 'var(--background-hover-color)',
                '--bg-active': 'var(--background-active-color)',
                '--outline-color': 'rgb(255, 255, 255)',
              }}
            >
              <button
                style={{
                  padding: 1,
                  width: '1.4rem',
                  height: '1.4rem',
                  color: 'var(--main-stroke-svg-color)'
                }}
                onClick={() => setVisible(false)}
              >
                <TimesIcon />
              </button>
            </Input>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


const dialogOverlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'auto',
  background: 'rgba(0, 0, 0, 0.33)',
}

const dialogContent = {
  position: 'relative',
  background: 'white',
  width: '28rem',
  margin: '100px auto 0',
  borderRadius: 'var(--border-radius-large)',
  minHeight: '10rem',
}
