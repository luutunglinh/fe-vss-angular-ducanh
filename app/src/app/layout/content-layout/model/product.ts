export interface product {
  id: number;
  image: string;
  name: string;
  price: number;
  descript: any;
  quantity: number;
}

export interface cart {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export interface navigationList {
  category: string;
  subcategories: string[];
}

export interface SuggestedProduct {
  banerimage: string;
  category: Category;
}

export interface Category {
  id: number;
  category: string;
  subcategory: string;
}
