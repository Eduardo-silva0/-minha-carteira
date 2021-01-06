import ContentHeader from "../components/ContentHeader";
import SelectInput from "../components/SelectInput";
import { Container, Content, Filters } from "./styles";
import HistoryFinanceCard from "../components/HistoryFinanceCard";

const List: React.FC = () => {
  const months = [
    { value: 1, label: "Janeiro" },
    { value: 2, label: "Feveleiro" },
    { value: 3, label: "Março" },
  ];

  const years = [
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
  ];
  return (
    <Container>
      <ContentHeader title="Saida" lineColor="#FFF">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className="tag-filter tag-filter-recurrent"
        >
          Recorrentes
        </button>

        <button
          type="button"
          className="tag-filter tag-filter-eventual"
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        <HistoryFinanceCard
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
