import { Story, Meta } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.1920x1080.jpg?t=1671485009',
    title: 'Red Dead Remdemption 2',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://teste.com.br',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/mastercard.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/202020 at 20:32'
  }
}
