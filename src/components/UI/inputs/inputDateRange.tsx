import { CustomProvider, SelectPicker, DatePicker, Calendar, DateRangePicker } from 'rsuite';
import es_ES from 'rsuite/locales/es_ES';
import 'rsuite/dist/rsuite.css';
import styled from 'styled-components';

export const InputDateRangeStyled = styled.div`
	height: 3rem;
	width: 100%;
	display: flex;
	.rs-picker {
		width: 100% !important;
		height: 100%;
		.rs-picker-toggle {
			height: 100%;
			display: flex;
		}
		.rs-picker-toggle {
			box-shadow: none;
			&:focus-visible {
				outline: none;
			}
		}
	}
`;

export const InputDateRange = (props: any) => {
	return (
		<InputDateRangeStyled className='content-input input-date-range'>
			<CustomProvider locale={es_ES}>
				<DateRangePicker appearance='default' placeholder='Fecha de lanzamiento' style={{ width: 230 }} locale={es_ES} />
			</CustomProvider>
		</InputDateRangeStyled>
	);
};
