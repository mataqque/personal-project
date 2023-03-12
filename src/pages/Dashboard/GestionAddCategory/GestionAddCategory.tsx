import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Title } from '../StyledComponent/titles';
import { ICategorySchema } from '../tagsycategorias/interface';
import { generateId } from '../../../components/helpers/helpers';
import { FormStyled } from '../../../components/UI/GlobalComponents/Form/form';
import { FormContainer } from '../../../components/helpers/common/forms/Form';
import { InputText } from '../../../components/UI/inputs/inputText';
import { ParametersForm } from '../../../components/UI/inputs/interface';
import { CategorySchema } from './schema/schema';
import { AddSubCategory } from './components/AddSubCategory/AddSubCategory';
import './GestionAddCategory.scss';
import { Status } from '../../Components/status/status';
import { InputSelect } from '../../../components/UI/inputs/inputSelect';
import { EditorHtml } from '../../../components/UI/inputs/editorhtml/EditorHtml';
import { FormAddSubCategory } from './components/FormAddSubCategory/FormAddSubCategory';
import { ButtonBarStyled } from '../GestionForm/components/modalAddInputs/styled/buttonBarStyled';
import { ButtonBase } from '../../../components/UI/GlobalComponents/buttons/buttonBase';
import Editor from '../../../components/UI/inputs/editorhtml/otherEditor';
import { useGetAddCategoryMutation } from './GestionAddCategory.Api';
import { useEffect } from 'react';
export const GestionAddCategory = () => {
	const { id } = useParams();
	const [addCategory, { isSuccess }] = useGetAddCategoryMutation();
	const [dataCategory, setDataCategory] = useState<ICategorySchema>({
		uuid_category: id || generateId({ type: 'number' }).toString(),
		name_category: '',
		description: '',
		sort_order: 0,
		status: 'true',
		is_featured: false,
		updated_at: '',
		images: [],
	});
	const statusOptions = [
		{ value: 'true', label: 'Activo' },
		{ value: 'false', label: 'Inactivo' },
	];
	const getHtmlofEditor = (html: string) => {
		console.log('html', html);
	};
	const submitForm = async (values: any) => {
		let res = await addCategory(values);
	};
	const handleResponse = async () => {};
	useEffect(() => {}, []);

	return (
		<main className='features tagsandcategories bg-white'>
			<Title className='title-component bold mb-3 text-letter'>Gestión de Categoria : {dataCategory.uuid_category}</Title>
			<div className='flex h-full overflow-hidden'>
				<FormContainer initialValues={dataCategory} validationSchema={CategorySchema} onSubmit={submitForm}>
					{(form: any) => {
						const { handleSubmit, isSubmitting }: ParametersForm = form;
						return (
							<FormStyled onSubmit={handleSubmit} className='h-full overflow-hidden pr-4 relative'>
								<div className='flex flex-col'>
									<div className='mb-4 w-full'>
										<span className='flex text-letter mb-2'>Estado </span>
										<InputSelect name='status' form={form} label='Selecionar' data={statusOptions} defaultValue={dataCategory.status} />
									</div>
									<div className='form-add-product flex w-full gap-4'>
										<div className='mb-4 w-full'>
											<span className='flex text-letter mb-1'>Nombre de la categoria</span>
											<InputText name='name_category' placeholder='nombre' form={form} defaultValue={dataCategory.name_category} />
										</div>
										<div className='mb-4 w-full'>
											<span className='flex text-letter mb-1'>Mostrar en la página de inicio</span>
											<InputSelect name='is_featured' form={form} label='Selecionar' data={statusOptions} defaultValue={dataCategory.status} />
										</div>
									</div>
									<div className='form-add-product flex flex-col w-full'>
										<div className='content-input f-column w-100 mb-4'>
											<label className='flex text-letter mb-2'>Descripción</label>
											<div className='h-80'>
												<EditorHtml className='mini' getHtml={getHtmlofEditor} initialHtml={dataCategory.description}></EditorHtml>
												{/* <Editor></Editor> */}
											</div>
										</div>
									</div>
								</div>
								<div className='content-btn-save'>
									<ButtonBarStyled className='d-flex pd-1 buttom-bar'>
										<ButtonBase type='submit' className='btn b-blue c-white text-md bg-success border-success text-white ml-auto h-12'>
											Agregar categoria
										</ButtonBase>
									</ButtonBarStyled>
								</div>
							</FormStyled>
						);
					}}
				</FormContainer>
				<FormAddSubCategory />
				<div className='column-add-sub-category overflow-hidden'>
					<AddSubCategory />
				</div>
			</div>
		</main>
	);
};
