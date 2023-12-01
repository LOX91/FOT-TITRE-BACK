import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);
    const result = await this.categoryRepository.save(category);
    return result;
  }

  findAll() {
    return this.categoryRepository.find();
  }

  async remove(id_category: number): Promise<void> {
    const categoryToRemove = await this.categoryRepository.findOneBy({
      id_category,
    });

    if (!categoryToRemove) {
      // You can choose how to handle cases where the article with the given id is not found.
      // Here, I'm throwing an exception, but you can also return a specific message or status code.
      throw new Error(`Categorie avec l'ID ${id_category} absent!`);
    }

    await this.categoryRepository.remove(categoryToRemove);
  }
}
