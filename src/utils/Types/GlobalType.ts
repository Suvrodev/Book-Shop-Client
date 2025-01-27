export type TUser = {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  isBlocked: boolean;
  iat: number;
  exp: number;
};

export type TTokenUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  isBlocked: boolean;
  iat: number;
  exp: number;
};

export type TBook = {
  _id: string;
  title: string;
  author: string;
  brand: string;
  category: string;
  description: string;
  imageUrl: string;
  price: number;
  inStock: boolean;
  quantity: number;
  model: string;
  refUser: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
