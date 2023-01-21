import * as Yup from 'yup';
import { FormEventHandler } from 'react';
export interface ParametersForm {
	handleSubmit: FormEventHandler<HTMLFormElement>;
	isSubmitting: boolean;
}
// interface for input radio
export interface IInputSwitchProps {
	name: string;
	defaultValue?: boolean;
	className?: string;
	form: any;
	color?: string;
	outline?: boolean;
}
// end interface for input radio

// interface for input
export interface IInputProps {
	title?: string;
	type?: string;
	name: string;
	placeholder?: string;
	defaultValue?: string;
	value?: string;
	className?: string;
	form: any;
	icon?: any;
}
export interface IInputPropsPassword extends IInputProps {
	showPassword?: boolean;
}
// end interface for input

// interface for input select
export interface ISelectProps {
	name: string;
	form: any;
	title?: string;
	defaultValue?: any;
	className?: string;
	icon?: any;
	label: string;
	data: { value: string; label: string }[];
	color?: string;
}
// interface for input select

// interface for input date
export interface InputDateRangeProps {
	startDate: string;
	endDate: string;
	setStartDate: (date: string) => void;
}
// end interface for input date

// interface for input radio
export interface IInputRadioProps {
	name: string;
	form?: any;
	defaultValue?: string;
	className?: string;
	color?: string;
}
// end interface for input radio

// interface for input checkbox
export interface IInputCheckedProps {
	name: string;
	form?: any;
	defaultValue?: string;
	className?: string;
	color?: string;
}

// end interface for input checkbox

// schema for input search
export const searchSchema = (values: any) =>
	Yup.object().shape({
		search: Yup.string().min(4).required(),
	});
