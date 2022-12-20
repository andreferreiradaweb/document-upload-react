import { ReactNode } from 'react'

type ButtonTypes = 'submit' | 'button' | 'reset'

export interface ButtonProps {
  children: ReactNode
  onClickButton?(): void
  type: ButtonTypes
}
