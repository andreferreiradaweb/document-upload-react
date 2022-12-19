import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 0 25px;
  width: 100vw;
  height: 5rem;
  background: linear-gradient(
    90deg,
    var(--blue-dark) 0%,
    var(--blue-light) 100%
  );
  align-items: center;
`

export const LogoWrapper = styled.div`
  width: 8.75rem;
  height: 3.25rem;
  margin-left: 40px;

  @media screen and (max-width: 576px) {
    margin-left: 20px;
  }
`

export const Logo = styled.img`
  width: 100%;
`

export const IconLink = styled.a``

export const IconWrapper = styled.div`
  height: 1.375rem;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  &:hover {
    filter: brightness(0.8);
  }
`
