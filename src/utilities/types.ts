type Food = {
  _id: String;
  foodName: String;
  price: Number;
  image: String;
  ingredients: String;
  category: String;
  createdAt: Date;
  updatedAt: Date;
};

type FoodOrderItem = {
  food: String;
  quantity: Number;
};
type FoodOrder = {
  _id: String;
  user: String;
  totalPrice: Number;
  foodOrderItems: FoodOrder[];
  status: FoodOrderStatusEnum;
  createdAt: Date;
  updatedAt: Date;
};
type FoodOrderStatusEnum = {
  PENDING: PENDING;
  CANCELED: CANCELED;
  DELIVERED: DELIVERED;
};
type FoodCategory = {
  _id: String;
  categoryName: String;
  createdAt: Date;
  updatedAt: Date;
};
type User = {
  _id: String;
  email: String;
  password: String;
  phoneNumber: String;
  address: String;
  role: UserRoleEnum;
  orderedFoods: String;
  ttl: Date;
  isVerified: Boolean;
  createdAt: Date;
  updatedAt: Date;
};
type UserRoleEnum = {
  USER: USER;
  ADMIN: ADMIN;
};
