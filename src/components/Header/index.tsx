import { Wrapper, IconWrapper, IconLink, LogoWrapper, Logo } from './styleds'
import { HiMenu } from 'react-icons/hi'
import ImageLogo from '../../assets/logo.png'
import { useSidebarContext } from '../../contexts/sidebarContext'

export const Header = () => {
  const { handleSidebarSize } = useSidebarContext()

  return (
    <Wrapper>
      <IconLink onClick={handleSidebarSize}>
        <IconWrapper color="var(--white)">
          <HiMenu size="100%" />
        </IconWrapper>
      </IconLink>
      <LogoWrapper>
        <Logo src={ImageLogo} />
      </LogoWrapper>
    </Wrapper>
  )
}
