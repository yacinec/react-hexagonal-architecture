import { TodoRepository } from '@/modules/todos/domain/TodoRepository'
import { Todo } from './Todo'

export class TodoService {
  constructor(private todoRepository: TodoRepository) {}

    async add(newTodo: string) {
        const todo = {
            id: Math.random().toString(36),
            name: newTodo,
            completed: false,
        } as Todo;
        await this.todoRepository.save(todo)
    }

    async getAll() {
        return await this.todoRepository.getAll()
    }
}
