import styled from 'styled-components'

/** theme */
import { Theme } from '@shared/themes'

export const Modal = styled.div`
  min-width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${Theme.colors.neutral.xl};
  padding: 50px;
  border-radius: 10px;
  border: 1px solid ${Theme.colors.neutral.xs};
`

export const CloseModalButton = styled.button`
  width: 30px;
  position: absolute;
  right: 0;
  top: 2px;
  cursor: pointer;
  background-color: transparent;
  color:${Theme.colors.neutral.xs};
  font-weight: bold;
  border: none;
`

export const Title = styled.h2`
  margin-bottom: 50px;
`

export const Image = styled.img`
  width: 100px;
`

export const Form = styled.form`
`

export const InputTitle = styled.input`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
`

export const InputDescription = styled.textarea`
  height: 80px;
  padding: 5px;
`

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`

export const ButtonSubmit = styled.input`
  width: 104px;
  height: 37px;
`

export const Button = styled.button`
  width: 104px;
  height: 37px;
`