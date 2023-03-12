import { GridBody } from '../../../../components/UI/dataGrid/dataGridBody';
import { GridHead } from '../../../../components/UI/dataGrid/dataGridHead';
import { DataGridStyled } from '../../../../components/UI/dataGrid/dataGridStyled';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { faker } from '@faker-js/faker';
import './grid.scss';
import { InputChecked } from '../../../../components/UI/inputs/inputChecked';
import { IconAvatar } from '../../../../components/UI/GlobalComponents/IconAvatar/IconAvatar';
import { BtnTag } from '../../../../components/UI/GlobalComponents/buttons/buttonBase';
import { IconMask } from '../../../../components/UI/inputs/styled/IconDownStyleSelect';
import { convertToDate } from '../../../../components/helpers/helpers';
import { ProgressBar } from '../../../../components/UI/progressBar/progressBar';
import { GridFooter } from '../../../../components/UI/dataGrid/dataGridFooter';
import { IUserDataExtend } from '../interface';
import { useGetListUsersMutation } from '../gestionUsersApi';
import { useEffect, useState } from 'react';
export const GridTableUsers = () => {
	const [getUsers, {}] = useGetListUsersMutation();
	const [data, setData] = useState<IUserDataExtend[]>([]);
	const update = async () => {
		const res: any = await getUsers({});
		console.log('data users', res.data.data);
		setData(res.data.data);
	};
	useEffect(() => {
		update();
	}, []);
	return (
		<DataGridStyled className='table-auto w-full text-sm flex flex-col'>
			<GridHead className='grid-column-users'>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center text-letter'>
						Nombre
						<SwapVertIcon className='ml-auto cursor-pointer' />
					</div>
				</div>
				<div className='px-4 py-2 text-left text-letter'>
					<div className='flex items-center text-letter'>Rol</div>
				</div>
				<div className='px-4 py-2 text-left text-letter'>
					<div className='flex items-center text-letter'>Email</div>
				</div>
				<div className='px-4 py-2 text-left text-letter'>
					<div className='flex items-center text-letter'>Estatus</div>
				</div>
				<div className='px-4 py-2 text-left text-letter'>
					<div className='flex items-center text-letter'>Phone</div>
				</div>
				<div className='px-4 py-2 text-left '>
					<div className='flex items-center text-letter'>Última actualización</div>
				</div>
				<div className='px-4 py-2 text-left text-letter'>Accciones</div>
			</GridHead>
			<GridBody className='grid grid-column-users'>
				{data.map((user: IUserDataExtend, index: number) => {
					return (
						<div className='flex text-gray-700 border-b border-b-stone-100 ' key={index + 'item-list'}>
							<div className='checked grid-table-cell py-2'>
								<InputChecked name=''></InputChecked>
							</div>
							<div className='grid-table-cell px-4 py-2 flex items-center'>
								<IconAvatar name={user.name} photo={''} />
								<div className='flex flex-col ml-4'>
									<h1 className='text-letter text-base leading-4 mb-1  '>{user.name}</h1>
									<p className='text-letter text-sm leading-3	'>{user.lastname}</p>
								</div>
							</div>
							<div className='grid-table-cell px-4 py-2 w-full flex items-center align-center text-letter text-sm'>Admin</div>
							<div className='grid-table-cell px-4 py-2 w-full flex items-center align-center text-letter text-sm'>Flavio.mataqque@gmail.com</div>
							<div className='grid-table-cell px-4 py-2 text-sm flex items-center align-center text-letter'>Activo</div>
							<div className='grid-table-cell px-4 py-2 text-sm w-40 flex items-center align-center'>
								{user.phone ? <p className='text-letter text-sm leading-3 text-sm'>{user.phone}</p> : <p className='text-letter text-sm leading-3	'>No registrado</p>}
							</div>
							<div className='grid-table-cell px-4 py-2 text-sm main:color-mode-dark-white grid-table-cell px-4 py-2 w-full flex items-center align-center  flex items-center align-center text-letter'>
								{convertToDate(user.updated_at)}
							</div>
							<div className='grid-table-cell px-4 py-2 text-sm main:color-mode-dark-white  w-40 flex items-center align-center'>
								<div className='flex items-center align-center'>
									<button className='p-1 flex mr-2 opacity-80	hover:opacity-100'>
										<IconMask className='icon-edit bg-info w-4 h-4 ' />
									</button>
									<button className='p-1 flex opacity-80	hover:opacity-100'>
										<IconMask className='icon-delete bg-danger w-5 h-5 ' />
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</GridBody>
			<GridFooter records={{ cant: 0, limit: 0 }} pageIndex={() => {}}></GridFooter>
		</DataGridStyled>
	);
};
