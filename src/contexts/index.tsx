import { SidebarProvider } from './sidebarContext'
import { AppContextsProps } from './types'

export const AppContexts = ({ children }: AppContextsProps) => (
  <SidebarProvider>{children}</SidebarProvider>
)
