import { useDispatch, useSelector } from 'react-redux';
import { LazyImage } from '../../../../components/UI/lazyImages/images';
import { generateUrl } from '../../../../components/helpers/helpers';
import { useEffect, useState } from 'react';
import { setActiveModal } from '../../FileManager/FileManagerSlice';
import { GlobalSortable } from '../../../../components/UI/globalsortable/globalsortable';
import { arrayMove } from 'react-sortable-hoc';
import { openModal } from '../../../../components/UI/GlobalComponents/modal/modalSlice';
import { IFile } from '../../FileManager/interface/Interface';
import { modifyListImages } from './addImagesSlice';

interface IImages {
	file_name: string;
}
interface IAddImages {
	getdata: (data: any) => void;
}
export const AddImages = ({ getdata }: any) => {
	const dispatch = useDispatch();
	const files = useSelector((state: any) => state.fileManagerSlice.selectFile);
	const [Images, setImages] = useState<IImages[]>([]);
	const [ImageVisor, setImageVisor] = useState<IFile>();
	function ItemSortableName({ item }: any) {
		return (
			<span className='name'>
				<span className='text text-letter text-0/8xl'>{item.file_name}</span>
			</span>
		);
	}
	const showItem = (item: IFile) => {
		console.log(item);
		setImageVisor(item);
	};
	const deleteItem = (value: any) => {
		const newList = Images.filter((item: any) => item.id_selected !== value.id_selected);
		setImages(newList);
		dispatch(modifyListImages(newList));
	};
	const onSortEnd = async ({ oldIndex, newIndex }: any) => {
		const newList = arrayMove(Images, oldIndex, newIndex);
		setImages(newList);
		dispatch(modifyListImages(newList));
	};
	const updateList = () => {
		let filesInit: any = [];
		setImages(prevState => {
			filesInit = [...prevState, ...files];
			return filesInit;
		});
		let delay = setInterval(() => {
			dispatch(modifyListImages(filesInit));
			clearInterval(delay);
		}, 100);
	};
	useEffect(() => {
		updateList();
	}, [files]);
	return (
		<div className='content-imgs-product h-full overflow-hidden'>
			<div className='content-input flex flex-col h-full overflow-hidden'>
				<label className='form-label text-letter mb-2 flex'>Imagenes del producto</label>
				<div className='gestion-links overflow-hidden flex flex-col'>
					<div className='content-group content-group-1'>
						<div className='list sublinks'>
							<div className='visor-img text-letter'>
								{ImageVisor?.file_name ? <LazyImage src={generateUrl(ImageVisor)} radius='4px' /> : 'Visualizador de las imagenes del producto.'}
							</div>
							<div className='group-info mb-05 flex mb-2'>
								<span className='name text-letter'>Nombre</span>
								<span className='accions text-letter'>Acciones</span>
							</div>
							{Images.length > 0 ? (
								<GlobalSortable
									//@ts-ignore
									items={Images}
									onSortEnd={onSortEnd}
									editItem={showItem}
									deleteItem={deleteItem}
									html={[ItemSortableName]}
									helperClass='dragged'
									lockAxis='y'
									useDragHandle
								></GlobalSortable>
							) : null}
							<div className='group-info d-flex justify-center align-center cursor-pointer' onClick={() => dispatch(openModal())}>
								<span className='d-flex align-center text-letter'>
									<i className='fas fa-plus mr-1'></i>  Agregar nueva imagen
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
