import { FormSearch, InputText, InputTextPassword } from '../../../components/UI/inputs/inputText';
import { FormContainer } from '../../../components/helpers/common/forms/Form';
import { useState } from 'react';
import { componentsSchema } from '../../../components/helpers/common/forms/constraints/ValidatonSchemas';
import { FormStyled } from '../../../components/UI/GlobalComponents/Form/form';
import eye from '../../../assets/images/Account/icons/eye-svg.svg?url';
import person from '../../../assets/images/Account/icons/user.svg?url';
import mail from '../../../assets/images/Account/icons/mail.svg?url';
import { useSelector } from 'react-redux';
import './formStyle.scss';
export const FormSideBar = () => {
	const theme = useSelector((state: any) => state.themeSlice.theme);
	const [initialValues, setInitialValues] = useState({
		user: '',
	});
	const handleSubmit = async (values: any) => {};
	return (
		<div className={`pt-20 px-4 h-full form-sidebar ${theme}`}>
			<div className='order w-full flex items-center mb-2'>
				<FormSearch placeholder={'Buscar'}></FormSearch>
			</div>
			<FormContainer initialValues={initialValues} validationSchema={componentsSchema} onSubmit={handleSubmit}>
				{(form: any) => {
					const { handleSubmit, isSubmitting } = form;
					return (
						<FormStyled onSubmit={handleSubmit}>
							<div className='flex flex-wrap flex-col'>
								<h2 className='text-2xl font-bold text-gray-700 mb-4'>Formulario</h2>
								<div className='order mb-2 w-full'>
									<InputText name='name' placeholder='Nombre' form={form} icon={person} />
								</div>
								<div className='order mb-2 w-full'>
									<InputText name='lname' placeholder='Apellidos' form={form} icon={person} />
								</div>
								<div className='order mb-2 w-full'>
									<InputText name='email' placeholder='Correo' form={form} icon={mail} />
								</div>
								<div className='order mb-2 w-full'>
									<InputTextPassword name='password' placeholder='Contraseña' form={form} icon={eye} />
								</div>
							</div>
						</FormStyled>
					);
				}}
			</FormContainer>
		</div>
	);
};
