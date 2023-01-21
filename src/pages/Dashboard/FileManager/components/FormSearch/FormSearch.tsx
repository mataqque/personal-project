import { FormContainer } from '../../../../../components/helpers/common/forms/Form';
import { ParametersForm } from '../../../../Account/interfaces/interface';
import { searchSchema } from '../../interface/Interface';
import iconSearch from '../../../../../assets/images/global/icons/search.svg?url';
import './FormStyled.scss';
export const FormSearch = () => {
	const initialValues = {
		search: '',
	};
	const onSubmitSearch = (values: any) => {};
	return (
		<FormContainer initialValues={initialValues} validationSchema={searchSchema} onSubmit={onSubmitSearch}>
			{(form: any) => {
				const { handleSubmit, isSubmitting }: ParametersForm = form;
				return (
					<form className='border border-slate-200 flex h-input overflow-hidden rounded-5 w-full' onSubmit={handleSubmit}>
						<input className='h-full pl-3 w-full' name='search' placeholder='Buscar archivo' />
						<button className='btn flex justify-center items-center	w-14 ' type='submit'>
							<img className='search w-3/5' src={iconSearch}></img>
						</button>
					</form>
				);
			}}
		</FormContainer>
	);
};
