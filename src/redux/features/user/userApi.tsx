import { baseApi } from "@/redux/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IMeta, IQuery } from "@/types";
import { ICustomer, IUser } from "@/types/ApiResponse";

const users_url = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query({
      query: () => ({
        url: users_url + "/profile",
        method: "GET",
      }),
      transformResponse: (response: IUser): { user: IUser } => {
        return {
          user: response,
        };
      },
      providesTags: [tagTypes.user],
    }),
    getCustomers: builder.query<{ customers: ICustomer[]; meta: IMeta }, { params?: IQuery }>({
      query: (arg) => ({
        url: users_url + "/get-customers",
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: ICustomer[], meta: IMeta) => {
        return {
          customers: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),
    getSingleCustomers: builder.query<{ customer: ICustomer }, { id: string; params?: IQuery }>({
      query: (arg) => ({
        url: users_url + "/get-single-customer" + "/" + arg.id,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: ICustomer) => {
        return {
          customer: response,
        };
      },
      providesTags: [tagTypes.user],
    }),
    addCustomer: builder.mutation({
      query: (arg: Partial<ICustomer & IUser>) => ({
        url: users_url + "/create-customer",
        method: "POST",
        data: arg,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateCustomer: builder.mutation({
      query: (arg: { id: string; data: Partial<ICustomer & IUser> }) => ({
        url: users_url + "/update-customer" + "/" + arg.id,
        method: "PATCH",
        data: arg.data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useProfileQuery, useGetCustomersQuery, useAddCustomerMutation, useUpdateCustomerMutation, useGetSingleCustomersQuery } = userApi;
