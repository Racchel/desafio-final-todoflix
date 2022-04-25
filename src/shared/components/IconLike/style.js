import styled from 'styled-components'

/** theme */
import { Theme } from '../../themes'

export const Container = styled.svg`
  width: 15px;
  top: 10%;
  right: 0;
  transform: translateY(-10%);
  cursor: pointer;
  
  path {
    fill: ${(props) => props.likes > 0
    ? Theme.colors.level.v1
    : Theme.colors.level.v3
  };
  }
`
