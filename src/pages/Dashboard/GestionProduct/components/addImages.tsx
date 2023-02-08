import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { openModal } from '../../../../components/UI/GlobalComponents/modal/modalSlice';
import { GlobalSortable } from '../../../../components/UI/globalsortable/globalsortable';
import { IFile } from '../../FileManager/interface/Interface';
import { LazyImage } from '../../../../components/UI/lazyImages/images';
import { generateUrl } from '../../../../components/helpers/helpers';
import { arrayMove } from 'react-sortable-hoc';
import { modifyListImages } from './addImagesSlice';
import { useGetListProductsMutation } from '../../GestionProducts/gestionProductsApi';

function ItemSortableName({ item }: any) {
	return (
		<span className='name'>
			<span className='text text-letter text-0/8xl'>{item.file_name}</span>
		</span>
	);
}
export const AddImages = (props: any) => {
	const images = useSelector((state: any) => state.addImagesSlice.listImages);
	const files = useSelector((state: any) => state.fileManagerSlice.selectFile);
	const [ImageVisor, setImageVisor] = useState<IFile>();
	const dispatch = useDispatch();
	const showItem = (item: IFile) => {
		setImageVisor(item);
	};
	const deleteItem = (value: any) => {
		const newList = images.filter((item: any) => item.id_selected !== value.id_selected);
		dispatch(modifyListImages(newList));
	};
	const onSortEnd = async ({ oldIndex, newIndex }: any) => {
		let newImages = JSON.parse(JSON.stringify(images));
		const newList = arrayMove(newImages, oldIndex, newIndex);
		dispatch(modifyListImages(newList));
	};
	const updateList = () => {
		let newImages = JSON.parse(JSON.stringify(images));
		let concat = newImages.concat(...files);
		dispatch(modifyListImages(concat));
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
							<div className='visor-img text-letter'>{ImageVisor ? <LazyImage src={generateUrl(ImageVisor)} radius='4px' /> : 'Visualizador de las imagenes del producto.'}</div>
							<div className='group-info mb-05 flex mb-2'>
								<span className='name text-letter'>Nombre</span>
								<span className='accions text-letter'>Acciones</span>
							</div>

							{images.length > 0 ? (
								<GlobalSortable
									//@ts-ignore
									items={images}
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
