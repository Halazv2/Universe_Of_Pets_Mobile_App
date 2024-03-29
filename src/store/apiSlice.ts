import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Host_Windows, Host_Ubuntu} from '../../env';

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
      providesTags: ['Orders'],
    }),
    setOrder: builder.mutation({
      query: newOrder => ({
        url: 'orders',
        method: 'POST',
        body: newOrder,
      }),
      invalidatesTags: ['Orders'],
    }),
    cancelOrder: builder.mutation({
      query: ref => ({
        url: `orders/${ref}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Orders'],
    }),
    // Cart
    getUserCart: builder.query<void, void>({
      query: id => `cart/${id}`,
      providesTags: ['Cart'],
    }),
    deleteProductFromCart: builder.mutation({
      query: id => ({
        url: `cart/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Cart'],
    }),
    addProductToCart: builder.mutation({
      query: data => ({
        url: 'cart',
        method: 'POST',
        body: data,
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
    signup: builder.mutation({
      query: data => ({
        url: 'client/signup',
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
  useSetOrderMutation,
  useCancelOrderMutation,
  useCreatePaymentIntentMutation,
  useGetUserCartQuery,
  useDeleteProductFromCartMutation,
  useAddProductToCartMutation,
  useLoginMutation,
  useSignupMutation,
} = apiSlice;
