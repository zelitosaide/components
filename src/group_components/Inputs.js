import { useForm } from 'react-hook-form'

import { Column } from '../core_components/column/Column'
import { Fieldset } from '../core_components/fieldset/Fieldset'
import { Input } from '../core_components/input/Input'
import { Row } from '../core_components/row/Row'

export const Inputs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      birthDate: '',
      height: ''
    }
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Fieldset legend='Inputs'>
        <Row>
          <Column style={{ width: '50%' }}>
            <Input error={errors.firstName?.message} label='First Name'>
              <input
                required
                type='text'
                id='First Name'
                {...register('firstName', {
                  required: 'This field is required'
                })}
              />
            </Input>
          </Column>
          <Column style={{ width: '50%' }}>
            <Input error={errors.lastName?.message} label='Last Name'>
              <input
                required
                type='text'
                id='Last Name'
                {...register('lastName', {
                  required: 'This field is required'
                })}
              />
            </Input>
          </Column>
        </Row>

        <Row>
          <Column style={{ width: '50%' }}>
            <Input label='Birth Date'>
              <input type='date' {...register('birthDate')} />
            </Input>
          </Column>
          <Column style={{ width: '50%' }}>
            <Input label='Height'>
              <input type='number' {...register('height')} />
            </Input>
          </Column>
        </Row>

        <Input label='Email'>
          <input
            type='email'
            id='Email'
            {...register('email')}
          />
        </Input>

        <Input>
          <button type='submit'>Submit</button>
        </Input>
      </Fieldset>
    </form>
  )
}