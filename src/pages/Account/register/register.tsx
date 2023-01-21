import { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { LoginSchema, RegisterCompanySchema, RegisterSchema } from '../../../components/helpers/common/forms/constraints/ValidatonSchemas';
import { FormContainer } from '../../../components/helpers/common/forms/Form';
import { InputText, InputTextPassword } from '../../../components/UI/inputs/inputText';
import { ParametersForm } from '../interfaces/interface';
import { ButtonSubmit } from '../login/components/ButtonSubmit.styled';
import { initValuesCompany, initValuesWorker, IRegisterCompany, IRegisterWorker } from './interfaces/register.interface';
import eye from '../../../assets/images/Account/icons/eye-svg.svg?url';
import person from '../../../assets/images/Account/icons/user.svg?url';
import mail from '../../../assets/images/Account/icons/mail.svg?url';
import { Link } from 'react-router-dom';
import { LinkComponentLogin, LinkComponentRegister } from '../components/linkcomponent';
import { FormStyled } from '../../../components/UI/GlobalComponents/Form/form';
import { InputSelect } from '../../../components/UI/inputs/inputSelect';

export const Register = () => {
	const [loading, setLoading] = useState(true);
	const [typeForm, setTypeForm] = useState<'worker' | 'company'>('company');
	const [initialValuesWorker, setInitialValuesWorker] = useState<IRegisterWorker>(initValuesWorker);
	const [initialValuesCompany, setInitialValuesCompany] = useState<IRegisterCompany>(initValuesCompany);
	const data = [
		{ value: '1', label: 'Colaborador' },
		{ value: '2', label: 'Organización' },
		{ value: '2', label: 'Organización' },
		{ value: '2', label: 'Organización' },
		{ value: '2', label: 'Organización' },
		{ value: '2', label: 'Organización' },
	];
	const handleSubmitWorker = (values: any) => {
		console.log(values);
	};
	const handleSubmitCompany = (values: any) => {
		console.log(values);
	};
	const changeTypeForm = (type: 'worker' | 'company') => {
		setTypeForm(type);
	};
	return (
		<>
			<Helmet>
				<title>Registro</title>
			</Helmet>
			<main className='register'>
				<h1 className='text-center   title mb-05'>Registrate</h1>
				<p className='paragraph text-center mb-2'>Ingresa tu datos para crear un usuario</p>
				<div className='option-type-form flex'>
					<div onClick={() => changeTypeForm('worker')} className={`option mr-6 ${typeForm === 'worker' ? 'active' : ''}`}>
						Colaborador
					</div>
					<div onClick={() => changeTypeForm('company')} className={`option ${typeForm === 'company' ? 'active' : ''}`}>
						Organización
					</div>
				</div>
				<div className='content-forms w-full'>
					<div className={`content-form ${typeForm == 'worker' ? 'active' : ''}`}>
						<FormContainer initialValues={initialValuesWorker} validationSchema={RegisterSchema} onSubmit={handleSubmitCompany}>
							{(form: any) => {
								const { handleSubmit, isSubmitting }: ParametersForm = form;
								return (
									<FormStyled onSubmit={handleSubmit}>
										<div className='mb-2'>
											<InputText name='name' placeholder='Nombre' form={form} icon={person} />
										</div>
										<div className='mb-2'>
											<InputText name='lastName' placeholder='Apellido' form={form} icon={person} />
										</div>
										<div className='mb-2'>
											<InputText name='email' placeholder='Email' form={form} icon={mail} />
										</div>
										<div className='mb-2'>
											<InputText name='password' placeholder='Contraseña' form={form} icon={eye} />
										</div>
										<div className='mb-2'>
											<InputText name='phone' placeholder='Teléfono' form={form} icon={eye} />
										</div>
										<ButtonSubmit type='submit'>Registrar</ButtonSubmit>
									</FormStyled>
								);
							}}
						</FormContainer>
					</div>
					<div className={`content-form ${typeForm == 'company' ? 'active' : ''}`}>
						<FormContainer initialValues={initialValuesCompany} validationSchema={RegisterCompanySchema} onSubmit={handleSubmitCompany}>
							{(form: any) => {
								const { handleSubmit, isSubmitting }: ParametersForm = form;
								return (
									<FormStyled onSubmit={handleSubmit}>
										<div className='mb-2'>
											<InputText name='organization' placeholder='Organización' form={form} icon={person} />
										</div>
										<div className='mb-2'>
											<InputText name='url' placeholder='Url' form={form} icon={person} />
										</div>
										<div className='mb-2'>
											<InputSelect name='employment' form={form} icon={person} data={data} label={'Cargo'} />
										</div>
										<div className='mb-2'>
											<InputText name='email' placeholder='Email' form={form} icon={mail} />
										</div>
										<div className='mb-2'>
											<InputTextPassword name='password' placeholder='Contraseña' form={form} icon={eye} />
										</div>
										<div className='mb-2'>
											<InputText name='phone' placeholder='Teléfono' form={form} icon={eye} />
										</div>
										<ButtonSubmit type='submit'>Ingresar</ButtonSubmit>
									</FormStyled>
								);
							}}
						</FormContainer>
					</div>
				</div>
				<LinkComponentLogin />
			</main>
		</>
	);
};
