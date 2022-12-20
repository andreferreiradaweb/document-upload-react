import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  margin-bottom: 30px;

  label {
    font-weight: 600;
    font-size: 14px;
  }
`

export const InputElement = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid var(--gray);
  border-radius: 4px;
  padding: 10px;
  padding-right: 40px;
  outline: none;
  position: relative;
  margin-top: 5px;
  overflow: hidden;
`

export const IconWrapper = styled.div`
  position: absolute;
  top: 32px;
  right: 10px;
  cursor: default;
`
