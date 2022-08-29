import styled, { css } from 'styled-components'
import { colors } from '../../theme'

interface MyButtonTypes {
  outlined?: boolean
  customSize?: string
  customColor?: string
  customStyles?: string
  small?: boolean
}

export const MyButton = styled.button<MyButtonTypes>`
  ${({
    disabled,
    outlined,
    small,
    customSize,
    customColor,
    customStyles,
  }) => css`
    background-color: ${disabled
      ? colors.primary.ligther
      : colors.primary.medium};
    cursor: ${disabled ? 'default' : 'pointer'};
    border-radius: 4px;
    border: ${outlined ? `2px solid ${colors.primary.medium}` : 'none'};
    background-color: ${outlined
      ? colors.primary.ligther
      : colors.primary.medium};
    background-color: ${(!outlined && customColor) ?? colors.primary.medium};
    min-height: ${small ? '40px' : '56px'};
    max-height: 520px;
    padding: 0 5px;
    font-weight: 600;
    font-family: Montserrat, sans-serif;
    align-self: flex-end;
    margin-top: 20px;
    width: ${customSize ?? '100%'};
    height: auto;
    color: ${outlined ? colors.primary.medium : '#fff'};
    ${customStyles ?? ''}

    &:hover {
      filter: ${disabled ? 'none !important' : 'brightness(0.9)'};
    }
  `}
`
