import { useState } from 'react'
import { Input } from '../input/Input'

export const MultiForm = () => {
  const [state, setState] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  })

  const nextStep = () => {
    setState(prevState => ({ ...prevState, step: prevState.step + 1 }))
  }

  const prevStep = () => {
    setState(prevState => ({ ...prevState, step: prevState.step - 1 }))
  }

  const firstStep = () => {
    setState(prevState => ({ ...prevState, step: 1 }))
  }
  return (
    <>
      <Forms step={state.step} state={state} setState={setState} />
      <div>
        <Input>
          <button onClick={nextStep}>Next</button>
        </Input>
        <Input>
          <button onClick={prevStep}>Prev</button>
        </Input>
        <Input>
          <button onClick={firstStep}>First Step</button>
        </Input>
      </div>
    </>
  )
}


const Forms = ({ step, state, setState }) => {
  switch (step) {
    case 1: return (
      <>
        <Input label='First Name'>
          <input
            type='text'
            name='firstName'
            value={state.firstName}
            onChange={(e) => setState({ ...state, firstName: e.target.value })}
          />
        </Input>

        <Input label='Last Name'>
          <input
            type='text'
            name='lastName'
            value={state.lastName}
            onChange={(e) => setState({ ...state, lastName: e.target.value })}
          />
        </Input>

        <Input label='Email'>
          <input
            type='email'
            name='email'
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </Input>
      </>
    )

    case 2: return (
      <>
        <Input label='Occupation'>
          <input
            type='text'
            name='occupation'
            value={state.occupation}
            onChange={(e) => setState({ ...state, occupation: e.target.value })}
          />
        </Input>
        <Input label='City'>
          <input
            type='text'
            name='city'
            value={state.city}
            onChange={(e) => setState({ ...state, city: e.target.value })}
          />
        </Input>
        <Input label='Bio'>
          <input
            type='text'
            name='bio'
            value={state.bio}
            onChange={(e) => setState({ ...state, bio: e.target.value })}
          />
        </Input>
      </>
    )

    case 3: return (
      <div>
        <p><b>firstName:</b> {state.firstName}</p>
        <p><b>lastName:</b> {state.lastName}</p>
        <p><b>email:</b> {state.email}</p>
        <p><b>occupation:</b> {state.occupation}</p>
        <p><b>city:</b> {state.city}</p>
        <p><b>bio:</b> {state.bio}</p>
      </div>
    )

    case 4: return (
      <div>
        <p>Thank you for your submission!</p>
        <p>You will get an email with further instructions</p>
      </div>
    )

    default: break
  }
}