import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypegooseModule } from "nestjs-typegoose";
import { AuthController } from './auth/auth.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost:27017/liteng-nest", {
      useNewUrlParser: true
    }),
    PostsModule,
    AuthModule,
    UsersModule,
  ]
  ,
  controllers: [AppController, AuthController, UsersController],
  providers: [AppService],
})
export class AppModule {}
