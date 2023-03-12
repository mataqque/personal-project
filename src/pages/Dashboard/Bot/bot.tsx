import './bot.scss';
import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { ButtonBase } from '../../../components/UI/GlobalComponents/buttons/buttonBase';
import { URL_SERVER_NODE } from '../../../store/config';
import { Title } from '../StyledComponent/titles';
const socket = socketIOClient(URL_SERVER_NODE);

export const Bot = () => {
	const [qr, setQr] = useState<string>('');
	const event = () => {
		socket.emit('join', 'ping');
	};
	socket.on('qr', (data: any) => {
		console.log(data);
		setQr(data);
	});
	// const updateImage = (data: any) => {};
	// useEffect(() => {
	// 	fetch(`${URL_SERVER_NODE}/api/v1/bot/initBot`).then(res => {
	// 		res.json().then(data => {
	// 			console.log(data);
	// 		});
	// 	});
	// }, []);
	return (
		<main className='main-bot features bg-white'>
			<Title className='bold mb-1 text-letter'>Administrador de archivos</Title>
			<div className=''>
				<span className='text-letter mb-3 flex'>Escanea el código qr para enlazar tu whatsapp al bot</span>
				<div className='content-img-qr'>{qr && <img className='image-qr' src={qr} alt='' />}</div>
			</div>
			<ButtonBase
				onClick={() => {
					event();
				}}
			>
				Ping
			</ButtonBase>
		</main>
	);
};
