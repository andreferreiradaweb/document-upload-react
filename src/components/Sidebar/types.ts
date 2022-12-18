import { SidebarStatusEnum } from '../../contexts/sidebarContext/types'

export type WrapperProps = {
  status: keyof typeof SidebarStatusEnum
  smarthphone: boolean
}

export type ItemProps = {
  status: keyof typeof SidebarStatusEnum
  active?: boolean
  smarthphone: boolean
}
