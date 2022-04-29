import styled from 'styled-components'

/** theme */
import { Theme } from '@shared/themes'

export const Modal = styled.div`
  width: 50%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${Theme.colors.neutral.xl};
  padding: 20px;
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
