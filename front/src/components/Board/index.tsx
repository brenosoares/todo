import React, { useEffect } from "react";
import { Column, ColumnBody, ColumnHeader, Container } from "./style";
import Card from "../Card";
import { Task, useTasksStore } from "../../store";
import { EditCard, GetCards } from "../../services/cards";

const Board = () => {
  const {
    tasks,
    setTasks,
    tasksToDo,
    setTasksToDo,
    tasksDoing,
    setTasksDoing,
    tasksDone,
    setTasksDone,
  } = useTasksStore();

  useEffect(() => {

    const tasksTodoItems = tasks?.filter((task) => task.lista === "ToDo");
    setTasksToDo(tasksTodoItems);

    const tasksDoingItems = tasks?.filter((task) => task.lista === "Doing");
    setTasksDoing(tasksDoingItems);

    const tasksDoneItems = tasks?.filter((task) => task.lista === "Done");
    setTasksDone(tasksDoneItems);
  }, [tasks]);

  const changeList = async (currentTask: Task, goTo?: string) => {
    const cardWithNewPosition = {
      ...currentTask,
      lista: goTo,
    };
    try {
      await EditCard(cardWithNewPosition);
      const updateListCards = await GetCards();
      setTasks(updateListCards);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (currentTask: Task) => {
    const cardWithNewPosition = {
      ...currentTask,
    };
    try {
      await EditCard(cardWithNewPosition);
      const updateListCards = await GetCards();
      setTasks(updateListCards);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Column>
        <ColumnHeader>To do</ColumnHeader>
        <ColumnBody>
          {tasksToDo.map((item: Task, index: number) => (
            <Card
              key={item.id || index}
              id={item.id || ""}
              title={item.titulo}
              description={item.conteudo}
              lista={item.lista}
              changeListNext={() => changeList(item, "Doing")}
              taskUpdate={(task) => updateTask(task)}
            />
          ))}
        </ColumnBody>
      </Column>
      <Column>
        <ColumnHeader>Doing</ColumnHeader>
        <ColumnBody>
          {tasksDoing.map((item: Task, index: number) => (
            <Card
              key={item.id || index}
              id={item.id || ""}
              title={item.titulo}
              description={item.conteudo}
              lista={item.lista}
              changeListPrev={() => changeList(item, "ToDo")}
              changeListNext={() => changeList(item, "Done")}
              taskUpdate={(task) => updateTask(task)}
            />
          ))}
        </ColumnBody>
      </Column>
      <Column>
        <ColumnHeader>To do</ColumnHeader>
        <ColumnBody>
          {tasksDone.map((item: Task, index: number) => (
            <Card
              key={item.id || index}
              id={item.id || ""}
              title={item.titulo}
              description={item.conteudo}
              lista={item.lista}
              changeListPrev={() => changeList(item, "Doing")}
              taskUpdate={(task) => updateTask(task)}
            />
          ))}
        </ColumnBody>
      </Column>
    </Container>
  );
};

export default Board;
