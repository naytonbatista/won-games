import { Divider } from 'components/Divider'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import { GameCardProps } from 'components/GameCard'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import { HighlightProps } from 'components/Highlight'
import ShowCase from 'components/ShowCase'
import TextContent from 'components/TextContent'
import Base from 'templates/Base'
import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighLight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighLight,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover"></S.Cover>
    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>
      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>
      <S.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </S.SectionGameDetails>
      <ShowCase
        title="upcoming"
        games={upcomingGames}
        highlight={upcomingHighLight}
      ></ShowCase>

      <ShowCase
        title="You make like these games"
        games={recommendedGames}
      ></ShowCase>
    </S.Main>
  </Base>
)

export default Game
