import { IFile } from '../FileManager/interface/Interface';

export interface ICategorySchema {
	uuid_category: string;
	name_category: string;
	description: string;
	sort_order: number;
	is_featured: boolean;
	images: IFile[];
	status: string;
	updated_at?: string;
}
