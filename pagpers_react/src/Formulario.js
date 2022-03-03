import './Formulario.css';

function Formulario(){
	return(
		<article>
			<form id="contact_form">
				<h1>Formulario de Contacto</h1>
				<ul>
					<li>
						<label for="name_id">Nombre: </label> 
						<input class="form_input" type="text" id="name_id" name="name"/>
					</li>
					<li>
						<label for="telf_id">Teléfono: </label> 
						<input class="form_input" type="tel" id="telf_id" name="telf"/>
					</li>
					<li>
						<label for="email_id">E-mail: </label> 
						<input class="form_input" type="email" id="email_id" name="email"/>
					</li>
					<li>
						<label for="country_id">País: </label> 
						<select class="form_input" id="country_id" name="country"> 
							<option> nowhere </option>
							<option> ESPAÑITA </option>
						</select>
					</li>
					<li>
						<h3>Aficiones</h3>
						<ul>
							<li>
								<input type="checkbox" name="hobbies[]" id="lol" value="lol"/>
								<label for="lol">Jugar al LoL</label>
							</li>
							<li>
								<input type="checkbox" name="hobbies[]" id="estudiar" value="estudiar"/>
								<label for="estudiar">Estudiar</label>
							</li>
							<li>
								<input type="checkbox" name="hobbies[]" id="programar" value="programar"/>
								<label for="programar">Programar</label>
							</li>
						</ul>
					</li>
					<li>
						<h3>Valoración</h3>
						<ul>
							<li> <input type="radio" name="rating" value="1" id="rating1"/> <label for="rating1">1</label> </li>
							<li> <input type="radio" name="rating" value="2" id="rating2"/> <label for="rating1">2</label> </li>
							<li> <input type="radio" name="rating" value="3" id="rating3"/> <label for="rating1">3</label> </li>
							<li> <input type="radio" name="rating" value="4" id="rating4"/> <label for="rating1">4</label> </li>
							<li> <input type="radio" name="rating" value="5" id="rating5"/> <label for="rating1">5</label> </li>
						</ul>
					</li>
				</ul>	
					<p> <input id="submit_id" type="submit"/> </p>					
				
			</form>
		</article>
	);
}

export default Formulario;
