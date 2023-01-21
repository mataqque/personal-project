import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { verifyExtension } from '../../../../../components/helpers/helpers';
import Skeleton from 'react-loading-skeleton';
import { selectFile } from '../../../../../components/modalUpload/FileManagerSlice';

export function File(props: any) {
	const { file, index } = props;
	const Element = useRef<HTMLDivElement>(null);
	const [loadImage, setLoadImage] = useState(false);
	const dispatch = useDispatch();

	const getExtension = (filename: any) => {
		return filename?.split('.').pop().toUpperCase();
	};
	const routeFile = file.dir + '/' + verifyExtension(file);
	const event = (e: any) => {
		if (e[0].isIntersecting == true) {
			const imageToLoad = new Image();
			imageToLoad.src = routeFile;
			imageToLoad.onload = e => {
				setLoadImage(true);
			};
		}
	};
	useEffect(() => {
		if (Element.current) {
			const options = {
				root: document.querySelector('.content-all-images'),
				rootMargin: '28%',
				threshold: 1.0,
			};
			const observer = new IntersectionObserver(event, options);
			observer.observe(Element.current);
		}
	});

	return (
		<div className='content-file' ref={Element}>
			<input type='checkbox' id={file.uuid} value={file.uuid} />
			<label className={`file flex flex-col ${file?.selected ? 'active' : ''}`} htmlFor={file.uuid}>
				{file.collection_name == 'image' ? <div className='content-img'>{loadImage == false ? <Skeleton /> : <img className='img' src={routeFile}></img>}</div> : null}
				{file.collection_name == 'documento' || file.collection_name == 'video' ? (
					<div className='content-img gradient'>
						<div className='doc'>
							<span className='extension-item bold'>{getExtension(file.file_name)}</span>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 403.9 360'>
								<g id='Capa_2' data-name='Capa 2'>
									<g id='Capa_1-2' data-name='Capa 1'>
										<g id='_341772144' data-name=' 341772144'>
											<path
												id='_341772624'
												data-name=' 341772624'
												d='M24.26,0H275.51a9.47,9.47,0,0,1,5.59,1.71L401.59,89.92h0A5.09,5.09,0,0,1,403.9,94h0V342.24c0,4.89-2.73,9.33-7.12,12.55A29.27,29.27,0,0,1,379.64,360H24.26a29.25,29.25,0,0,1-17.14-5.21C2.73,351.57,0,347.13,0,342.24V17.76C0,12.87,2.73,8.43,7.12,5.21A29.25,29.25,0,0,1,24.26,0Zm248,11.52h-248a10.17,10.17,0,0,0-6,1.84,5.53,5.53,0,0,0-2.51,4.4V342.24a5.53,5.53,0,0,0,2.51,4.4,10.17,10.17,0,0,0,6,1.84H379.64a10.21,10.21,0,0,0,6-1.84,5.53,5.53,0,0,0,2.51-4.4V96.38L272.25,11.52Z'
											></path>
											<path
												id='_341772600'
												data-name=' 341772600'
												d='M395.32,99.73l-119.51-.26V93.73l0,5.76c-4.35,0-7.86-2.59-7.85-5.77a3.87,3.87,0,0,1,0-.48l-.3-87.47h0c0-3.18,3.5-5.76,7.85-5.77a9.43,9.43,0,0,1,5.62,1.72l120.48,88.2h0c3.08,2.25,3.08,5.9,0,8.14a9.64,9.64,0,0,1-6.27,1.67Z'
											></path>
										</g>
									</g>
								</g>
							</svg>
						</div>
					</div>
				) : null}
				<span className='title-file'>{file.file_name}</span>
			</label>
		</div>
	);
}
