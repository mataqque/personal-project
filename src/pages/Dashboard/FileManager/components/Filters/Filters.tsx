import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormSearch } from '../FormSearch/FormSearch';
import './filters.scss';
export const Filters = () => {
	const [activeTab, setActiveTab] = useState('all');

	const dispatch = useDispatch();

	const updateFiles = (type_file: any) => {
		// axios.get(`/files/getFiles/${type_file}`).then(res => {
		// 	dispatch(updateFile(res.data));
		// });
	};
	return (
		<div className='settings flex'>
			{/* <div className='icon'>
				<i className='fas fa-sliders-h'></i>
			</div> */}
			<div className='content-settings flex w-full '>
				<div className='w-80 mr-3'>
					<FormSearch></FormSearch>
				</div>
				<div className='flex tab-col filter-files'>
					<div
						className={`border-slate-200 tab flex justify-center items-center c-pointer px-4 cursor-pointer select-none ${activeTab == 'all' ? 'active' : ''}`}
						onClick={() => {
							updateFiles('all');
							setActiveTab('all');
						}}
					>
						Ver todos
					</div>
					<div
						className={`border-slate-200 tab flex justify-center items-center c-pointer px-4 bg-white cursor-pointer select-none ${activeTab == 'image' ? 'active' : ''}`}
						onClick={() => {
							updateFiles('image');
							setActiveTab('image');
						}}
					>
						Imágenes
					</div>
					<div
						className={`border-slate-200 tab flex justify-center items-center c-pointer px-4 bg-white cursor-pointer select-none ${activeTab == 'video' ? 'active' : ''}`}
						onClick={() => {
							updateFiles('video');
							setActiveTab('video');
						}}
					>
						Videos
					</div>
					<div
						className={`border-slate-200 tab flex justify-center items-center c-pointer px-4 bg-white cursor-pointer select-none ${activeTab == 'documento' ? 'active' : ''}`}
						onClick={() => {
							updateFiles('documento');
							setActiveTab('documento');
						}}
					>
						Documentos
					</div>
				</div>
			</div>
		</div>
	);
};
