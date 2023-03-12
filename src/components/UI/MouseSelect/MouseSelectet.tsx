import { useEffect, useRef } from 'react';
import './poligone.scss';
import { observerPoligone } from '../../../pages/Dashboard/FileManager/observer/observer';
export const MouseSelect = () => {
	const poligone = useRef<HTMLDivElement>(null);
	const mouseDown = (e: any) => {
		if (poligone.current) {
			poligone.current.style.top = `${e.pageY}px`;
			poligone.current.style.left = `${e.pageX}px`;
			poligone.current.style.width = '0px';
			poligone.current.style.height = '0px';
			poligone.current.style.display = 'block';
		}
	};
	const mouseUp = (e: any) => {
		if (poligone.current) {
			poligone.current.style.width = `${e.pageX - poligone.current.offsetLeft}px`;
			poligone.current.style.height = `${e.pageY - poligone.current.offsetTop}px`;
		}
	};
	useEffect(() => {
		let subscription = observerPoligone.subscribe((e: any) => {
			if (e.type === 'mousedown') {
				mouseDown(e);
			} else if (e.type === 'mouseup') {
				mouseUp(e);
			}
		});

		return () => {
			subscription.unsubscribe();
		};
	}, []);
	return <div className='poligone' ref={poligone}></div>;
};
