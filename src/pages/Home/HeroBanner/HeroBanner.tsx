import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import styled, { css } from 'styled-components';
import sliderImage from '/src/assets/images/slider.png';
import sliderImageSmall from '/src/assets/images/slider-small.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { media } from '@/styles/mixins';

const HeroBanner = () => {
  return (
    <StyledHeroBanner>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect='fade'
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <SwiperSlide key={index}>
            <SlideImage className='small' src={sliderImageSmall} alt={`Slide ${index + 1}`} />
            <SlideImage className='large' src={sliderImage} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledHeroBanner>
  );
};

const StyledHeroBanner = styled.section`
  position: relative;
  background: #000;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination {
    bottom: 10px !important;
  }

  .swiper-pagination-bullet {
    width: 28px;
    height: 4px;
    border-radius: 20px;
    background: #ffffff99;
  }

  .swiper-pagination-bullet-active {
    background: #ffc700;
  }
`;

const SlideImage = styled.img`
  object-fit: cover;

  &.small {
    display: none;
  }

  ${media.mobile(css`
    &.large {
      display: none;
    }
    &.small {
      display: block;
    }
  `)}
`;

export default HeroBanner;
