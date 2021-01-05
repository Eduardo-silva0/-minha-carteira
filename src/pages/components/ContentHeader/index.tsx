import { Container, TitleContainer, Controllers } from './styles';

const ContentHeader: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Titulo</h1>
      </TitleContainer>
      <Controllers>
        <button>Botton a</button>
        <button>Botton b</button>
      </Controllers>
    </Container>
  );
};

export default ContentHeader;
