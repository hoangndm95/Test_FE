import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import * as S from './SlideCards.styles';
import arrowLeft from '/src/assets/icons/arrow-left.svg';
import arrowRight from '/src/assets/icons/arrow-right.svg';
// Import Swiper styles

interface SlideCardsProps {
  title: string;
  type: 'grid' | 'single';
  hideNavigation?: boolean;
  items: {
    id: string | number;
    image: string;
    title?: string;
    description?: string;
    price?: string;
  }[];
}

const SlideCards = ({ title, type, hideNavigation = false, items }: SlideCardsProps) => {
  const swiperRef = useRef<SwiperType>();

  return (
    <S.Container className={type === 'single' ? 'single' : 'grid'}>
      <S.Header>
        <S.Title>{title}</S.Title>
        {!hideNavigation && (
          <S.NavigationButtons>
            <S.NavigationButton onClick={() => swiperRef.current?.slidePrev()}>
              <img src={arrowLeft} alt='Previous' />
            </S.NavigationButton>
            <S.NavigationButton onClick={() => swiperRef.current?.slideNext()}>
              <img src={arrowRight} alt='Next' />
            </S.NavigationButton>
          </S.NavigationButtons>
        )}
      </S.Header>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={type === 'single' ? 1 : 6}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={type === 'single' ? false : true}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} style={{ flexShrink: 1 }}>
            <S.SlideItem type={type}>
              <img src={item.image} alt={item.title || ''} />
            </S.SlideItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
};

export default SlideCards;
