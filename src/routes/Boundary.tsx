import React, { ReactNode, Suspense } from 'react';

type Props = {
	children: React.ReactNode;
};

export class ErrorBoundary extends React.Component<{ children: ReactNode }, { hasError: boolean }> {
	constructor(props: any) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: any) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error: any, errorInfo: any) {
		// You can also log the error to an error reporting service
		console.log(error);
		// logErrorToMyService(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <h1>Something went wrong.</h1>;
		}
		return this.props.children;
	}
}

export default function Boundary(props: Props) {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ErrorBoundary>{props.children}</ErrorBoundary>
		</Suspense>
	);
}
