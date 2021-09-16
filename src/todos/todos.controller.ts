import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from './dto';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Put(':id')
  updateTodo(@Param('id') id: number) {
    return this.todosService.handleChecked(Number(id));
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number) {
    return this.todosService.delete(Number(id));
  }
}
