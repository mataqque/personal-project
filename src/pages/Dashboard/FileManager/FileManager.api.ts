import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BASE_API_BACKEND } from '../../../store/config';

export const filesApi = createApi({
	reducerPath: 'filesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: URL_BASE_API_BACKEND,
	}),
	endpoints: builder => ({
		getFiles: builder.mutation({
			query: ({ id, ...patch }) => ({
				url: `/files/getFiles/all`,
				method: 'GET',
				headers: {
					authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			}),
		}),
		deleteFiles: builder.mutation({
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

export const { useGetFilesMutation, useDeleteFilesMutation } = filesApi;
