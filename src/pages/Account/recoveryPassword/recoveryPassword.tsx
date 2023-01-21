import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LoginSchema } from '../../../components/helpers/common/forms/constraints/ValidatonSchemas';
import { FormContainer } from '../../../components/helpers/common/forms/Form';
import { InputText } from '../../../components/UI/inputs/inputText';
import { useLoginMutation } from '../../../store/apis/authApi.api';
import { saveToken } from '../../../store/globlalSlice/auth/auth.slice';
import { IRecoveryPassword } from './interfaces/recovery.interface';
import { ParametersForm } from '../interfaces/interface';
import eye from '../../../assets/images/Account/icons/eye-svg.svg?url';
import { ButtonSubmit } from '../login/components/ButtonSubmit.styled';
import { LinkComponentRegister } from '../components/linkcomponent';
import { FormStyled } from '../../../components/UI/GlobalComponents/Form/form';

export const RecoveryPassword: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [verifyLogin, { isLoading }] = useLoginMutation();
	const inputPassword = useRef<HTMLInputElement>(null);
	const [iconShowPassword, SetIconShowPassword] = useState<boolean>(true);
	const [initialValues, setInitialValues] = useState<IRecoveryPassword>({
		email: '',
	});
	const showPassword = () => {
		inputPassword.current?.getAttribute('type') === 'password' ? SetIconShowPassword(false) : SetIconShowPassword(true);
	};
	const handleSubmit = async (values: IRecoveryPassword) => {
		let res: any = await verifyLogin(values);
		console.log(values);
		// if (res.data.status === 200) {
		// 	dispatch(saveToken(res.data));
		// 	navigate('/dashboard');
		// }
	};
	return (
		<>
			<Helmet>
				<title>Recuperar contraseña</title>
			</Helmet>
			<main className='login'>
				<h1 className='text-center   title mb-1'>Olvidaste tu contraseña</h1>
				<p className='paragraph text-center mb-2'>Ingrese la dirección de correo electrónico que utilizó cuando se unió y le enviaremos instrucciones para restablecer su contraseña.</p>
				<FormContainer initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleSubmit}>
					{(form: any) => {
						const { handleSubmit, isSubmitting }: ParametersForm = form;
						return (
							<FormStyled onSubmit={handleSubmit}>
								<InputText name='email' placeholder='Correo electrónico' form={form} icon={eye} />
								<ButtonSubmit type='submit'>Continuar</ButtonSubmit>
							</FormStyled>
						);
					}}
				</FormContainer>
				<LinkComponentRegister />
			</main>
		</>
	);
};
