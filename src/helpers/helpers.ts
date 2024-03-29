import { toast } from 'react-toastify';
import { IToastNotifyPromise } from './interface';

export const callbackDelay = (callback: Function, delay?: number) => {
	let delayInterval = setInterval(
		() => {
			callback();
			clearInterval(delayInterval);
		},
		delay ? delay : 1000
	);
};
interface IToast {
	message: string;
	options: {
		type: 'success' | 'info' | 'warning' | 'error';
		position: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
	};
}
export const ToastNotify = (props: IToast) => {
	const { message, options } = props;
	toast(message, options);
};

export const ToastNotifyPromise = ({ message, promise }: IToastNotifyPromise) => {
	const resolveAfter3Sec = new Promise((resolve: any) => {
		promise.then((response: any) => {
			resolve(response);
		});
	});
	toast.promise(resolveAfter3Sec, {
		pending: 'Conectando con el servidor...',
		success: message,
		error: 'No se concluyó con la tarea 🤯',
	});
};

interface IResponse {
	status: number;
	data: unknown;
}

export const HandleResponse = (callback: Function, response: IResponse, callbackError: Function) => {
	switch (response.status) {
		case 200:
			callback(response.data);
			break;
		case 401:
			console.log('unauthorized');
			break;
		case 500:
			callbackError();
			break;
	}
};
