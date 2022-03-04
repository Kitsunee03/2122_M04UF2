import MenuItem from './MenuItem';

function Menu ()
{
	return(
		<nav><ul>
			<MenuItem text="JomePaje" url="/" />
			<MenuItem text="CurryCulum" url="/cv" />
			<MenuItem text="Contactito" url="/contact" />
		</ul></nav>
	);
}
export default Menu;
