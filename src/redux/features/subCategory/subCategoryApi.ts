import { baseApi } from "@/redux/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IMeta, IQuery } from "@/types";
import { ISubCategory } from "@/types/ApiResponse";

const subCategory_url = "/sub-category";

export const subSubCategoryAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSubCategories: builder.query<{ subCategories: ISubCategory[]; meta: IMeta }, { params?: IQuery }>({
      query: (arg) => ({
        url: subCategory_url,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: ISubCategory[], meta: IMeta) => {
        return {
          subCategories: response,
          meta,
        };
      },
      providesTags: [tagTypes.subCategory],
    }),
    getSingleSubCategory: builder.query<{ subCategory: ISubCategory }, { id: string; params?: IQuery }>({
      query: (arg) => ({
        url: subCategory_url + "/" + arg?.id,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: ISubCategory) => {
        return {
          subCategory: response,
        };
      },
      providesTags: [tagTypes.subCategory],
    }),
    addSubCategory: builder.mutation({
      query: (arg: { data: FormData }) => ({
        url: subCategory_url + "/create",
        method: "POST",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.subCategory],
    }),
    updateSubCategory: builder.mutation({
      query: (arg: { id: string; data: Partial<ISubCategory> }) => ({
        url: subCategory_url + "/update" + "/" + arg.id,
        method: "PATCH",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.subCategory],
    }),
  }),
});

export const { useGetSingleSubCategoryQuery, useGetSubCategoriesQuery, useAddSubCategoryMutation, useUpdateSubCategoryMutation } = subSubCategoryAPI;
