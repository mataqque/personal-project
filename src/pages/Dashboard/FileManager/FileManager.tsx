import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bytesToSize, convertToDate, copyToClipboard, generatePath, getCheckables, verifyExtension } from '../../../components/helpers/helpers';
// import ScrollBar from '../../../components/UI/ScrollBar/scrollbar';
import { Title } from '../StyledComponent/titles';
import { File } from './components/File/File';
import { Filters } from './components/Filters/Filters';
import { setActiveModal, updateFile } from '../../../components/modalUpload/FileManagerSlice';
import axios from 'axios';
import { useGetFilesMutation } from './FileManager.api';
import { HandleResponse } from '../../../helpers/helpers';
import { IFileState } from './interface/Interface';
import { InformationFile } from './components/InfomationFile/informationFile';

interface IPropsFileManager {
	frase?: string;
	onEvent?: any;
	type?: string;
}

export function FileManager(props: IPropsFileManager) {
	const dispatch = useDispatch();
	const btnRef = useRef<HTMLDivElement>(null);
	const filesData = useSelector((state: any) => state.fileManagerSlice.files);
	const [getFiles, { isSuccess }] = useGetFilesMutation();
	const [selected, setSelected] = useState();
	const UpdateFiles = (response: IFileState) => {
		dispatch(updateFile(response));
	};
	const getData = async (type_file: any) => {
		const { data }: any = await getFiles({ type_file });
		console.log(data);
		HandleResponse(UpdateFiles, data);
	};

	const activeDelete = () => {
		let checkables = getCheckables();
		if (checkables.length > 0) {
			btnRef.current?.classList.add('active');
			// filesData.filter((item: any) => { item.id == checkables[0] ? return  });
		} else {
			btnRef.current?.classList.remove('active');
		}
	};
	const deleteFiles = () => {
		// let checkables = getCheckables();
		// axios
		// 	.post(`http://localhost:3000/api/v1/files/delete`, checkables, {
		// 		headers: {
		// 			Authorization: `Bearer ${localStorage.getItem('token')}`,
		// 		},
		// 	})
		// 	.then((res: any) => {
		// 		UpdateFiles('all');
		// 	});
	};
	useEffect(() => {
		getData('all');
	}, []);
	return (
		<div className='features bg-white'>
			<Title className='bold mb-1'>Administrador de archivos</Title>
			<p className='paragraph mb-3'>Sube tus archivos mp3, mp4, jpg ,png, webp, svg. etc, los archivos deben pesar menos de 10mb, no se admiten archivos con peso mayor a 100mb</p>
			<div className='content-tab flex py-3 border-y border-slate-200 d-flex mb-4'>
				<Filters />
				<div className='flex tab-col w-max cursor-pointer mr-2' onClick={() => dispatch(setActiveModal(true))}>
					<div className='tab c-pointer h-11 flex justify-center items-center px-4 rounded-5  bg-success text-white border border-success'>Subir un archivo</div>
				</div>
				<div className='flex tab-col w-max cursor-pointer ' onClick={() => deleteFiles()} ref={btnRef}>
					<div className='tab c-pointer h-11 flex justify-center items-center px-4  rounded-5  bg-danger text-white border opacity bg-danger'>Delete</div>
				</div>
			</div>
			<div className='content-gallery'>
				<form className='content-all-images scroll' onChange={() => activeDelete()}>
					{/* <ScrollBar /> */}
					{filesData.map((file: any, index: number) => {
						return <File file={file} key={'file-' + index} index={'file-' + index} />;
					})}
				</form>
				<div className='info'>
					<h3 className='title-component bold IBMPlexSans-Bold text-base'>Información de archivo</h3>
					<InformationFile />
				</div>
			</div>
		</div>
	);
}
