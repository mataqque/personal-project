import { useVerifyTokenMutation } from '../../../store/apis/authApi.api';
import { VerifyTokenResponse } from '../interface/privateRoute';

async function VerifyCredential(props: any) {
	const [verifyToken, { isSuccess }] = props.useVerifyTokenMutation;
	const token = localStorage.getItem('token');
	let result: VerifyTokenResponse = await verifyToken({ token: token });
	console.log(result);
	// return result;
}

export const verifyCredential = VerifyCredential({ useVerifyTokenMutation });
