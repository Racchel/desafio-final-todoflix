import styled from 'styled-components'

/** theme */
import { Theme } from '../../../themes'

/** style */
import { flex, height } from '../style'

export const SearchContainer = styled.div`
  grid-area: Search;
  ${height};
  ${flex};
`

export const SearchIcon = styled.button`
  background-color: ${Theme.colors.neutral.lg};
  height: 100%;
  width: 40px;
  border: none;
  border-radius: 4px 0 0 4px;
  ${flex};
`

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  background-color: ${Theme.colors.neutral.lg};
  color: ${Theme.colors.neutral.xs};
  padding: 8px 14px 8px 0;
  border-radius: 0 4px 4px 0;
  border: none;
  outline: none;

  @media (max-width: ${Theme.bk.lg}) {
    padding: 20px 14px;
  }
`