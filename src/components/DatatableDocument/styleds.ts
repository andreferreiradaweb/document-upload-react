import styled from 'styled-components'

export const WrapperDataTable = styled.div`
  min-height: 400px;
  width: 100%;
`

export const DatatableButton = styled.button`
  background-color: var(--blue-light);
  color: var(--white);
  padding: 5px 7px;
  padding-bottom: 2px;
  font-weight: 700;
  border-radius: 4px;
  border: 2px solid var(--blue-dark);

  &:hover {
    filter: brightness(0.9);
  }
`
