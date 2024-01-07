import { useDispatch } from 'react-redux';
import { Filters } from '../FileManager/components/Filters/Filters';
import { setActiveModal } from '../FileManager/FileManagerSlice';
import { Title } from '../StyledComponent/titles';
import { DataGridTableProducts } from './components/gridTableProducts/gridTableProducts';
import { FormSearch } from '../FileManager/components/FormSearch/FormSearch';
import TuneIcon from '@mui/icons-material/Tune';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDeleteProductMutation, useGetListProductsMutation } from './gestionProductsApi';
import { HandleResponse } from '../../../helpers/helpers';
import { IDataGridTable } from '../interface';
import { faker } from '@faker-js/faker';

export const GestionProducts = () => {
	const [dataGrid, setData] = useState<IDataGridTable>({ dataGrid: { data: [], records: { cant: 0, limit: 0 } }, pageIndex: () => {} });
	const [getList, {}] = useGetListProductsMutation();
	const [deleteProduct, {}] = useDeleteProductMutation();
	const deleteFiles = () => {};
	const update = async (pageIndex: number) => {
		const { data }: any = await getList({ pageIndex });
		setData({ dataGrid: data });
	};
	const statusOptions = ['activo', 'inactivo', 'pendiente', 'rechazado', 'aprobado'];
	const deleteFn = async (uuid: number) => {
		const { data }: any = await deleteProduct({ uuid });
		update(1);
	};
	const createUser = () => {
		return {
			uuid_product: faker.random.numeric(),
			uuid_autor: faker.random.numeric(),
			name_product: 'tipología',
			description: '',
			id_empresa: 2,
			id_category: 1,
			id_subcategory: 1,
			tags: '',
			season: '',
			gender: 0,
			colors: '',
			quantity: 100,
			quantity_sold: 0,
			price: 55,
			discount: 123,
			url: '/inmobiliaria-x',
			//random status
			status: faker.random.numeric(10),
			index_page: '1',
			proveedor: 'inmobiliria x',
			meta_description: 'asd',
			meta_keywords: 'type,type',
			created_at: faker.date.past(),
			updated_at: faker.date.past(),
			images: [],
		};
	};

	const createUsers = (items = 5) => {
		return Array.from({ length: items }, createUser);
	};
	const cant = 100;
	const fakeUsers = createUsers(cant);
	const proveData = {
		status: 200,
		type: true,
		records: { cant: 10, limit: cant },
		data: fakeUsers,
	};
	useEffect(() => {
		// update(1);
	}, []);
	return (
		<main className='features bg-white gestion-products'>
			<Title className='bold mb-3 text-letter'>Gestión de items</Title>
			{/* <p className='paragraph mb-4'>
				Administra los inventario donde se pueden agregar, editar y eliminar productos de una tienda en línea. También se pueden verificar existencias, ajustar precios y establecer la
				disponibilidad de los productos.
			</p> */}
			<div className='content-tab flex py-3 border-y border-slate-200 d-flex justify-between'>
				<div className='flex'>
					<Link to='/dashboard/add-product' className='flex tab-col w-max cursor-pointer mr-2 no-underline'>
						<div className='tab c-pointer h-11 flex justify-center items-center px-4 rounded-5  bg-success text-white border border-success'>Agregar Producto</div>
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
			<DataGridTableProducts dataGrid={dataGrid.dataGrid} pageIndex={update} deleteFn={deleteFn} />
		</main>
	);
};
