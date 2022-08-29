import { Wrapper } from './styled'
import { HiPlus } from 'react-icons/hi'

type Props = {
  onClick(): void
}

export function AddButton({ onClick }: Props) {
  return (
    <Wrapper onClick={onClick}>
      <HiPlus fill="#fff" size="20" />
    </Wrapper>
  )
}
