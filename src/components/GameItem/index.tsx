import Image from 'next/image'
import { Download } from '@styled-icons/boxicons-solid/Download'
import * as S from './styles'

export type PaymentInfoProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const GameItem = ({
  img,
  title,
  price,
  downloadLink,
  paymentInfo
}: GameItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        <div>
          <Image src={img} alt={title} width={1580} height={888} />
        </div>
      </S.ImageBox>
      <S.Content>
        <S.Title>
          {title}
          {!!downloadLink && (
            <S.DownloadLink
              href={downloadLink}
              target="_blank"
              aria-label={`Get ${title} here`}
            >
              <Download size={22} />
            </S.DownloadLink>
          )}
        </S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
      {!!paymentInfo && (
        <S.PaymentContent>
          <div>{paymentInfo.purchaseDate}</div>
          <S.PaymentCardInfo>
            <span>{paymentInfo.number}</span>

            <Image
              width={38}
              height={24}
              src={paymentInfo.img}
              alt={paymentInfo.flag}
            />
          </S.PaymentCardInfo>
        </S.PaymentContent>
      )}
    </S.GameContent>
  </S.Wrapper>
)

export default GameItem
