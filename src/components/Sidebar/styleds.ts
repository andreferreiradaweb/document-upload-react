import styled, { css } from 'styled-components'
import { VariantsType } from '../../contexts/sidebar'

const variantsWidth = {
  small: css`
    width: 4.813rem;
  `,
  large: css`
    width: 26.875rem;
  `,
}

type WrapperProps = {
  size: keyof typeof VariantsType
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ size }) => variantsWidth[VariantsType[size]]};
  min-height: 100%;
  background: #000;
  transition: width 0.5s;
`
