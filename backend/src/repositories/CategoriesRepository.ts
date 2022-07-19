import { Category } from '../models/Category';
import { CategoryDTO } from '../dto/CategoryDTO';

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({name, description} : CategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }
}

export { CategoriesRepository };
