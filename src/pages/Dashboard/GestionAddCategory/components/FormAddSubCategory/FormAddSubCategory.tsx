import styled from 'styled-components';
import { ModalAddInputStyled } from '../../../GestionForm/components/modalAddInputs/styled/modalAddInputStyled';
import { useState, useEffect, useRef } from 'react';
import { IconMask } from '../../../../../components/UI/inputs/styled/IconDownStyleSelect';
import { Title } from '../../../StyledComponent/titles';
import { FormContainer } from '../../../../../components/helpers/common/forms/Form';
import { BaseValidationSchema, addSubFormCategorySchema } from '../../../../../components/helpers/common/forms/constraints/ValidatonSchemas';
import { FormStyled } from '../../../../../components/UI/GlobalComponents/Form/form';
import { InputSwitchSm } from '../../../../../components/UI/inputs/inputSwitch';
import { InputText } from '../../../../../components/UI/inputs/inputText';
import { ButtonBarStyled } from '../../../GestionForm/components/modalAddInputs/styled/buttonBarStyled';
import { ButtonBase } from '../../../../../components/UI/GlobalComponents/buttons/buttonBase';
import { editDataSubject, subAddCategorySubject, subCategorySubject } from './observer';
import { InputSelect } from '../../../../../components/UI/inputs/inputSelect';
import { generateId } from '../../../../../components/helpers/helpers';

export const FormAddSubCategory = ({ className = '', ...props }: any) => {
	const [activeModal, setActiveModal] = useState(true);
	const [keyUpdated, setKeyUpdated] = useState(generateId({ type: 'number' }));
	const [initialValues, setInitialValues] = useState({
		uuid_subcategory: keyUpdated,
		name_subcategory: '',
		enabled: true,
		description: '',
	});

	console.log('_in', initialValues);
	const formRef = useRef(null);
	const data = [
		{
			label: 'Activo',
			value: '0',
		},
		{
			label: 'Inactivo',
			value: '0',
		},
	];

	const closeModal = () => {
		setActiveModal(false);
		let delay = setInterval(() => {
			let id_generated = generateId({ type: 'number' });
			setKeyUpdated(id_generated);
			setInitialValues({
				uuid_subcategory: id_generated,
				name_subcategory: '',
				enabled: true,
				description: '',
			});
			clearInterval(delay);
		}, 1000);
	};
	const submitForm = (values: any, { setSubmitting, resetForm }: any) => {
		subAddCategorySubject.next(values);
		setActiveModal(false);
		let delay = setInterval(() => {
			let id_generated = generateId({ type: 'number' });
			setKeyUpdated(id_generated);
			setInitialValues({
				uuid_subcategory: id_generated,
				name_subcategory: '',
				enabled: true,
				description: '',
			});
			clearInterval(delay);
		}, 1000);
	};
	useEffect(() => {
		const subsData = editDataSubject.subscribe((data: any) => {
			if (data) {
				setInitialValues(data);
				setActiveModal(true);
			}
		});
		const subscribete = subCategorySubject.subscribe((data: any) => {
			setActiveModal(data);
		});
		return () => {
			subsData.unsubscribe();
			subscribete.unsubscribe();
		};
	}, []);
	return (
		<ModalAddInputStyled className={'modal-add-form ' + (activeModal == true ? 'active' : '')} key={keyUpdated}>
			<IconMask
				className='icon-close bg-black w-5 h-5 cursor-pointer'
				onClick={() => {
					closeModal();
				}}
			></IconMask>
			<div className='flex flex-col py-5 h-full scroll-smooth overflow-hidden'>
				<Title className='title text-letter text-center mb-7'>Agregar Sub categoria</Title>
				<FormContainer initialValues={initialValues} validationSchema={addSubFormCategorySchema} onSubmit={submitForm}>
					{(form: any) => {
						const { handleSubmit, errors, touched, isSubmitting, resetForm } = form;
						// console.log('errors', errors);
						return (
							<FormStyled
								className='form-style d-flex flex-column form-creator-form h-full overflow-hidden flex flex-col h-full form-style-add-sub'
								onSubmit={handleSubmit}
								ref={formRef}
							>
								<div className='scrollHidden smooth-scrolling h-full relative pl-5 pr-5 pb-4'>
									{/* <ScrollBar></ScrollBar> */}
									<div className='flex mb-5'>
										<div className='mr-2'>
											<InputSwitchSm name='enabled' defaultValue={initialValues.enabled} className='radio' form={form} color='#32d09c' outline={true} />
										</div>
										<span className='text-letter'>Marcar como campo obligatorio</span>
									</div>
									<div className='mb-4 w-full'>
										<span className='flex text-letter mb-2'>1. Nombre de la sub categoria</span>
										<InputText name='name_subcategory' placeholder='Título' form={form} defaultValue={initialValues.name_subcategory} />
									</div>
									<div className='mb-4 w-full'>
										<span className='flex text-letter mb-2'>2. Descripción</span>
										<InputText name='description' placeholder='Descripción' form={form} defaultValue={initialValues.description} />
									</div>
								</div>
								<ButtonBarStyled className='d-flex pd-1 buttom-bar'>
									<ButtonBase type='submit' className='btn b-blue c-white text-md bg-success border-success text-white ml-auto h-12'>
										Agregar campo
									</ButtonBase>
								</ButtonBarStyled>
							</FormStyled>
						);
					}}
				</FormContainer>
			</div>
		</ModalAddInputStyled>
	);
};
