import { IconWrapper, InputElement, Wrapper } from './styled'
import { BiEdit } from 'react-icons/bi'
import { InputProps } from './types'

export function Input({
  label,
  onChange,
  style,
  disabled,
  name,
  value,
}: InputProps) {
  return (
    <>
      <Wrapper style={style}>
        {label && <label htmlFor="">{label}</label>}
        <InputElement
          disabled={disabled}
          name={name}
          onChange={onChange}
          value={value}
        />
        <IconWrapper>
          <BiEdit size="22" fill="var(--blue-dark)" />
        </IconWrapper>
      </Wrapper>
    </>
  )
}
