import { ReactNode } from 'react'
import { SidebarProvider } from './sidebar'

interface AppContextsProps {
  children: ReactNode
}

export const AppContexts = ({ children }: AppContextsProps) => (
  <SidebarProvider>{children}</SidebarProvider>
)
