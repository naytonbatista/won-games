import 'match-media-mock'

import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import mock from './mock'

import Gallery from '.'

describe('<Gallery />', () => {
  it('should render thumbnails as button', () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    expect(screen.queryAllByRole('button')).toHaveLength(2)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    const modal = screen.getByLabelText(/modal/i)

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })
})
