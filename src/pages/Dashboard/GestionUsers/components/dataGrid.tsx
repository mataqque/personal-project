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
export const GridTableUsers = () => {
	const createUser = () => {
		return {
			name: faker.name.findName(),
			lname: faker.name.lastName(),
			image: faker.image.avatar(),
			dateUpate: faker.date.past(),
			percent: faker.random.numeric(2),
			color: 'hsla(' + Math.random() * 360 + ', 100%, 50%, 1)',
			tags: faker.random.words(2).split(' '),
		};
	};

	const createUsers = (numUsers = 5) => {
		return Array.from({ length: numUsers }, createUser);
	};
	const fakeUsers = createUsers(20);
	return (
		<DataGridStyled className='table-auto w-full text-sm flex flex-col'>
			<GridHead className='grid-column-users'>
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
					<div className='flex items-center'>Email</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>Estatus</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>Phone</div>
				</div>
				<div className='px-4 py-2 text-left  '>
					<div className='flex items-center'>Última actualización</div>
				</div>
				<div className='px-4 py-2 text-left  '>Accciones</div>
			</GridHead>
			<GridBody className='grid grid-column-users'>
				{fakeUsers.map((user: any, index: number) => {
					return (
						<div className='grid-table-row flex text-gray-700 hover:bg-gray-10 border-b border-b-stone-100 ' key={index + 'item-list'}>
							<div className='checked grid-table-cell py-2'>
								<InputChecked name=''></InputChecked>
							</div>
							<div className='grid-table-cell px-4 py-2 flex items-center'>
								<IconAvatar name={user.name} photo={user.image} />
								<div className='flex flex-col ml-4'>
									<h1 className='text-letter text-base leading-4 mb-1  '>{user.name}</h1>
									<p className='text-letter text-sm leading-3	'>{user.lname}</p>
								</div>
							</div>
							<div className='grid-table-cell px-4 py-2 w-full flex items-center align-center'>Admin</div>
							<div className='grid-table-cell px-4 py-2 w-full flex items-center align-center'>Flavio.mataqque@gmail.com</div>
							<div className='grid-table-cell px-4 py-2 text-sm flex items-center align-center'>Activo</div>
							<div className='grid-table-cell px-4 py-2 text-sm w-40 flex items-center align-center'>
								<div className='flex'>
									{user.tags.map((tag: any, index: number) => {
										return (
											<div key={index + 'tag'} className='mr-1'>
												<BtnTag color='#0091ff' className='text-xsm'>
													{tag}
												</BtnTag>
											</div>
										);
									})}
								</div>
							</div>
							<div className='grid-table-cell px-4 py-2 text-sm   flex items-center align-center'>{convertToDate(user.dateUpate)}</div>
							<div className='grid-table-cell px-4 py-2 text-sm  w-40 flex items-center align-center'>
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
		</DataGridStyled>
	);
};
