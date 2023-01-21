import { useSelector } from 'react-redux';
import { IFile, IFileState } from '../../interface/Interface';
import { bytesToSize, convertToDate, copyToClipboard } from '../../../../../components/helpers/helpers';
import { generatePath } from 'react-router-dom';
import { useState } from 'react';

export const InformationFile = () => {
	const fileSelected: IFile = useSelector((state: any) => state.fileManagerSlice.selectFile);
	console.log(fileSelected);

	if (JSON.stringify(fileSelected) === '{}') {
		return (
			<span className='message-info text-base' key={'message-info'}>
				Elija solo una imagen o archivo para editar o ver su información
			</span>
		);
	}

	return (
		<div className='content-info'>
			<div className='content-img skeleton-default'>
				{/* {
                    file.collection_name == 'image' ? 
                    <Imagen file={file}></Imagen>: null
                }
                {
                    file.collection_name == 'video' ?  
                        <video controls>
                            <source src={file.dir+"/"+file.file_name} type="video/mp4"></source>
                        </video> :  null
                } */}
			</div>
			<span className='name-file bold'>Información</span>
			<div className='content-array-info scrollHidden'>
				{/* <ScrollBar /> */}
				<div className='item-info'>
					<span className='name-info'>Título</span>
					<div className='text-info'>
						<span className=''>{fileSelected.file_name}</span>
					</div>
				</div>
				<div className='item-info'>
					<span className='name-info'>Tamaño</span>
					<span className='text-info'>{bytesToSize(fileSelected.size)}</span>
				</div>
				<div className='item-info'>
					<span className='name-info'>Formato</span>
					<span className='text-info'>{fileSelected.mime_type}</span>
				</div>
				<div className='item-info'>
					<span className='name-info'>Actualizado</span>
					<span className='text-info'>{convertToDate(fileSelected.updated_at)}</span>
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
							copyToClipboard(generatePath(fileSelected.dir, fileSelected.file_name));
						}}
					>
						{generatePath(fileSelected.dir, fileSelected.file_name)}
					</span>
				</div>
				{fileSelected.compress ? (
					<div className='item-info'>
						<span className='name-info'>Url Compress</span>
						<span
							className='text-info'
							onClick={() => {
								copyToClipboard(generatePath(fileSelected.dir, fileSelected.compress));
							}}
						>
							{generatePath(fileSelected.dir, fileSelected.compress)}
						</span>
					</div>
				) : null}
			</div>
		</div>
	);
};
