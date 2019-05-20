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


Object.keys(repository).forEach(function(property) {
  document.write(repository[property].name + ': ' + '<br>' + repository[property].height + '<br>' + repository[property].types + '<br>');
});
