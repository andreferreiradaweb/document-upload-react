import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;

  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    gap: 40px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45%;

  @media screen and (max-width: 900px) {
    max-width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ImageWrapper = styled.div`
  width: 400px;

  @media screen and (max-width: 900px) {
    width: 300px;
  }
`

export const ImageElement = styled.img`
  width: 100%;
  height: 100%;
`

export const TitleElement = styled.h1`
  font-size: 2rem;
  color: var(--gray-text);
  margin-top: 0;

  @media screen and (max-width: 900px) {
    text-align: center;
  }
`

export const Button = styled.button`
  background-color: var(--blue-light);
  border: none;
  padding: 7px 10px;
  width: 200px;
  border-radius: 8px;
  color: var(--white);
`

export const TextElement = styled.div`
  @media screen and (max-width: 900px) {
    text-align: center;
    max-width: 400px;
  }
`

export const ListElement = styled.ul`
  margin-left: -25px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (max-width: 900px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const ItemElement = styled.li`
  margin-left: 0;
`
