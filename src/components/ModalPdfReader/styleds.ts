import styled from 'styled-components'

export const ModalWrapper = styled.div`
  padding: 15px;
  display: flex;
  width: 100%;
  min-height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    width: 100%;
    height: 100%;
  }
`

export const Title = styled.h2`
  margin-bottom: 10px;
  align-self: center;
  color: var(--gray-text);
`

export const Paragraph = styled.p``

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
`

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
`
