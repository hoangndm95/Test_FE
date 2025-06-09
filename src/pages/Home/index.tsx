import HeroBanner from './HeroBanner';
import NFTCollections from './NFTCollections';
import NFTDrops from './NFTDrops';
import NFTInfo from './NFTInfo';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <NFTInfo />
      <NFTCollections />
      <NFTDrops />
    </div>
  );
};

export default Home;
