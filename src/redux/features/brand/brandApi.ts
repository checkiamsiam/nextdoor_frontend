import { baseApi } from "@/redux/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IMeta, IQuery } from "@/types";
import { IBrand } from "@/types/ApiResponse";
import { axiosInstance } from "@/utils/axios/axiosInstance";

const brand_url = "/brand";

export const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query<{ brands: IBrand[]; meta: IMeta }, { params?: IQuery }>({
      query: (arg) => ({
        url: brand_url,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: IBrand[], meta: IMeta) => {
        return {
          brands: response,
          meta,
        };
      },
      providesTags: [tagTypes.brand],
    }),

    getSingleBrand: builder.query<{ brand: IBrand }, { id: string; params?: IQuery }>({
      query: (arg) => ({
        url: brand_url + "/" + arg?.id,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: IBrand) => {
        return {
          brand: response,
        };
      },
      providesTags: [tagTypes.brand],
    }),
    addBrand: builder.mutation({
      query: (arg: { data: FormData }) => ({
        url: brand_url + "/create",
        method: "POST",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.brand],
    }),
    updateBrand: builder.mutation({
      query: (arg: { id: string; data: Partial<IBrand> }) => ({
        url: brand_url + "/update" + "/" + arg.id,
        method: "PATCH",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.brand],
    }),
  }),
});

export const getBrands = async ({ params }: { params?: IQuery }): Promise<{ brands: IBrand[]; meta: IMeta }> => {
  const result = await axiosInstance({
    url: brand_url,
    method: "GET",
    params,
  });
  return {
    brands: result.data,
    //@ts-ignore
    meta: result.meta,
  };
};

export const getSingleBrand = async ({ id, params }: { id: string; params?: IQuery }): Promise<{ brand: IBrand }> => {
  const result = await axiosInstance({
    url: brand_url + "/" + id,
    method: "GET",
    params,
  });
  return {
    brand: result.data,
  };
};

export const { useGetBrandsQuery, useGetSingleBrandQuery, useUpdateBrandMutation, useAddBrandMutation } = brandApi;
