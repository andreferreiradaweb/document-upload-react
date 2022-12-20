import { SidebarProvider } from './sidebarContext'
import { FormDocumentProvider } from './formDocumentContext'
import { AppContextsProps } from './types'

export const AppContexts = ({ children }: AppContextsProps) => (
  <SidebarProvider>
    <FormDocumentProvider>{children}</FormDocumentProvider>
  </SidebarProvider>
)
