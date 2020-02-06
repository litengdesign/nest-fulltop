import { Controller, Get, Post, Body, Query, Param, Put, Delete, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { UsersService } from './users.service';
import { User} from './users.model';
@ApiTags('用户管理')
@Controller('users')
export class UsersController {
    
    constructor(private userServer: UsersService) { }

    @ApiOperation({ summary: '注册用户' })
    @Post()
    async create(@Body() createUser: User) {
        // await this.postModel.create(createUser)
        // this.userServer.create();
        return {
            success: true
        }
    }
    
}
