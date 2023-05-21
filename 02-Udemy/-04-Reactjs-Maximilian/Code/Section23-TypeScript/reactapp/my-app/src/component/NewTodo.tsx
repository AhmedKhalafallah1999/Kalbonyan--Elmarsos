import { useRef } from "react";
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInput = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enterdText = todoTextInput.current!.value;
    if (enterdText.trim().length === 0) {
      return;
    }
    props.onAddTodo(enterdText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInput}></input>
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
