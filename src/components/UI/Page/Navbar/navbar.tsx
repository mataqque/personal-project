import { useEffect, useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { ImageBrand } from '../../../../pages/Account/components/brand';
import { ContainerNav, NavbarLink } from './navbar.styled';
import { SeparatorVertical } from '../../GlobalComponents/separators/separators';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { changeTheme } from '../../theme/theme';
import { useDispatch } from 'react-redux';
import { IconMask } from '../../inputs/styled/IconDownStyleSelect';

export default function Navbar() {
	const [theme, setTheme] = useState('dark');
	const dispatch = useDispatch();
	const changeThemeMode = (theme: string) => {
		setTheme(theme);
		dispatch(changeTheme(theme));
	};
	return (
		<ContainerNav>
			<Link to='/' className='brand bold'>
				<ImageBrand className='bg-white w-12 h-12'></ImageBrand>
			</Link>
			<div className='container-link flex w-full'>
				<div className='center flex items-center justify-center w-full'>
					<NavbarLink to='/arreglos' className='mr-8'>
						<span className='text-link text-white'>Arreglos</span>
						<span className='line'></span>
					</NavbarLink>
					<NavbarLink to='/peluches' className='mr-8'>
						<span className='text-link text-white'>Peluches</span>
						<span className='line'></span>
					</NavbarLink>
					<NavbarLink to='/visuteria' className='mr-8'>
						<span className='text-link text-white'>Visuteria</span>
						<span className='line'></span>
					</NavbarLink>
					<NavbarLink to='/promociones' className=''>
						<span className='text-link text-white'>Promociones</span>
						<span className='line'></span>
					</NavbarLink>
					{/* <NavbarLink to='/account/login' className=''>
						<span className='text-link text-white'>Promociones</span>
						<span className='line'></span>
					</NavbarLink> */}
				</div>
				<div className='flex w-max items-center'>
					{/* {theme === 'dark' ? (
						<div className='rounded-full flex items-center justify-center w-10 h-10 hover:bg-transparent-10 duration-300 cursor-pointer' onClick={() => changeThemeMode('light')}>
							<DarkModeOutlinedIcon className='fill-white' />
						</div>
					) : (
						<div className='rounded-full flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-200 duration-300 cursor-pointer' onClick={() => changeThemeMode('dark')}>
							<LightModeOutlinedIcon className='fill-dark' />
						</div>
					)} */}
					<div className='flex justify-center items-center '>
						<a
							href='https://www.facebook.com/cosapiinmobiliariaoficial/'
							target='_blank'
							className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer mr-4 border border-gray-10'
						>
							<IconMask className='icon-facebook bg-white h-4 w-4'></IconMask>
						</a>
						<a
							href='https://www.facebook.com/cosapiinmobiliariaoficial/'
							target='_blank'
							className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer mr-4 border border-gray-10'
						>
							<IconMask className='icon-instagram bg-white h-4 w-4'></IconMask>
						</a>
						<a
							href='https://www.facebook.com/cosapiinmobiliariaoficial/'
							target='_blank'
							className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer border border-gray-10'
						>
							<IconMask className='icon-youtube bg-white h-4 w-4'></IconMask>
						</a>
					</div>
					<SeparatorVertical opacity={0.2}></SeparatorVertical>
					<div className='rounded-full flex items-center justify-center w-10 h-10 hover:bg-transparent-10 duration-300 cursor-pointer mr-2'>
						<NotificationsOutlinedIcon className='fill-white' />
					</div>
					<div className='rounded-full flex items-center justify-center w-10 h-10 hover:bg-transparent-10 duration-300 cursor-pointer mr-2'>
						<SettingsOutlinedIcon className='fill-white' />
					</div>
					<div className='rounded-full flex items-center justify-center w-10 h-10 hover:bg-transparent-10 duration-300 cursor-pointer'>
						<PersonOutlinedIcon className='fill-white' />
					</div>
				</div>
				<SeparatorVertical opacity={0.2}></SeparatorVertical>
				<div className='link-buttons flex w-max flex items-center'>
					<Link to='/account/login' className='rounded-full h-max text-white border-info bg-primary border-info mr-3  px-5 py-2 whitespace-nowrap hover:text-white'>
						Login
					</Link>
				</div>
			</div>
		</ContainerNav>
	);
}
