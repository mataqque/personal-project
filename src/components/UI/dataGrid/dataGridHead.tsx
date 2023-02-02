import styled from 'styled-components';
import { useRef } from 'react';
import { checkAllChecbox, generateId, uncheckAllChecbox } from '../../helpers/helpers';
import { InputCheckedStyled } from '../inputs/styled/InputChecked';
import { IconMask } from '../inputs/styled/IconDownStyleSelect';
import check from '../inputs/icons/icon-check.svg?url';

interface IGridHeadProps {
	children: any;
	className?: string;
}
const GridHeadStyled = styled.div`
	padding: 0.5rem 0;
`;

export const GridHead = (props: IGridHeadProps) => {
	const { children, className } = props;
	const checkeable = useRef<HTMLInputElement>(null);
	const inputID = generateId({ type: 'string' }).toString();
	const SelectAllChecked = () => {
		let checked = checkeable.current?.checked;
		checked ? uncheckAllChecbox('.grid-body') : checkAllChecbox('.grid-body');
	};
	return (
		<GridHeadStyled className={`grid ${className ? className : ''}`}>
			<div className='checked py-2 text-left'>
				<InputCheckedStyled className={`content-sub-input`} color='#2f71ff'>
					<input type='checkbox' id={inputID} ref={checkeable} />
					<label
						className='input-checked'
						htmlFor={inputID}
						onClick={() => {
							SelectAllChecked();
						}}
					>
						<IconMask style={{ WebkitMaskImage: `url(${check})` }} />
					</label>
				</InputCheckedStyled>
			</div>
			{children}
		</GridHeadStyled>
	);
};
