import styled from 'styled-components'
import { colors } from '../../theme'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  label {
    font-weight: 600;
    font-size: 14px;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 4px;
  padding: 10px;
  outline: none;
  position: relative;
  margin-top: 5px;
  background-color: ${colors.neutral.ligth};
`

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  cursor: default;
`
