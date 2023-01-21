import { checkableBoolProps, setInputProps } from '../../helpers/common/forms/Form';
import { IconInput, IconTogglePassword } from './iconInputs';
import { IInputRadioProps } from './interface';
import { InputTextStyled } from './styled/inputText.styled';
import { useRef, useState } from 'react';
import { InputRadioStyled } from './styled/inputRadioStyled';
import { generateId } from '../../helpers/helpers';

export const InputRadioBtn = (props: IInputRadioProps) => {
	const { name, form, ...rest } = props;
	const inputID = generateId({ type: 'string' }).toString();
	const checkeable = useRef(null);
	return (
		<InputRadioStyled className={`content-input switch ${props.className}`}>
			<div className={`content-sub-input`}>
				<InputTextStyled type='checkbox' id={inputID} {...checkableBoolProps(name, ``, form)} ref={checkeable} />
				<span className='toggle-switch mr-1'>
					<label className='handle-toggle' htmlFor={inputID}></label>
				</span>
			</div>
		</InputRadioStyled>
	);
};
