import { Category } from "@main/modules/categories/interfaces/category.interface";

export interface ProductsResponse {
  count:    number;
  pages:    number;
  products: Product[];
}

export interface Product {
  id:                string;
  name:              string;
  options:           Option[];
  slug:              string;
  img_dest:          string;
  features:          string[];
  price:             string;
  commision:         string;
  stock:             string;
  brand:             string;
  description_title: string;
  description_text:  string;
  tags:              string[];
  specifications:    Specification[];
  shipping:          string;
  delivery_time:     string;
  discount:          Discount;
  created_at:        Date;
  updated_at:        Date;
  images:            string[];
  category:          Category;
  questions:         any[];
  reviews:           any[];
}

export interface Discount {
  price:  number;
  finish: Date;
}

export interface Option {
  values:       string[];
  title_option: string;
}

export interface Specification {
  value:    string;
  property: string;
}
