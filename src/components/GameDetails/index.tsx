import { Apple, Linux, Windows } from '@styled-icons/fa-brands'

import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

type Platform = 'windows' | 'linux' | 'mac'

export type GameDetailsProps = {
  platforms: Platform[]
}
const GameDetails = ({ platforms }: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux size={18} title="Linux" />,
    windows: <Windows size={18} title="Windows" />,
    mac: <Apple size={18} title="Apple" />
  }

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game details
        </Heading>
      </MediaMatch>
      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>Gearbox Software</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Release date</S.Label>
          <S.Description>Nov 16, 219</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>
        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>2K</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>18+</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Genre</S.Label>
          <S.Description>Action | Adventure</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
