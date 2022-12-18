import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import { SpanElement, TextElement, Wrapper } from './styleds'

export const Breadcrumb = () => {
  const location = useLocation()

  return (
    <Wrapper>
      <TextElement>
        <Link to={ROUTES.home.path}>Início</Link>
        {location.pathname === ROUTES.docs.path && (
          <SpanElement>{' > '}Meus documentos</SpanElement>
        )}
      </TextElement>
    </Wrapper>
  )
}
