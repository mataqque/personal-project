import * as Yup from 'yup';
export const CategorySchema = (values: any) =>
	Yup.object().shape({
		uuid_category: Yup.string().required(),
		name_category: Yup.string().required(),
		// description: Yup.string().required(),
		is_featured: Yup.boolean().required(),
		status: Yup.string().required(),
	});
