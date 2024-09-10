import { TodoServiceProvider } from '@/context/TodoContext';
import { TodoService } from '@/modules/todos/application/TodoService'
import { LocalStorageTodoRepository } from '@/modules/todos/infrastructure/LocalStorageTodoRepository'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'

export default function TodoListContainer() {
    const localStorageRepository = new LocalStorageTodoRepository();
    const todoService = new TodoService(localStorageRepository);

    return (
        <div>
            <h2>Todo List</h2>
            <TodoServiceProvider todoService={todoService}>
                <TodoAdd />
                <TodoList />
            </TodoServiceProvider>
        </div>
    )
}
