import styled from 'styled-components'

/** theme */
import { Theme } from '@shared/themes'

export const Container = styled.svg`
  transform: ${({ position }) => position === 'right' ? ' rotate(180deg);' : ''};
  color: ${Theme.colors.neutral.xs};
  transition: 0.3s ease-in-out;
  border-radius: 50%;
  cursor: pointer;
  opacity:50;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
