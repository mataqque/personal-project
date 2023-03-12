const dataFilter = [
	{
		id: 1,
		name: 'John',
		age: 24,
		update: '2020-01-01',
	},
	{
		id: 2,
		name: 'Jose',
		age: 32,
		update: '2020-01-02',
	},
	{
		id: 3,
		name: 'Jane',
		age: 30,
		update: '2020-01-03',
	},
	{
		id: 4,
		name: 'Jane',
		age: 32,
		update: '2020-01-04',
	},
	{
		id: 5,
		name: 'Jane',
		age: 31,
		update: '2020-01-05',
	},
	{
		id: 6,
		name: 'Jane',
		age: 32,
		update: '2020-01-06',
	},
];
interface Item {
	fn: Function;
	parameter: any;
}
interface ICombined {
	array: any[];
}
interface IFilter {
	type_file: 'image' | 'video' | 'audio' | 'document' | 'archive' | 'other' | 'all';
}

const Filter: IFilter = {
	type_file: 'all',
};

const searchID = (data: any[], id: string) => {
	return data.filter(item => item.id === id);
};
const searchName = (data: any[], name: string) => {
	return data.filter(item => item.name === name);
};
const searchAge = (data: any[], age: number) => {
	return data.filter(item => item.age === age);
};
// all filters combined
const combinedFilters = ({ array = [] }: ICombined) => {
	let result: any[] = dataFilter || [];
	array.forEach((item: Item, index: number) => {
		result = item.fn(result, item.parameter);
	});
	return result;
};

export const initProveGeneric = () => {
	let data = combinedFilters({
		array: [
			{ fn: searchAge, parameter: 31 },
			{ fn: searchName, parameter: 'Jane' },
			{ fn: searchID, parameter: 5 },
		],
	});
	// console.log('data', data);
};
