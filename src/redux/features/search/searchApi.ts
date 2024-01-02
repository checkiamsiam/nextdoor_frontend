import { baseApi } from "@/redux/baseApi";
import { IMeta, IQuery } from "@/types";
import { IBrand, ICategory, IProduct } from "@/types/ApiResponse";
import { axiosInstance } from "@/utils/axios/axiosInstance";

export interface SearchResult {
  products: IProduct[];
  categories: ICategory[];
  brands: IBrand[];
  meta: IMeta;
}

const search_url = "/search";

export const searchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query<SearchResult, { params?: IQuery }>({
      query: (arg) => ({
        url: search_url,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: Omit<SearchResult, "meta">, meta: IMeta) => {
        return {
          ...response,
          meta,
        };
      },
    }),
  }),
});

export const getSearch = async ({ params }: { params?: IQuery }): Promise<SearchResult> => {
  const result = await axiosInstance({
    url: search_url,
    method: "GET",
    params,
  });
  return {
    ...result.data,
    //@ts-ignore
    meta: result.meta,
  };
};

export const { useSearchQuery } = searchApi;
