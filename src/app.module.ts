import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypegooseModule } from "nestjs-typegoose";
import { UsersService } from './users/users.service';

@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost:27017/liteng-nest", {
      useNewUrlParser: true
    }),
    PostsModule,
  ]
  ,
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
