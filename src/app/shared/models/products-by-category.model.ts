export interface ProductsByCategory {
  category: Category;
  creationAt: Date;
  description: String;
  id: number;
  images: string[];
  price: number;
  title: String;
  updatedAt: Date;
}

export interface Category {
  creationAt: Date;
  id: number;
  image: string;
  name: string;
  updatedAt: Date;
}
