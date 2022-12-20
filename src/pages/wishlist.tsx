import gameMock from 'components/GameCardSlider/mock'
import highLightMock from 'components/Highlight/mock'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      recommendedGames: gameMock.slice(0, 5),
      recommendedHighlight: highLightMock
    }
  }
}
