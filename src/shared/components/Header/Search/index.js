/** imgs */
import search from '../../../assets/icons/search.svg'

/** style */
import { SearchContainer, SearchIcon, SearchInput } from './style'

export const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon>
        <img src={search} alt='' />
      </SearchIcon>
      <SearchInput placeholder='Pesquisar' />
    </SearchContainer>
  )
}