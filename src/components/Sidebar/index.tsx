import { useLocation } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { VscFiles } from 'react-icons/vsc'
import { ImInfo } from 'react-icons/im'
import { Item, ItemLink, Wrapper } from './styleds'
import { useSidebarContext } from '../../contexts/sidebarContext'
import { useWindowSize } from '../../hooks/useWindowSize'
import { ROUTES } from '../../constants/routes'

export const Sidebar = () => {
  const { sidebarStatus } = useSidebarContext()
  const { windowSize } = useWindowSize()
  const location = useLocation()

  return (
    <Wrapper
      status={sidebarStatus}
      smarthphone={windowSize.isDeviceSmarthphone}
    >
      <ItemLink
        to={ROUTES.homePath}
        status={sidebarStatus}
        active={location.pathname === ROUTES.homePath}
        smarthphone={windowSize.isDeviceSmarthphone}
      >
        <p>Início</p>
        <span>
          <AiFillHome size="100%" />
        </span>
      </ItemLink>
      <ItemLink
        to={ROUTES.docsPath}
        status={sidebarStatus}
        active={location.pathname === ROUTES.docsPath}
        smarthphone={windowSize.isDeviceSmarthphone}
      >
        <p>Meus Documentos</p>
        <span>
          <VscFiles size="100%" />
        </span>
      </ItemLink>
      <Item status={sidebarStatus} smarthphone={windowSize.isDeviceSmarthphone}>
        <p>Sobre</p>
        <span>
          <ImInfo size="100%" />
        </span>
      </Item>
    </Wrapper>
  )
}
