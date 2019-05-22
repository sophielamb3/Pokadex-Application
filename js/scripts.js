// This array will become the repository of Pokémon to display in your application
var pokemonRepository = (function () {
  var repository = [
      {
          name: 'Bulbasaur',
          height: 2.4,
          types: ['grass', 'poison']
      },
      {
          name: 'Charizard',
          height: 5.7,
          types: ['fire', 'flying']
      },
      {
          name: 'Butterfree',
          height: 3.7,
          types: ['bug', 'flying']
      },
    ];

  function add(pokemon){
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

var allPokemons = pokemonRepository.getAll()
console.log(allPokemons)
allPokemons.forEach(function (pokemon) {
  return (document.write(pokemon.name + ': ' + '<br>' + pokemon.height + '<br>' + pokemon.types + '<br>'))
})

// NOTE code below wouldn't work before as i was trying to define a local variable rather than global!!! //

//Object.keys(repository).forEach(function(property) {
//  document.write(repository[property].name + ': ' + '<br>' + repository[property].height + '<br>' + repository[property].types + '<br>');
//});

// var pokemons = pokemonRepository.getAll()
//Object.keys(pokemons).forEach(function(property) {
  //document.write(pokemons[property].name + ': ' + '<br>' + pokemons[property].height + '<br>' + pokemons[property].types + '<br>');
// }());
