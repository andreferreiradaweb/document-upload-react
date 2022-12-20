import { useState } from 'react'
import { InputValuesType } from '../components/ModalForm/types'

export const useForm = (
  callback: () => void,
  initialState: InputValuesType
) => {
  const [values, setValues] = useState(initialState)

  // onChange
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await callback() // triggering the callback
  }

  const onSetValues = (initialValues: InputValuesType) => {
    setValues(initialValues)
  }

  // return values
  return {
    onChange,
    onSubmit,
    values,
    onSetValues,
  }
}

// onSubmit
