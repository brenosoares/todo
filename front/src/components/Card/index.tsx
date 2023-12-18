import React, { useState } from "react";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import {
  ButtonFooter,
  Container,
  Description,
  DescriptionEmpty,
  EditTextArea,
  EditTitle,
  Footer,
  Header,
} from "./style";
import remarkGfm from "remark-gfm";
import {
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaCommentSlash,
  FaPen,
  FaTrash,
} from "react-icons/fa";
import Button from "../Button";
import { DeleteCard } from "../../services/cards";
import { Task, useTasksStore } from "../../store";

type Props = {
  id: string;
  title?: string;
  description?: string;
  lista?: string;
  changeListPrev?: (value: string) => void;
  changeListNext?: (value: string) => void;
  taskUpdate?: (value: Task) => void;
};

const Card = ({
  id,
  title,
  description,
  lista,
  changeListNext,
  changeListPrev,
  taskUpdate,
}: Props) => {
  const { setTasks } = useTasksStore();
  const [editMode, setEditMode] = useState(false);
  const [editModeTitle, setEditModeTitle] = useState(title);
  const [editModeDescription, setEditModeDescription] = useState(description);

  const deleteTask = async (id: string) => {
    try {
      const response = await DeleteCard(id);
      setTasks(response);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = () => {
    const updateTask: Task = {
      id,
      titulo: editModeTitle,
      conteudo: editModeDescription,
      lista,
    };
    taskUpdate?.(updateTask);
    setEditMode(false);
  };

  if (editMode) {
    return (
      <Container>
        <Header>
          <EditTitle
            type="text"
            name=""
            id=""
            value={editModeTitle}
            onChange={(event) => setEditModeTitle(event?.target?.value)}
          />
          <Button
            icon={<FaCheck />}
            position="only"
            size="sm"
            color="success"
            onClickAction={() => updateTask()}
          />
        </Header>
        <Description>
          {description ? (
            <EditTextArea
              value={editModeDescription}
              onChange={(event) => setEditModeDescription(event?.target?.value)}
            />
          ) : (
            <DescriptionEmpty>
              <FaCommentSlash size={40} color="#e8ecef" />
            </DescriptionEmpty>
          )}
        </Description>
        <Footer>
          {lista !== "ToDo" ? (
            <ButtonFooter onClick={() => changeListPrev?.("prev")}>
              <FaChevronLeft color="#0c0c0c" size={16} />
            </ButtonFooter>
          ) : null}
          <ButtonFooter onClick={() => deleteTask(id)}>
            <FaTrash color="#dc3848" size={16} />
          </ButtonFooter>
          {lista !== "Done" ? (
            <ButtonFooter onClick={() => changeListNext?.("next")}>
              <FaChevronRight color="#0c0c0c" size={16} />
            </ButtonFooter>
          ) : null}
        </Footer>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        {title}
        <Button
          icon={<FaPen />}
          position="only"
          size="sm"
          color="secondary"
          onClickAction={() => setEditMode(true)}
        />
      </Header>
      <Description>
        {description ? (
          <Markdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex]}
          >
            {description}
          </Markdown>
        ) : (
          <DescriptionEmpty>
            <FaCommentSlash size={40} color="#e8ecef" />
          </DescriptionEmpty>
        )}
      </Description>
      <Footer>
        {lista !== "ToDo" ? (
          <ButtonFooter onClick={() => changeListPrev?.("prev")}>
            <FaChevronLeft color="#0c0c0c" size={16} />
          </ButtonFooter>
        ) : null}
        <ButtonFooter onClick={() => deleteTask(id)}>
          <FaTrash color="#dc3848" size={16} />
        </ButtonFooter>
        {lista !== "Done" ? (
          <ButtonFooter onClick={() => changeListNext?.("next")}>
            <FaChevronRight color="#0c0c0c" size={16} />
          </ButtonFooter>
        ) : null}
      </Footer>
    </Container>
  );
};

export default Card;
