import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const StyledStatus = styled.div`
	display: flex;
	align-items: center;
	.text-activo {
		color: #00a700;
	}
	.text-inactivo {
		color: #7e889b;
	}
	.text-pendiente {
		color: #ff8c00;
	}
	.text-rechazado {
		color: #ff0000;
	}
	.text-aprobado {
		color: #00a700;
	}
	.text-default {
		color: #3667fb;
	}
`;

interface IStatus {
	color?: string;
	status: string;
}
type StatusType = {
	[key: string]: { status: string; color: string; label: string };
};
export const Status = (props: IStatus) => {
	const { color, status } = props;
	// const typeColor = color || 'black';
	const typeStatus: StatusType = {
		activo: { status: 'activo', color: 'green', label: 'Activo' },
		inactivo: { status: 'inactivo', color: 'gray', label: 'Inactivo' },
		pendiente: { status: 'pendiente', color: 'info', label: 'Pendiente' },
		rechazado: { status: 'rechazado', color: 'red', label: 'Rechazado' },
		aprobado: { status: 'aprobado', color: 'green', label: 'Aprobado' },
		default: { status: 'default', color: 'black', label: 'Desconocido' },
	};
	const [state, setState] = useState({ status: 'default', color: 'black', label: 'Desconocido' });
	useEffect(() => {
		const type = typeStatus[status] ? typeStatus[status] : typeStatus.default;
		setState(type);
	}, []);
	return <StyledStatus>{state ? <span className={`text-${state.status}`}>{state.label}</span> : null}</StyledStatus>;
};
