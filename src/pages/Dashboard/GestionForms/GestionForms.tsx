import { useDispatch } from 'react-redux';
import { Filters } from '../FileManager/components/Filters/Filters';
import { setActiveModal } from '../FileManager/FileManagerSlice';
import { Title } from '../StyledComponent/titles';
import { FormSearch } from '../FileManager/components/FormSearch/FormSearch';
import TuneIcon from '@mui/icons-material/Tune';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HandleResponse } from '../../../helpers/helpers';
import { IDataGridTable } from '../interface';
import { useDeleteFormsMutation, useGetListFormsMutation } from './gestionFormsApi';
import { DataGridTableForms } from './components/DataGridTableForms/dataGridTable';

export const GestionForms = () => {
	const [dataGrid, setData] = useState<IDataGridTable>({ dataGrid: { data: [], records: 0 }, pageIndex: () => {} });
	const [getList, {}] = useGetListFormsMutation();
	const [deleteProduct, {}] = useDeleteFormsMutation();
	const deleteFiles = () => {};
	const update = async (pageIndex: number) => {
		const { data }: any = await getList({ pageIndex });
		setData({ dataGrid: data });
	};
	const deleteFn = async (uuid: number) => {
		const { data }: any = await deleteProduct({ uuid });
		update(1);
	};
	useEffect(() => {
		update(1);
	}, []);
	return (
		<main className='features bg-white gestion-products'>
			<Title className='bold mb-3 text-gray'>Gestión de Formularios</Title>
			<p className='paragraph mb-4'>Adminitra los formularios, puedes agregar, editar, eliminar y ver los detalles de cada formulario.</p>
			<div className='content-tab flex py-3 border-y border-slate-200 d-flex justify-between'>
				<div className='flex'>
					<Link to='/dashboard/custom-form' className='flex tab-col w-max cursor-pointer mr-2'>
						<div className='tab c-pointer h-11 flex justify-center items-center px-4 rounded-5  bg-success text-white border border-success'>Agregar formulario</div>
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
			<DataGridTableForms dataGrid={dataGrid.dataGrid} pageIndex={update} deleteFn={deleteFn} />
		</main>
	);
};
