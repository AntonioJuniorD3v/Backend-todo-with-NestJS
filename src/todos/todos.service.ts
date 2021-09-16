import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  create(todo: Todo): Todo[] {
    this.todos.push({
      ...todo,
      checked: false,
      id: Math.ceil(Math.random() * (999 - 1) + 1),
    });
    return this.todos;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  handleChecked(id: number): Todo[] {
    this.todos = this.todos.map((td) => {
      if (td.id === id) {
        return { ...td, checked: !td.checked };
      } else {
        return td;
      }
    });

    return this.todos;
  }

  delete(id: number): Todo[] {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return this.todos;
  }
}
