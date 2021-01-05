import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

import {
  Container,
  Header,
  LogImg,
  Title,
  MenuContainer,
  MenuItemLink,
} from "./styles";

// import logoImg from "../../assets/logo.svg";
// const logo = require("./logo.svg") as string;

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        {/* <LogImg
          src={logoImg}
          alt="logo minha carteira quadrado com símbolo do dólar"
        /> */}
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="#"><MdDashboard />Deshbord</MenuItemLink>
        <MenuItemLink href="#"><MdArrowUpward />Endradas</MenuItemLink>
        <MenuItemLink href="#"><MdArrowDownward />Saídas</MenuItemLink>
        <MenuItemLink href="#"><MdExitToApp />Sair</MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
