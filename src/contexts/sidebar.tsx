import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

export enum VariantsType {
  small = 'small',
  large = 'large',
}

interface SidebarProviderProps {
  children: ReactNode
}

type SidebarContextTypes = {
  sidebarSize: VariantsType
  handleSidebarSize(): void
}

const SidebarContext = createContext({} as SidebarContextTypes)

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [sidebarSize, setSidebarSize] = useState(VariantsType.small)

  const handleSidebarSize = () => {
    setSidebarSize(
      sidebarSize === VariantsType.large
        ? VariantsType.small
        : VariantsType.large
    )
  }

  const contextValues = {
    sidebarSize,
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
