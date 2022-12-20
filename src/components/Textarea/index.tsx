import { IconWrapper, InputElement, Wrapper } from './styled'
import { HiCheck } from 'react-icons/hi'
import { InputProps } from './types'

export function Textarea({
  label,
  onChange,
  style,
  disabled,
  name,
  value,
  maxLength,
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
          maxLength={maxLength}
        />
        <IconWrapper>
          <HiCheck size="22" fill={value ? 'green' : 'var(--gray)'} />
        </IconWrapper>
      </Wrapper>
    </>
  )
}
