import { IconWrapper, InputElement, Wrapper } from './styled'
import { HiCheck } from 'react-icons/hi'
import { InputProps } from './types'

export function Input({
  label,
  onChange,
  style,
  disabled,
  name,
  value,
  maxLength,
  type,
}: InputProps) {
  return (
    <>
      <Wrapper style={style}>
        {label && <label htmlFor="">{label}</label>}
        <InputElement
          type={type}
          disabled={disabled}
          name={name}
          onChange={onChange}
          value={value}
          maxLength={maxLength}
        />
        <IconWrapper>
          <HiCheck size="22" fill={value ? 'green' : 'var(--gray)'} />
        </IconWrapper>
      </Wrapper>
    </>
  )
}
