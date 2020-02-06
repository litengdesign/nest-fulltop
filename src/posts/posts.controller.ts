import { Controller, Get, Post, Body, Query, Param, Put, Delete, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Post as PostSchma} from './post.model'

@ApiTags('文章管理')

@Controller('posts')
export class PostsController {
    constructor(
        @InjectModel(PostSchma)  private readonly  postModel
    ){}

    @ApiOperation({ summary: '文章列表' })
    @Get('/index')
    async index(){
        return await this.postModel.find()
    }

    @ApiOperation({summary:'创建文章'})
    @Post()
    async create(@Body() createPost: PostSchma){
        await this.postModel.create(createPost)
        return {
            success:true
        }
    }

    @ApiOperation({ summary: '文章详情' })
    @Get(":id")
    async detail(@Param("id") id: string) {
        return await this.postModel.findById(id)
    }

    @ApiOperation({summary:'编辑文章'})
    @Put(":id")
    async updated(@Param("id") id: string, @Body() updatePost: PostSchma) {
        await this.postModel.findByIdAndUpdate(id, updatePost)
        return {
            success: true
        }
        
    }
    @ApiOperation({summary:'删除文章'})
    @Delete(":id")
    async remove(@Param("id") id:string){
        await this.postModel.findByIdAndDelete(id)
        return {
            success:true
        }

    }

}
