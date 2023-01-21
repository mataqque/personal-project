import { useState } from 'react';
import { ButtonSubmit } from '../../pages/Account/login/components/ButtonSubmit.styled';
import { FormStyled } from '../UI/GlobalComponents/Form/form';
import { InputText } from '../UI/inputs/inputText';
import { FormContainer } from '../helpers/common/forms/Form';
import mail from '../../assets/images/Account/icons/mail.svg?url';

import * as Yup from 'yup';
import { LoginSchema } from '../helpers/common/forms/constraints/ValidatonSchemas';

export const FormCaptureEmail = () => {
	const [initialValues, setInitialValues] = useState<{ email: string }>({
		email: '',
	});
	const handleSubmit = async (values: any) => {
		console.log(values);
	};
	return (
		<FormContainer initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleSubmit}>
			{(form: any) => {
				const { handleSubmit, isSubmitting } = form;
				return (
					<FormStyled onSubmit={handleSubmit} autoComplete={'off'}>
						<h2 className='text-2xl text-center mt-2 mb-4'>Subscribe para recibir noticias</h2>
						<div className='mb-2'>
							<InputText name='email' placeholder='Email' form={form} icon={mail} />
						</div>
						<ButtonSubmit type='submit' className='bg-primary'>
							Ingresar
						</ButtonSubmit>
					</FormStyled>
				);
			}}
		</FormContainer>
	);
};
