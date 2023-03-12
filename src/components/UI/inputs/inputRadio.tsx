import { setInputProps } from '../../helpers/common/forms/Form';
import { generateId } from '../../helpers/helpers';
import { IInputRadioProps } from './interface';
import { InputRadioStyled } from './styled/inputRadioStyled';

export const InputRadio = (props: IInputRadioProps) => {
	const { name, index, defaultValue, className, color, form, value } = props;
	return (
		<>
			<InputRadioStyled className={`${className ? className : ''}`} color={color}>
				<input type='radio' id={name + index} defaultValue={defaultValue} value={value} {...(form ? setInputProps(name, ``, form) : {})} />
				<label htmlFor={name + index}>
					<svg className='svg' fill='currentColor' preserveAspectRatio='xMidYMid meet' height='30' width='30' viewBox='0 0 30 30'>
						<circle className='radioOutline' cx='15' cy='15' r='13' fill='none' stroke='#000' strokeWidth='2' />
						<circle className='radioDot' cx='15' cy='15' r='8' fill='#000' />
					</svg>
				</label>
			</InputRadioStyled>
		</>
	);
};
