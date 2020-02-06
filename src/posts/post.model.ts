
import { prop } from '@hasezoey/typegoose'
import { IsNotEmpty } from 'class-validator'
export class Post{
   @prop()
   @IsNotEmpty({ message: '请输入文章标题', context: { errorCode: 400 } })
   title:string

    @prop()
    @IsNotEmpty({ message: '请输入文章内容' })
    content: string

}



