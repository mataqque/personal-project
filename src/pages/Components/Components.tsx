import { componentsSchema, LoginSchema } from '../../components/helpers/common/forms/constraints/ValidatonSchemas';
import { FormContainer } from '../../components/helpers/common/forms/Form';
import { FormStyled } from '../../components/UI/GlobalComponents/Form/form';
import { ParametersForm } from '../Account/interfaces/interface';
import { useEffect, useState } from 'react';
import { ImageBrand } from '../Account/components/brand';
import { SeparatorHorizontal } from '../../components/UI/GlobalComponents/separators/separators';
import { FormSearch, InputText, InputTextPassword } from '../../components/UI/inputs/inputText';
import { InputSelect } from '../../components/UI/inputs/inputSelect';
import { InputDateRange } from '../../components/UI/inputs/inputDateRange';
import { LazyImage } from '../../components/UI/lazyImages/images';
import { BtnIcon, BtnTag, ButtonBase, ButtonOutline } from '../../components/UI/GlobalComponents/buttons/buttonBase';
import { InputSwitch, InputSwitchSm } from '../../components/UI/inputs/inputSwitch';
import { IconAvatar } from '../../components/UI/GlobalComponents/IconAvatar/IconAvatar';
import { faker } from '@faker-js/faker';
import { InputChecked } from '../../components/UI/inputs/inputChecked';
import { List } from 'rsuite';
import { ItemList } from '../../components/UI/GlobalComponents/List/list';
import { ProgressBar } from '../../components/UI/progressBar/progressBar';
import { convertToDate } from '../../components/helpers/helpers';
import { IconMask } from '../../components/UI/inputs/styled/IconDownStyleSelect';
import './style.scss';
import { toast } from 'react-toastify';
import { ToastNotify, ToastNotifyPromise } from '../../helpers/helpers';
import { InputRadio } from '../../components/UI/inputs/inputRadio';
import eye from '../../assets/images/Account/icons/eye-svg.svg?url';
import person from '../../assets/images/Account/icons/user.svg?url';
import mail from '../../assets/images/Account/icons/mail.svg?url';
import { ChartArea } from '../../components/UI/charts/chartArea';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { DataGrid } from '../../components/UI/dataGrid/dataGrid';
import { MainContainer } from '../../components/UI/container/main';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { ProgressBarCircle } from '../../components/UI/progressBar/progressBarCircle';
import { openModal } from '../../components/UI/GlobalComponents/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { BarModal } from '../../components/UI/GlobalComponents/barmodal/barmodal';
import { FormSideBar } from './form/formSidebar';
import { IconLottie } from '../../components/UI/Icon/Icons';
const whatsapp = require('../../assets/images/Account/icons/whatsapp-animation.json');
interface IUsers {
	name: string;
	lname: string;
	image: string;
	dateUpate: Date;
}

export default function Components() {
	const dorms = [
		{ value: '1', label: '1 Dorm' },
		{ value: '2+', label: '2 Dorms plus' },
		{ value: '2', label: '2 Dorms' },
		{ value: '3', label: '3 Dorms' },
		{ value: '3+', label: '2 Dorms plus' },
		{ value: '4', label: '4 Dorms' },
	];
	const dataSelect = [
		{ value: '1', label: 'Colaborador' },
		{ value: '3', label: 'Editor' },
		{ value: '4', label: 'Supervisor' },
		{ value: '2', label: 'Organización' },
	];
	const dataSelec2 = [
		{ value: '1', label: 'Proyecto 1' },
		{ value: '2', label: 'Proyecto 2' },
		{ value: '3', label: 'Proyecto 3' },
		{ value: '4', label: 'Proyecto 4' },
		{ value: '5', label: 'Proyecto 5' },
		{ value: '6', label: 'Proyecto 6' },
		{ value: '7', label: 'Proyecto 7' },
		{ value: '8', label: 'Proyecto 8' },
	];
	const dispatch = useDispatch();
	const [initialValues, setInitialValues] = useState({
		user: '',
	});
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
	const fakeUsers: IUsers[] = createUsers(20);

	const notification = (type: any) => {
		ToastNotify({ message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', options: { type: type, position: 'bottom-left' } });
	};
	const notificationPromise = () => {
		// ToastNotifyPromise();
	};
	const data = {};
	const handleSubmit = async (values: any) => {};
	useEffect(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
			const colorScheme = e.matches ? 'dark' : 'light';
			console.log(colorScheme);
			if (colorScheme === 'dark') {
			} else {
			}
		});
	}, []);
	return (
		<MainContainer>
			{/* <BarModal>
				<FormSideBar></FormSideBar>
			</BarModal> */}
			<IconLottie properties={{ icon: whatsapp, class: 'loader-global', positionCss: 'relative' }} />
			<div className='container'>
				<div className='flex mt-10'>
					<div className=''>
						<h1 className='text-letter text-8xl'>Title</h1>
					</div>
					<div className='flex items-end mr-2'>
						<h1 className='text-letter text-7xl'>Title</h1>
					</div>
					<div className='flex items-end mr-2'>
						<h1 className='text-letter text-6xl'>Title</h1>
					</div>
					<div className='flex items-end mr-2'>
						<h1 className='text-letter text-5xl'>Title</h1>
					</div>
					<div className='flex items-end mr-2'>
						<h1 className='text-letter text-4xl'>Title</h1>
					</div>
					<div className='flex items-end mr-2'>
						<h1 className='text-letter text-3xl'>Title</h1>
					</div>
					<div className='flex items-end mr-2'>
						<h1 className='text-letter text-2xl'>Title</h1>
					</div>
					<div className='flex items-end mr-2'>
						<h1 className='text-letter text-base'>Title</h1>
					</div>
				</div>
				<p className='paragraph'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
					took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
					PageMaker including versions of Lorem Ipsum.
				</p>
				<SeparatorHorizontal />
				<h1 className='text-letter text-2xl mb-4'>Inputs</h1>
				<div className='w-full mb-4'>
					<FormContainer initialValues={initialValues} validationSchema={componentsSchema} onSubmit={handleSubmit}>
						{(form: any) => {
							const { handleSubmit, isSubmitting }: ParametersForm = form;
							return (
								<FormStyled onSubmit={handleSubmit}>
									<div className='flex flex-wrap'>
										<div className='order lg:w-1/4 w-1/2 p-2'>
											<InputText name='name' placeholder='Nombre' form={form} icon={person} />
										</div>
										<div className='order lg:w-1/4 w-1/2 p-2'>
											<InputText name='lname' placeholder='Apellidos' form={form} icon={person} />
										</div>
										<div className='order lg:w-1/4 w-1/2 p-2'>
											<InputText name='email' placeholder='Correo' form={form} icon={mail} />
										</div>
										<div className='order lg:w-1/4 w-1/2 p-2'>
											<InputTextPassword name='password' placeholder='Contraseña' form={form} icon={eye} />
										</div>
									</div>
									<div className='flex flex-wrap'>
										<div className='order lg:w-1/4 w-1/2 p-2'>
											<InputText name='name2' placeholder='Nombre' form={form} />
										</div>
										<div className='order lg:w-1/4 w-1/2 p-2'>
											<InputText name='lname2' placeholder='Apellido' form={form} />
										</div>
										<div className='order lg:w-1/4 w-1/2 p-2'>
											<InputText name='email2' placeholder='Correo Electrónico' form={form} />
										</div>
										<div className='order lg:w-1/4 w-1/2 p-2'>
											<InputTextPassword name='password2' placeholder='Contraseña' form={form} />{' '}
										</div>
										<div className='order lg:w-1/4 w-1/2 p-2'>
											<InputSelect name='employment' form={form} data={dataSelect} label={'Cargo'} />
										</div>
										<div className='order lg:w-1/4 w-1/2 p-2'>
											<InputSelect name='proyects' form={form} data={dataSelec2} label={'Proyectos'} color='red' />
										</div>

										<div className='order lg:w-1/4 w-1/2 p-2'>
											<InputSelect name='dorms' form={form} data={dorms} label={'N° de dormitorios'} />
										</div>
										<div className='order lg:w-1/4 w-1/2 p-2'>
											<InputSelect name='' form={form} data={dataSelec2} label={'Proyectos'} color='red' />
										</div>
										<div className='order lg:w-1/4 w-1/2 p-2'>
											<InputDateRange />
										</div>

										<div className='order lg:w-1/4 w-1/2 p-2 flex items-center flex-wrap'>
											<div className='flex mb-2'>
												<InputSwitch name='enable' defaultValue={true} form={form} color='#4caf50' outline={true} />
												<InputSwitch name='enable' defaultValue={true} form={form} color='red' outline={true} />
												<InputSwitch name='enable' defaultValue={true} form={form} color='#7b37d6' outline={true} />
												<InputSwitchSm name='enable' defaultValue={true} form={form} color='#4868f7' outline={true} />
											</div>
											<div className='flex mb-2'>
												<InputSwitchSm name='enable' defaultValue={true} form={form} color='#4caf50' outline={true} />
												<InputSwitchSm name='enable' defaultValue={true} form={form} color='red' outline={true} />
												<InputSwitchSm name='enable' defaultValue={true} form={form} color='#7b37d6' outline={true} />
												<InputSwitchSm name='enable' defaultValue={true} form={form} color='#4868f7' outline={true} />
											</div>
											<div className='flex'>
												<InputSwitchSm name='enable' defaultValue={true} className='radio' form={form} color='#4caf50' outline={true} />
												<InputSwitchSm name='enable' defaultValue={true} className='radio' form={form} color='red' outline={true} />
												<InputSwitchSm name='enable' defaultValue={true} className='radio' form={form} color='#7b37d6' outline={true} />
												<InputSwitchSm name='enable' defaultValue={true} className='radio' form={form} color='#4868f7' outline={true} />
											</div>
											<div className=''></div>
										</div>
										<div className='order lg:w-1/4 w-full p-2 flex'>
											<InputRadio color='#4868f7' name='optionradio1' defaultValue={''} className='mr-2' form={form} />
											<InputRadio color='#4caf50' name='optionradio2' defaultValue={''} className='mr-2' form={form} />
											<InputRadio color='red' name='optionradio3' defaultValue={''} className='mr-2' form={form} />
											<InputRadio color='#7b37d6' name='optionradio4' defaultValue={''} className='mr-2' form={form} />
										</div>
										<div className='order lg:w-1/4 w-full p-2 flex'>
											<div className='mr-2'>
												<InputChecked name='' color='#4868f7'></InputChecked>
											</div>
											<div className='mr-2'>
												<InputChecked name='' color='#4caf50'></InputChecked>
											</div>
											<div className='mr-2'>
												<InputChecked name='' color='red'></InputChecked>
											</div>
											<InputChecked name='' color='#7b37d6'></InputChecked>
										</div>
									</div>
								</FormStyled>
							);
						}}
					</FormContainer>
					<div className='order w-1/4 p-2 flex items-center'>
						<FormSearch placeholder={'Buscar'}></FormSearch>
					</div>
				</div>
				<SeparatorHorizontal />
				<h1 className='text-letter text-2xl mb-4  '>Botones</h1>
				<div className='flex flex-col '>
					<ButtonBase className='mr-2'>Base button</ButtonBase>
					<div className='flex my-4 flex-wrap'>
						<ButtonBase onClick={() => notification('info')} className='bg-info border-info mb-2 text-white mr-2'>
							button
						</ButtonBase>
						<ButtonBase onClick={() => notification('success')} className='bg-success border-success mb-2 text-white mr-2'>
							Action button
						</ButtonBase>
						<ButtonBase onClick={() => notification('error')} className='bg-danger border-danger mb-2 text-white mr-2'>
							Action button
						</ButtonBase>
						<ButtonBase onClick={() => notification('warning')} className='bg-purple-500 border-purple-500 mb-2 text-white mr-2'>
							Action button
						</ButtonBase>
						<ButtonBase onClick={() => ToastNotifyPromise()} className='bg-gray-200 mr-2 mb-2 text-white'>
							Action button
						</ButtonBase>
						<ButtonBase onClick={() => ToastNotifyPromise()} className='bg-gray-300 mr-2 mb-2 text-white mr-auto'>
							Action button
						</ButtonBase>
					</div>
					<div className='flex mb-4 flex-wrap'>
						<ButtonOutline className='mb-2 text-white hover:border-info hover:bg-info hover:text-white border-info mr-2 text-info'>Action button</ButtonOutline>
						<ButtonOutline className='mb-2 text-white hover:border-success hover:bg-success hover:text-white border-success mr-2 text-success'>Action button</ButtonOutline>
						<ButtonOutline className='mb-2 text-white hover:border-danger hover:bg-danger hover:text-white border-danger mr-2 text-danger'>Action button</ButtonOutline>
						<ButtonOutline className='mb-2 text-white hover:border-purple-500 hover:bg-purple-500 hover:text-white border-purple-500 mr-2 text-purple-500'>Action button</ButtonOutline>
					</div>
					<div className='flex mb-4 flex-wrap'>
						<ButtonOutline
							className='mb-2 text-white hover:border-info hover:bg-info hover:text-white border-info mr-2 text-info'
							onClick={() => {
								dispatch(openModal());
							}}
						>
							Open Modal
						</ButtonOutline>
						<ButtonOutline className='mb-2 text-white hover:border-success hover:bg-success hover:text-white border-success mr-2 text-success'>Action button</ButtonOutline>
						<ButtonOutline className='mb-2 text-white hover:border-danger hover:bg-danger hover:text-white border-danger mr-2 text-danger'>Action button</ButtonOutline>
						<ButtonOutline className='mb-2 text-white hover:border-purple-500 hover:bg-purple-500 hover:text-white border-purple-500 mr-2 text-purple-500'>Action button</ButtonOutline>
					</div>
					<div className='flex flex-wrap mb-6'>
						<BtnIcon className='mr-2 flex items-center justify-center border-success'>
							<IconMask className='icon-edit bg-success w-1/2 h-1/2' />
						</BtnIcon>
						<BtnIcon className='mr-2 flex items-center justify-center border-danger'>
							<IconMask className='icon-edit bg-danger w-1/2 h-1/2' />
						</BtnIcon>
						<BtnIcon className='mr-2 flex items-center justify-center border-info'>
							<IconMask className='icon-edit bg-info w-1/2 h-1/2' />
						</BtnIcon>
						<BtnIcon className='mr-2 flex items-center justify-center border-danger'>
							<IconMask className='icon-delete bg-danger w-1/2 h-1/2' />
						</BtnIcon>
					</div>
					<div className='flex'>
						<ButtonBase className='bg-gray-300 mr-2 mb-2 text-white mr-auto'>
							<DownloadOutlinedIcon sx={{ mr: '10px' }} />
							Download file
						</ButtonBase>
					</div>
				</div>
				<SeparatorHorizontal />
				<h1 className='text-letter text-2xl mb-4  '>Loaders</h1>
				<div className='flex flex-wrap'>
					<div className='content-img w-40 h-40 mr-4 mb-3'>
						<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='100%' />
					</div>
					<div className='content-img w-40 h-40 mr-4 mb-3'>
						<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='10px' />
					</div>
					<div className='content-img w-80 h-40 mr-4 mb-3'>
						<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='10px' />
					</div>
					<div className='flex flex-col flex-wrap'>
						<div className='w-80 h-3 mb-1'>
							<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='5px' />
						</div>
						<div className='w-80 h-3 mb-1'>
							<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='5px' />
						</div>
						<div className='w-80 h-3 mb-1'>
							<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='5px' />
						</div>
						<div className='w-80 h-3 mb-1'>
							<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='5px' />
						</div>
						<div className='w-80 h-3 mb-1'>
							<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='5px' />
						</div>
						<div className='w-80 h-3 mb-1'>
							<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='5px' />
						</div>
						<div className='w-60 h-3'>
							<LazyImage src='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisajes.jpg' radius='5px' />
						</div>
					</div>
				</div>
				<SeparatorHorizontal />
				<h1 className='text-letter text-2xl mb-4  '>Avatares</h1>
				<div className='flex my-4 flex flex-wrap'>
					{fakeUsers.map((user: any, index: number) => {
						return (
							<div className='flex sm:mr-2 md:mr-4' key={index + 'avatar'}>
								<IconAvatar name={user.name} photo={user.image} />
							</div>
						);
					})}
				</div>
				<div className='flex flex-wrap'>
					{fakeUsers.map((user: any, index: number) => {
						return (
							<div className='sm:mr-2 md:mr-4 md:mb-2' key={'icon-avatar' + index}>
								<IconAvatar name={user.name} photo='' />
							</div>
						);
					})}
				</div>
				<SeparatorHorizontal />
				<h1 className='text-letter text-2xl mb-4  '>Lista</h1>
				{/* <div className='flex flex-col'>
					<List></List>
				</div> */}
				<DataGrid data={fakeUsers} />
				<SeparatorHorizontal />
				<h1 className='text-letter text-2xl mb-4  '>Graficos</h1>
				<div className='grid targets'>
					<div className='bg-gray-30 p-6 flex'>
						<div className='flex flex-col'>
							<EmailIcon className='fill-primary mb-2' />
							<span className='text-primary text-2xl font-bold mb-1'>12,361</span>
							<span className='text-info'>Emails Sent</span>
						</div>
						<div className='ml-auto flex items-center flex-col'>
							<ProgressBarCircle progress={30} size={60} />
							30%
						</div>
					</div>
					<div className='bg-gray-30 p-6 flex'>
						<div className='flex flex-col'>
							<PersonAddIcon className='fill-primary mb-2' />
							<span className='text-primary text-2xl font-bold mb-1'>431,225</span>
							<span className='text-info'>Sales Obtained</span>
						</div>
						<div className='ml-auto flex items-center flex items-center flex-col'>
							<ProgressBarCircle progress={60} size={60} />
							60%
						</div>
					</div>
					<div className='bg-gray-30 p-6 flex'>
						<div className='flex flex-col'>
							<PersonAddIcon className='fill-primary mb-2' />
							<span className='text-primary text-2xl font-bold mb-1'>32,441</span>
							<span className='text-info'>New Clients</span>
						</div>
						<div className='ml-auto flex items-center flex-col'>
							<ProgressBarCircle progress={95} size={60} />
							95%
						</div>
					</div>
				</div>
				<SeparatorHorizontal />
				<h1 className='text-letter text-2xl mb-4  '>Graficos</h1>
				<div className='flex'>
					<div className='w-1/2 p-4 bg-gray-30 mr-4'>
						<ChartArea></ChartArea>
					</div>
					<div className=''></div>
					<div className='w-1/2 p-4 bg-gray-30 mr-2'>
						<ChartArea></ChartArea>
					</div>
				</div>
			</div>
		</MainContainer>
	);
}
