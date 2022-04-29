import styled from 'styled-components'

/** theme */
import { Theme } from '../../themes'

export const Container = styled.div`
  position: ${({ position }) => position ? position : ''};
  background-color: ${Theme.colors.neutral.md};
  color: ${({ isFavorite }) => isFavorite ? Theme.colors.neutral.xs : Theme.colors.neutral.sm};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  height: 25px;
  width: 25px;
  right: 10px;
  top: 10px;

  :hover {
    color:${Theme.colors.neutral.xs};
  }
`
