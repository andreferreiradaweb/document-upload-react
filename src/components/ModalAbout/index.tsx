import Modal from 'react-modal'
import { MdClose } from 'react-icons/md'
import { customStyleModal } from './customStyle'
import {
  Wrapper,
  Content,
  LogoWrapper,
  Logo,
  TextElement,
  CloseButton,
  StrongElement,
} from './styleds'
import { ModalElementProps } from './types'
import ImageLogo from '../../assets/logo.png'

export const ModalAbout = ({ isOpen, onRequestClose }: ModalElementProps) => {
  return (
    <Modal
      style={customStyleModal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Wrapper>
        <CloseButton onClick={onRequestClose}>
          <MdClose size="22" />
        </CloseButton>
        <Content>
          <LogoWrapper>
            <Logo src={ImageLogo} />
          </LogoWrapper>
          <TextElement>
            <StrongElement>Versão atual do sistema:</StrongElement> v1.2.3
          </TextElement>
          <TextElement>
            A Docspider Software S.A., fundada em 1991, consolidou-se como
            especialista em tecnologias e serviços para governança de
            normativos, compliance, automatização e gestão de processos de
            negócios, documentos, colaboração e conhecimento, instrumentos
            normativos e regulatórios, formulários eletrônicos inteligentes e
            conteúdos organizacionais. Entre os destaques do portfólio de
            produtos as aplicações para racionalização contínua de custos,
            ambiente estruturado de performance e conformidade empresarial,
            sustentação e eficácia em governança, compliance e suporte a
            auditorias.
          </TextElement>
        </Content>
      </Wrapper>
    </Modal>
  )
}
