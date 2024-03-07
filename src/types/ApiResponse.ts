export interface IAdmin {
  id: string;
  name: string;
  phone: string;
  user?: IUser;
  createdAt?: Date;
  updatedAt?: Date;
  _count?: { orders?: number; notifications?: number };
}

export interface ICustomer {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  status: CustomerStatus;
  user?: IUser;
  createdAt?: Date;
  updatedAt?: Date;
  orders?: IOrder[];
  notifications?: ICustomerNotification[];
  _count?: { orders: number; notifications: number };
}

export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  role: UserRole;
  customerId?: string;
  customer?: ICustomer;
  adminId?: string;
  admin?: IAdmin;
  createdAt?: Date;
  updatedAt?: Date;
  _count?: { orders?: number; notifications?: number };
}

export interface ICategory {
  id: string;
  title: string;
  icon?: string;
  createdAt?: Date;
  updatedAt?: Date;
  subCategories?: ISubCategory[];
  products?: IProduct[];
  brands?: ICategoryBrand[];
  _count?: { subCategories: number; products: number; brands: number };
}

export interface ISubCategory {
  id: string;
  title: string;
  icon?: string;
  categoryId: string;
  category: ICategory;
  createdAt?: Date;
  updatedAt?: Date;
  products?: IProduct[];
  _count?: { products: number };
}

export interface IBrand {
  id: string;
  title: string;
  logo?: string;
  createdAt?: Date;
  updatedAt?: Date;
  products?: IProduct[];
  categories?: ICategoryBrand[];
  _count?: { products: number; categories: number };
}

export interface ICategoryBrand {
  categoryId: string;
  category: ICategory;
  brandId: string;
  brand: IBrand;
}

export interface IProduct {
  id: string;
  title: string;
  thumbnail: string;
  images?: string[];
  salePrice: number;
  regularPrice: number;
  status: ProductStatus;
  description?: string;
  keyFeatures?: string[];
  specifications?: string[];
  categoryId: string;
  category: ICategory;
  subCategoryId: string;
  subCategory: ISubCategory;
  brandId: string;
  brand: IBrand;
  createdAt?: Date;
  updatedAt?: Date;
  orders?: IOrderItem[];
  campaigns?: ICampaignItems[];
  campaignFreeItems?: ICampaignFreeItems[];
}

export interface ICampaign {
  id: string;
  name: string;
  description?: string;
  banner?: string;
  startDate: Date;
  endDate: Date;
  tagline?: string;
  type: CampaignType;
  discountPrice?: number;
  discountPercentage?: number;
  products?: ICampaignItems[];
  freeItems?: ICampaignFreeItems[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICampaignItems {
  campaignId: string;
  campaign: ICampaign;
  productId: string;
  product: IProduct;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICampaignFreeItems {
  campaignId: string;
  campaign: ICampaign;
  productId: string;
  product: IProduct;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IOrder {
  id: string;
  customerId: string;
  customer: ICustomer;
  recipietName: string;
  recipietPhone: string;
  recipietEmail: string;
  recipietAddress: string;
  recipietThana: string;
  recipietDivision: string;
  totalPrice: number;
  paymentStatus: PaymentStatus;
  shipingStatus: ShippingStatus;
  invoice?: string;
  createdAt?: Date;
  updatedAt?: Date;
  products?: IOrderItem[];
}

export interface IOrderItem {
  productId: string;
  product: IProduct;
  orderId: string;
  order: IOrder;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IAdminNotification {
  id: string;
  title: string;
  message: string;
  type?: AdminNotificationType;
  refId?: string;
  read: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICustomerNotification {
  id: string;
  customerId: string;
  customer: ICustomer;
  type?: CustomerNotificationType;
  refId?: string;
  title: string;
  message: string;
  url?: string;
  read: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

enum ShippingStatus {
  pending = "pending",
  processing = "processing",
  shipped = "shipped",
  delivered = "delivered",
  canceled = "canceled",
}

enum PaymentStatus {
  pending = "pending",
  partial = "partial",
  paid = "paid",
  canceled = "canceled",
}

enum ProductStatus {
  active = "active",
  disabled = "disabled",
}

enum CustomerStatus {
  active = "active",
  disabled = "disabled",
}

enum CampaignType {
  discountPrice = "discountPrice",
  discountPercentage = "discountPercentage",
  buyToGetFree = "buyToGetFree",
}

enum UserRole {
  admin = "admin",
  customer = "customer",
}

enum AdminNotificationType {
  order = "order",
}

enum CustomerNotificationType {
  orderStatus = "orderStatus",
}
