import { IUserData } from '../../../store/globlalSlice/user/interface';
import { IFile } from '../FileManager/interface/Interface';

export interface IUserDataExtend extends IUserData {
	images: IFile;
	updated_at: string;
	phone: string | number;
}
