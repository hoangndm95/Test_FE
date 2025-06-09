import styled from 'styled-components';
import { Button } from './Button';

const Container = styled.div`
  padding: 2rem;
  background-color: #131415;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Label = styled.div`
  color: #666;
  width: 100px;
  font-size: 14px;
  font-weight: 500;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 4rem;
`;

const Column = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.div`
  color: #666;
  margin-bottom: 1rem;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.1px;
`;

const PageTitle = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 2rem;
  letter-spacing: -0.5px;
`;

export const ButtonDemo = () => {
  return (
    <Container>
      <PageTitle>Button Components</PageTitle>
      <Row>
        <Label>Normal</Label>
        <ButtonGroup>
          <Column>
            <Title>Primary</Title>
            <Button variant='primary'>TEXT CTA</Button>
          </Column>
          <Column>
            <Title>Secondary</Title>
            <Button variant='secondary'>TEXT CTA</Button>
          </Column>
        </ButtonGroup>
      </Row>

      <Row>
        <Label>Disabled</Label>
        <ButtonGroup>
          <Column>
            <Button variant='primary' disabled>
              TEXT CTA
            </Button>
          </Column>
          <Column>
            <Button variant='secondary' disabled>
              TEXT CTA
            </Button>
          </Column>
        </ButtonGroup>
      </Row>
    </Container>
  );
};
