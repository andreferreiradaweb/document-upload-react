import Modal from 'react-modal'
import { MdClose } from 'react-icons/md'
import { customStyleModal } from './customStyle'
import { CloseButton, ModalContent, ModalWrapper, Title } from './styleds'
import { ModalFormProps } from './types'
import { PdfReaderComponent } from '../PdfReaderComponent'

export const ModalPdfReader = ({
  isOpen = false,
  onRequestClose,
  values,
}: ModalFormProps) => {
  return (
    <Modal style={customStyleModal} isOpen={isOpen} ariaHideApp={false}>
      <ModalWrapper>
        <Title>{values.currentDocument.title}</Title>
        <CloseButton onClick={onRequestClose}>
          <MdClose size="22" />
        </CloseButton>
        <ModalContent>
          {/* <div style={{ overflow: 'scroll', height: 600 }}>
            <button onClick={onButtonClick}>download</button>
          </div> */}
          {values.base64FileUrl && (
            <PdfReaderComponent base64FileUrl={values.base64FileUrl} />
          )}
        </ModalContent>
      </ModalWrapper>
    </Modal>
  )
}
