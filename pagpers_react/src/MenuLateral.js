import './MenuLateral.css';

function MenuLateral(){
	return(
		<aside>
			<h2 id="tweets_title">Últimos Tweets</h2>
				<p>El azúcar es malo</p>
			<h2>Hora</h2>
				<p><time id="hora_actual"></time></p>
		</aside>
	);
}

export default MenuLateral;
