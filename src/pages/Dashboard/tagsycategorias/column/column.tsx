import styled from 'styled-components';
import { InputText } from '../../../../components/UI/inputs/inputText';
import { FormContainer } from '../../../../components/helpers/common/forms/Form';
import { FormStyled } from '../../../../components/UI/GlobalComponents/Form/form';
import { SeparatorHorizontal } from '../../../../components/UI/GlobalComponents/separators/separators';
const ColumnStyle = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Column = ({ children, className = '', ...props }: any) => {
	const handleSubmit = async (values: any) => {};
	return (
		<ColumnStyle className={`column ${className}`} {...props}>
			<FormContainer onSubmit={handleSubmit} initialValues={{ name: '' }} validationSchema={''}>
				{(form: any) => {
					const { handleSubmit, isSubmitting } = form;
					return (
						<FormStyled onSubmit={handleSubmit} autoComplete={'off'}>
							<SeparatorHorizontal opacity={0.4}></SeparatorHorizontal>
							<div className='flex white-space'>
								Agregar categoria
								<InputText name='email' placeholder='Email' form={form}></InputText>
							</div>
							<SeparatorHorizontal opacity={0.4}></SeparatorHorizontal>
						</FormStyled>
					);
				}}
			</FormContainer>
		</ColumnStyle>
	);
};
