import { Link } from 'react-router-dom';

export const LinkComponentRegister = () => {
	return (
		<p className='paragraph text-center mt-4 mb-4'>
			¿No eres un miembro aún?  
			<Link to={'/account/register'} className='underline c-letter'>
				Regístrate aquí
			</Link>
		</p>
	);
};

export const LinkComponentLogin = () => {
	return (
		<p className='paragraph text-center mt-4'>
			¿Ya eres miembro?  
			<Link to={'/account/login'} className='underline c-letter'>
				Inicia sesión aquí
			</Link>
		</p>
	);
};

export const ShowErrorLogin = (props: any) => {
	if (props.error)
		return (
			<div className='alert text-red-600' role='alert'>
				Usuario o contraseña invalidos
			</div>
		);
	return <></>;
};
