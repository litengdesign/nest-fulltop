import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty} from 'class-validator'
export class Posts {
    // @ApiProperty({ description: '文章标题', example:'文章标题' })
    // @IsNotEmpty({ message: '请输入文章标题', context: { errorCode: 400 }})
    title: string
    // @ApiProperty({ description: '文章内容', example:'文章内容' })
    // @IsNotEmpty({ message: '请输入文章内容' })
    content: string
}
