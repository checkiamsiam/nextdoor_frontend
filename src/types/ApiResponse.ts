export interface Admin {
  id: string;
  name: string;
  phone: string;
  user?: User;
  createdAt?: Date;
  updatedAt?: Date;
  _count?: { orders?: number; notifications?: number };
}

export interface Customer {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  status: CustomerStatus;
  user?: User;
  createdAt?: Date;
  updatedAt?: Date;
  orders?: Order[];
  notifications?: CustomerNotification[];
  _count?: { orders: number; notifications: number };
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: UserRole;
  customerId?: string;
  customer?: Customer;
  adminId?: string;
  admin?: Admin;
  createdAt?: Date;
  updatedAt?: Date;
  _count?: { orders?: number; notifications?: number };
}

export interface Category {
  id: string;
  title: string;
  icon?: string;
  createdAt?: Date;
  updatedAt?: Date;
  subCategories?: SubCategory[];
  products?: Product[];
  brands?: CategoryBrand[];
  _count?: { subCategories: number; products: number; brands: number };
}

export interface SubCategory {
  id: string;
  title: string;
  icon?: string;
  categoryId: string;
  category: Category;
  createdAt?: Date;
  updatedAt?: Date;
  products?: Product[];
  _count?: { products: number };
}

export interface Brand {
  id: string;
  title: string;
  logo?: string;
  createdAt?: Date;
  updatedAt?: Date;
  products?: Product[];
  categories?: CategoryBrand[];
  _count?: { products: number; categories: number };
}

export interface CategoryBrand {
  categoryId: string;
  category: Category;
  brandId: string;
  brand: Brand;
}

export interface Product {
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
  category: Category;
  subCategoryId: string;
  subCategory: SubCategory;
  brandId: string;
  brand: Brand;
  createdAt?: Date;
  updatedAt?: Date;
  orders?: OrderItem[];
  campaigns?: CampaignItems[];
  campaignFreeItems?: CampaignFreeItems[];
}

export interface Campaign {
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
  products?: CampaignItems[];
  freeItems?: CampaignFreeItems[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CampaignItems {
  campaignId: string;
  campaign: Campaign;
  productId: string;
  product: Product;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CampaignFreeItems {
  campaignId: string;
  campaign: Campaign;
  productId: string;
  product: Product;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Order {
  id: string;
  customerId: string;
  customer: Customer;
  recipietName: string;
  recipietPhone: string;
  recipietEmail: string;
  recipietAddress: string;
  recipietThana: string;
  recipietDivision: string;
  totalPrice: number;
  paymentStatus: PaymentStatus;
  shipingStatus: ShipingStatus;
  invoice?: string;
  createdAt?: Date;
  updatedAt?: Date;
  products?: OrderItem[];
}

export interface OrderItem {
  productId: string;
  product: Product;
  orderId: string;
  order: Order;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AdminNotification {
  id: string;
  title: string;
  message: string;
  type?: AdminNotificationType;
  refId?: string;
  read: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CustomerNotification {
  id: string;
  customerId: string;
  customer: Customer;
  type?: CustomerNotificationType;
  refId?: string;
  title: string;
  message: string;
  url?: string;
  read: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

enum ShipingStatus {
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

enum CampaignStatus {
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
