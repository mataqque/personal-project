import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ContainerNavStyled = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 20;
	transition: 0.3s;
	background-color: #0e0b1e;
	height: var(--heightNav);
	display: flex;
	align-items: center;
	justify-content: center;
	a:active,
	a:focus,
	a:hover {
		text-decoration: none;
	}
	.nav-container {
		display: flex;
	}
	.link {
		.line {
			width: 0%;
			height: 2px;
			background: #ffffffb2;
			transition: 0.3s;
			display: flex;
			position: relative;
			bottom: -3px;
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
		box-shadow: 0px 0px 23px 0px #160f2d;
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
		<ContainerNavStyled className={`${activeNavScrolled == true ? 'active' : ''}`}>
			<div className='container nav-container'>{props.children}</div>
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
