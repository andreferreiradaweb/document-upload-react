import { useLocation } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { VscFiles } from 'react-icons/vsc'
import { ImInfo } from 'react-icons/im'
import { Item, ItemLink, Wrapper } from './styleds'
import { useSidebarContext } from '../../contexts/sidebarContext'
import { useWindowSize } from '../../hooks/useWindowSize'
import { ROUTES } from '../../constants/routes'
import { useState } from 'react'
import { ModalAbout } from '../ModalAbout'

export const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { sidebarStatus } = useSidebarContext()
  const { windowSize } = useWindowSize()
  const location = useLocation()

  const handleModal = () => {
    setIsModalOpen((oldValue) => !oldValue)
  }

  return (
    <>
      <ModalAbout isOpen={isModalOpen} onRequestClose={handleModal} />
      <Wrapper
        status={sidebarStatus}
        smarthphone={windowSize.isDeviceSmarthphone}
      >
        <ItemLink
          to={ROUTES.home.path}
          status={sidebarStatus}
          active={location.pathname === ROUTES.home.path}
          smarthphone={windowSize.isDeviceSmarthphone}
        >
          <p>Início</p>
          <span>
            <AiFillHome size="100%" />
          </span>
        </ItemLink>
        <ItemLink
          to={ROUTES.docs.path}
          status={sidebarStatus}
          active={location.pathname === ROUTES.docs.path}
          smarthphone={windowSize.isDeviceSmarthphone}
        >
          <p>Meus Documentos</p>
          <span>
            <VscFiles size="100%" />
          </span>
        </ItemLink>
        <Item
          onClick={handleModal}
          status={sidebarStatus}
          smarthphone={windowSize.isDeviceSmarthphone}
        >
          <p>Sobre</p>
          <span>
            <ImInfo size="100%" />
          </span>
        </Item>
      </Wrapper>
    </>
  )
}