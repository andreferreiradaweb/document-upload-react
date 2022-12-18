import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background: var(--gray-bg);
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: calc(100vh - 5rem);
`

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  padding: 20px;
`
