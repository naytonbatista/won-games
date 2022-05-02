import { Story, Meta } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    icon: <Email />,
    iconPosition: 'left',
    id: 'Email',
    initialValue: '',
    placeholder: 'naytonbatista@yahoo.com.br'
  },
  argtypes: {
    onInput: { action: 'changed' },
    icon: ''
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)
