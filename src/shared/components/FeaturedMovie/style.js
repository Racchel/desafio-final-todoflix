import styled from 'styled-components'

/** theme */
import { Theme } from '../../themes'

/** styled */
const icon = '20px'

export const Container = styled.div`
  display: flex;
  align-items: start;
  margin: 80px 0 100px 0;

  @media (max-width: ${Theme.bk.lg}) {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }
`

export const Image = styled.img`
  width: 425px;
  margin: 0 50px 0 0;

  @media (max-width: ${Theme.bk.lg}) {
    width: 500px;
    margin: 0 0 25px 0;
  }
  @media (max-width: ${Theme.bk.sm}) {
    width: 100%;
  }
`

export const Content = styled.div`
  width: 450px;
  height: 240px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  
  @media (max-width: ${Theme.bk.lg}) {
    width: 500px;
  }
  @media (max-width: ${Theme.bk.sm}) {
    width: 100%;
    height: auto;
  }
`

export const IconHeart = styled.img`
    width: ${icon};
  `
export const Tag = styled.p`
  font-size: ${Theme.font.size.md};
  font-weight: bold;
`
export const Title = styled.h2`
  font-size: ${Theme.font.size.xl};
`
export const Description = styled.p`
  font-size: ${Theme.font.size.sm};
  line-height: 22px;
`

export const Rate = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 20px;
`

export const Likes = styled.p`
  padding: 0 5px 0 0;
  font-size: ${Theme.font.size.md};
  font-weight: bold;
`