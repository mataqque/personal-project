import { ISelectProps } from './interface';
import { useState, useRef, useEffect } from 'react';
import { setInputProps } from '../../helpers/common/forms/Form';
import { ContentOptions, InputSelectStyled } from './styled/inputSelect.styled';
import { IconInput, IconInputSelect } from './iconInputs';
import down from './icons/down.svg?url';
import { dispatchEvent } from '../../helpers/helpers';

export const InputSelect = (props: ISelectProps) => {
	const { title, name, label, form, color, defaultValue, ...rest } = props;
	const [showOptions, setShowOptions] = useState<unknown>('');
	const [valueSelect, setValueSelect] = useState<string>(label || '');
	const InputRef = useRef<HTMLInputElement>(null);
	const changeValue = (value: string, label: string) => {
		setValueSelect(label);
		setShowOptions(false);
		dispatchEvent(InputRef.current, 'change', value);
	};
	const closeOptions = () => {
		// if (showOptions == true) setShowOptions(false);
	};
	const openOptions = () => {
		setShowOptions(!showOptions);
	};
	useEffect(() => {
		rest.data.filter((item: any) => {
			if (item.value == defaultValue) {
				setValueSelect(item.label);
			}
		});
	}, [defaultValue]);
	return (
		<div className={`content-input ${rest?.className ? rest.className : ''}`}>
			{title && <label>{title}</label>}
			<div className={`content-sub-input ${props.icon ? 'include-icon' : ''}`}>
				<InputSelectStyled type='text' {...setInputProps(name, `input input-select`, form)} ref={InputRef} defaultValue={defaultValue} />
				<div className='input select-none' onClick={() => openOptions()}>
					{valueSelect}
				</div>
				{props.icon && <IconInput icon={props.icon}></IconInput>}
				<IconInputSelect icon={down} open={showOptions} class={'bg-gray-300'}></IconInputSelect>
				<ContentOptions show={showOptions} color={color}>
					{props.data.map((item: any, index: number) => {
						const { label, value } = item;
						return (
							<div key={index + 'option'} className='option' onClick={() => changeValue(value, label)}>
								{item.label}
							</div>
						);
					})}
				</ContentOptions>
			</div>
		</div>
	);
};
