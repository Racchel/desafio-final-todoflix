/** styled */
import styled from 'styled-components'

/** theme */
import { Theme } from '@shared/themes'

export const Modal = styled.div`
  background-color: ${Theme.colors.neutral.xl};
  border: 1px solid ${Theme.colors.neutral.xs};
  transform: translate(-50%, -50%);
  border-radius: 10px;
  position: absolute;
  min-width: 60%;
  padding: 50px;
  top: 50%;
  left: 50%;
`

export const CloseModalButton = styled.button`
  font-weight: ${Theme.font.weight.lg};
  color: ${Theme.colors.neutral.xs};
  background-color: transparent;
  position: absolute;
  cursor: pointer;
  border: none;
  width: 30px;
  right: 0;
  top: 2px;
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`

export const Content = styled.div`
  flex-direction: column;
  display: flex;
  width: 50%;
  gap: 20px;
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
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0 5px;
  height: 40px;
`

export const InputDescription = styled.textarea`
  height: 80px;
  padding: 5px;
`

export const Label = styled.label`
  flex-direction: column;
  display: flex;
  width: 100%;
  gap: 5px;
`

export const Footer = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
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