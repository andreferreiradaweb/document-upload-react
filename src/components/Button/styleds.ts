import styled from 'styled-components'

export const ButtonElement = styled.button`
  background-color: var(--blue-light);
  border: none;
  padding: 7px 10px;
  width: 200px;
  border-radius: 8px;
  color: var(--white);

  &:hover {
    filter: brightness(0.9);
  }
`
