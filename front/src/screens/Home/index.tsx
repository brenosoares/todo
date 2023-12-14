import React from 'react'
import { FaPlus } from "react-icons/fa";
import { Container, Header, Main } from './styles'
import Button from '../../components/Button'
import Board from '../../components/Board';

const Home = () => {
  return (
    <Container>
      <Header>
        <Button text='Adicionar Tarefa' icon={<FaPlus />}   />
      </Header>
      <Main>
        <Board />
      </Main>
    </Container>
  )
}

export default Home
