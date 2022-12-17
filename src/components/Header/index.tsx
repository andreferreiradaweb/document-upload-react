import { ImageWrapper, IconWrapper, Wrapper, Image } from './styleds'
import { HiMenu } from 'react-icons/hi'
import ImageLogo from '../../assets/logo.png'
import { useSidebarContext } from '../../contexts/sidebar'

export const Header = () => {
  const { handleSidebarSize } = useSidebarContext()

  return (
    <Wrapper>
      <IconWrapper onClick={handleSidebarSize}>
        <HiMenu size="100%" />
      </IconWrapper>
      <ImageWrapper>
        <Image src={ImageLogo} />
      </ImageWrapper>
    </Wrapper>
  )
}
