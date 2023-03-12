import { IconAvatar } from '../../../../../components/UI/GlobalComponents/IconAvatar/IconAvatar';
import { BtnTag } from '../../../../../components/UI/GlobalComponents/buttons/buttonBase';
import { GridBody } from '../../../../../components/UI/dataGrid/dataGridBody';
import { GridHead } from '../../../../../components/UI/dataGrid/dataGridHead';
import { DataGridStyled } from '../../../../../components/UI/dataGrid/dataGridStyled';
import { InputChecked } from '../../../../../components/UI/inputs/inputChecked';
import { IconMask } from '../../../../../components/UI/inputs/styled/IconDownStyleSelect';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { convertToDate } from '../../../../../components/helpers/helpers';
import './dataGridTable.scss';
import { LazyImage } from '../../../../../components/UI/lazyImages/images';
import { GridFooter } from '../../../../../components/UI/dataGrid/dataGridFooter';
import { useEffect } from 'react';
import { IProductSchema } from '../../../GestionProduct/interface';
import { generateUrl } from '../../../../../components/helpers/helpers';
import { Link } from 'react-router-dom';
import { IDataGridTable } from '../../../interface';
import { Status } from '../../../../Components/status/status';
// let statusDiccionary = ['activo', 'inactivo', 'pendiente', 'rechazado', 'aprobado'];
// const createUser = () => {
// 	return {
// 		name: faker.name.findName(),
// 		lname: faker.name.lastName(),
// 		image: faker.image.avatar(),
// 		dateUpate: faker.date.past(),
// 		percent: faker.random.numeric(2),
// 		color: 'hsla(' + Math.random() * 360 + ', 100%, 50%, 1)',
// 		status: statusDiccionary[Math.floor(Math.random() * statusDiccionary.length)],
// 		tags: faker.random.words(2).split(' '),
// 	};
// };

// const createUsers = (numUsers = 5) => {
// 	return Array.from({ length: numUsers }, createUser);
// };
// const fakeUsers = createUsers(0);

export const DataGridTableForms = ({ dataGrid, pageIndex, deleteFn = () => {} }: IDataGridTable) => {
	const { data, records } = dataGrid;
	useEffect(() => {}, []);
	return (
		<DataGridStyled className='table-auto w-full text-sm flex flex-col'>
			<GridHead className='grid-column-forms'>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>
						Nombre del formulario
						<SwapVertIcon className='ml-auto cursor-pointer' />
					</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>leads</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>Estatus</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>Última actualización</div>
				</div>
				<div className='px-4 py-2 text-left  '>Accciones</div>
			</GridHead>
			<GridBody className='grid grid-column-forms'>
				{data.map((product: IProductSchema, index: number) => {
					return (
						<div className='border-b border-b-stone-100 ' key={index + 'item-list'}>
							<div className='checked grid-table-cell py-2'>
								<InputChecked name=''></InputChecked>
							</div>
							<div className='grid-table-cell px-4 py-2 flex items-center'>
								<div className='content-img w-10 h-10 relative'>
									<LazyImage src={product.images.length > 0 ? generateUrl(product.images[0]) : ''} radius='3px' />
								</div>
								<div className='flex flex-col ml-4'>
									<h1 className='text-letter text-base leading-4 mb-1  '>{product.name_product}</h1>
								</div>
							</div>
							<div className='grid-table-cell px-4 py-2 w-full flex items-center align-center text-letter'>Sweet Importador de peluches</div>
							<div className='grid-table-cell px-4 py-2 text-sm flex items-center align-center text-letter'>
								<Status status={'desconocido'} />
							</div>
							<div className='grid-table-cell px-4 py-2 text-sm   flex items-center align-center text-letter'>{product.updated_at ? convertToDate(product.updated_at) : ''}</div>
							<div className='grid-table-cell px-4 py-2 text-sm  w-40 flex items-center align-center'>
								<div className='flex items-center align-center'>
									<Link to={`/dashboard/product/${product.uuid_product}`} className='p-1 flex mr-2 opacity-80	hover:opacity-100'>
										<IconMask className='icon-edit bg-info w-4 h-4 ' />
									</Link>
									<button onClick={() => deleteFn(product.uuid_product)} className='p-1 flex opacity-80	hover:opacity-100'>
										<IconMask className='icon-delete bg-danger w-5 h-5 ' />
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</GridBody>
			<GridFooter records={records} pageIndex={pageIndex}></GridFooter>
		</DataGridStyled>
	);
};
