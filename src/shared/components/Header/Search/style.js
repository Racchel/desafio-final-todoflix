/** styled */
import styled from 'styled-components'

/** theme */
import { Theme } from '@shared/themes'

/** style */
import { flex, height, borderRadius } from '../styleHeader'

export const Container = styled.div`
  border-radius: ${borderRadius};
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
  border-radius: ${borderRadius} 0 0 ${borderRadius};
  height: 100%;
  width: 40px;
  border: none;
  ${flex};
`

export const Input = styled.input`
  background-color: ${Theme.colors.neutral.lg};
  color: ${Theme.colors.neutral.xs};
  border-radius: 0 ${borderRadius} ${borderRadius} 0;
  padding: 8px 14px 8px 0;
  outline: none;
  border: none;
  height: 100%;
  width: 100%;

  @media (max-width: ${Theme.bk.lg}) {
    padding: 20px 14px;
  }
`