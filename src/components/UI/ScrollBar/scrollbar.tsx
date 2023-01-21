import { useState, useEffect } from 'react';
import { useRef } from 'react';
import './scrollbar.scss';
export default function ScrollBar(props: any) {
	// const bar = useRef<HTMLDivElement>(null);
	// const [height, setHeight] = useState(0);
	// const moveScroll = (e: any) => {
	// 	if (bar.current) {
	// 		const { scrollHeight, offsetHeight, scrollTop } = e.target;
	// 		let scrollTopFixed = scrollTop * (offsetHeight / scrollHeight);
	// 		let translate = scrollHeight * ((scrollTop + scrollTopFixed) / scrollHeight);
	// 		bar.current.style.top = `${translate}px`;
	// 	}
	// };
	// const updateHeightScroll = (e: any) => {
	// 	if (bar.current) {
	// 		let parent = bar.current.parentNode;
	// 		if (parent) {
	// 			const { clientHeight, scrollHeight } = bar.current.parentNode;
	// 			let heightScroll = (clientHeight / scrollHeight) * 100;
	// 			setHeight(heightScroll + '%');
	// 		}
	// 	}
	// };
	// useEffect(() => {
	// 	let timer = setInterval(() => {
	// 		let parent = bar.current.parentNode;
	// 		const { scrollHeight, clientHeight } = parent;
	// 		//
	// 		// console.log({scrollHeight}, {clientHeight})
	// 		scrollHeight != clientHeight ? updateHeightScroll() : setHeight(0);
	// 		parent.addEventListener('scroll', moveScroll);
	// 		clearInterval(timer);
	// 	}, 500);
	// }, []);
	// return <div className='content-scrollbar' ref={bar} style={{ height: height }}></div>;
	return <div></div>;
}
