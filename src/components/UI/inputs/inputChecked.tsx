import { checkableBoolProps } from '../../helpers/common/forms/Form';
import { generateId } from '../../helpers/helpers';
import { IconMask } from './styled/IconDownStyleSelect';
import { useRef } from 'react';
import { IInputCheckedProps } from './interface';
import check from './icons/icon-check.svg?url';
import { InputCheckedStyled } from './styled/InputChecked';

export const InputChecked = (props: IInputCheckedProps) => {
	const { name, form, color, className } = props;
	const checkeable = useRef<HTMLInputElement>(null);
	const inputID = generateId({ type: 'string' }).toString();
	return (
		<div className={`${className ? className : ''}`}>
			<InputCheckedStyled className={`content-sub-input`} color={color}>
				<input type='checkbox' id={inputID} {...(form ? checkableBoolProps(name, ``, form) : {})} ref={checkeable} />
				<label className='input-checked' htmlFor={inputID}>
					<IconMask style={{ WebkitMaskImage: `url(${check})` }} />
				</label>
			</InputCheckedStyled>
		</div>
	);
};
