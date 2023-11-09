import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { Article } from './entities/article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { PictureModule } from 'src/picture/picture.module';

@Module({
  imports: [
    PictureModule,
    TypeOrmModule.forFeature([Article]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
  exports: [TypeOrmModule.forFeature([Article])],
})
export class ArticleModule {}
