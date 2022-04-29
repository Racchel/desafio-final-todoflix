import styled from 'styled-components'

/** theme */
import { Theme } from '@shared/themes'

/** style */
import { flex, height } from '../styleHeader'

const br = '4px'

export const Container = styled.div`
  border-radius: ${br};
  grid-area: Search;
  transition: 0.5s;
  ${height};
  ${flex};

  :hover {
    box-shadow: ${Theme.colors.shadow};
  }
`

export const Icon = styled.button`
  background-color: ${Theme.colors.neutral.lg};
  border-radius: ${br} 0 0 ${br};
  height: 100%;
  width: 40px;
  border: none;
  ${flex};
`

export const Input = styled.input`
  background-color: ${Theme.colors.neutral.lg};
  color: ${Theme.colors.neutral.xs};
  border-radius: 0 ${br} ${br} 0;
  padding: 8px 14px 8px 0;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;

  @media (max-width: ${Theme.bk.lg}) {
    padding: 20px 14px;
  }
`