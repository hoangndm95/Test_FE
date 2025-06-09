import styled, { css } from 'styled-components';
import SlideCards from '@/components/SlideCards';
import nft1 from '/src/assets/images/nft-1.png';
import nft2 from '/src/assets/images/nft-2.png';
import nft3 from '/src/assets/images/nft-3.png';
import nft4 from '/src/assets/images/nft-4.png';
import nft5 from '/src/assets/images/nft-5.png';
import nft6 from '/src/assets/images/nft-6.png'; 
import { media } from '@/styles/mixins';

const Container = styled.section`
  padding: 80px 20px 0;

  ${media.tablet(css`
    padding: 40px 20px 0;
  `)}
`;

const NFTCollections = () => {
  const collections = [
    {
      id: 1,
      image: nft1,
      title: 'Vaporwave Apollo',
      price: '0.5 ETH',
    },
    {
      id: 2,
      image: nft2,
      title: 'Neon Dreams',
      price: '1.2 ETH',
    },
    {
      id: 3,
      image: nft3,
      title: 'Retro Future',
      price: '0.8 ETH',
    },
    {
      id: 4,
      image: nft4,
      title: 'Cyber Kid',
      price: '2.0 ETH',
    },
    {
      id: 5,
      image: nft5,
      title: 'Steam Punk',
      price: '1.5 ETH',
    },
    {
      id: 6,
      image: nft6,
      title: 'Crystal ETH',
      price: '3.0 ETH',
    },
    {
      id: 7,
      image: nft4,
      title: 'Crystal ETH',
      price: '3.0 ETH',
    },
  ];

  return (
    <Container>
      <SlideCards title='NEW NFT COLLECTIONS' type='grid' items={collections} />
    </Container>
  );
};

export default NFTCollections;
