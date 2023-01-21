import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { callbackDelay } from '../../../helpers/helpers';

interface IPropsheightbarStyled {
	heightbar: string;
}

interface IProgressBarProps {
	progress: number;
	color: string;
	height?: string;
	rest?: any;
}

const ProgressBarStyled = styled.div`
	width: 100%;
	background-color: #edf3f8;
	height: ${(props: IPropsheightbarStyled) => props.heightbar};
	.bar {
		width: 0%;
		transition: 0.5s;
		background-color: ${props => props.color};
	}
`;

export const ProgressBar = ({ progress, color, height, ...rest }: IProgressBarProps) => {
	const [progressBar, setProgressBar] = useState(0);
	const contentBar = useRef<HTMLDivElement>(null);
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 1.0,
	};
	const triggerEvent = (e: any) => {
		if (e[0].isIntersecting) {
			callbackDelay(() => setProgressBar(progress), 500);
		}
	};
	useEffect(() => {
		const observer = new IntersectionObserver(triggerEvent, options);
		observer.observe(contentBar.current as Element);
	}, []);
	return (
		<ProgressBarStyled className=' h-6 rounded-full w-full' heightbar={height ? height : '10px'} color={color} ref={contentBar}>
			<div className='bar h-full rounded-full' style={{ width: `${progressBar}%` }} />
		</ProgressBarStyled>
	);
};
