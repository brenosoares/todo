import { useEffect, useState } from 'react';
import './App.css';
import Home from './screens/Home';
import { GetCards } from './services/cards';
import { useTasksStore } from './store';

function App() {

  const { setTasks } = useTasksStore();

  const getTaskList = async () => {
    const list = await GetCards();
    setTasks(list)
  }

  useEffect(() => {
    getTaskList()
  }, [])

  return (
    <Home />
  );
}

export default App;
