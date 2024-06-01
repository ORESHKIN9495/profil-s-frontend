interface Post {
  id: number;
  name: string;
  description: string;
  image: string;
  created_at: string;
  updated_at: string;
  published: boolean;
  promo: boolean;
  file: string;
}

export type { Post };
