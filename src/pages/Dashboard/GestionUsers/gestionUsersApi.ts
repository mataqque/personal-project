import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BASE_API_BACKEND } from '../../../store/config';

export const gestionUsersApi = createApi({
	reducerPath: 'gestionUsersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: URL_BASE_API_BACKEND,
	}),
	endpoints: builder => ({
		getListUsers: builder.mutation({
			query: () => {
				return {
					url: `/users/getDataUsers`,
					method: 'POST',
					headers: {
						authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				};
			},
		}),
		deleteUser: builder.mutation({
			query: ({ uuid }) => {
				return {
					url: `/users/delete/${uuid}`,
					method: 'POST',
					headers: {
						authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				};
			},
		}),
	}),
});

export const { useDeleteUserMutation, useGetListUsersMutation } = gestionUsersApi;
