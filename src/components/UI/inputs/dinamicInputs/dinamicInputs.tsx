import { ITypesInputs, TypesInputs } from '../contentInputs';
import { InputText } from '../inputText';

interface IDynamicInputsProps {
	List: Array<{
		type: string;
		placeholder: string;
		title: string;
		name: string;
		className: string;
	}>;
	form: any;
}

export const BuilderDynamicInputs = ({ List, form }: IDynamicInputsProps) => {
	return List.map((item, index) => {
		const { type } = item;
		const Component: ITypesInputs = TypesInputs[item.type]?.component || TypesInputs.InputText?.component;
		if (type === 'InputText' || type === 'InputTextPassword' || type === 'InputSelect' || type === 'InputDateRange') {
			return (
				<div className='mb-3' key={'input-type-' + index}>
					<Component {...item} form={form} />
				</div>
			);
			// return <InputText form={form} name='name' placeholder='Nombre' />;
		}
	});
};
