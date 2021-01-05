import ContentHeader from '../components/ContentHeader';
import SelectInput from '../components/SelectInput';
import { Container } from './styles';

const List: React.FC = () => {
  const options = [
    { value: "a", label: "a" },
    { value: "b", label: "b" },
    { value: "c", label: "c" },
  ];
  return (
    <Container>
      <ContentHeader title="Entrada" lineColor="#  FFF">
        <SelectInput options={options}/>
      </ContentHeader>
    </Container>
  );
};

export default List;
