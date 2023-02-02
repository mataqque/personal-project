import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BASE_API_BACKEND } from '../../../store/config';

export const gestionApiProduct = createApi({
	reducerPath: 'gestionApiProduct',
	baseQuery: fetchBaseQuery({
		baseUrl: URL_BASE_API_BACKEND,
	}),
	endpoints: builder => ({
		getListProducts: builder.mutation({
			query: ({ id, ...patch }) => ({
				url: `/`,
				method: 'GET',
				headers: {
					authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			}),
		}),
		getListProduct: builder.mutation({
			query: ({ id }) => {
				return {
					url: `/products/getProduct/${id}`,
					method: 'GET',
					headers: {
						authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				};
			},
		}),
		deleteProducts: builder.mutation({
			query: ({ id, ...patch }) => ({
				url: `/files/delete`,
				method: 'POST',
				body: patch,
				headers: {
					authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			}),
		}),
		deleteProduct: builder.mutation({
			query: ({ id, ...patch }) => ({
				url: `/files/delete`,
				method: 'POST',
				body: patch,
				headers: {
					authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			}),
		}),
	}),
});

export const { useDeleteProductMutation, useDeleteProductsMutation, useGetListProductMutation, useGetListProductsMutation } = gestionApiProduct;
