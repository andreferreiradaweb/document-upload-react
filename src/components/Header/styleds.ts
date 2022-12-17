import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 0 25px;
  width: 100vw;
  height: 5rem;
  background: linear-gradient(90deg, #000a48 0%, #004489 100%);
  align-items: center;
`

export const ImageWrapper = styled.div`
  width: 8.75rem;
  height: 3.25rem;
`

export const IconWrapper = styled.a`
  width: 1.375rem;
  height: 1.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-right: 40px;

  &:hover {
    filter: brightness(0.8);
  }
`

export const Image = styled.img`
  width: 100%;
`
