import Ilustration from '../../assets/ilustration-about.svg'
import { Layout } from '../../components/Layout'
import {
  ImageElement,
  ImageWrapper,
  Wrapper,
  Content,
  TitleElement,
  Button,
  TextElement,
  ListElement,
  ItemElement,
} from './styles'

export const HomePage = () => {
  return (
    <Layout>
      <Wrapper>
        <Content>
          <TitleElement>Conheça as vantagens do nosso serviço</TitleElement>
          <TextElement>
            Facilite o processo de envio de documentos com o melhor serviço de
            upload existente no mercado, conheça as vantagens de utilizar nossos
            serviços listadas abaixo:
          </TextElement>
          <ListElement>
            <ItemElement>Segurança</ItemElement>
            <ItemElement>Conforto</ItemElement>
            <ItemElement>Velocidade</ItemElement>
            <ItemElement>Qualidade</ItemElement>
          </ListElement>
          <Button>Assinar Premium</Button>
        </Content>
        <ImageWrapper>
          <ImageElement src={Ilustration} alt="" />
        </ImageWrapper>
      </Wrapper>
    </Layout>
  )
}
