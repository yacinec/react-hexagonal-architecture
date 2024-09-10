import { Todo } from '@/modules/todos/domain/Todo';
import { TodoDTO } from './TodoDTO';

export class TodoMapper {
  static toDTO(todo: Todo): TodoDTO {
    return {
      id: todo.id,
      name: todo.name,
      completed: todo.completed,
    };
  }

  static toDomain(dto: TodoDTO): Todo {
    return {
      id: dto.id,
      name: dto.name,
      completed: dto.completed
    }
  }
}