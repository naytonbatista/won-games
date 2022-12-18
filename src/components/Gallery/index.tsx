import Image from 'next/image'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'
import { useState } from 'react'

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const settings: SliderSettings = {
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <Image
            role="button"
            key={item.src}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            width={295}
            height={165}
            onClick={() => setIsOpen(true)}
          />
        ))}
      </Slider>
      <S.Modal
        isOpen={isOpen}
        aria-hidden={!isOpen}
        aria-label="modal"
      ></S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
