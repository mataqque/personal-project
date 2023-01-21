import './assets/scss/index.scss';
import 'tailwindcss/tailwind.css';
import RoutesDom from './router';
import { StyledEngineProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from './store/store';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
	<Provider store={store}>
		<HelmetProvider>
			<StyledEngineProvider injectFirst>
				<RoutesDom />
			</StyledEngineProvider>
		</HelmetProvider>
	</Provider>
	// <React.StrictMode>
	// </React.StrictMode>
);
