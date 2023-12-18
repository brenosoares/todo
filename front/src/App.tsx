import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Home from "./screens/Home";
import { GetCards } from "./services/cards";
import { useTasksStore } from "./store";

function App() {
  const { setTasks } = useTasksStore();
  const [hasError, setHasError] = useState<unknown>()

  const getTaskList = async () => {
    const list = await GetCards();
    if(list !== 'ECONNABORTED'){
      setTasks(list);
    }else{
      setHasError(list)
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);

  if(hasError === 'ECONNABORTED'){
    return <>Verifique se o serviço de api está rodando corretamente antes de continuar.</>
  }

  return <Home />;
}

export default App;
