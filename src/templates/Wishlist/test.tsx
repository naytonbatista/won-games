import 'match-media-mock'
import { screen } from '@testing-library/react'

import Wishlist from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import gameMock from 'components/GameCardSlider/mock'
import highLightMock from 'components/Highlight/mock'

const props = {
  recommendedGames: gameMock.slice(0, 5),
  recommendedHighlight: highLightMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: () => <div data-testid="Mock Showcase" />
}))
describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId(/mock showcase/i)).toBeInTheDocument()
  })
})
