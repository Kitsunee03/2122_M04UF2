import './Menu.css';

function Menu(){
	return(
		<nav>
			<ul>
				<li><p><a href="index.html" id="home_link">Portada</a></p></li>
				<li><p><a href="contacto.html" id="contacto_link">Contacto</a></p></li>
				<li><p><a href="cv.html" id="cv_link">CV</a></p></li>
				<li><p><a href="game.html" id="game_link">Game</a></p></li>
			</ul>							
		</nav>
	);
}
export default Menu;
