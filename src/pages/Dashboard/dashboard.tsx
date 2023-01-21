import { useSelector } from 'react-redux';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { destroyToken } from '../../store/globlalSlice/auth/auth.slice';
import { useDispatch } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toggleSideBar, handleChangeSidebar } from './domain/dashboard.slice';
import './dashboard.scss';
// import ModalUpload from '../../components/dashboard/FileManager/modalFile';
import { useState } from 'react';
import { IconMask } from '../../components/UI/inputs/styled/IconDownStyleSelect';
import ModalUpload from '../../components/modalUpload/modalUpload';

function Dashboard(props: any) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const statetoggleSideBar = useSelector((state: any) => state.dashboardSlice.toggleSideBar);
	const sectionBoton = useSelector((state: any) => state.dashboardSlice.sectionBoton);
	const expanded = useSelector((state: any) => state.dashboardSlice.expanded);
	const [sectionActive, setSectionActive] = useState(0);

	const handleChange = (panel: any) => (event: any, newExpanded: any) => {
		console.log(panel, newExpanded);
		let expanded = newExpanded ? panel : false;
		dispatch(handleChangeSidebar(expanded));
		// this.setState({expanded: newExpanded ? panel : false, activeSection: panel})
	};
	const changeSection = (active: number, upComponent: any) => {
		setSectionActive(active);
	};
	const subHandleChangeSection = (active: boolean, upComponent: any) => {
		// this.setState({activeSection:active,component:upComponent})
	};
	const logOut = () => {
		navigate('/account/login');
		dispatch(destroyToken());
	};
	return (
		<>
			<main className='dashboard' key={'dash'}>
				<ModalUpload></ModalUpload>
				<div className='content-dashboard'>
					<div className={`envolves ${statetoggleSideBar ? '' : 'close'}`}>
						<div className='content-sidebar'>
							<div className='brand-dashboard text-white'>
								DASHBOARD
								<div className='icon-menu mask' onClick={() => dispatch(toggleSideBar())}></div>
							</div>
							<div className='user'>
								<div className='content-img'>
									<img className='profile' src={require('../../assets/images/Dashboard/images/profile.jpg')}></img>
								</div>
								<RoleUser />
							</div>
							<div className='sider-bar_bottom scrollAlternateColor'>
								<div className='sidebar'>
									{sectionBoton.map((body: any, index: number) => {
										return (
											<SectionSidebar
												key={'Sidebar' + index}
												sectionActive={sectionActive}
												expanded={expanded}
												handleChange={handleChange}
												body={body}
												index={sectionActive}
												changeSection={changeSection}
												subHandleChangeSection={subHandleChangeSection}
											/>
										);
									})}
								</div>
							</div>
							<div className='sidebar-down-option flex'>
								<div className='option'>
									<IconMask className='icon-settings w-5 h-5'></IconMask>
								</div>
								<div className='option'>
									<IconMask className='icon-notification w-5 h-5'></IconMask>
								</div>
							</div>
						</div>
					</div>
					<div className='wrapper'>
						<div className='nav-wrapper'>
							<div
								className='toggle'
								onClick={() => {
									dispatch(toggleSideBar());
								}}
							>
								<img className='icon' src={require('../../assets/images/Dashboard/icons/menu.svg?url')}></img>
							</div>
							<div className='content-links'>
								<div className='link'>
									<span className='top-font'>
										<Link to={'/dashboard'}>Dashboard</Link>
									</span>
								</div>
							</div>
							<div
								className='toggle left'
								onClick={() => {
									logOut();
								}}
							>
								<i className='fas fa-sign-out-alt'></i>
							</div>
						</div>
						<div className='content-wrapper'>
							<Outlet />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default Dashboard;

function RoleUser() {
	// const user = useSelector((state: any) => state.usersSlice.userLoggedIn);
	const user = { name: 'Juan', lastname: 'Perez', role: 'Administrador', username: 'juanperez' };
	return (
		<div className='user-role'>
			<span className='role text-white'>{user?.role}</span>
			{user.name ? (
				<span className='name text-white'>
					{user.name}
					{user.lastname}
				</span>
			) : (
				<span className='name text-white'>{user?.username}</span>
			)}
		</div>
	);
}

function SectionSidebar(props: any) {
	return (
		<div className='section-sidebar'>
			<div className='c-sidebar-nav-title sidebar-sub-title'>{props.body.header}</div>
			<div className='c-sidebar-nav-item'>
				{props.body.sections.map((section: any, index: number) => {
					if (section.subSection == 0) {
						return (
							<Link
								to={section?.path ? section?.path : '#'}
								className={`c-sidebar-nav-title ${section.index == props.sectionActive ? 'active' : ''}`}
								onClick={() => {
									props.changeSection(section.index, section.component);
								}}
								key={'section-' + index}
							>
								<i className={section.icon}></i>
								<span className='span-title'>{section.title}</span>
								<IconMask className='icon-signal-rigth' />
							</Link>
						);
					} else {
						return (
							<Accordion expanded={props.expanded === section.index} square onChange={props.handleChange(section.index, section.component)} key={'section-' + index}>
								<AccordionSummary aria-controls='panel-content'>
									<Typography>
										<label className={`c-sidebar-nav-title ${props.expanded == section.index ? 'active-nav' : ''}`}>
											<i className={section.icon}></i>
											<span className='span-title'>{section.title}</span>
											<IconMask className='icon-signal-rigth' />
										</label>
									</Typography>
								</AccordionSummary>
								{section.subSection.map((item: any, index: number) => {
									return (
										<AccordionDetails key={'subSection-' + index}>
											<Typography>
												<Link
													to={item?.path ? item?.path : '/'}
													className='c-sidebar-nav-title subsidebar'
													onClick={() => props.subHandleChangeSection(item.index, item.component)}
													key={'acordion-' + index}
												>
													<i className={item.icon}></i>
													<span className='span-title'>{item.title}</span>
												</Link>
											</Typography>
										</AccordionDetails>
									);
								})}
							</Accordion>
						);
					}
				})}
			</div>
		</div>
	);
}
