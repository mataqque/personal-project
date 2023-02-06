import { IconAvatar } from '../../../../../components/UI/GlobalComponents/IconAvatar/IconAvatar';
import { BtnTag } from '../../../../../components/UI/GlobalComponents/buttons/buttonBase';
import { GridBody } from '../../../../../components/UI/dataGrid/dataGridBody';
import { GridHead } from '../../../../../components/UI/dataGrid/dataGridHead';
import { DataGridStyled } from '../../../../../components/UI/dataGrid/dataGridStyled';
import { InputChecked } from '../../../../../components/UI/inputs/inputChecked';
import { IconMask } from '../../../../../components/UI/inputs/styled/IconDownStyleSelect';
import { faker } from '@faker-js/faker';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { convertToDate } from '../../../../../components/helpers/helpers';
import './gridtableproducts.scss';
import { LazyImage } from '../../../../../components/UI/lazyImages/images';
import { Status } from '../status/status';
import { GridFooter } from '../../../../../components/UI/dataGrid/dataGridFooter';
import { useEffect } from 'react';
import { IProductSchema } from '../../../GestionProduct/interface';
import { generateUrl } from '../../../../../components/helpers/helpers';
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
export const DataGridTableProducts = (data: any) => {
	console.log('datagrid', data);

	useEffect(() => {}, [data]);
	return (
		<DataGridStyled className='table-auto w-full text-sm flex flex-col'>
			<GridHead className='grid-column-products'>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>
						Nombre del producto
						<SwapVertIcon className='ml-auto cursor-pointer' />
					</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>Proveedor</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>Estatus</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>Última actualización</div>
				</div>
				<div className='px-4 py-2 text-left  '>Accciones</div>
			</GridHead>
			<GridBody className='grid grid-column-products'>
				{data.data.map((product: IProductSchema, index: number) => {
					return (
						<div className='border-b border-b-stone-100 ' key={index + 'item-list'}>
							<div className='checked grid-table-cell py-2'>
								<InputChecked name=''></InputChecked>
							</div>
							<div className='grid-table-cell px-4 py-2 flex items-center'>
								<div className='content-img w-10 h-10 relative'>
									<LazyImage src={generateUrl(product.images[0])} radius='3px' />
								</div>
								<div className='flex flex-col ml-4'>
									<h1 className='text-letter text-base leading-4 mb-1  '>{product.name_product}</h1>
									<p className='text-letter text-sm leading-3	'>{product.name_product}</p>
								</div>
							</div>
							{/* <div className='grid-table-cell px-4 py-2 w-full flex items-center align-center text-letter'>Sweet Importador de peluches</div>
							<div className='grid-table-cell px-4 py-2 text-sm flex items-center align-center text-letter'>
								<Status status={'desconocido'} />
							</div>
							<div className='grid-table-cell px-4 py-2 text-sm   flex items-center align-center text-letter'>{convertToDate(product.dateUpate)}</div>
							<div className='grid-table-cell px-4 py-2 text-sm  w-40 flex items-center align-center'>
								<div className='flex items-center align-center'>
									<button className='p-1 flex mr-2 opacity-80	hover:opacity-100'>
										<IconMask className='icon-edit bg-info w-4 h-4 ' />
									</button>
									<button className='p-1 flex opacity-80	hover:opacity-100'>
										<IconMask className='icon-delete bg-danger w-5 h-5 ' />
									</button>
								</div>
							</div> */}
						</div>
					);
				})}
			</GridBody>
			<GridFooter data=''></GridFooter>
		</DataGridStyled>
	);
};
