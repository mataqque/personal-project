import { FormContainer } from '../../../../../components/helpers/common/forms/Form';
import { ParametersForm } from '../../../../Account/interfaces/interface';
import { searchSchema } from '../../interface/Interface';
import iconSearch from '../../../../../assets/images/global/icons/search.svg?url';
import './FormStyled.scss';
import { IconMask } from '../../../../../components/UI/inputs/styled/IconDownStyleSelect';

interface IFormSearchProps {
	placeholder?: string;
}
export const FormSearch = (props: IFormSearchProps) => {
	const { placeholder = 'Buscar archivo' } = props;
	const initialValues = {
		search: '',
	};
	const onSubmitSearch = (values: any) => {};
	return (
		<FormContainer initialValues={initialValues} validationSchema={searchSchema} onSubmit={onSubmitSearch}>
			{(form: any) => {
				const { handleSubmit, isSubmitting }: ParametersForm = form;
				return (
					<form className='border border-slate-200 flex h-11 overflow-hidden rounded-5 w-full' onSubmit={handleSubmit}>
						<input className='h-full pl-3 w-full' name='search' placeholder={placeholder} />
						<button className='btn flex justify-center items-center	w-14 ' type='submit'>
							<IconMask className='search w-3/5 h-full icon-search bg-letter'></IconMask>
						</button>
					</form>
				);
			}}
		</FormContainer>
	);
};
