/** styled */
import styled from 'styled-components'

/** theme */
import { Theme } from '@shared/themes'

/** styled */
const icon = '20px'

export const Container = styled.div`
  margin: 80px 0 100px 0;
  align-items: start;
  display: flex;

  @media (max-width: ${Theme.bk.lg}) {
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
`

export const Image = styled.img`
  margin: 0 50px 0 0;
  width: 425px;

  @media (max-width: ${Theme.bk.lg}) {
    width: 500px;
    margin: 0 0 25px 0;
  }

  @media (max-width: ${Theme.bk.sm}) {
    width: 100%;
  }
`

export const Content = styled.div`
  flex-direction: column;
  height: 240px;
  display: flex;
  width: 450px;
  gap: 10px;
  
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
  align-items: center;
  position: relative;
  display: flex;
  height: 20px;
`

export const Likes = styled.p`
  font-weight: ${Theme.font.weight.lg};
  font-size: ${Theme.font.size.md};
  padding: 0 5px 0 0;
`