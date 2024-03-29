import { IFile } from '../FileManager/interface/Interface';

export interface IProductSchema {
	uuid_product: string;
	uuid_autor: string;
	name_product: string;
	description: string;
	id_empresa: string;
	id_category: string;
	id_subcategory: string;
	tags: Array<object>;
	season: string;
	gender: string;
	colors: Array<string>;
	quantity: string;
	price: string;
	discount: string;
	images: IFile[];
	videos: Array<object>;
	url: string;
	proveedor?: string;
	status: boolean;
	index_page: boolean;
	meta_description: string;
	meta_keywords: string;
	updated_at?: string;
}
