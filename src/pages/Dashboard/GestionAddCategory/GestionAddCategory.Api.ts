import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BASE_API_BACKEND } from '../../../store/config';

export const gestionCategoryApi = createApi({
	reducerPath: 'gestionAddCategoryApi',
	baseQuery: fetchBaseQuery({
		baseUrl: URL_BASE_API_BACKEND,
	}),
	endpoints: builder => ({
		getAddCategory: builder.mutation({
			query: data => {
				return {
					url: `/categories/add`,
					method: 'POST',
					body: data,
					headers: {
						authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				};
			},
		}),
		getListCategories: builder.mutation({
			query: ({ pageIndex }) => {
				return {
					url: `/categories/getDataCategories/${pageIndex}`,
					method: 'GET',
					headers: {
						authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				};
			},
		}),
		// getListCategories: builder.mutation({
		// 	query: () => {
		// 		return {
		// 			url: `/categories/getDataCategories`,
		// 			method: 'POST',
		// 			headers: {
		// 				authorization: `Bearer ${localStorage.getItem('token')}`,
		// 			},
		// 		};
		// 	},
		// }),
		deleteCategory: builder.mutation({
			query: ({ uuid }) => {
				return {
					url: `/categories/delete/${uuid}`,
					method: 'POST',
					headers: {
						authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				};
			},
		}),
	}),
});

export const { useGetAddCategoryMutation, useGetListCategoriesMutation, useDeleteCategoryMutation } = gestionCategoryApi;
