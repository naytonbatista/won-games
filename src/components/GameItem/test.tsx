import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem, { PaymentInfoProps } from '.'

const props = {
  img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.1920x1080.jpg?t=1671485009',
  title: 'Title Test',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', { name: /title test/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /title test/i })).toBeInTheDocument()
    expect(screen.getByText(/R\$ 215,00/i)).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://teste.com'
    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment infos', () => {
    const paymentInfo: PaymentInfoProps = {
      flag: 'mastercard',
      img: '/img/mastercard.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/202020 at 20:32'
    }
    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()

    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
