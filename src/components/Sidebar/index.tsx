import { Wrapper } from './styleds'
import { useSidebarContext } from '../../contexts/sidebar'

export const Sidebar = () => {
  const { sidebarSize } = useSidebarContext()

  return <Wrapper size={sidebarSize}></Wrapper>
}
