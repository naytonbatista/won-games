import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'

import * as S from './styles'
import Heading from 'components/Heading'
import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

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
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>
        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>
    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighLight} />
        <GameCardSlider items={mostPopularGames} />
      </S.SectionMostPopular>
      <S.SectionUpComming>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>
        <GameCardSlider items={upcommingGames} />
        <Highlight {...upcommingHighlight} />
        <GameCardSlider items={upcommingMoreGames} />
      </S.SectionUpComming>
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>
      <Highlight {...freeHighlight} />
      <GameCardSlider items={freeGames} />
    </Container>
    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
