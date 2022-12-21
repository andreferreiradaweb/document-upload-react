import { useLocation } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { VscFiles } from 'react-icons/vsc'
import { ImInfo } from 'react-icons/im'
import { Item, ItemLink, Wrapper } from './styleds'
import { useSidebarContext } from '../../contexts/sidebarContext'
import { ROUTES } from '../../constants/routes'
import { useState } from 'react'
import { ModalAbout } from '../ModalAbout'
import { DEVICES_WIDTH } from '../../constants/devicesWidth'

export const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { sidebarStatus } = useSidebarContext()
  const location = useLocation()

  console.log(window.innerWidth)
  const handleModal = () => {
    setIsModalOpen((oldValue) => !oldValue)
  }

  return (
    <>
      <ModalAbout isOpen={isModalOpen} onRequestClose={handleModal} />
      <Wrapper
        status={sidebarStatus}
        smarthphone={window.innerWidth <= DEVICES_WIDTH.smarthphone}
      >
        <ItemLink
          to={ROUTES.home.path}
          status={sidebarStatus}
          active={location.pathname === ROUTES.home.path}
          smarthphone={window.innerWidth <= DEVICES_WIDTH.smarthphone}
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
          smarthphone={window.innerWidth <= DEVICES_WIDTH.smarthphone}
        >
          <p>Meus Documentos</p>
          <span>
            <VscFiles size="100%" />
          </span>
        </ItemLink>
        <Item
          onClick={handleModal}
          status={sidebarStatus}
          smarthphone={window.innerWidth <= DEVICES_WIDTH.smarthphone}
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
