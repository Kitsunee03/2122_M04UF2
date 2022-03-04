import './App.css';
import Content from './Content';

function App() {
	return (
		<main className="App">
			<Content title="Titulaso">
				<h2> Ejemplo muy ejemplar </h2>
				<p>Prueba children</p>
				<p>Esto es <strong>Negritas</strong></p>
			</Content>
		</main>
  	);
}
export default App;
