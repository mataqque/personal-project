import * as Yup from 'yup';
interface ISchema {
	[key: string]: {
		name: any;
	};
}
interface IField {
	validations: any[];
	name: string;
	params: {
		[key: string]: any;
	};
}

export const createValidationSchema = (fields = []) => {
	const ObjectSchema = fields.reduce((schema: ISchema, field: IField) => {
		if (field?.validations?.length) {
			schema[field.name] = field.validations.reduce(
				(yup, type) => {
					if (field.params[type]) {
						const params = Array.isArray(field.params[type]) ? field.params[type] : [field.params[type]];

						yup = yup[type](...params);
					} else {
						yup = yup[type]();
					}

					return yup;
				},
				{ ...Yup }
			);
		}

		return schema;
	}, {});
	//@ts-ignore
	return Yup.object().shape({ ...ObjectSchema });
};

export const createInitialSchema = (fields: any) => {
	let newobj = {};
	fields.forEach(e => {
		//@ts-ignore
		newobj[e?.name] = '';
	});
	return newobj;
};
