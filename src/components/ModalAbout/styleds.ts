import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 40px;

  @media screen and (max-width: 420px) {
    padding: 0px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
`

export const Content = styled.div`
  max-width: 100%;
`

export const TextElement = styled.p`
  font-size: 0.8rem;
`

export const StrongElement = styled.strong`
  font-weight: 600;
`

export const LogoWrapper = styled.div`
  width: 8.75rem;
  height: 3.25rem;
  margin-bottom: 40px;
`

export const Logo = styled.img`
  width: 100%;
`
