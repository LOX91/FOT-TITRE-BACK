import { Controller, Delete, Param, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Article } from 'src/article/entities/article.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(':userId/favorites/:articleId')
  async addToFavorites(
    @Param('userId') userId: number,
    @Param('articleId') articleId: number,
  ): Promise<User> {
    return this.userService.addToFavorites(userId, articleId);
  }

  @Get(':userId/favorites')
  async getUserFavorites(@Param('userId') userId: number): Promise<Article[]> {
    return this.userService.getUserFavorites(userId);
  }

  @Delete(':userId/favorites/:articleId')
  async removeFromFavorites(
    @Param('userId') userId: number,
    @Param('articleId') articleId: number,
  ) {
    await this.userService.removeFromFavorites(userId, articleId);
  }
}
