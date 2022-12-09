import { Container } from 'components/Container'

import * as S from './styles'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import BannerSlider from 'components/BannerSlider'
import Base from 'templates/Base'
import ShowCase from 'components/ShowCase'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighLight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularGames,
  mostPopularHighLight,
  upcommingGames,
  upcommingHighlight,
  upcommingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase title="News" games={newGames} />
    </S.SectionNews>
    <ShowCase
      title="Most Popular"
      games={mostPopularGames}
      highlight={mostPopularHighLight}
    />
    <S.SectionUpComming>
      <ShowCase title="Upcoming" games={upcommingGames} />
      <ShowCase highlight={upcommingHighlight} games={upcommingMoreGames} />
    </S.SectionUpComming>
    <ShowCase title="Free Games" games={freeGames} highlight={freeHighlight} />
  </Base>
)

export default Home
