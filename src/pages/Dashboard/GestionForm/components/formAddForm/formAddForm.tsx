import { useState } from 'react';
import { FormStyled } from '../../../../../components/UI/GlobalComponents/Form/form';
import { FormContainer } from '../../../../../components/helpers/common/forms/Form';
import { FormEditorSchema } from '../../../../../components/helpers/common/forms/constraints/ValidatonSchemas';
import { InputText } from '../../../../../components/UI/inputs/inputText';
import { ParametersForm } from '../../../../Account/interfaces/interface';
import { InputSwitchSm } from '../../../../../components/UI/inputs/inputSwitch';
import { BuilderDynamicInputs } from '../../../../../components/UI/inputs/dinamicInputs/dinamicInputs';

export const FormAddForm = () => {
	const [initialValues, setInitialValues] = useState({} as any);
	const submitForm = async (values: any, { setSubmitting, resetForm }: any) => {};
	return (
		<FormContainer initialValues={initialValues} validationSchema={FormEditorSchema} onSubmit={submitForm}>
			{(form: any) => {
				const { handleSubmit, isSubmitting }: ParametersForm = form;
				return (
					<FormStyled className='w-full' onSubmit={handleSubmit}>
						<div className='flex mb-5'>
							<div className='mr-2'>
								<InputSwitchSm name='enable' defaultValue={true} className='radio' form={form} color='#32d09c' outline={true} />
							</div>
							<span className='text-letter'>Mostrar el formulario</span>
						</div>
						<div className='w-full mb-4'>
							<span className='text-letter flex mb-1'>Nombre del formulario</span>
							<InputText form={form} name='title' placeholder='Nombre del formulario'></InputText>
						</div>
						<div className='w-full mb-4'>
							<span className='text-letter flex mb-1'>Url base</span>
							<InputText form={form} name='url' placeholder='Nombre del formulario'></InputText>
						</div>
						<div className='w-full mb-4'>
							<span className='text-letter flex mb-1'>Correo al que se enviara las notificaciones*</span>
							<InputText form={form} name='emails' placeholder='Correos'></InputText>
						</div>
						<div className='w-full mb-4'>
							<span className='text-letter flex mb-1'>Asunto</span>
							<InputText form={form} name='emails' placeholder='Asunto'></InputText>
						</div>
						<div className='w-full mb-4'>
							<span className='text-letter flex mb-1'>Mensaje</span>
							<InputText form={form} name='message' placeholder='Mensaje'></InputText>
						</div>
					</FormStyled>
				);
			}}
		</FormContainer>
	);
};
