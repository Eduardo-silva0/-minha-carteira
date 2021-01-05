import { Container } from './styles';
import ContentHeader from '../components/ContentHeader'
import SelectInput from "../components/SelectInput";

const Dashboard: React.FC = () => {
  const options = [
    { value: "a", label: "a" },
    { value: "b", label: "b" },
    { value: "c", label: "c" },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#FFF">
        <SelectInput options={options}/>
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
