import { SortableContainer, SortableElement, arrayMove, SortableHandle } from 'react-sortable-hoc';
import { generateId } from '../../../../../components/helpers/helpers';
import styled from 'styled-components';
export interface ISubCategory {
	uuid_subcategory: string;
	name_subcategory: string;
	enabled: boolean;
	description: string;
}
interface ISortableCategoryProps {
	// editItem: (data: any) => void;
	// deleteItem: (data: any) => void;
	// html: any;
	items: ISubCategory[];
}

const SortableContainerStyled = styled.ul`
	.input-radio-visor {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}
	li {
		height: 3.5rem;
		width: 100%;
		display: flex;
		align-items: center;
		background-color: white;
		margin-bottom: 0.5rem;
		padding: 0 1rem;
		border-radius: 0.5rem;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		display: flex;
		.name {
			width: 100%;
			display: flex;
			align-items: center;
			line-height: 1rem;
			word-break: break-all;
		}
		.type {
			min-width: 5rem;
			@media (max-width: 1400px) {
				min-width: 4rem;
			}
		}
		.actions {
			min-width: 3rem;
			display: flex;
			align-items: center;
			justify-content: center;
			@media (max-width: 1400px) {
				min-width: 4rem;
			}
		}
		.draggable {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100%;
			.text {
				user-select: none;
				pointer-events: none;
				width: 100%;
				@media (max-width: 1400px) {
					font-size: 0.9rem;
					line-height: 1rem;
				}
			}
		}
		&:last-child {
			margin-bottom: 0.5rem;
		}
		&:first-child {
			margin-bottom: 0.5rem;
		}
	}
`;

export const DragHandle = SortableHandle((props: any) => {
	const { html = [], data = {} } = props;
	return (
		<div className='draggable'>
			<i className='fas fa-sort mr-2 text-letter'></i>
			{/* {html.map((item: any, index: number) => {
				const Component = item;
				return <Component item={data} key={'drag-' + index}></Component>;
			})} */}
			<span className='name'>
				<span className='text text-letter'>{data.name_subcategory}</span>
			</span>
			<span className='status'>
				<span className='text text-letter'>{data.enabled === true ? 'activo' : 'inactive'}</span>
			</span>
		</div>
	);
});
const SortableItem = SortableElement((props: any) => {
	const { data = [], html = [], editItem, deleteItem } = props;
	const id = generateId({ type: 'string' }).toString();
	return (
		<li className='dragged dragged-sortableElement'>
			{/* @ts-ignore */}
			<DragHandle data={data} html={html}></DragHandle>
			<div className='d-flex actions h-full'>
				<input type='radio' id={id} name='visor' className='input-radio-visor ' />
				<label className='icon-sortable text-letter edit mr-4 cursor-pointer h-full flex items-center' htmlFor={id} onClick={() => editItem(data)}>
					<i className='fas fa-edit cursor-pointer'></i>
				</label>
				<div className='icon-sortable text-letter delete cursor-pointer' onClick={() => deleteItem(data)}>
					<i className='fas fa-trash cursor-pointer'></i>
				</div>
			</div>
		</li>
	);
});

export const SortableCategory = SortableContainer(({ items = [], ...rest }: ISortableCategoryProps) => {
	return (
		<SortableContainerStyled className='content-sortable mb-05 scroll'>
			{items.map((value: any, index: number) => (
				// @ts-ignore
				<SortableItem key={`item-${index}`} index={index} {...rest} data={value} />
			))}
		</SortableContainerStyled>
	);
});
