'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons, NextButton, PrevButton } from '@/components/atoms/home-carousel-arrow-button/home-carousel-arrow-button'
import { useDotButton, DotButton } from '@/components/atoms/home-carousel-dot-button/home-carousel-dot-button'
import styles from './home-carousel.module.css'
import { ResponsivePicture } from '@/components/atoms/responsive-picture'
import { SlideContentProps } from './home-carousel.types'
import Link from 'next/link'

type HomeCarouselType = {
  slides: SlideContentProps[];
  options?: EmblaOptionsType;
}

export const HomeCarousel = ({ slides, options }: HomeCarouselType) => {

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => slide.link ? (
            <Link className={styles.embla__slide} key={index} href={slide.link.url} target={slide.link.isExternal ? '_blank' : '_self'}>
              <ResponsivePicture priority className={styles.embla__slide__image} alt={slide.image.description} title={slide.image.title} src={slide.image.mobile.url} height={slide.image.mobile.height} width={slide.image.mobile.width}  tablet={slide.image.tablet} desktop={slide.image.desktop}/>
            </Link>
          ) : (
            <div className={styles.embla__slide} key={index}>
              <ResponsivePicture priority className={styles.embla__slide__image} alt={slide.image.description} title={slide.image.title} src={slide.image.mobile.url} height={slide.image.mobile.height} width={slide.image.mobile.width}  tablet={slide.image.tablet} desktop={slide.image.desktop}/>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={styles.embla__dot.concat(
                index === selectedIndex ? ` ${styles['embla__dot--selected']}` : ''
              )}
            />
          ))}
      </div>

      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />


    </section>
  )
}

export default HomeCarousel
