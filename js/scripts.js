// This array will become the repository of Pokémon to display in your application
var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  function add(item){
    repository.push(item);
  }

  function getAll() {
    return repository;
  }

  function addListItem(pokemonObject){
    var $newListItem = document.createElement('li');
    var $newButton = document.createElement('button');
    var $div = document.querySelector('div');

    $newListItem.setAttribute('class','grid');
    $newButton.setAttribute('class', 'button');
    $div.appendChild($newListItem);
    $div.appendChild($newButton);
    $newButton.innerText = pokemonObject.name;
    $newButton.addEventListener ('click',
      function (event) {
        console.log(event.target.innerText);
    });

  }

  function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function (response) {
    console.log(item);   });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();


pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

//var allPokemons = pokemonRepository.getAll()
//console.log(allPokemons)
//allPokemons.forEach(function (pokemon) {
//  return (pokemonRepository.addListItem(pokemon)
// )})

// NOTE code below wouldn't work before as i was trying to define a local variable rather than global!!! //

//Object.keys(repository).forEach(function(property) {
//  document.write(repository[property].name + ': ' + '<br>' + repository[property].height + '<br>' + repository[property].types + '<br>');
//});

// var pokemons = pokemonRepository.getAll()
//Object.keys(pokemons).forEach(function(property) {
  //document.write(pokemons[property].name + ': ' + '<br>' + pokemons[property].height + '<br>' + pokemons[property].types + '<br>');
// }());
