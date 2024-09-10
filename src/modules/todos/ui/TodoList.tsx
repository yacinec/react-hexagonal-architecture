import { useTodoContext } from "@/context/TodoContext";

export default function TodoList() {
  const { todos } = useTodoContext();

  if(todos.length === 0) {
    return <span>No tasks</span>
  } 

  return (
    <div>
      <ul>
        {todos.map(todo => (
            <li key={todo.name}>{todo.name}</li>
        ))}
      </ul>
    </div>
  )
}
