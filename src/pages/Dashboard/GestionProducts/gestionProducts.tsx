import { useDispatch } from 'react-redux';
import { Filters } from '../FileManager/components/Filters/Filters';
import { setActiveModal } from '../FileManager/FileManagerSlice';
import { Title } from '../StyledComponent/titles';
import { DataGridTableProducts } from './components/gridTableProducts/gridTableProducts';
import { FormSearch } from '../FileManager/components/FormSearch/FormSearch';
import TuneIcon from '@mui/icons-material/Tune';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useGetListProductsMutation } from './gestionProductsApi';
import { HandleResponse } from '../../../helpers/helpers';
export const GestionProducts = () => {
	const [data, setData] = useState([]);
	const [getList, {}] = useGetListProductsMutation();
	const deleteFiles = () => {};
	const update = async () => {
		let data: any = await getList({});
		console.log(data);
		setData(data.data.data);
	};
	useEffect(() => {
		update();
	}, []);
	return (
		<main className='features bg-white gestion-products'>
			<Title className='bold mb-3 text-gray'>Gestión de productos</Title>
			<p className='paragraph mb-4'>
				Administra los inventario donde se pueden agregar, editar y eliminar productos de una tienda en línea. También se pueden verificar existencias, ajustar precios y establecer la
				disponibilidad de los productos.
			</p>
			<div className='content-tab flex py-3 border-y border-slate-200 d-flex justify-between'>
				<div className='flex'>
					<Link to='/dashboard/add-product' className='flex tab-col w-max cursor-pointer mr-2'>
						<div className='tab c-pointer h-11 flex justify-center items-center px-4 rounded-5  bg-success text-white border border-success'>Agregar Producto</div>
					</Link>
					<div className='flex tab-col w-max cursor-pointer mr-4' onClick={() => deleteFiles()}>
						<div className='tab c-pointer h-11 flex justify-center items-center px-4  rounded-5  bg-danger text-white border opacity bg-danger'>Delete</div>
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
			<DataGridTableProducts data={data} />
		</main>
	);
};
