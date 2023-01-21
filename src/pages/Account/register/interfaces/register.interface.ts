export interface IRegisterWorker {
	name: string;
	lastName: string;
	email: string;
	password: string;
	phone: string;
}

export interface IRegisterCompany {
	organization: string;
	url: string;
	employment: string;
	email: string;
	password: string;
	phone: string;
}

export const initValuesWorker: IRegisterWorker = {
	name: '',
	lastName: '',
	email: '',
	password: '',
	phone: '',
};

export const initValuesCompany: IRegisterCompany = {
	organization: '',
	url: '',
	employment: '',
	email: '',
	password: '',
	phone: '',
};
