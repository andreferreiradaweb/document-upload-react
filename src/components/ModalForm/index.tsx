import Modal from 'react-modal'
import { MdClose } from 'react-icons/md'
import { customStyleModal } from './customStyle'
import {
  CloseButton,
  InputDocument,
  ModalContent,
  Title,
  WrapperButtons,
  WrapperInputs,
} from './styleds'
import { ModalFormProps } from './types'
import { Input } from '../Input'
import { Button } from '../Button'
import { useRef } from 'react'
import { Textarea } from '../Textarea'

export const ModalForm = ({
  isOpen = false,
  onRequestClose,
  onSubmit,
  onChange,
  onChangeInputFile,
  inputValues,
}: ModalFormProps) => {
  const inputElement = useRef<HTMLInputElement>(null)

  const handleLoadFile = () => {
    inputElement.current?.click()
  }

  return (
    <Modal style={customStyleModal} isOpen={isOpen} ariaHideApp={false}>
      <ModalContent>
        <Title>Insira um título e descrição para o arquivo:</Title>
        <CloseButton onClick={onRequestClose}>
          <MdClose size="22" />
        </CloseButton>
        <form onSubmit={onSubmit}>
          <WrapperInputs>
            <Input
              disabled={false}
              style={{ marginTop: '10px' }}
              label="Titulo"
              name="title"
              maxLength={100}
              onChange={onChange}
              value={inputValues.title}
            />
            <Textarea
              disabled={false}
              label="Descrição"
              name="description"
              maxLength={2000}
              onChange={onChange}
              value={inputValues.description}
            />
            <Input
              disabled
              label="Arquivo"
              name="fileName"
              value={inputValues.fileName || ''}
            />
            <InputDocument
              type="file"
              ref={inputElement}
              onChange={onChangeInputFile}
            />
          </WrapperInputs>
          <WrapperButtons>
            <Button type="button" onClickButton={handleLoadFile}>
              Localizar arquivo
            </Button>
            <Button type="submit">Adicionar</Button>
          </WrapperButtons>
        </form>
      </ModalContent>
    </Modal>
  )
}
