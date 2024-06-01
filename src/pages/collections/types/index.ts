interface Product {
  id?: number;
  category: Category;
  characteristic: Characteristic;
  created_at?: string;
  published: boolean;
}

interface Iso {
  id?: number;
  name: string;
}

interface File {
  id?: number;
  image: string;
  video: string;
}

interface Characteristic {
  id?: number;
  max_price: string;
  price: string;
  size: string;
  thickness: string;
  weight: string;
}

interface Category {
  id?: number;
  file: File;
  sub_category: SubCategory;
  description: string;
  iso: Iso[];
  name: string;
  published: boolean;
  created_at?: string;
}

interface SubCategory {
  id?: number;
  name: string;
  description: string;
  content: string;
  published: boolean;
  created_at?: string;
}

export type { Category, Characteristic, File, Iso, Product, SubCategory };
