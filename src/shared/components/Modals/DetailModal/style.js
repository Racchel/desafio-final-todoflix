import styled from 'styled-components'

/** theme */
import { Theme } from '@shared/themes'

export const Modal = styled.div`
  width: 25%;
  height: 60%;
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

export const Img = styled.img`
  width: 100%;
`

export const Tag = styled.span`
  background-color: ${Theme.colors.neutral.md};
  color: ${Theme.colors.neutral.xs};
  padding: 5px;
  border-radius: 5px;
`

export const Title = styled.h2``

export const ContentButtons = styled.div`
  width:fit-content;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 0;
`

export const Description = styled.p`
  font-size: ${Theme.font.size.xs};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`