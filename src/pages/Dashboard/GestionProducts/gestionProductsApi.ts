import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BASE_API_BACKEND } from '../../../store/config';

export const gestionProductsApi = createApi({
	reducerPath: 'gestionApiProduct',
	baseQuery: fetchBaseQuery({
		baseUrl: URL_BASE_API_BACKEND,
	}),
	endpoints: builder => ({
		getListProducts: builder.mutation({
			query: () => ({
				url: `/products/getProducts`,
				method: 'GET',
				headers: {
					authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			}),
		}),
	}),
});

export const { useGetListProductsMutation } = gestionProductsApi;
