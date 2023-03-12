import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BASE_API_BACKEND } from '../../../store/config';

export const gestionFormsApi = createApi({
	reducerPath: 'gestionFormsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: URL_BASE_API_BACKEND,
	}),
	endpoints: builder => ({
		getListForms: builder.mutation({
			query: ({ pageIndex }) => {
				return {
					url: `/products/getProducts/${pageIndex}`,
					method: 'GET',
					headers: {
						authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				};
			},
		}),
		deleteForms: builder.mutation({
			query: ({ uuid }) => {
				return {
					url: `/products/delete/${uuid}`,
					method: 'GET',
					headers: {
						authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				};
			},
		}),
	}),
});

export const { useDeleteFormsMutation, useGetListFormsMutation } = gestionFormsApi;
