import styled from 'styled-components';
import { InputChecked } from '../../inputs/inputChecked';
import { IListItemProps, IListProps } from './interface';

const ListStyle = styled.div``;

export const ItemList = (props: IListItemProps) => {
	return (
		<div className='item-list flex items-center py-3'>
			<div className='mr-2'>
				<InputChecked name=''></InputChecked>
			</div>
			{props.children}
		</div>
	);
};

export const List = (props: IListProps) => {
	return <ListStyle className='list'>{props.children}</ListStyle>;
};
