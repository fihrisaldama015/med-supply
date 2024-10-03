export type Product = {
  id: string;
  storeId: string;
  categoryId: string;
  name: string;
  price: string;
  description: string;
  stock: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: string;
  updatedAt: string;
  images: Image[];
  category: Category;
};

export interface ProductCart extends Product {
  quantity: number;
}

export type Image = {
  id: string;
  productId: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  id: string;
  storeId: string;
  bannerId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type Sort = "newest" | "price_asc" | "price_desc" | "oldest";
