import { SortableContainer, SortableElement, arrayMove, SortableHandle } from 'react-sortable-hoc';
import './globalSortable.scss';
import { generateId } from '../../helpers/helpers';

interface IImages {
	file_name: string;
}
interface ISortableContainerProps {
	editItem: (data: any) => void;
	deleteItem: (data: any) => void;
	html: any;
	items?: IImages[];
}
interface ISortableItemProps extends ISortableContainerProps {
	data: any;
}

export const DragHandle = SortableHandle((props: ISortableItemProps) => {
	const { html = [], data = {} } = props;
	return (
		<div className='draggable'>
			<i className='fas fa-sort mr-2 text-letter'></i>
			{html.map((item: any, index: number) => {
				const Component = item;
				return <Component item={data} key={'drag-' + index}></Component>;
			})}
			{/* <span className='name'>
                <i className="fas fa-sort mr-1"></i><span className='text'>{data.title}</span>
            </span>
            <span className='type'>
                <span className='text'>{data.typeInput}</span>
            </span>
            <span className='type'>
                <span className='text'>{data.enable === true ? "activo" : "inactive"}</span>
            </span> */}
		</div>
	);
});

const SortableItem = SortableElement((props: ISortableItemProps) => {
	const { data, html, editItem, deleteItem } = props;
	const id = generateId({ type: 'string' }).toString();
	return (
		<li className='dragged-sortableElement'>
			{/* @ts-ignore */}
			<DragHandle data={data} html={html}></DragHandle>
			<div className='d-flex actions h-full'>
				<input type='radio' id={id} name='visor' className='input-radio-visor ' />
				<label className='icon-sortable text-letter edit mr-4 cursor-pointer h-full flex items-center' htmlFor={id} onClick={() => editItem(data)}>
					<i className='fas fa-eye cursor-pointer'></i>
				</label>
				<div className='icon-sortable text-letter delete cursor-pointer' onClick={() => deleteItem(data)}>
					<i className='fas fa-trash cursor-pointer'></i>
				</div>
			</div>
		</li>
	);
});

export const GlobalSortable = SortableContainer(({ items = [], ...rest }: ISortableContainerProps) => {
	return (
		<ul className='content-sortable mb-05 scroll'>
			{items.map((value: any, index: number) => (
				// @ts-ignore
				<SortableItem key={`item-${index}`} index={index} {...rest} data={value} />
			))}
		</ul>
	);
});
