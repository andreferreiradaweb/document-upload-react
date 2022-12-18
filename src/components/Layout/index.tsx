import { Wrapper, Container, PageContent } from './styleds'
import { LayoutProps } from './types'
import { Sidebar } from '../Sidebar'
import { Header } from '../Header'
import { Breadcrumb } from '../Breadcrumb'

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Sidebar />
        <PageContent>
          <Breadcrumb />
          {children}
        </PageContent>
      </Container>
    </Wrapper>
  )
}
