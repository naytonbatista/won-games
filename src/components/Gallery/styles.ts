import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: rotate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disable,
    .slick-next.slick-disable {
      visibility: hidden;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.small};
      cursor: pointer;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }

    ${media.lessThan('huge')`
        overflow-x:hidden;
    `}
  `}
`
const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}
export type ModalProps = {
  isOpen: boolean
}
export const Modal = styled.div<ModalProps>`
  ${({ isOpen }) => css`
    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`
