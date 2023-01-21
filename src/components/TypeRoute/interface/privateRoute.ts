import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

export interface PrivateRouteProps {
	children: React.ReactNode;
	verifyCredential?: any;
}

interface VerifyTokenResult {
	data: any;
}

interface VerifyTokenError {
	error: FetchBaseQueryError | SerializedError;
}

export type VerifyTokenResponse = VerifyTokenResult | VerifyTokenError;
