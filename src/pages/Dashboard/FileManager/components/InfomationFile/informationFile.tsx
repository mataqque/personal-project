import { useSelector } from 'react-redux';
import { IFile, IFileState } from '../../interface/Interface';
import { bytesToSize, convertToDate, copyToClipboard, generateUrl } from '../../../../../components/helpers/helpers';
import { generatePath } from 'react-router-dom';
import { useState } from 'react';
import { LazyImage } from '../../../../../components/UI/lazyImages/images';

export const InformationFile = () => {
	const fileSelected: IFile[] = useSelector((state: any) => state.fileManagerSlice.selectFile);
	const [lastSelected, setLasSelected] = useState<IFile>(fileSelected[fileSelected.length] || {});
	if (JSON.stringify(lastSelected) === '{}') {
		return (
			<span className='message-info text-base' key={'message-info'}>
				Elija solo una imagen o archivo para editar o ver su información
			</span>
		);
	}

	return (
		<div className='content-info'>
			<div className='content-img skeleton-default'>
				{lastSelected.collection_name == 'image' ? <LazyImage src={generateUrl(lastSelected)} radius='0px'></LazyImage> : null}
				{lastSelected.collection_name == 'video' ? (
					<video controls>
						<source src={lastSelected.dir + '/' + lastSelected.file_name} type='video/mp4'></source>
					</video>
				) : null}
			</div>
			<span className='name-file bold'>Información</span>
			<div className='content-array-info scrollHidden'>
				{/* <ScrollBar /> */}
				<div className='item-info'>
					<span className='name-info'>Título</span>
					<div className='text-info'>
						<span className=''>{lastSelected.file_name}</span>
					</div>
				</div>
				<div className='item-info'>
					<span className='name-info'>Tamaño</span>
					<span className='text-info'>{bytesToSize(lastSelected.size)}</span>
				</div>
				<div className='item-info'>
					<span className='name-info'>Formato</span>
					<span className='text-info'>{lastSelected.mime_type}</span>
				</div>
				<div className='item-info'>
					<span className='name-info'>Actualizado</span>
					<span className='text-info'>{convertToDate(lastSelected.updated_at)}</span>
				</div>
				<div className='item-info'>
					<span className='name-info'>Dimensiones</span>
					<span className='text-info'>1500*500</span>
				</div>
				<div className='item-info'>
					<span className='name-info'>Url Original</span>
					<span
						className='text-info'
						onClick={() => {
							copyToClipboard(generatePath(lastSelected.dir, lastSelected.file_name));
						}}
					>
						{generatePath(lastSelected.dir, lastSelected.file_name)}
					</span>
				</div>
				{lastSelected.compress ? (
					<div className='item-info'>
						<span className='name-info'>Url Compress</span>
						<span
							className='text-info'
							onClick={() => {
								copyToClipboard(generatePath(lastSelected.dir, lastSelected.compress));
							}}
						>
							{generatePath(lastSelected.dir, lastSelected.compress)}
						</span>
					</div>
				) : null}
			</div>
		</div>
	);
};
