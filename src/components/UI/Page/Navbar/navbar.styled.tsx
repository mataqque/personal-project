import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ContainerNavStyled = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 20;
	transition: 0.3s;
	display: flex;
	align-items: center;
	justify-content: center;
	a:active,
	a:focus,
	a:hover {
		text-decoration: none;
	}
	.component-nav {
		display: flex;
		align-items: center;
		background-color: var(--secondary);
		height: var(--heightNav);
	}
	.nav-container {
		height: calc(100% - 1.8rem);
		display: flex;
	}
	.link {
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		.line {
			width: 0%;
			height: 2px;
			background: #ffffffb2;
			transition: 0.3s;
			display: flex;
			position: relative;
			bottom: -3px;
			transform-origin: left;
		}
		&.active {
			.line {
				background: white;
				animation: none;
				width: 100%;
			}
		}
	}
	&.active {
		0px 0px 23px 0px #ff7b87d4;
	}
	.link {
		&:hover {
			.line {
				width: 100%;
			}
		}
	}
`;
interface IPropsContainerNav {
	children: JSX.Element | JSX.Element[];
}

export const ContainerNav = (props: IPropsContainerNav) => {
	const [activeNavScrolled, setActiveNavScrolled] = useState(false);
	useEffect(() => {
		window.onscroll = () => {
			window.scrollY == 0 ? setActiveNavScrolled(false) : setActiveNavScrolled(true);
		};
	}, []);
	return (
		<ContainerNavStyled className={`nav flex flex-col ${activeNavScrolled == true ? 'active' : ''}`}>
			<div className='w-full bg-primary py-2'>
				<div className='container text-white flex items-center justify-center'>
					<div className='mr-4'>Aprovecha las promociones y descuentos que tenemos para tí</div>
					<Link to='/account/register' className='rounded-full h-max text-primary border-white bg-white  mr-2 px-5 py-2 whitespace-nowrap'>
						Descuentos
					</Link>
				</div>
			</div>
			<div className='w-full component-nav'>
				<div className='container nav-container'>{props.children}</div>
			</div>
		</ContainerNavStyled>
	);
};

interface IPropsNavbarLinkItem {
	to: string;
	children: JSX.Element | JSX.Element[];
	className?: string;
}

export function NavbarLink(props: IPropsNavbarLinkItem) {
	const { to, className } = props;
	return (
		<NavLink to={to} className={({ isActive }) => (isActive ? 'link active ' + (className ? className : '') : 'link ' + (className ? className : ''))}>
			{props.children}
		</NavLink>
	);
}
