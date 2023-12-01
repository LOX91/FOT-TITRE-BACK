import { Article } from 'src/article/entities/article.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'category' })
export class Category {
  @PrimaryGeneratedColumn()
  id_category: number;

  @Column()
  name: string;

  @OneToMany(() => Article, (article) => article.category, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: 'id_category', referencedColumnName: 'id' })
  articles: Article[];
}
