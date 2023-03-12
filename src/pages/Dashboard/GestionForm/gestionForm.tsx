import { useState } from 'react';
import { AddInputs } from './components/addInputs';
import '../GestionProduct/gestionProduct.scss';
import { ModalAddInputs } from './components/modalAddInputs/modalAddInputs';
import { Title } from '../StyledComponent/titles';
import { ButtonBase } from '../../../components/UI/GlobalComponents/buttons/buttonBase';
import { FormAddForm } from './components/formAddForm/formAddForm';

export const GestionForm = () => {
	const [form, setForm] = useState();
	return (
		<main className='features bg-white gestion-forms'>
			<ModalAddInputs />
			<Title className='title-component bold mb-3 text-letter'>Gestión de Formulario: 100401441</Title>
			<div className='info-section d-flex align-center'>
				<span className='mr-5 d-flex align-center text-letter'>
					<i className='fas fa-eye mr-2 text-letter'></i>
					<span className='text-letter'>Estado</span>: Publicado
				</span>
				<span className='mr-5 d-flex align-center'>
					<i className='fas fa-calendar-week mr-2 text-letter'></i>
					<span className='text-letter'>Fecha de publicación: </span>
				</span>
				<span className='mr-5 d-flex align-center'>
					<i className='fas fa-calendar-week mr-2 text-letter'></i>
					<span className='text-letter'>ID: </span>
				</span>
				<ButtonBase type='submit' className='btn b-blue c-white text-md bg-success border-success text-white ml-auto h-12'>
					Agregar formulario
				</ButtonBase>
			</div>
			<div className='flex h-full'>
				<div className='gestion-links'>
					<AddInputs />
				</div>
				<div className='details-form w-full h-full px-4'>
					<FormAddForm />
				</div>
			</div>
		</main>
	);
};
