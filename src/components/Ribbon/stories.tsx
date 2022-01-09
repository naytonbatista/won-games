import { Story, Meta } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  args: {
    children: 'Best seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  },
  component: Ribbon
} as Meta

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      position: 'relative',
      width: '40rem',
      height: '25rem',
      backgroundColor: '#ccc'
    }}
  >
    <Ribbon {...args} />
  </div>
)
