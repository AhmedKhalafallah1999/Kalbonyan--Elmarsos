import useHttp from "../../Hooks/use-http";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import { useCallback } from "react";
const NewTask = (props) => {
  const createdTaskfn = useCallback(
    (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    },
    []
  );

  const { isLoading, error, sendTaskRequest } = useHttp(createdTaskfn);

  const enterTaskHandler = useCallback(
    async (taskText) => {
      sendTaskRequest({
        url: "https://demotest-364e7-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    [sendTaskRequest]
  );

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
