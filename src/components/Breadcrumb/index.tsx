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
          <SpanElement>&nbsp;&nbsp;{' > '}&nbsp;Meus documentos</SpanElement>
        )}
      </TextElement>
    </Wrapper>
  )
}
