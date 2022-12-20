import { ButtonElement } from './styleds'
import { ButtonProps } from './types'

export const Button = ({ children, onClickButton, type }: ButtonProps) => {
  return (
    <ButtonElement onClick={onClickButton} type={type}>
      {children}
    </ButtonElement>
  )
}
