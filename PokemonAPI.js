
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.pokemontcg.io/v1/cards');
		
xhr.addEventListener("load", function(){
	var response = xhr.responseText;
	arrayDePokemons = JSON.parse(response).cards;

	let $containerCartas = document.getElementById('container')
	
	for(let i=0; i<arrayDePokemons.length; i++){
		
		var autorEl = document.createElement('h3');
		var autorDaCarta = document.createTextNode(arrayDePokemons[i].artist);
		autorEl.appendChild(autorDaCarta);
		$containerCartas.appendChild(autorEl);

		var textoEl = document.createElement('h3');
		var textoDaCarta = document.createTextNode(arrayDePokemons[i].text);
		textoEl.appendChild(textoDaCarta);
		$containerCartas.appendChild(textoEl);
		
		var tituloEl = document.createElement('h3');
		var nomeDaCarta = document.createTextNode(arrayDePokemons[i].name);
		 tituloEl.appendChild(nomeDaCarta);
		 $containerCartas.appendChild(tituloEl);

	}
	
});

xhr.send();
		
