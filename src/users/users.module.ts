import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User} from './users.model';
import { Post} from '../posts/post.model'
import { UsersController} from './users.controller'
@Module({
    imports: [
        TypegooseModule.forFeature([Post])
    ],
    providers: [UsersService],
    exports: [UsersService],
    controllers: [UsersController]
})
export class UsersModule { 


}
