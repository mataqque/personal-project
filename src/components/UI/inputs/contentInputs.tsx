import { InputDateRange } from './inputDateRange';
import { InputSelect } from './inputSelect';
import { InputText, InputTextPassword } from './inputText';

export interface ITypesInputs {
	[key: string]: {
		component: any;
	};
}

export const TypesInputs: ITypesInputs = {
	InputText: { component: InputText },
	InputTextPassword: { component: InputTextPassword },
	InputSelect: { component: InputSelect },
	InputDateRange: { component: InputDateRange },
};
