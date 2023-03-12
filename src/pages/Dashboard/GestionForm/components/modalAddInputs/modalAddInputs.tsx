import { useParams } from 'react-router-dom';
import { FormContainer, FormContainerDinamic } from '../../../../../components/helpers/common/forms/Form';
import { generateId } from '../../../../../components/helpers/helpers';
import { Title } from '../../../StyledComponent/titles';
import { ModalAddInputStyled } from './styled/modalAddInputStyled';
import { useEffect, useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { FormEditorSchema } from '../../../../../components/helpers/common/forms/constraints/ValidatonSchemas';
import { InputSwitchSm } from '../../../../../components/UI/inputs/inputSwitch';
import { InputText } from '../../../../../components/UI/inputs/inputText';
import { FormStyled } from '../../../../../components/UI/GlobalComponents/Form/form';
import { baseSchema, listTypeFields } from './config';
import { ContentTypesInputStyled } from './styled/contentTypesInputStyled';
import { ButtonBarStyled } from './styled/buttonBarStyled';
import { ButtonBase } from '../../../../../components/UI/GlobalComponents/buttons/buttonBase';
import { IconMask } from '../../../../../components/UI/inputs/styled/IconDownStyleSelect';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveModalAddInput } from './modalAddInputSlice';
import { BuilderDynamicInputs } from '../../../../../components/UI/inputs/dinamicInputs/dinamicInputs';
import ScrollBar from '../../../../../components/UI/ScrollBar/scrollbar';
import { createValidationSchema } from '../../../../../components/UI/FormBuilder/creatorSchema';
import { InputRadio } from '../../../../../components/UI/inputs/inputRadio';
import { subCategorySubject } from '../../../GestionAddCategory/components/FormAddSubCategory/observer';

export const ModalAddInputs = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const activeModal = useSelector((state: any) => state.modalAddInputSlice.activeModal);
	const [typeFieldId, settypeFieldId] = useState(0);
	//@ts-ignore
	const [BaseValidationSchema, setBaseValidationSchema] = useState(createValidationSchema(baseSchema));
	const ContentScrolling = useRef<HTMLElement>(null);
	const [listDinamicField, setListDinamicField] = useState([]);
	const [initialValues, setInitialValues] = useState({
		uuid_form: id || generateId({ type: 'number' }).toString(),
		enable: false,
		title_form: '',
		baseurl: '',
		mailto: '',
		subject: '',
		message: '',
		items: [],
	});

	const submitForm = async (values: any, { setSubmitting, resetForm }: any) => {
		console.log('values', values);
		toast.success('Formulario actualizado correctamente');
	};
	const changeOptions = (item: any) => {
		settypeFieldId(item.id);
		setListDinamicField(item.listInputs);
		let newbase = baseSchema.concat(item.listInputs);
		//@ts-ignore
		let newSchema = createValidationSchema(newbase);
		console.log('itemList', newSchema);
		setBaseValidationSchema(newSchema);
		scrollMoveTo();
	};
	const scrollMoveTo = () => {
		// let delay = setInterval(() => {
		// 	if (contentScrolling.current != null) {
		// 		let containerScroll = contentScrolling.current;
		// 		let height = contentScrolling.current.scrollHeight;
		// 		containerScroll.scrollTo({ top: height, behavior: 'smooth' });
		// 		clearInterval(delay);
		// 	}
		// }, 50);
	};

	useEffect(() => {}, [BaseValidationSchema]);
	return (
		<ModalAddInputStyled className={activeModal == true ? 'active' : ''}>
			<IconMask
				className='icon-close bg-black w-5 h-5 cursor-pointer'
				onClick={() => {
					dispatch(setActiveModalAddInput(false));
				}}
			></IconMask>
			<div className='flex flex-col py-5 h-full scroll-smooth overflow-hidden'>
				<Title className='title text-letter text-center mb-7'>Agregar Campo</Title>
				<FormContainerDinamic initialValues={initialValues} validationSchema={BaseValidationSchema} onSubmit={submitForm}>
					{(form: any) => {
						const { handleSubmit, errors, touched, isSubmitting, resetForm } = form;
						return (
							<FormStyled className='form-style d-flex flex-column form-creator-form h-full overflow-hidden flex flex-col h-full' onSubmit={handleSubmit}>
								<div className='scrollHidden smooth-scrolling h-full relative pl-5 pr-5 pb-4'>
									{/* <ScrollBar></ScrollBar> */}
									<div className='flex mb-5'>
										<div className='mr-2'>
											<InputSwitchSm name='enable' defaultValue={true} className='radio' form={form} color='#32d09c' outline={true} />
										</div>
										<span className='text-letter'>Marcar como campo obligatorio</span>
									</div>
									<div className='mb-4 w-full'>
										<span className='flex text-letter mb-2'>1. Elige un título asociado al input*</span>
										<InputText name='title' placeholder='Título' form={form} defaultValue={''} />
									</div>
									<div className='mb-4 w-full'>
										<span className='flex text-letter mb-2'>2. Entidad ("propiedad name del campo")*</span>
										<InputText name='entity' placeholder='Título' form={form} defaultValue={''} />
									</div>
									<div className='mb-4 w-full'>
										<span className='flex text-letter mb-2'>3. Class css</span>
										<InputText name='className' placeholder='class' form={form} defaultValue={''} />
									</div>
									{/* <div className='mb-4 w-full'>
										<span className='flex text-letter mb-2'>4. Seleccionar tipo de input*</span>
										<ContentTypesInputStyled className='content-types'>
											<div className='absolute opacity-0'>
												{listTypeFields.map((item, index: number) => {
													return <InputRadio form={form} name='typeInput' index={index} value={item.id} key={'input-radio' + index}></InputRadio>;
												})}
											</div>
											{listTypeFields.map((item, index) => {
												return (
													<label
														className={`type ${typeFieldId === item.id ? 'active' : ''}`}
														htmlFor={'typeInput' + index}
														key={'type-field-' + index}
														onClick={() => {
															changeOptions(item);
														}}
													>
														<div className='select-option'></div>
														<div className='icon-type'>
															<img src={item.icon} alt='' />
														</div>
														<p className='paragraph text-center text-letter '>{item.name}</p>
													</label>
												);
											})}
										</ContentTypesInputStyled>
									</div> */}
									{/* <BuilderDynamicInputs List={listDinamicField} form={form}></BuilderDynamicInputs> */}
								</div>
								<ButtonBarStyled className='d-flex pd-1 buttom-bar'>
									<ButtonBase type='submit' className='btn b-blue c-white text-md bg-success border-success text-white ml-auto h-12'>
										Agregar campo
									</ButtonBase>
								</ButtonBarStyled>
							</FormStyled>
						);
					}}
				</FormContainerDinamic>
			</div>
		</ModalAddInputStyled>
	);
};
