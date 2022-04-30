/** styled */
import styled from 'styled-components'

/** theme */
import { Theme } from '@shared/themes'

export const Card = styled.div`
  flex-direction: column;
  border-radius: 5px;
  position: relative; 
  transition: 1.5s;
  cursor: pointer;
  display: flex;
  padding: 5px;

  :hover {
    background-color: ${Theme.colors.neutral.lg}
  }
`

export const Img = styled.div`
  background: ${props => `url(${props.src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 150px;
  width: 100%;

  @media (max-width: ${Theme.bk.lg}) {
    height: 200px;
  }

  @media (max-width: ${Theme.bk.sm}) {
    height: 300px;
    margin-bottom: 10px;
  }
`

export const Header = styled.div`
  justify-content: space-between;
  padding: 5px 0;
  display: flex;
  width: 100%;
`

export const Title = styled.h2`
  font-size: ${Theme.font.size.md};
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 5px 0 0 ;
  overflow: hidden;
`

export const Description = styled.p`
  font-size: ${Theme.font.size.xs};
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  overflow: hidden;
`

export const Rate = styled.div`
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-width: 30px;
  display: flex;
  height: 20px;
`

export const Likes = styled.p`
  font-size: ${Theme.font.size.xs};
  padding: 0 5px 0 0;
  font-weight: bold;
`