import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Host_Windows, Host_Ubuntu} from '../../env';

// const Host_Windows = 'http://192.168.1.14:4000/api';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({baseUrl: Host_Ubuntu + '/api'}),
  tagTypes: ['Products', 'Orders', 'Payments', 'Cart'],
  endpoints: builder => ({
    getProducts: builder.query<void, void>({
      query: () => 'products',
    }),
    getProduct: builder.query({
      query: id => `products/byId/${id}`,
    }),
    // Orders
    createOrder: builder.mutation({
      query: newOrder => ({
        url: 'orders',
        method: 'POST',
        body: newOrder,
      }),
    }),
    getOrder: builder.query({
      query: ref => `orders/${ref}`,
    }),
    getUserCart: builder.query<void, void>({
      query: id => `cart/${id}`,
    }),
    deleteProductFromCart: builder.mutation({
      query: id => ({
        url: `cart/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Cart'],
    }),
    // Payments
    createPaymentIntent: builder.mutation({
      query: data => ({
        url: 'payments/intents',
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: data => ({
        url: 'client/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateOrderMutation,
  useGetOrderQuery,
  useCreatePaymentIntentMutation,
  useGetUserCartQuery,
  useDeleteProductFromCartMutation,
  useLoginMutation,
} = apiSlice;
