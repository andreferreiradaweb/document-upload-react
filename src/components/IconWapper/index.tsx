import { ReactNode } from 'react'
import { Wrapper } from './styleds'

interface IconProps {
  children: ReactNode
}

export const IconWrapper = ({ children }: IconProps) => {
  return <Wrapper>{children}</Wrapper>
}
