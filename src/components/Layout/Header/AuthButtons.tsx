import { Button } from '@/components/Button'; 
import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 12px;
`;
 

const AuthButtons = () => {
  return (
    <ButtonContainer>
      <Button>SIGN UP</Button>
      <Button variant="secondary">LOG IN</Button>
    </ButtonContainer>
  );
};

export default AuthButtons;
