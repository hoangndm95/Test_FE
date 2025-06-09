import styled, { css } from 'styled-components';
import freeToEarnIcon from '/src/assets/icons/free-to-earn.svg';
import rankingIcon from '/src/assets/icons/ranking.svg';
import videoNftIcon from '/src/assets/icons/video-nft.svg';
import newNftsIcon from '/src/assets/icons/new-nfts.svg';
import howtobuyIcon from '/src/assets/icons/howtobuy.svg';
import roadmapsIcon from '/src/assets/icons/roadmaps.svg';
import { media } from '@/styles/mixins';

const StyledNFTInfo = styled.nav`
  width: 100%;
  height: 122px;
  background: #1f2023;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  ${media.smallMobile(css`
    height: 92px;
    padding: 0 8px;
  `)}
`;

const Container = styled.div`
  width: 1128px;
  display: flex;
  justify-content: center;
  gap: 10px;
  justify-content: space-between;
  align-items: flex-start;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
  cursor: pointer;
  position: relative;

  img {
    width: 52px;
    height: 43px;
  }

  span {
    font-weight: 400;
    font-family: 'Neue Montreal', sans-serif;
    color: #fff;
    font-size: 14px;
    text-align: center;
    margin-top: 4px;
    line-height: 20px;
  }

  ${media.smallMobile(css`
    gap: 4px;

    img {
      width: 36px;
      height: 28px;
    }

    span {
      font-size: 10px;
      font-weight: 500;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 12px;
    }
  `)}
`;

const NewBadge = styled.div`
  position: absolute;
  top: -6px;
  right: 0px;
  background: #ff0000;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;

  ${media.smallMobile(css`
    font-size: 6px;
    line-height: 8px;
    padding: 1px 3px;
  `)}
`;

const NFTInfo = () => {
  const navItems = [
    { id: 1, icon: freeToEarnIcon, label: 'FREE TO EARN' },
    { id: 2, icon: rankingIcon, label: 'RANKING' },
    { id: 3, icon: videoNftIcon, label: 'VIDEO NFT' },
    { id: 4, icon: howtobuyIcon, label: 'HOW TO BUY' },
    { id: 5, icon: newNftsIcon, label: 'NEW NFTS', isNew: true },
    { id: 6, icon: roadmapsIcon, label: 'ROADMAPS' },
  ];

  return (
    <StyledNFTInfo>
      <Container>
        {navItems.map((item) => (
          <NavItem key={item.id}>
            <img src={item.icon} alt={item.label} />
            <span>{item.label}</span>
            {item.isNew && <NewBadge>NEW</NewBadge>}
          </NavItem>
        ))}
      </Container>
    </StyledNFTInfo>
  );
};

export default NFTInfo;
