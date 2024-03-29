import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TodoSchema } from 'src/models/todo.model';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forFeature([{name : 'Todo', schema : TodoSchema }])],
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {}
