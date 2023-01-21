import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { SVGProps } from 'react';

interface ICircularImageProps {
	src: string;
	alt?: string;
}

interface IImageProps {
	src: string;
	radius: string;
	alt?: string;
	class?: string;
}

interface Props {
	radius: string;
}
const ImageStyled = styled.div`
	border-radius: ${(props: Props) => props.radius};
	width: 100%;
	height: 100%;
	overflow: hidden;
	.content-img {
		width: 100%;
		height: 100%;
		span {
			height: 100%;
			display: flex;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}
	}
`;

export const LazyImage = (props: IImageProps) => {
	const [loadImage, setLoadImage] = useState(false);
	const ContentImg = useRef<HTMLDivElement>(null);
	const routeFile = props.src;
	const LoadImage = (e: any) => {
		if (e[0].isIntersecting == true) {
			const imageToLoad = new Image();
			imageToLoad.src = routeFile;
			imageToLoad.onload = (e: any) => {
				console.log('first load image');
				setLoadImage(true);
			};
		}
	};
	useEffect(() => {
		const options = {
			root: document.querySelector('.content-all-images'),
			rootMargin: '28%',
			threshold: 1.0,
		};
		const observer = new IntersectionObserver(LoadImage, options);
		observer.observe(ContentImg.current as Element);
	}, [loadImage]);
	return (
		<ImageStyled className={`image-default ${props.class}`} ref={ContentImg} radius={props.radius}>
			<div className='content-img'>{loadImage == false ? <Skeleton /> : <img className='img' src={routeFile}></img>}</div>
		</ImageStyled>
	);
};
