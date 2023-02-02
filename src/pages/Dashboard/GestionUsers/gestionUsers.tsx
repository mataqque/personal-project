import axios from 'axios';
// import { updateUsers } from '../../../data/userStore';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { convertToDate } from '../../../components/helpers/helpers';
import { Title } from '../StyledComponent/titles';
import { ButtonBase } from '../../../components/UI/GlobalComponents/buttons/buttonBase';
import { GridTableUsers } from './components/dataGrid';

function GestionUsuarios(props: any) {
	const dispatch = useDispatch();

	useEffect(() => {}, []);
	return (
		<div className='features bg-white'>
			<Title className='title-component bold mb-3'>Gestión de usuarios</Title>
			<span className='mb-3 text-primary'>Gestiona las rol que los usuarios</span>
			<div className='global-actions flex items-center mb-4'>
				<span className='mr-8 text-info IBMPlexSans-Bold '>6 Items seleccionados</span>
				<ButtonBase className='mr-2 border-bordersky'>Exportar</ButtonBase>
				<ButtonBase className='mr-2 border-bordersky'>Archivar</ButtonBase>
				<ButtonBase className='mr-2 border-bordersky'>Eliminar</ButtonBase>
				<ButtonBase className='border-bordersky'>Cancelar seleccion</ButtonBase>
			</div>
			<GridTableUsers />
			{/* <DataGrid data={fakeUsers} /> */}
			{/* <form className="form-style">
                <div className="content-input">
                    <label className="form-label">Usuario</label>
                    <input type="text" className="input-high" id="username" placeholder="Ingresa el usuario"></input>
                </div>
            </form> */}
		</div>
	);
}
export default GestionUsuarios;

function ListUser(props: any) {
	return (
		<>
			<div className='item usuario'>
				<Stack direction='row' spacing={2}>
					<Avatar sx={{ bgcolor: deepOrange[500] }} alt={props.user?.username} src={`/images/${props.user?.photo}`}></Avatar>
				</Stack>
			</div>
			<div className='item usuario'>{props.user?.username}</div>
			<div className='item rol'>{props.user?.role}</div>
			<div className='item phone'>{props.user?.phone}</div>
			<div className='item email'>{props.user?.email}</div>
			<div className='item status'>{props.user?.status == 'true' ? <span className='c-success'>Activo</span> : <span className='c-danger'>Inactivo</span>}</div>
			<div className='item date-created'>{convertToDate(props.user?.created_at)}</div>
			<div className='item actions bold'>
				<Link to={props.user?.uuid_user} className='edit c-success'>
					<i className='fas fa-user-edit c-pointer'></i>
				</Link>
				<div className='delete c-danger c-pointer'>
					<i className='fas fa-trash-alt'></i>
				</div>
			</div>
		</>
	);
}
