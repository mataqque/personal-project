import SwapVertIcon from '@mui/icons-material/SwapVert';
import { InputChecked } from '../inputs/inputChecked';
import { IconAvatar } from '../GlobalComponents/IconAvatar/IconAvatar';
import { checkAllChecbox, convertToDate, generateId, uncheckAllChecbox } from '../../helpers/helpers';
import { BtnTag } from '../GlobalComponents/buttons/buttonBase';
import { IconMask } from '../inputs/styled/IconDownStyleSelect';
import { ProgressBar } from '../progressBar/progressBar';
import { DataGridStyled } from './dataGridStyled';
import { InputCheckedStyled } from '../inputs/styled/InputChecked';
import { useRef } from 'react';
import { GridHead } from './dataGridHead';
import { GridBody } from './dataGridBody';
import { GridFooter } from './dataGridFooter';

interface IPropsDataGrid {
	data: any;
}
export const DataGrid = (props: IPropsDataGrid) => {
	const { data } = props;

	return (
		<DataGridStyled className='table-auto w-full text-sm flex flex-col'>
			<GridHead className='grid-head'>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>
						Nombre
						<SwapVertIcon className='ml-auto cursor-pointer' />
					</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>Rol</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>Estatus</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>Phone</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>
						Última actualización
						<SwapVertIcon className='ml-auto cursor-pointer' />
					</div>
				</div>
				<div className='px-4 py-2 text-left  '>Accciones</div>
			</GridHead>
			<GridBody></GridBody>
			<GridFooter data=''></GridFooter>
		</DataGridStyled>
	);
};
