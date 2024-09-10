import { Todo } from '@/modules/todos/domain/Todo';
import { TodoRepository } from "@/modules/todos/domain/TodoRepository";
import { TodoMapper } from "../application/TodoMapper";
import { TodoDTO } from "../application/TodoDTO";

export class LocalStorageTodoRepository implements TodoRepository {
    private readonly localStorageKey = 'todos';
  
    save(todo: Todo): void {
      const todos = this.getAll();
      const todoDTO = TodoMapper.toDTO(todo);
      localStorage.setItem(this.localStorageKey, JSON.stringify([...todos, todoDTO]));
    }
  
    getAll(): Todo[] {
      const todosString = localStorage.getItem(this.localStorageKey);
      if (!todosString) return [];
  
      const todoDTOs: TodoDTO[] = JSON.parse(todosString);
      return todoDTOs.map(TodoMapper.toDomain);
    }
  }