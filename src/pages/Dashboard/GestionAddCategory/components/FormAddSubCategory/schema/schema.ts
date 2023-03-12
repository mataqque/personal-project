import * as Yup from 'yup';

export const BaseValidationSchema = (values: any) =>
	Yup.object().shape({
		enable: Yup.boolean(),
		title: Yup.string().required(),
		typeInput: Yup.string().required(),
	});
