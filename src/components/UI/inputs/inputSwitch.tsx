import { checkableBoolProps, setInputProps } from '../../helpers/common/forms/Form';
import { IconInput, IconTogglePassword } from './iconInputs';
import { IInputSwitchProps } from './interface';
import { InputTextStyled } from './styled/inputText.styled';
import { useRef, useState } from 'react';
import { InputCheckboxStyled, InputCheckboxStyledSm } from './styled/inputCheckboxStyled';
import { generateId } from '../../helpers/helpers';

export const InputSwitch = (props: IInputSwitchProps) => {
	const { name, form, color, outline, defaultValue, ...rest } = props;
	const inputID = generateId({ type: 'string' }).toString();
	const checkeable = useRef(null);
	return (
		<InputCheckboxStyled className={`content-input switch ${props.className}`} color={color}>
			<div className={`content-sub-input`}>
				<InputTextStyled type='checkbox' defaultChecked={defaultValue} id={inputID} {...checkableBoolProps(name, ``, form)} ref={checkeable} />
				<label className='toggle-switch mr-1' htmlFor={inputID}>
					<label className='handle-toggle' htmlFor={inputID}></label>
				</label>
			</div>
		</InputCheckboxStyled>
	);
};

export const InputSwitchSm = (props: IInputSwitchProps) => {
	const { name, form, color, outline, defaultValue, ...rest } = props;
	const inputID = generateId({ type: 'string' }).toString();
	const checkeable = useRef(null);
	return (
		<InputCheckboxStyledSm className={`content-input switch ${props.className}`} color={color}>
			<div className={`content-sub-input`}>
				<InputTextStyled type='checkbox' id={inputID} defaultChecked={defaultValue} {...checkableBoolProps(name, ``, form)} ref={checkeable} />
				<label className='toggle-switch mr-1' htmlFor={inputID}>
					<label className='handle-toggle' htmlFor={inputID}></label>
				</label>
			</div>
		</InputCheckboxStyledSm>
	);
};
