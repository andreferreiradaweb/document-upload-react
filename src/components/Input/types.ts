import { ChangeEventHandler } from 'react'

export type InputProps = {
  label?: string
  style?: React.CSSProperties
  disabled?: boolean
  name?: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}
