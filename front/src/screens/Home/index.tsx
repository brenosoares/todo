import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Container, Header, Main } from "./styles";
import Button from "../../components/Button";
import Board from "../../components/Board";
import ModalNewTask from "../../components/ModalNewTask";

const Home = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const newTask = {
    titulo: "",
    conteudo: "",
    lista: "ToDo",
  };

  return (
    <Container>
      <Header>
        <Button
          text="Adicionar Tarefa"
          icon={<FaPlus />}
          onClickAction={() => setModalIsVisible(true)}
        />
      </Header>
      <Main>
        <Board />
      </Main>
      <ModalNewTask
        isVisible={modalIsVisible}
        task={newTask}
        closeModal={(close) => setModalIsVisible(close)}
      />
    </Container>
  );
};

export default Home;
