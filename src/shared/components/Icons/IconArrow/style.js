/** styled */
import styled from 'styled-components'

/** theme */
import { Theme } from '@shared/themes'

export const Container = styled.div`
  color: ${Theme.colors.neutral.xs};
  transition: 0.3s ease-in-out;
  border-radius: 50%;
  cursor: pointer;
  opacity:50;
  background-color: ${Theme.colors.rgba.v3};
  
  &:hover {
    background-color: ${Theme.colors.rgba.v4};
  }
`;
