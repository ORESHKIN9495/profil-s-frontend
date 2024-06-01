interface Vacancy {
  id: number;
  name: string;
  address: string;
  cost: string;
  period: string;
  duties: string[];
  requirements: string[];
  conditions: string[];
  created_at: string;
  published: boolean;
}

export type { Vacancy };
