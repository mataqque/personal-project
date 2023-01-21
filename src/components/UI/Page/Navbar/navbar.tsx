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
				<ImageBrand className='bg-white' sizeH='100%' sizeW='150px'></ImageBrand>
			</Link>
			<div className='container-link flex w-full'>
				<div className='center flex items-center justify-center w-full'>
					<NavbarLink to='/home' className='mr-6'>
						<span className='text-link text-white'>Home</span>
						<span className='line'></span>
					</NavbarLink>
					<NavbarLink to='/components' className='mr-6'>
						<span className='text-link text-white'>Components</span>
						<span className='line'></span>
					</NavbarLink>
					<NavbarLink to='/account/login' className='mr-2'>
						<span className='text-link text-white'>Login</span>
						<span className='line'></span>
					</NavbarLink>
				</div>
				<div className='flex w-max'>
					{theme === 'dark' ? (
						<div className='rounded-full flex items-center justify-center w-10 h-10 hover:bg-transparent-10 duration-300 cursor-pointer' onClick={() => changeThemeMode('light')}>
							<DarkModeOutlinedIcon className='fill-white' />
						</div>
					) : (
						<div className='rounded-full flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-200 duration-300 cursor-pointer' onClick={() => changeThemeMode('dark')}>
							<LightModeOutlinedIcon className='fill-dark' />
						</div>
					)}
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
					<Link to='/account/login' className='rounded-full h-max text-white border-info bg-info border-info mr-3  px-5 py-2 whitespace-nowrap hover:text-white'>
						Sign In
					</Link>
					<Link to='/account/register' className='rounded-full h-max text-white border-info bg-info border-info mr-2 px-5 py-2 whitespace-nowrap hover:text-white'>
						Register
					</Link>
				</div>
			</div>
		</ContainerNav>
	);
}
