import { ReactNode } from 'react'

export enum SidebarStatusEnum {
  closed = 'closed',
  opened = 'opened',
  hidden = 'hidden',
}

export type SidebarProviderProps = {
  children: ReactNode
}

export type SidebarContextTypes = {
  sidebarStatus: SidebarStatusEnum
  handleSidebarSize(): void
}
