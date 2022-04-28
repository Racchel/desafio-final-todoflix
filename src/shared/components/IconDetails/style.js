import styled from 'styled-components'

/** theme */
import { Theme } from '../../themes'

export const Container = styled.div`
  background-color: ${Theme.colors.neutral.md};
  color:${Theme.colors.neutral.sm};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 25px;
  width: 25px;
  :hover {
    color:${Theme.colors.neutral.xs};
  }
`
