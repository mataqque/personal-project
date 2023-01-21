import { FormContainer, setInputProps } from '../../helpers/common/forms/Form';
import { IconInput, IconTogglePassword } from './iconInputs';
import { IInputProps, ParametersForm, searchSchema } from './interface';
import { InputTextStyled } from './styled/inputText.styled';
import { useRef, useState } from 'react';
import iconSearch from '../../..//assets/images/global/icons/search.svg?url';

export const InputText = (props: IInputProps) => {
	const { title, name, placeholder, form, ...rest } = props;
	return (
		<div className={`content-input  ${rest?.className ? rest.className : ''}`}>
			{title && <label>{title}</label>}
			<div className={`content-sub-input ${props.icon ? 'include-icon' : ''}`}>
				<InputTextStyled type={props.type || 'text'} placeholder={placeholder || ''} {...setInputProps(name, `input`, form)} />
				{props.icon && <IconInput icon={props.icon}></IconInput>}
				<img className='icon-valid' src={require('../../../assets/images/Account/icons/check.png')}></img>
				<img className='icon-error' src={require('../../../assets/images/Account/icons/error.png')}></img>
			</div>
		</div>
	);
};

export const InputTextPassword = (props: IInputProps) => {
	const { title, name, placeholder, form, ...rest } = props;
	const inputPassword = useRef<HTMLInputElement>(null);
	const [iconShowPassword, SetIconShowPassword] = useState<boolean>(true);
	const showPassword = () => {
		inputPassword.current?.getAttribute('type') === 'password' ? SetIconShowPassword(false) : SetIconShowPassword(true);
	};
	return (
		<div className={`content-input ${rest?.className ? rest.className : ''}`}>
			{title && <label>{title}</label>}
			<div className={`content-sub-input ${props.icon ? 'include-icon' : ''}`}>
				<InputTextStyled type={iconShowPassword ? 'password' : 'text'} placeholder={placeholder || ''} {...setInputProps(name, `input`, form)} ref={inputPassword} />
				{props.icon && <IconTogglePassword icon={props.icon} showPassword={showPassword}></IconTogglePassword>}
				<img className='icon-valid' src={require('../../../assets/images/Account/icons/check.png')}></img>
				<img className='icon-error' src={require('../../../assets/images/Account/icons/error.png')}></img>
			</div>
		</div>
	);
};

interface IFormSearch {
	placeholder: string;
}
export const FormSearch = ({ placeholder }: IFormSearch) => {
	const initialValues = {
		search: '',
	};
	const onSubmitSearch = (values: any) => {};
	return (
		<FormContainer initialValues={initialValues} validationSchema={searchSchema} onSubmit={onSubmitSearch}>
			{(form: any) => {
				const { handleSubmit, isSubmitting }: ParametersForm = form;
				return (
					<form className='border border-slate-200 flex h-input overflow-hidden rounded-5 w-full' onSubmit={handleSubmit}>
						<input className='h-full pl-3 w-full' name='search' placeholder={placeholder} />
						<button className='btn flex justify-center items-center	w-14 ' type='submit'>
							<img className='search w-3/5' src={iconSearch}></img>
						</button>
					</form>
				);
			}}
		</FormContainer>
	);
};
