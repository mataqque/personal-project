import { useState } from 'react';
import { Title } from '../StyledComponent/titles';
import { Column } from './column/column';
import { DataGridTableCategories } from './components/DataGridTableCategories';
import { useDeleteProductMutation, useGetListProductsMutation } from '../GestionProducts/gestionProductsApi';
import { IDataGridTable } from '../interface';
import { Link } from 'react-router-dom';
import { FormSearch } from '../FileManager/components/FormSearch/FormSearch';
import TuneIcon from '@mui/icons-material/Tune';
import { useGetListCategoriesMutation } from '../GestionAddCategory/GestionAddCategory.Api';
import { useEffect } from 'react';
export const TagsAndCategories = () => {
	const [dataGrid, setData] = useState<IDataGridTable>({ dataGrid: { data: [], records: { cant: 0, limit: 0 } }, pageIndex: () => {} });
	const [getList, {}] = useGetListCategoriesMutation();
	const [deleteProduct, {}] = useDeleteProductMutation();

	const deleteFn = async (uuid: number) => {
		const { data }: any = await deleteProduct({ uuid });
		update(1);
	};
	const update = async (pageIndex: number) => {
		const { data }: any = await getList({ pageIndex });
		console.log('data response', data);
		setData({ dataGrid: data });
	};
	const deleteFiles = () => {};
	useEffect(() => {
		update(1);
	}, []);
	return (
		<main className='features tagsandcategories bg-white'>
			<Title className='title-component bold mb-3 text-letter'>Gestión de Categorias y etiquetas</Title>
			<div className='content-tab flex py-3 border-y border-slate-200 d-flex justify-between'>
				<div className='flex'>
					<Link to='/dashboard/add-category' className='flex tab-col w-max cursor-pointer mr-2 no-underline'>
						<div className='tab c-pointer h-11 flex justify-center items-center px-4 rounded-5  bg-success text-white border border-success'>Agregar categoria</div>
					</Link>
					<div className='flex tab-col w-max cursor-pointer mr-4' onClick={() => deleteFiles()}>
						<div className='tab c-pointer h-11 flex justify-center items-center px-4  rounded-5  bg-danger text-white border opacity bg-danger'>Eliminar</div>
					</div>
				</div>
				<div className='flex'>
					<div className='w-80 mr-3 flex'>
						<FormSearch placeholder='Buscar producto'></FormSearch>
					</div>
					<div className='border-0 border-success rounded-md flex items-center justify-center w-11 h-11 bg-sky duration-300 cursor-pointer mr-2'>
						<TuneIcon className='fill-letter'></TuneIcon>
					</div>
				</div>
			</div>
			<DataGridTableCategories dataGrid={dataGrid.dataGrid} pageIndex={update} deleteFn={deleteFn} />
		</main>
	);
};
