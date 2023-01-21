import { Fragment, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LoginSchema } from '../../../components/helpers/common/forms/constraints/ValidatonSchemas';
import { FormContainer } from '../../../components/helpers/common/forms/Form';
import { InputText, InputTextPassword } from '../../../components/UI/inputs/inputText';
import { useLoginMutation } from '../../../store/apis/authApi.api';
import { saveToken } from '../../../store/globlalSlice/auth/auth.slice';
import { ILogin } from './interfaces/login.interface';
import { ParametersForm } from '../interfaces/interface';
import { ButtonSubmit } from './components/ButtonSubmit.styled';
import eye from '../../../assets/images/Account/icons/eye-svg.svg?url';
import { LinkComponentRegister, ShowErrorLogin } from '../components/linkcomponent';
import { FormStyled } from '../../../components/UI/GlobalComponents/Form/form';

export const Login: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [verifyLogin, { isLoading }] = useLoginMutation();
	const [error, setError] = useState<boolean>(false);
	const inputPassword = useRef<HTMLInputElement>(null);
	const [initialValues, setInitialValues] = useState<ILogin>({
		email: '',
		password: '',
	});

	const UseCase: any = {
		unautorized: () => {
			setError(true);
		},
		authorized: (res: any) => {
			dispatch(saveToken(res.data));
			navigate('/dashboard');
		},
	};
	const handleSubmit = async (values: ILogin) => {
		let res: any = await verifyLogin(values);
		switch (res.data.status) {
			case 200:
				UseCase.authorized(res);
				break;
			case 401:
				UseCase.unautorized(res);
		}
	};
	return (
		<>
			<Helmet>
				<title>Login</title>
			</Helmet>
			<main className='login'>
				<h1 className='text-center c-letter title  '>Acceder a plataforma</h1>
				<p className='paragraph text-center mb-4'>Ingresa tu datos para iniciar sesión</p>
				<FormContainer initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleSubmit}>
					{(form: any) => {
						const { handleSubmit, isSubmitting }: ParametersForm = form;
						return (
							<FormStyled onSubmit={handleSubmit} autoComplete={'off'}>
								<div className='mb-2'>
									<InputText name='email' placeholder='Email' form={form} icon={eye} />
								</div>
								<div className='mb-2'>
									<InputTextPassword name='password' placeholder='Contraseña' form={form} icon={eye} />
								</div>
								<ButtonSubmit type='submit'>Ingresar</ButtonSubmit>
							</FormStyled>
						);
					}}
				</FormContainer>
				<LinkComponentRegister />
				<ShowErrorLogin error={error} />
				<Link to='/account/password-recovery' className='reset-password   border rounded-full px-4 py-2'>
					Olvidaste tu contraseña
				</Link>
			</main>
		</>
	);
};
