import Summary from './components/bottom/Summary';
import Results from './components/top/Results';

function App() {
	return (
		<div className="min-h-screen grid grid-cols-1 grid-rows-[1fr_1.2fr] sm:grid-rows-none sm:flex sm:justify-center sm:items-center">
			<Results />

			<Summary />
		</div>
	);
}

export default App;
