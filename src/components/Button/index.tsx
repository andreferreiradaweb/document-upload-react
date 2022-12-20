import { ButtonElement } from './styleds'
import { ButtonProps } from './types'

export const Button = ({
  children,
  onClickButton,
  type,
  secondary = false,
}: ButtonProps) => {
  return (
    <ButtonElement secondary={secondary} onClick={onClickButton} type={type}>
      {children}
    </ButtonElement>
  )
}
