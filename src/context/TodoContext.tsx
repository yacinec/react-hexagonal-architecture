import { createContext, useContext, useEffect, useReducer } from 'react'
import { TodoService } from '../modules/todos/application/TodoService';
import { Todo } from '@/modules/todos/domain/Todo';

type TodoAction = { type: 'ADD'; payload: string } | { type: 'SET'; payload: Todo[] };

interface TodoContextProps {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
  addTodo: (todo: string) => void;
}
const TodoContext = createContext<TodoContextProps | undefined>(undefined);

function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case 'SET':
      return action.payload;
    case 'ADD': {
      const newTodo = {
        id: Math.random().toString(),
        name: action.payload,
        completed: false
      } as Todo;

      return [...state, newTodo];
    }
    default:
      return state;
  }
}


export const TodoServiceProvider: React.FC<{ todoService: TodoService; children: React.ReactNode }> = ({ todoService, children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    todoService.getAll().then(todos => {
      dispatch({ type: 'SET', payload: todos });
    });
  }, [todoService]);

  const addTodo = async (todo: string) => {
    await todoService.add(todo);
    dispatch({ type: 'ADD', payload: todo });
  };

  return (
    <TodoContext.Provider value={{ todos, dispatch, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};



export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoServiceProvider');
  }
  return context;
}