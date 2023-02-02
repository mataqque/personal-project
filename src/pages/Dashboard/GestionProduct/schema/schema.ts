import * as Yup from 'yup';
export const ProductSchema = (values: any) =>
	Yup.object().shape({
		uuid_product: Yup.string().required(),
		// uuid_autor: Yup.string().required(),
		name_product: Yup.string().required(),
		id_empresa: Yup.string().required(),
		id_category: Yup.string().required(),
		id_subcategory: Yup.string(),
		season: Yup.string(),
		genero: Yup.string(),
		quantity: Yup.number().required(),
		price: Yup.number().required(),
		discount: Yup.number(),
		url: Yup.string().required(),
		status: Yup.string().required(),
		index_page: Yup.string().required(),
		meta_description: Yup.string().required(),
		meta_keywords: Yup.string().required(),
	});
