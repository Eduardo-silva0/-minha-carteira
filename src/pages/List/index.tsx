import ContentHeader from "../components/ContentHeader";
import SelectInput from "../components/SelectInput";
import { Container, Content } from "./styles";
import HistoryFinanceCard from "../components/HistoryFinanceCard";

const List: React.FC = () => {
  const options = [
    { value: "a", label: "a" },
    { value: "b", label: "b" },
    { value: "c", label: "c" }
  ];
  return (
    <Container>
      <ContentHeader title="Saida" lineColor="#FFF">
        <SelectInput options={options} />
      </ContentHeader>

      <Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44c4e"
          title="Conta de luz"
          subtitle="06/1/2021"
          amount="R$ 150,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44c4e"
          title="Conta de luz"
          subtitle="06/1/2021"
          amount="R$ 150,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44c4e"
          title="Conta de luz"
          subtitle="06/1/2021"
          amount="R$ 150,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44c4e"
          title="Conta de luz"
          subtitle="06/1/2021"
          amount="R$ 150,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44c4e"
          title="Conta de luz"
          subtitle="06/1/2021"
          amount="R$ 150,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44c4e"
          title="Conta de luz"
          subtitle="06/1/2021"
          amount="R$ 150,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44c4e"
          title="Conta de luz"
          subtitle="06/1/2021"
          amount="R$ 150,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44c4e"
          title="Conta de luz"
          subtitle="06/1/2021"
          amount="R$ 150,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44c4e"
          title="Conta de luz"
          subtitle="06/1/2021"
          amount="R$ 150,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44c4e"
          title="Conta de luz"
          subtitle="06/1/2021"
          amount="R$ 150,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44c4e"
          title="Conta de luz"
          subtitle="06/1/2021"
          amount="R$ 150,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44c4e"
          title="Conta de luz"
          subtitle="06/1/2021"
          amount="R$ 150,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44c4e"
          title="Conta de luz"
          subtitle="06/1/2021"
          amount="R$ 150,00"
        />


      </Content>
    </Container>
  );
};

export default List;
