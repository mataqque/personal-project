import { useParams } from 'react-router-dom';
import { Title } from '../StyledComponent/titles';
import { generateId } from '../../../components/helpers/helpers';
import { FormContainer } from '../../../components/helpers/common/forms/Form';
import { ProductSchema } from './schema/schema';
import { ParametersForm } from '../../../components/UI/inputs/interface';
import { FormStyled } from '../../../components/UI/GlobalComponents/Form/form';
import { InputText } from '../../../components/UI/inputs/inputText';
import { EditorHtml } from '../../../components/UI/inputs/editorhtml/EditorHtml';
import './gestionProduct.scss';
import { AddImages } from './components/addImages';
import { InputSelect } from '../../../components/UI/inputs/inputSelect';
import { ButtonBase } from '../../../components/UI/GlobalComponents/buttons/buttonBase';
import { useSelector } from 'react-redux';
import { useGetListProductMutation } from './gestionApiProduct';
import { useEffect, useState } from 'react';
import { IProductSchema } from './interface';
export const GestionProduct = () => {
	const id = useParams<{ id: string }>().id || generateId({ type: 'number' }).toString();
	const [getProduct, { isSuccess }] = useGetListProductMutation();
	const statusOptions = [
		{ value: '1', label: 'Activo' },
		{ value: '0', label: 'Inactivo' },
	];
	const dataCompanyOptions = [
		{ value: '1', label: 'Empresa 1' },
		{ value: '2', label: 'Empresa 2' },
	];
	const categoryOptions = [{ value: '1', label: 'Osos' }];
	const [initialValues, setInitialValues] = useState<IProductSchema>({
		uuid_product: id,
		uuid_autor: 'Flavio',
		name_product: '',
		description: '',
		id_empresa: '',
		id_category: '',
		id_subcategory: '',
		tags: [],
		season: '',
		gender: '',
		colors: [],
		quantity: '',
		price: '',
		discount: '',
		images: [],
		videos: [],
		url: '',
		status: true,
		index_page: true,
		meta_description: '',
		meta_keywords: '',
	});
	const submitForm = (values: any) => {
		// const images = useSelector((state: any) => state.addImagesSlice.listImages);
		// values.images = images;
		// setInitialValues(values[0]);
		console.log(values);
	};
	const getHtmlofEditor = (html: string) => {};
	const getDataProduct = async () => {
		const data: any = await getProduct({ id });
		setInitialValues(data.data[0]);
	};
	useEffect(() => {
		getDataProduct();
	}, []);
	return (
		<main className='features bg-white gestion-products'>
			<Title className='bold mb-3 text-letter'>
				Gestión de producto: <span className='text-letter'>{id}</span>
			</Title>
			<FormContainer initialValues={initialValues} validationSchema={ProductSchema} onSubmit={submitForm}>
				{(form: any) => {
					const { handleSubmit, isSubmitting }: ParametersForm = form;
					return (
						<FormStyled onSubmit={handleSubmit} className='h-full overflow-hidden'>
							<div className='form-add-product flex h-full '>
								<div className='column-1 form-style d-flex flex-wrap scroll h-full'>
									<div className='mb-4'>
										<span className='flex text-letter mb-2'>Nombre del Producto</span>
										<InputText name='name_product' placeholder='nombre' form={form} defaultValue={initialValues.name_product} />
									</div>
									<div className='content-input f-column w-100 mb-4'>
										<label className='flex text-letter mb-2'>Descripción</label>
										<EditorHtml className='mini' getHtml={getHtmlofEditor} initialHtml={initialValues.description}></EditorHtml>
									</div>
									<div className='mb-4'>
										<span className='flex text-letter mb-2'>Empresa</span>
										<InputSelect name='id_empresa' form={form} label='Empresa' data={dataCompanyOptions} defaultValue={initialValues.id_empresa} />
									</div>
									<div className='flex gap-4 w-full'>
										<div className='mb-4 w-1/2'>
											<span className='flex text-letter mb-2'>Categoria</span>
											<InputSelect name='id_category' form={form} label='selecciona una categoria' data={categoryOptions} defaultValue={initialValues.id_category} />
										</div>
										<div className='mb-4 w-1/2'>
											<span className='flex text-letter mb-2'>Sub Categoria </span>
											<InputSelect name='id_subcategory' form={form} label='selecciona una sub-categoria' data={categoryOptions} defaultValue={initialValues.id_subcategory} />
										</div>
									</div>
									<h2 className='text-letter sm:text-1/3xl sm:mb-4'>Inventario</h2>
									<div className='flex gap-4 w-full '>
										<div className='mb-4 w-1/2'>
											<span className='flex text-letter mb-2'>Cantidad total de unidades</span>
											<InputText name='quantity' placeholder='Cant units' form={form} defaultValue={initialValues.quantity} />
										</div>
										<div className='mb-4 w-1/2'>
											<span className='flex text-letter mb-2'>Precio</span>
											<InputText name='price' placeholder='precio' form={form} defaultValue={initialValues.price} />
										</div>
									</div>
									<div className='flex gap-4 w-full '>
										<div className='mb-4 w-1/2'>
											<span className='flex text-letter mb-2'>Descuento </span>
											<InputText name='discount' placeholder='Descuento' form={form} defaultValue={initialValues.discount} />
										</div>
									</div>
								</div>
								<div className='column-2 form-style gestion-links d-flex flex-wrap scroll h-full'>
									<AddImages></AddImages>
								</div>
								<div className='column-3 form-style gestion-links d-flex flex-wrap scroll h-full w-full'>
									<div className='mb-4 w-full'>
										<span className='flex text-letter mb-2'>Url del producto </span>
										<InputText name='url' placeholder='Url' form={form} defaultValue={initialValues.url} />
									</div>
									<div className='mb-4 w-full'>
										<span className='flex text-letter mb-2'>Estado </span>
										<InputSelect name='status' form={form} label='Selecionar' data={statusOptions} defaultValue={initialValues.status} />
									</div>
									<div className='mb-4 w-full'>
										<span className='flex text-letter mb-2'>Indexar en los motores de busqueda </span>
										<InputSelect name='index_page' form={form} label='Selecionar' data={statusOptions} defaultValue={initialValues.index_page} />
									</div>
									<div className='mb-4 w-full'>
										<span className='flex text-letter mb-2'>Meta description </span>
										<InputText name='meta_description' placeholder='Meta description' form={form} defaultValue={initialValues.meta_description} />
									</div>
									<div className='mb-4 w-full'>
										<span className='flex text-letter mb-2'>Meta keyword </span>
										<InputText name='meta_keywords' placeholder='Meta keyword' form={form} defaultValue={initialValues.meta_keywords} />
									</div>
									<ButtonBase className='bg-success text-white border-success'>Guardar cambios</ButtonBase>
								</div>
							</div>
						</FormStyled>
					);
				}}
			</FormContainer>
		</main>
	);
};
