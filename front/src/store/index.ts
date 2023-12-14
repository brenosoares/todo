import { UUID } from 'crypto'
import { create } from 'zustand'

export type Task = {
    id: UUID
    titulo : string,
    conteudo: string,
    lista: string
}

interface Tasks {
  tasks: Task[] | []
  setTasks: (value: Task[]) => void
  tasksToDo: Task[] | []
  setTasksToDo: (value: Task[]) => void
  tasksDoing: Task[] | []
  setTasksDoing: (value: Task[]) => void
  tasksDone: Task[] | []
  setTasksDone: (value: Task[]) => void
}

export const useTasksStore = create<Tasks>()((set) => ({
    tasks: [],
    setTasks: (value) => set({tasks: value}),
    tasksToDo: [],
    setTasksToDo: (value) => set({tasksToDo: value}),
    tasksDoing: [],
    setTasksDoing: (value) => set({tasksDoing: value}),
    tasksDone: [],
    setTasksDone: (value) => set({tasksDone: value}),
}))

interface Token {
  token: string
  setToken: (value: string) => void
}

export const useToken = create<Token>()((set) => ({
    token: '',
    setToken: (value) => set({token: value}),
}))
