import styled, { css } from 'styled-components'
import { ItemProps, WrapperProps } from './types'
import { SidebarStatusEnum } from '../../contexts/sidebarContext/types'
import { Link } from 'react-router-dom'

const variantsWidth = {
  hidden: css`
    width: 1px;
  `,
  closed: css`
    width: 4.75rem;
  `,
  opened: css`
    width: 20rem;
  `,
}

const getCssColor = (active: boolean) => {
  return active
    ? css`
        color: var(--blue-light);
        font-weight: 600;
      `
    : css`
        color: var(--gray);
      `
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  ${({ status }) => variantsWidth[SidebarStatusEnum[status]]};
  position: ${({ smarthphone }) => (smarthphone ? 'absolute' : 'static')};
  min-height: 100%;
  z-index: 1;
  background: var(--white);
  transition: width 0.5s ease;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.2);
  flex-direction: column;
`

export const ItemLink = styled(Link)<ItemProps>`
  justify-content: ${({ status }) =>
    status === SidebarStatusEnum.opened ? 'space-between' : 'center'};
  display: flex;
  transition: 0.5s ease;
  align-items: center;
  height: 3.75rem;
  width: 100%;
  padding: 0 25px;
  box-shadow: ${({ status }) =>
    status === 'hidden' ? 'none' : '0px 2px 4px rgba(0, 0, 0, 0.2)'};

  p {
    display: ${({ status }) => (status === 'opened' ? 'block' : 'none')};
    font-size: 1rem;
    transition: 0.5s ease;
    white-space: nowrap;
    ${({ active }) => getCssColor(!!active)};
  }

  span {
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ active }) => getCssColor(!!active)};
  }
`

export const Item = styled.a<ItemProps>`
  justify-content: ${({ status }) =>
    status === SidebarStatusEnum.opened ? 'space-between' : 'center'};
  display: flex;
  transition: 0.5s ease;
  align-items: center;
  height: 3.75rem;
  width: 100%;
  padding: 0 25px;
  box-shadow: ${({ status }) =>
    status === 'hidden' ? 'none' : '0px 2px 4px rgba(0, 0, 0, 0.2)'};

  p {
    display: ${({ status }) => (status === 'opened' ? 'block' : 'none')};
    font-size: 1rem;
    transition: 0.5s ease;
    white-space: nowrap;
    color: var(--gray);
  }

  span {
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--blue-extra-light);
  }
`
