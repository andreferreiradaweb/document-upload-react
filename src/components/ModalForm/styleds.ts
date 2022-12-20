import styled from 'styled-components'

export const ModalContent = styled.div`
  padding: 15px;
  display: flex;
  width: 100%;
  min-height: 80%;
  padding: 20px;
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
`

export const WrapperInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`

export const InputDocument = styled.input`
  display: none;
`

export const WrapperButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
`