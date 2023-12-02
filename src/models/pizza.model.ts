export type Pizza = {
  id?: number;
  productName?: string;
  category_id?: string;
  description?: string;
  price?: string;
}

export enum FieldPizza {
  ProductName = 'productName',
  Description = 'description',
  Price = 'price',
}