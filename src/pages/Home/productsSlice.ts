import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BASE_API_BACKEND } from '../../store/config';

export const getProductsApi = createApi({
	reducerPath: 'getProductsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: URL_BASE_API_BACKEND,
	}),
	endpoints: builder => ({
		getProducts: builder.mutation({
			query: data => {
				return {
					url: `/home/getproducts`,
					method: 'GET',
				};
			},
		}),
	}),
});
export const { useGetProductsMutation } = getProductsApi;
