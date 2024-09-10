import { Todo } from "./Todo"

export interface TodoRepository {
    save(todo: Todo): void
    getAll(): Todo[]
}