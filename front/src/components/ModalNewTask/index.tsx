import React, { useState } from "react";
import { Task, useTasksStore } from "../../store";
import {
  FormInputContainer,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  Overflow,
} from "./style";
import { FaCheck, FaTimesCircle } from "react-icons/fa";
import Button from "../Button";
import { AddCard, GetCards } from "../../services/cards";

type ModalProps = {
  task: Task;
  isVisible: boolean;
  closeModal: (value: boolean) => void;
};

const ModalNewTask = ({ task, isVisible, closeModal }: ModalProps) => {
  const { setTasks } = useTasksStore();

  const [currentTask, setCurrentTask] = useState<Task>(task);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentTask({
      ...currentTask,
      [name]: value,
    });
  };

  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentTask({
      ...currentTask,
      [name]: value,
    });
  };

  const submitTask = async () => {
    try {
      const response = await AddCard(currentTask);
      if (response) {
        const list = await GetCards();
        setTasks(list);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setCurrentTask(task);
      closeModal(false);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Overflow>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Nova Tarefa</ModalTitle>
          <ModalClose
            onClick={() => {
              setCurrentTask(task);
              closeModal(false);
            }}
          >
            <FaTimesCircle size={20} color="#dc3848" />
          </ModalClose>
        </ModalHeader>
        <ModalBody>
          <FormInputContainer>
            <span>Titulo</span>
            <input
              type="text"
              name="titulo"
              id="titulo"
              value={currentTask.titulo}
              onChange={onChangeTitle}
            />
          </FormInputContainer>
          <FormInputContainer>
            <span>Descrição</span>
            <textarea
              name="conteudo"
              id="conteudo"
              value={currentTask.conteudo}
              onChange={onChangeTextArea}
            />
          </FormInputContainer>
          <Button
            text="Confirmar"
            size="md"
            icon={<FaCheck />}
            position="right"
            onClickAction={() => submitTask()}
          />
        </ModalBody>
      </ModalContainer>
    </Overflow>
  );
};

export default ModalNewTask;
