import { Wrapper, Container, PageContent } from './styleds'
import { ReactNode } from 'react'
import { Sidebar } from '../Sidebar'
import { Header } from '../Header'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Sidebar />
        <PageContent>{children}</PageContent>
      </Container>
    </Wrapper>
  )
}
