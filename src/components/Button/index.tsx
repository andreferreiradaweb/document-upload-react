import { MyButton } from './styled'

type ButtonTypeProp = 'button' | 'submit' | 'reset' | undefined
interface IProps {
  title?: string
  disabled?: boolean
  onClick?: () => void
  outlined?: boolean
  customSize?: string
  customColor?: string
  customStyles?: string
  small?: boolean
  type?: ButtonTypeProp
}

export function Button({
  title,
  disabled,
  onClick,
  outlined,
  small,
  customSize,
  customColor,
  customStyles,
  type,
}: IProps) {
  return (
    <>
      {disabled ? (
        <MyButton disabled>{title}</MyButton>
      ) : (
        <MyButton
          small={small}
          customStyles={customStyles}
          customColor={customColor}
          customSize={customSize}
          outlined={outlined}
          onClick={onClick}
          type={type}
        >
          {title}
        </MyButton>
      )}
    </>
  )
}
