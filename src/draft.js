// import { useState } from 'react'
// import { Fieldset } from './core_components/fieldset/Fieldset'
// import { Input } from './core_components/input/Input'
// import { MultiForm } from './core_components/multi_step_form/MultiForm'
// import { Section } from './core_components/section/Section'
// import { Modal } from './derived_components/modal/Modal'
// import { Notification } from './derived_components/notification/Notification'
// import { Buttons } from './group_components/Buttons'
// import { Inputs } from './group_components/Inputs'

// const App = () => {
//   const [showModal, setShowModal] = useState(false)
//   const [showNotification, setShowNotification] = useState(false)

//   const openAndAutoClose = () => {
//     setShowNotification(true)
//     setTimeout(() => {
//       setShowNotification(false)
//     }, 60000)
//   }

//   return (
//     <div>
//       <Section>
//         <Section style={{ width: 500, background: '#fff', margin: 'auto', minHeight: '100vh' }}>
//           <Buttons />

//           <Fieldset legend='Modal'>
//             <Input>
//               <button onClick={() => setShowModal(true)}>Open Modal</button>
//             </Input>
//             <Modal
//               visible={showModal}
//               setVisible={setShowModal}
//               backdrop
//               title='Deactivate account'
//               text='Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.'
//             />
//           </Fieldset>

//           <Fieldset legend='Notification'>
//             <Input>
//               <button onClick={openAndAutoClose}>Show Notification</button>
//             </Input>

//             <Notification
//               visible={showNotification}
//               setVisible={setShowNotification}
//               title='Successfully saved!'
//               text='Anyone with a link can now view this file'
//             />
//           </Fieldset>

//           <Inputs />

//           <MultiForm />
//         </Section>
//       </Section>
//     </div>
//   )
// }

// export default App
