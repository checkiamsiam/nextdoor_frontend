import { baseApi } from "@/redux/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IMeta, IQuery } from "@/types";
import { IProduct } from "@/types/ApiResponse";
import { axiosInstance } from "@/utils/axios/axiosInstance";

const product_url = "/product";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get All Products
    getProducts: builder.query<
      { products: IProduct[]; meta: IMeta },
      { params?: IQuery }
    >({
      query: (arg) => ({
        url: product_url,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: IProduct[], meta: IMeta) => {
        return {
          products: response,
          meta,
        };
      },
      providesTags: [tagTypes.product],
    }),

    // Get Single Product
    getSingleProduct: builder.query<
      { product: IProduct },
      { id: string; params?: IQuery }
    >({
      query: (arg) => ({
        url: product_url + "/" + arg?.id,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: IProduct) => {
        return {
          product: response,
        };
      },
      providesTags: [tagTypes.product],
    }),

    // Create Product
    addProduct: builder.mutation({
      query: (arg: { data: FormData }) => ({
        url: product_url + "/create",
        method: "POST",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.product],
    }),

    // Update Product
    updateProduct: builder.mutation({
      query: (arg: { id: string; data: Partial<IProduct> }) => ({
        url: product_url + "/update" + "/" + arg.id,
        method: "PATCH",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.product],
    }),
  }),
});

export const getProducts = async ({
  params,
}: {
  params?: IQuery;
}): Promise<{ products: IProduct[]; meta: IMeta }> => {
  const result = await axiosInstance({
    url: product_url,
    method: "GET",
    params,
  });
  return {
    products: result.data,
    //@ts-ignore
    meta: result.meta,
  };
};

export const getSingleProduct = async ({
  id,
  params,
}: {
  id: string;
  params?: IQuery;
}): Promise<{ product: IProduct }> => {
  const result = await axiosInstance({
    url: product_url + "/" + id,
    method: "GET",
    params,
  });
  return {
    product: result.data,
  };
};

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
} = productApi;
