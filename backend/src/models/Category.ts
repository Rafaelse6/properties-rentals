import { v4 } from 'uuid';

class Category {
  id: string;
  name: string;
  description: string;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { Category };
