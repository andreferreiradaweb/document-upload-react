import styled, { css } from 'styled-components'

type ButtonProps = {
  secondary: boolean
}

export const ButtonElement = styled.button<ButtonProps>`
  ${({ secondary }) =>
    secondary
      ? css`
          background-color: transparent;
          border: 1px solid var(--blue-light);
          color: var(--blue-light);
        `
      : css`
          background-color: var(--blue-light);
          border: none;
          color: var(--white);
        `}
  padding: 7px 10px;
  width: 200px;
  border-radius: 8px;
  position: relative;

  @media screen and (max-width: 576px) {
    width: 100%;
  }

  &:hover {
    filter: brightness(0.9);
  }
`
