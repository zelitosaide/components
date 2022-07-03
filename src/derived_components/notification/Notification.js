import { Alert } from '../../core_components/alert/Alert'
import { Column } from '../../core_components/column/Column'
import { CheckCircleIcon } from '../../core_components/icons/icons'
import { Row } from '../../core_components/row/Row'
import { Section } from '../../core_components/section/Section'

export const Notification = ({ visible, setVisible, type, text, title }) => {
  return (
    <Alert setVisible={setVisible} visible={visible}>
      <Section
        style={{
          background: 'var(--main-white-color)',
          borderRadius: 'var(--border-radius-large)',
          width: '21rem'
        }}
      >
        <Row>
          <Column style={{ width: '1.2rem' }}>
            <CheckCircleIcon style={{ width: '1.2rem', color: '#07ab80' }} />
          </Column>
          <Column style={{ width: 'calc(100% - 1.2rem)' }}>
            <div style={{ paddingLeft: '0.9rem' }}>
              <h3 style={{
                margin: 0,
                fontSize: 'var(--main-font-size)',
                fontWeight: 'var(--bold-font-weight)',
                color: 'var(--bold-font-color)'
              }}
              >{title}</h3>
              <p style={{
                margin: 0,
                fontSize: 'var(--main-font-size)',
                color: 'var(--main-font-color)',
                paddingTop: '0.5rem'
              }}>{text}</p>
            </div>
          </Column>
        </Row>
      </Section>
    </Alert>
  )
}