import { Controller, Get, Request, Post, UseGuards, Req } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service'
import { AuthGuard } from '@nestjs/passport';
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
    ) { }

    // 登陆
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() req) {
        return this.authService.login(req.user);
    }
}