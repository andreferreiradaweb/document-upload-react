import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

type InputTypes = 'input' | 'textarea'

export type InputProps = {
  label?: string
  style?: React.CSSProperties
  disabled?: boolean
  name?: string
  value: string
  maxLength?: number
  type?: HTMLInputTypeAttribute
  onChange?: ChangeEventHandler<HTMLInputElement>
}
