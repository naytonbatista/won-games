import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import mockItems from './mock'
import CartList from '.'

describe('<CartList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CartList items={mockItems} total="R$ 330,00" />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#F231A5' })
  })
})
