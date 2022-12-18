import { createContext, useContext, useEffect, useState } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import {
  SidebarContextTypes,
  SidebarProviderProps,
  SidebarStatusEnum,
} from './types'

const SidebarContext = createContext({} as SidebarContextTypes)

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [sidebarStatus, setSidebarSize] = useState(SidebarStatusEnum.closed)
  const { windowSize } = useWindowSize()

  useEffect(() => {
    if (windowSize.isDeviceSmarthphone)
      return setSidebarSize(SidebarStatusEnum.hidden)

    setSidebarSize(SidebarStatusEnum.closed)
  }, [windowSize])

  const handleSidebarSize = () => {
    if (windowSize.isDeviceSmarthphone) {
      setSidebarSize(
        sidebarStatus === SidebarStatusEnum.opened
          ? SidebarStatusEnum.hidden
          : SidebarStatusEnum.opened
      )
      return
    }

    setSidebarSize(
      sidebarStatus === SidebarStatusEnum.opened
        ? SidebarStatusEnum.closed
        : SidebarStatusEnum.opened
    )
  }

  const contextValues = {
    sidebarStatus,
    handleSidebarSize,
  }

  return (
    <SidebarContext.Provider value={contextValues}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useModalContext must be used with a ModalProvider')
  }
  return context
}
