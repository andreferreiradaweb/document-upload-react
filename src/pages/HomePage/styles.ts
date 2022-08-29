import styled from 'styled-components'
import { colors } from '../../theme'

export const Container = styled.div`
  max-width: 900px;
  height: 100vh;
  padding: 0 15px;
  margin: 0 auto;
`

export const Wrapper = styled.div`
  max-width: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const WrapperDataTable = styled.div`
  min-height: 400px;
  width: 100%;
`

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
  align-self: flex-start;
  font-family: Montserrat, sans-serif;
`

export const MyButton = styled.button`
  background-color: ${colors.primary.ligther};
  color: ${colors.primary.medium};
  padding: 5px 7px;
  padding-bottom: 2px;
  font-weight: 700;
  border-radius: 4px;
  border: 2px solid ${colors.primary.medium};

  &:hover {
    filter: brightness(0.9);
  }
`

export const ModalContent = styled.div`
  padding: 15px;
  display: flex;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  h2 {
    margin-bottom: 10px;
    align-self: center;
  }

  form {
    width: 100%;
  }

  .closeButton {
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    background-color: ${colors.neutral.dark};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    border-radius: 50%;
  }

  .hr {
    height: 1px;
    background-color: ${colors.neutral.medium};
    width: 100%;
  }
`

export const customStyleModal = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.50)',
  },
  content: {
    maxWidth: '650px',
    height: '580px',
    margin: 'auto',
  },
}

export const styles = {
  rows: {
    style: {
      color: colors.primary.darker,
      fontWeight: '500',
      fontFamily: 'Montserrat',
    },
  },
  headCells: {
    style: {
      color: colors.primary.darker,
      fontWeight: '800',
      fontFamily: 'Montserrat',
    },
  },
}
