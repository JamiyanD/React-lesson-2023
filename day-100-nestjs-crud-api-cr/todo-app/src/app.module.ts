import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TodosModule,MongooseModule.forRoot('mongodb+srv://jamiyan:jamiyan48@jaya.qs1n9nb.mongodb.net/test') ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
