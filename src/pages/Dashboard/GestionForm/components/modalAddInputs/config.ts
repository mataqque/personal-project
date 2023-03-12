const optionsTypeOfValidatorText = [
	{ value: 'email', label: 'Email' },
	{ value: 'url', label: 'Url' },
	{ value: 'uppercase', label: 'Mayusculas' },
	{ value: 'lowercase', label: 'Minusculas' },
];
const optionsTypeOfValidatorNumeric = [
	{ value: 'dni', label: 'DNI' },
	{ value: 'celular', label: 'Celular' },
];
const min = {
	type: 'InputText',
	title: 'min',
	name: 'min',
	placeholder: 'n° min',
	className: 'middle',
	validations: ['string', 'required'],
	params: {
		required: 'min is required',
	},
};
const max = {
	type: 'InputText',
	title: 'max',
	name: 'max',
	className: 'middle-2',
	placeholder: 'n° max',
	validations: ['string', 'required'],
	params: {
		required: 'max is required',
	},
};
const typeOfValidator = (data: any) => {
	return {
		type: 'InputSelect',
		title: 'Tipo de validador',
		name: 'type-validator',
		className: 'w-100',
		data,
		label: 'select',
		validations: ['string'],
		params: {
			required: 'type-validator is required',
		},
	};
};

export const listTypeFields = [
	{
		id: 1,
		name: 'Texto de una sola linea',
		icon: require('../../../../../assets/images/Dashboard/icons/single-line-alpha.png'),
		type: 'InputText',
		listInputs: [typeOfValidator(optionsTypeOfValidatorText), min, max],
	},
	{
		id: 2,
		name: 'Número',
		icon: require('../../../../../assets/images/Dashboard/icons/single-line-number.png'),
		type: 'InputText',
		listInputs: [typeOfValidator(optionsTypeOfValidatorNumeric), min, max],
	},
	{
		id: 3,
		name: 'Casilla de comprobación',
		icon: require('../../../../../assets/images/Dashboard/icons/checkbox.png'),
		type: 'check',
		listInputs: [
			{
				type: 'Text',
				title: 'parrafo',
				name: 'paragraph',
				className: 'w-100',
				placeholder: 'Entidad',
				validations: ['string', 'required'],
				params: {
					required: 'paragraph is required',
				},
			},
		],
	},
	{
		id: 4,
		name: 'Lista desplegable',
		icon: require('../../../../../assets/images/Dashboard/icons/drop-down.png'),
		type: 'InputSelect',
		listInputs: [typeOfValidator, min, max],
	},
	{
		id: 5,
		name: 'Texto de varias lineas',
		icon: require('../../../../../assets/images/Dashboard/icons/multi-line.png'),
		type: 'textarea',
		listInputs: [typeOfValidator, min, max],
	},
	{
		id: 6,
		name: 'Opciones',
		icon: require('../../../../../assets/images/Dashboard/icons/radio.png'),
		type: 'radeo',
		listInputs: [typeOfValidator, min, max],
	},
	{
		id: 7,
		name: 'Fecha',
		icon: require('../../../../../assets/images/Dashboard/icons/date-picker.png'),
		type: 'date',
		listInputs: [typeOfValidator, min, max],
	},
	{
		id: 8,
		name: 'Agregar archivo',
		icon: require('../../../../../assets/images/Dashboard/icons/file-upload.png'),
		type: 'file',
		listInputs: [typeOfValidator, min, max],
	},
];

export const baseSchema = [
	{
		name: 'enable',
		type: 'boolean',
		label: 'Enable',
		placeholder: '',
		validations: ['boolean'],
		params: {
			required: '',
		},
	},
	{
		name: 'title',
		type: 'text',
		label: 'Titulo',
		placeholder: '',
		validations: ['string', 'required'],
		params: {
			required: 'title is required',
		},
	},
	{
		name: 'entity',
		type: 'text',
		label: 'Entidad ("propiedad name del campo")',
		placeholder: 'Entidad',
		validations: ['string', 'required'],
		params: {
			required: 'entity is required',
		},
	},
	{
		name: 'className',
		type: 'text',
		label: 'Clase CSS(Hoja de estilos)',
		placeholder: 'Class',
		validations: ['string'],
		params: {},
	},
	{
		name: 'typeInput',
		type: 'text',
		label: 'Tipo de input',
		placeholder: '',
		validations: ['string', 'required'],
		params: {
			required: 'typeInput is required',
		},
	},
];
