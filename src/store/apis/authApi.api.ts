import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BASE_API_BACKEND, URL_BASE_BACKEND } from '../config';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: URL_BASE_API_BACKEND,
	}),
	endpoints: builder => ({
		verifyToken: builder.mutation({
			query: ({ id, ...patch }) => ({
				url: `/verifyToken`,
				method: 'POST',
				headers: {
					authorization: `Bearer ${localStorage.getItem('token')}`,
				},
				body: patch,
			}),
		}),
	}),
});

export const account = createApi({
	reducerPath: 'account',
	baseQuery: fetchBaseQuery({
		baseUrl: URL_BASE_API_BACKEND,
	}),
	endpoints: builder => ({
		login: builder.mutation({
			query: ({ id, ...patch }) => ({
				url: `login`,
				method: 'POST',
				body: patch,
			}),
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useVerifyTokenMutation } = authApi;
export const { useLoginMutation } = account;
