import { Wrapper, Container, PageContent } from './styleds'
import { LayoutProps } from './types'
import { Sidebar } from '../Sidebar'
import { Header } from '../Header'

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
