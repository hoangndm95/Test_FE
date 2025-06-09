import styled, { css } from 'styled-components';
import SlideCards from '@/components/SlideCards';
import nft8 from '@/assets/images/nft-8.png';
import nft9 from '@/assets/images/nft-9.png';
import nft10 from '@/assets/images/nft-10.png';
import { media } from '@/styles/mixins';
const Container = styled.section`
  padding: 80px 20px 0;

  ${media.tablet(css`
    padding: 40px 20px 0;
  `)}
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 12.4fr 5fr 5fr;
  gap: 24px;

  ${media.tablet(css`
    grid-template-columns: 1fr 1fr;
    > div:first-child {
      grid-column: 1 / -1;
    }
  `)}
`;

const GridItem = styled.div`
  width: 100%;
  min-width: 0;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 100% !important;
  }

  > section {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0;
  }
`;

const NFTDrops = () => {
  const drops = [
    {
      id: 1,
      image: nft8,
      title: 'State of NFT Drops',
    },
  ];

  const hotNft = [
    {
      id: 1,
      image: nft9,
      title: 'Pepe Cat Collection',
    },
  ];

  const promotion = [
    {
      id: 1,
      image: nft10,
      title: 'MEMEC',
    },
  ];

  return (
    <Container>
      <Content>
        <GridItem>
          <SlideCards title='NFT DROPS CALENDAR' type='single' items={drops} />
        </GridItem>
        <GridItem>
          <SlideCards title='HOT NFT' type='single' items={hotNft} hideNavigation />
        </GridItem>
        <GridItem>
          <SlideCards title='PROMOTION' type='single' items={promotion} hideNavigation />
        </GridItem>
      </Content>
    </Container>
  );
};

export default NFTDrops;
