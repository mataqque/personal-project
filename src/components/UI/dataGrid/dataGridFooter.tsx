import styled from 'styled-components';
import { IconMask } from '../inputs/styled/IconDownStyleSelect';
import { useState } from 'react';
interface GridFooterProps {
	records: {
		cant: number;
		limit: number;
	};
	pageIndex?: Function;
}
const GridFooterStyled = styled.div`
	height: 4.5rem;
	display: flex;
	background-color: white;
	width: 100%;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	padding: 1rem 0;
	.controlls-pagination {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		font-size: 0.9rem;
		border-radius: 4px;
		background-color: #f3f4f6;
		margin-right: 0.5rem;
		cursor: pointer;
		user-select: none;
		&.active {
			background-color: #5964ff;
			color: white;
		}
	}
	.icon {
		width: 45%;
		height: 45%;
	}
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const GridFooter = (props: GridFooterProps) => {
	const { records, pageIndex = () => {} } = props;
	const cantItems = Array.from({ length: Math.ceil(records.cant / records.limit) }, () => []);
	const [btnIndex, setBtnIndex] = useState(1);
	return (
		<GridFooterStyled className='grid-footer'>
			<div className='px-4 flex items-center justify-between w-full'>
				<div className='flex'>
					<div className='controlls-pagination'>
						<div className='btn'>
							<IconMask className='icon icon-signal-left bg-letter'></IconMask>
						</div>
						<div className='pagination'>
							{cantItems.map((item, index: number) => {
								return (
									<div
										className={`btn text-letter ${index + 1 == btnIndex ? 'active' : ''}`}
										key={'item-pagination-' + index}
										onClick={() => {
											pageIndex(index + 1);
											setBtnIndex(index + 1);
										}}
									>
										{index + 1}
									</div>
								);
							})}
						</div>
						<div className='btn'>
							<IconMask className='icon icon-signal-right bg-letter'></IconMask>
						</div>
					</div>
				</div>
				<div className='all text-letter'>numero de registros: {records.cant}</div>
			</div>
		</GridFooterStyled>
	);
};
