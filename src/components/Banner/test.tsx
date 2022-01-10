import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Banner
        img="/images/foo.png"
        title="Defy death"
        subtitle="Play the new CrasLands season"
        buttonLabel="Buy now"
        buttonLink="/games"
      />
    )

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Play the new CrasLands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img')).toHaveAttribute('src', '/images/foo.png')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        img="/images/foo.png"
        title="Defy death"
        subtitle="Play the new CrasLands season"
        buttonLabel="Buy now"
        buttonLink="/games"
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
