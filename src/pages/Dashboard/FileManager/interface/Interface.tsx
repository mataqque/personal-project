import * as Yup from 'yup';

export const searchSchema = (values: any) =>
	Yup.object().shape({
		search: Yup.string().min(4).required(),
	});

export interface IFile {
	id: number;
	uuid: string;
	collection_name: string;
	compress: string;
	dir: string;
	encoding: string;
	file_name: string;
	mime_type: string;
	size: number;
	updated_at: string;
	created_at: string;
	id_selected?: string;
}
export interface IFileState {
	files: IFile[];
}
