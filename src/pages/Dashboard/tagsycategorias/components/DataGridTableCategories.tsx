import { useEffect } from 'react';
import { DataGridStyled } from '../../../../components/UI/dataGrid/dataGridStyled';
import { GridHead } from '../../../../components/UI/dataGrid/dataGridHead';
import { GridBody } from '../../../../components/UI/dataGrid/dataGridBody';
import { GridFooter } from '../../../../components/UI/dataGrid/dataGridFooter';
import { IconMask } from '../../../../components/UI/inputs/styled/IconDownStyleSelect';
import { Link } from 'react-router-dom';
import { Status } from '../../../Components/status/status';
import { LazyImage } from '../../../../components/UI/lazyImages/images';
import { InputChecked } from '../../../../components/UI/inputs/inputChecked';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { ICategorySchema } from '../interface';
import { convertToDate, generateUrl } from '../../../../components/helpers/helpers';
import { IDataGridTable } from '../../interface';
import './datagridtable.scss';
export const DataGridTableCategories = ({ dataGrid, pageIndex, deleteFn = () => {} }: IDataGridTable) => {
	const { data = [] } = dataGrid;
	useEffect(() => {}, []);
	return (
		<DataGridStyled className='table-auto w-full text-sm flex flex-col'>
			<GridHead className='grid-column-categories'>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>
						Nombre de la categoría
						<SwapVertIcon className='ml-auto cursor-pointer' />
					</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>Estatus</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>Última actualización</div>
				</div>
				<div className='px-4 py-2 text-left  '>Accciones</div>
			</GridHead>
			<GridBody className='grid grid-column-categories'>
				{data.map((category: ICategorySchema, index: number) => {
					return (
						<div className='border-b border-b-stone-100 ' key={index + 'item-list'}>
							<div className='checked grid-table-cell py-2'>
								<InputChecked name=''></InputChecked>
							</div>
							<div className='grid-table-cell px-4 py-2 flex items-center'>
								<div className='content-img w-10 h-10 relative'>
									<LazyImage src={category.images.length > 0 ? generateUrl(category.images[0]) : ''} radius='3px' />
								</div>
								<div className='flex flex-col ml-4'>
									<h1 className='text-letter text-base leading-4 mb-1 font-thin'>{category.name_category}</h1>
								</div>
							</div>
							<div className='grid-table-cell px-4 py-2 text-sm flex items-center align-center text-letter'>
								<Status status={'desconocido'} />
							</div>
							<div className='grid-table-cell px-4 py-2 text-sm  main:color-mode-dark-white flex items-center align-center text-letter'>
								{category.updated_at ? convertToDate(category.updated_at) : ''}
							</div>
							<div className='grid-table-cell px-4 py-2 text-sm  w-40 flex items-center align-center'>
								<div className='flex items-center align-center'>
									<Link to={`/dashboard/categoria/${category.uuid_category}`} className='p-1 flex mr-2 opacity-80	hover:opacity-100'>
										<IconMask className='icon-edit bg-info w-4 h-4 ' />
									</Link>
									<button onClick={() => deleteFn(category.uuid_category)} className='p-1 flex opacity-80	hover:opacity-100'>
										<IconMask className='icon-delete bg-danger w-5 h-5 ' />
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</GridBody>
			<GridFooter records={dataGrid.records} pageIndex={pageIndex}></GridFooter>
		</DataGridStyled>
	);
};
