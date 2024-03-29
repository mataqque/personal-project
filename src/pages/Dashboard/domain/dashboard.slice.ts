import { createSlice } from '@reduxjs/toolkit';
// import Galeria from "../pages/dashboard/galeria";
// import SliderMain from "../pages/dashboard/sliderMain";

const initialState = {
	activeSection: 1,
	toggleSideBar: true,
	expanded: 2,
	sectionBoton: [
		{
			header: 'MEDIA',
			sections: [
				{
					icon: 'fas fa-photo-video',
					title: 'Gestión de archivos',
					index: 2,
					path: '/dashboard/file-manager',
					component: 'FileManager',
					subSection: [],
				},
			],
		},
		{
			header: 'GESTIÓN',
			sections: [
				// {
				//     icon:"fas fa-users",
				//     title:'Prueba',
				//     index:3,
				//     path:'/dashboard/prueba',
				//     component:null,
				//     subSection:[]
				// },
				{
					icon: 'fas fa-users',
					title: 'Gestión de usuarios',
					index: 3,
					path: '/dashboard/gestion-users',
					component: 'gestionUsers',
					subSection: [],
				},
				{
					icon: 'fas fa-list-ul',
					title: 'Gestión de Entradas',
					index: 4,
					path: '/dashboard/gestionPaginas',
					component: null,
					subSection: [],
				},
				{
					icon: 'fas fa-pager',
					title: 'Gestión de Pagínas',
					index: 5,
					path: '/dashboard/gestionPaginas',
					component: null,
					subSection: [],
				},
				{
					icon: 'fas fa-box',
					title: 'Gestión de Productos',
					index: 6,
					path: '/dashboard/gestion-products',
					component: null,
					subSection: [],
				},
				{
					icon: 'fas fa-tags',
					title: 'Categorias y tags',
					index: 7,
					path: '/dashboard/categorias-y-etiquetas',
					component: null,
					subSection: [],
				},
				{
					icon: 'fas fa-gift',
					title: 'Gestión de Promociones',
					index: 8,
					path: '/dashboard/gestion-products',
					component: null,
					subSection: [],
				},

				{
					icon: 'fas fa-list-ul',
					title: 'Gestión de Links',
					index: 9,
					path: '/dashboard/gestionLinks',
					component: null,
					subSection: [],
				},
				{
					icon: 'fas fa-list-ul',
					title: 'Gestión de Sliders',
					index: 10,
					path: '/dashboard/gestion-slider',
					component: null,
					subSection: [],
				},
			],
		},
		{
			header: 'MARKETING',
			sections: [
				{
					icon: 'fas fa-bullhorn',
					title: 'Lead',
					index: 9,
					subSection: [
						{
							icon: 'fas fa-circle',
							title: 'Formularios',
							path: '/dashboard/gestion-forms',
							component: '',
						},
					],
				},
			],
		},
		{
			header: 'BOTS',
			sections: [
				{
					icon: 'fas fa-robot',
					title: 'Bot de Whatsapp',
					index: 10,
					path: '/dashboard/bot',
					subSection: [],
				},
			],
		},
		{
			header: 'LISTAS',
			sections: [
				{
					icon: 'fas fa-list-ul',
					title: 'Gestion de Lista',
					index: 11,
					subSection: [
						{
							icon: 'fas fa-circle',
							title: 'Categorias',
							path: '/dashboard/Features',
							component: null,
							index: 11,
						},
						{
							icon: 'fas fa-circle',
							title: 'Etiquetas',
							path: '/dashboard/Features',
							component: null,
							index: 12,
						},
						{
							icon: 'fas fa-circle',
							title: 'Marcas',
							path: '/dashboard/Features',
							component: null,
							index: 13,
						},
					],
				},
			],
		},

		{
			header: 'COMPONENTES',
			sections: [
				{
					icon: 'fab fa-whatsapp',
					title: 'Whatsapp',
					index: 14,
					subSection: [
						{
							icon: 'fas fa-circle',
							title: 'Float Whatsapp',
							component: null,
						},
					],
				},
			],
		},
		{
			header: 'HERRAMIENTAS',
			sections: [
				{
					icon: 'fas fa-th',
					title: 'Campos personalizados',
					index: 20,
					path: '/dashboard/campos-personalizados',
					subSection: [],
				},
			],
		},
	],
};

const dashboardSlice = createSlice({
	name: 'dashboardSlice',
	initialState,
	reducers: {
		toggleSideBar: state => {
			state.toggleSideBar = !state.toggleSideBar;
		},
		handleChangeSidebar: (state, value) => {
			state.expanded = value.payload;
		},
	},
});

export const { toggleSideBar, handleChangeSidebar } = dashboardSlice.actions;
export default dashboardSlice.reducer;
