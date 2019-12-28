import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { Posts} from '../models/posts'
import { PostModel } from './post.model';

@ApiTags('文章管理')

@Controller('posts')
export class PostsController {

    @ApiOperation({ summary: '文章列表' })
    @Get('/index')
    async index(){
        return await PostModel.find()
    }

    @ApiOperation({summary:'创建文章'})
    @Post()
    async create(@Body() createPost: Posts){
        await PostModel.create(createPost)
        return {
            success:true
        }
    }

    @ApiOperation({ summary: '文章详情' })
    @Get(":id")
    async detail(@Param("id") id: string) {
        return await PostModel.findById(id)
    }

    @ApiOperation({summary:'编辑文章'})
    @Put(":id")
    async updated(@Param("id") id: string, @Body() updatePost: Posts) {
        await PostModel.findByIdAndUpdate(id, updatePost)
        return {
            success: true
        }
        
    }
    @ApiOperation({summary:'删除文章'})
    @Delete(":id")
    async remove(@Param("id") id:string){
        await PostModel.findByIdAndDelete(id)
        return {
            success:true
        }

    }

}
