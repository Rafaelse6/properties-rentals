import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const route = Router();
const categoriesRepository = new CategoriesRepository();

route.post('/', (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

export { route };
