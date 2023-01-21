import { FormEventHandler } from 'react';

export interface ParametersForm {
	handleSubmit: FormEventHandler<HTMLFormElement>;
	isSubmitting: boolean;
}
