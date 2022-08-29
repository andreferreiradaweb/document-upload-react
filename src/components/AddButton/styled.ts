import styled from 'styled-components'
import { colors } from '../../theme'

export const Wrapper = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.primary.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 12px 25px rgba(50, 0, 90, 0.4);
  border: none;
  margin-top: 7px;
  align-self: flex-end;

  :hover {
    box-shadow: 0px 0px 10px rgba(50, 0, 90, 0.4);
  }
`
