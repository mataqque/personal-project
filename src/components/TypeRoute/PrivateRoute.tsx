import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ErrorBoundary } from '../../routes/Boundary';
import { PrivateRouteProps } from './interface/privateRoute';
import { Loader } from '../UI/loaderPage/loader';
import { useVerifyTokenMutation } from '../../store/apis/authApi.api';
import { callbackDelay } from '../../helpers/helpers';
const iconLoader = require('../../assets/images/Account/icons/infinity-loader.json');
export default function PrivateRoute(props: PrivateRouteProps) {
	const navigate = useNavigate();
	const [isSuccess, setIsSuccess] = useState(false);
	const UseCase: any = {
		unautorized: () => {
			navigate('/account/login');
		},
		authorized: (res: any) => {
			callbackDelay(() => setIsSuccess(true), 3000);
		},
	};
	const [verifyLogin, { isLoading }] = useVerifyTokenMutation();
	useEffect(() => {
		(async () => {
			let res: any = await verifyLogin('');
			switch (res.data.status) {
				case 200:
					UseCase.authorized(res);
					break;
				case 401:
					UseCase.unautorized(res);
			}
		})();
	}, []);
	return (
		<>
			{process.env.NODE_ENV === 'production' && <Loader properties={{ icon: iconLoader, class: 'loader-global', positionCss: 'fixed' }} active={isSuccess} delay={700} />}
			<ErrorBoundary>
				<Helmet>
					<script src='https://kit.fontawesome.com/6611670d58.js'></script>
				</Helmet>
			</ErrorBoundary>
			{props.children}
		</>
	);
}
