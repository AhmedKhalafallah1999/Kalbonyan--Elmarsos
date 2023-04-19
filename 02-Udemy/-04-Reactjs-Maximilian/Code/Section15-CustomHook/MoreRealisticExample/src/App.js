import React, { useEffect, useState,useCallback } from "react";
import useHttp from "./Hooks/use-http";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const transformTask = useCallback((taskObj) => {
    const loadedTasks = [];

    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }

    setTasks(loadedTasks);
  },[]);
  const httpRequest = useHttp(
    
    transformTask
  );
  const { isLoading, error, sendRequest: fetchTasks } = httpRequest;

  useEffect(() => {
    fetchTasks({
      url: "https://demotest-364e7-default-rtdb.firebaseio.com/tasks.json",
    },);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
