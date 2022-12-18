import { Wrapper, Image, IconWrapper, ImageWrapper, IconLink } from './styleds'
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
      <ImageWrapper>
        <Image src={ImageLogo} />
      </ImageWrapper>
    </Wrapper>
  )
}
