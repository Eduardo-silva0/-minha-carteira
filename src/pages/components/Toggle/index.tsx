import { Container, ToggleLabel, ToggleSelector } from './styles';

const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <ToggleSelector
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => console.log('m')}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Container>
);


export default Toggle;
