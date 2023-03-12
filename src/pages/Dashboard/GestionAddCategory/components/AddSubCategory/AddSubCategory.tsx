import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { editDataSubject, subAddCategorySubject, subCategorySubject } from '../FormAddSubCategory/observer';
import { useEffect, useState } from 'react';
import { ISubCategory, SortableCategory } from './sortable';
import { arrayMove } from 'react-sortable-hoc';
export const ColumnStyle = styled.div`
	width: 100%;
	height: 100%;
	background-color: var(--bSky);
	border-radius: 0.5rem;
	padding: 0.8rem 0.8rem;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	.status {
		min-width: 7rem;
	}
	.group-info {
		width: 100%;
		display: flex;
		align-items: center;
		background-color: white;
		padding: 1rem 1rem;
		border-radius: 0.5rem;
		box-shadow: 0px 0px 10px 0px rgba(116, 175, 252, 0.164);
		.title-group {
			white-space: nowrap;
		}
		.name {
			width: 100%;
		}

		.type {
			min-width: 5rem;
			@media (max-width: 1400px) {
				min-width: 4rem;
			}
		}
		.actions {
			min-width: 5rem;
			@media (max-width: 1400px) {
				min-width: 4rem;
			}
		}
	}
`;
function ItemSortableName({ item }: any) {
	return (
		<span className='name'>
			<span className='text text-letter text-0/8xl'>{item.file_name}</span>
		</span>
	);
}
export const AddSubCategory = () => {
	const dispatch = useDispatch();
	const [listSubCategory, setListSubCategory] = useState<ISubCategory[]>([]);
	const openModal = () => {
		subCategorySubject.next(true);
	};
	const onSortEnd = async ({ oldIndex, newIndex }: any) => {
		let list = JSON.parse(JSON.stringify(listSubCategory));
		const newList: any = arrayMove(list, oldIndex, newIndex);
		setListSubCategory(newList);
	};
	const editItem = (data: any) => {
		editDataSubject.next(data);
	};
	const deleteItem = (data: any) => {
		let list = JSON.parse(JSON.stringify(listSubCategory));
		const newList = list.filter((item: any) => item.uuid_subcategory !== data.uuid_subcategory);
		setListSubCategory(newList);
	};
	useEffect(() => {
		const subscribe = subAddCategorySubject.subscribe((data: any) => {
			if (data) {
				console.log('data-sub', data);
				setListSubCategory(prev => [...prev, data]);
			}
		});
		return () => {
			subscribe.unsubscribe();
		};
	}, []);
	return (
		<ColumnStyle className='column'>
			<div className='group-info mb-05 flex mb-2'>
				<span className='name text-letter'>Nombre</span>
				<span className='status text-letter'>Estado</span>
				<span className='accions text-letter'>Acciones</span>
			</div>
			{listSubCategory.length > 0 ? (
				<SortableCategory
					// @ts-ignore
					items={listSubCategory}
					onSortEnd={onSortEnd}
					editItem={editItem}
					deleteItem={deleteItem}
					html={[ItemSortableName]}
					lockAxis='y'
					useDragHandle
					helperClass='dragged'
				/>
			) : null}
			<div
				className='group-info d-flex justify-center align-center cursor-pointer'
				onClick={() => {
					openModal();
				}}
			>
				<span className='d-flex align-center text-letter'>
					<i className='fas fa-plus mr-1'></i>  Agregar nueva subcategoria
				</span>
			</div>
		</ColumnStyle>
	);
};
