import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

export type InputProps = {
  label?: string
  style?: React.CSSProperties
  disabled?: boolean
  name?: string
  value: string
  maxLength?: number
  onChange?: ChangeEventHandler<HTMLElement>
}
