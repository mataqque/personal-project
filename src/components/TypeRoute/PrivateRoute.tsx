import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ErrorBoundary } from '../../routes/Boundary';
import { PrivateRouteProps } from './interface/privateRoute';
import { Loader } from '../UI/loaderPage/loader';
import { useVerifyTokenMutation } from '../../store/apis/authApi.api';
import { callbackDelay } from '../../helpers/helpers';
import { clearAddImages } from '../../pages/Dashboard/GestionProduct/components/addImagesSlice';
import { useDispatch } from 'react-redux';
import { saveDataUser } from '../../store/globlalSlice/user/user.slice';
const iconLoader = require('../../assets/images/Account/icons/infinity-loader.json');
export default function PrivateRoute(props: PrivateRouteProps) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isSuccess, setIsSuccess] = useState(false);
	const [verifyLogin, { isLoading }] = useVerifyTokenMutation();
	const UseCase: any = {
		unautorized: () => {
			navigate('/account/login');
		},
		authorized: (res: any) => {
			const { user } = res.data;
			dispatch(saveDataUser(user));
			callbackDelay(() => setIsSuccess(true), 3000);
		},
	};
	const updateCredentials = async () => {
		// dispatch(clearAddImages());
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
	};
	useEffect(() => {
		updateCredentials();
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
