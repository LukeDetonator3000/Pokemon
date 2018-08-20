
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.pokemontcg.io/v1/cards');
		
xhr.addEventListener("load", function(){
	var response = xhr.responseText;
	arrayDePokemons = JSON.parse(response).cards;

	let $containerCartas = document.getElementById('container')
	
	for(let i=0; i<arrayDePokemons.length; i++){
		var imagemEl = document.createElement('img');
		var 



		var tituloEl = document.createElement('h1');
		var nomeDaCarta = document.createTextNode(arrayDePokemons[i].name);
		 tituloDaCarta.appendChild(nomeDaCarta);
		 $containerCartas.appendChild(tituloDaCarta);

	}
	
});

xhr.send();
		
