import { Section } from "./core_components/section/Section"

const App = () => {
  return (
    <div>
      <Section style={{ height: '100vh', background: '#fff' }}>
        <div style={{ width: 200, height: 200, boxShadow: 'var(--section-box-shadow)' }} />
      </Section>
    </div>
  )
}

export default App