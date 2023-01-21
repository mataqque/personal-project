import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
// import BotonSelect from '../../UI/select/select';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FormContainer } from '../../../components/helpers/common/forms/Form';
import { UserSchema } from '../../../components/helpers/common/forms/constraints/ValidatonSchemas';
import { InputText } from '../../../components/UI/inputs/inputText';
import { FormStyled } from '../../../components/UI/GlobalComponents/Form/form';
import { InputSelect } from '../../../components/UI/inputs/inputSelect';
import { ButtonSubmit } from '../../Account/login/components/ButtonSubmit.styled';
import { IconAvatar } from '../../../components/UI/GlobalComponents/IconAvatar/IconAvatar';
import { SeparatorVertical } from '../../../components/UI/GlobalComponents/separators/separators';

const arraySelect = [
	{ label: 'Admin', value: '1' },
	{ label: 'Editor', value: '2' },
	{ label: 'Autor', value: '3' },
];
export default function GestionUsers(props: any) {
	const params = useParams();
	const [rol, setRole] = useState();
	const [user, setUser] = useState({ uuid_user: '', username: '', name: '', lastname: '', address: '', phone: '', email: '', id_photo_perfil: '', id_role: '', photo: '' });

	const updateRole = (value: any) => {
		console.log(value);
		setRole(value.value);
	};
	const submitForm = (values: any) => {
		values.id_role = rol;
		console.log(values);
		axios.post('/users/updateUser', values).then(res => {
			console.log(res);
			toast.success('Información actualizada', {
				position: 'top-right',
			});
		});
	};
	useEffect(() => {
		const fetchData = async () => {
			await axios.get(`/users/getUser/${params.id}`).then(res => {
				const { uuid_user = '', username, name, lastname, address, phone, email, id_photo_perfil, id_role } = res.data[0] as any;
				setRole(id_role);
				// setUser({ uuid_user, username, name, lastname, address, phone, email, id_photo_perfil, id_role });
			});
		};
		fetchData();
	}, [setUser]);

	return user ? (
		<>
			<div className='flex bg-white'>
				<div className='features-auto lg:w-1/2'>
					<h2 className='title-component bold mb-1 text-secondary text-2xl text-letter IBMPlexSans-Bold '>Información del usuario</h2>
					<p className='paragraph dark:text-gray-300 mb-4'>En esta sección podrá ver la información del usuario, editarla y actualizarla.</p>
					<div className='flex flex-row w-full items-center mb-4'>
						<div className='flex justify-center items-center mr-2'>
							<div className='flex sm:mr-2 md:mr-4'>
								<IconAvatar name='Flavio' photo={''} extra={{ width: 70, height: 70, fontSize: 35 }} />
							</div>
						</div>
						<div className='flex flex-col  justify-center mr-8'>
							<h3 className='text-secondary text-1xl IBMPlexSans-Bold '>FLAVIO MATAQQUE PINARES</h3>
							<span className='text-secondary'>Rol: Editor</span>
							<span className='text-secondary '>se unió: 12 / 01 / 2023</span>
						</div>
						<div className='flex items-center justify-center h-10'>
							<div className='flex flex-col'>
								<span className='num text-3xl text-secondary'>86</span>
								<span className='text-center text-secondary'>Post</span>
							</div>
							<SeparatorVertical></SeparatorVertical>
							<div className='flex flex-col'>
								<span className='num text-3xl text-secondary'>1,1k</span>
								<span className='text-center text-secondary'>Messages</span>
							</div>
							<SeparatorVertical></SeparatorVertical>
							<div className='flex flex-col'>
								<span className='num text-3xl text-secondary'>45k</span>
								<span className='text-center text-secondary'>Members</span>
							</div>
						</div>
					</div>

					<FormContainer initialValues={user} validationSchema={UserSchema} onSubmit={submitForm}>
						{(form: any) => {
							const { handleSubmit } = form;
							return (
								<FormStyled onSubmit={handleSubmit}>
									<div className='flex flex-wrap grid grid-cols-2 gap-4'>
										<div className='order flex-col mb-4 w-full'>
											<label className='text-1xl text-secondary IBMPlexSans-Bold mb-1 flex'>Rol</label>
											<InputSelect name='rol' data={arraySelect} label='Rol' form={form}></InputSelect>
										</div>
										<div className='order flex-col mb-4 w-full'>
											<label className='text-1xl text-secondary IBMPlexSans-Bold mb-1 flex'>Usuario</label>
											<InputText name='username' type='text' placeholder='Ingrese su usuario' defaultValue={user.username} form={form}></InputText>
										</div>
										<div className='order flex-col mb-4 w-full'>
											<label className='text-1xl text-secondary IBMPlexSans-Bold mb-1 flex'>Nombre</label>
											<InputText name='name' type='text' placeholder='Ingrese su nombre' defaultValue={user.name} form={form}></InputText>
										</div>
										<div className='order flex-col mb-4 w-full'>
											<label className='text-1xl text-secondary IBMPlexSans-Bold mb-1 flex'>Apellidos</label>
											<InputText name='lastname' type='text' placeholder='Ingrese su apellido' defaultValue={user.lastname} form={form}></InputText>
										</div>
										<div className='order flex-col mb-4 w-full'>
											<label className='text-1xl text-secondary IBMPlexSans-Bold mb-1 flex'>Email</label>
											<InputText name='email' type='text' placeholder='Ingrese su email' defaultValue={user.email} form={form}></InputText>
										</div>
										<div className='order flex-col mb-4 w-full'>
											<label className='text-1xl text-secondary IBMPlexSans-Bold mb-1 flex'>N° Celular</label>
											<InputText name='phone' type='text' placeholder='Ingrese su email' defaultValue={user.phone} form={form}></InputText>
										</div>
										<div className='order flex-col w-100 mb-4 w-full'>
											<label className='text-1xl text-secondary IBMPlexSans-Bold mb-1 flex'>Dirección</label>
											<InputText name='address' type='text' placeholder='Ingrese su email' defaultValue={user.address} form={form}></InputText>
										</div>
									</div>
									<ButtonSubmit type='submit' className='btn c-white b-success'>
										Guardar cambios
									</ButtonSubmit>
								</FormStyled>
							);
						}}
					</FormContainer>
				</div>
				<div className='lg:w-1/2 py-6'>
					<h2 className='title-component bold mb-1 text-secondary text-2xl text-letter IBMPlexSans-Bold '>Seguridad de la cuenta</h2>
				</div>
			</div>
		</>
	) : (
		<span>loading...</span>
	);
}
