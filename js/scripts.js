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
        showDetails(pokemonObject.detailsUrl)
        //console.log(event.target.innerText);
    });

  }

  function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function (res) {
      showModal(res)
        success
    }).catch(function(err){
      console.log(err)
    })
  }

  function loadList() {
    return fetch(apiUrl, {
      method: 'GET'
    })
      .then(function (response) {
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
    console.log(item)
    var url = item;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      let detail = {}
      detail.name = details.name;
      detail.height = details.height;
      detail.types = Object.keys(details.types);
      detail.imageUrl = details.sprites.front_default;


      return detail
    }).catch(function (e) {
      console.error(e);
    });
  }


    function showModal(item){
      var $modalContainer = document.querySelector('#modal-container');

      $modalContainer.innerHTML= '';

      var modal = document.createElement('div');
      modal.classList.add('modal');

      var closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);

      var nameElement = document.createElement('h1');
      nameElement.innerText = 'My name is ' + item.name;

      var imageElement = document.createElement('img');
      imageElement.classList.add('modal-img');
      imageElement.setAttribute("src", item.imageUrl);

      var heightElement = document.createElement('p');
      heightElement.innerText = 'Height: ' + item.height;

      var typesElement = document.createElement('p');
      typesElement.innerText = 'Types: ' + item.types;

      modal.appendChild(closeButtonElement);
      modal.appendChild(nameElement);
      modal.appendChild(heightElement);
      modal.appendChild(typesElement);
      modal.appendChild(imageElement);
      $modalContainer.appendChild(modal);
      $modalContainer.classList.add('is-visible');
    }

    function hideModal(){
      var $modalContainer = document.querySelector('#modal-container');
      $modalContainer.classList.remove('is-visible');
    }


    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')){
        hideModal();
      }
    });

  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.addEventListener('click', (e) => {
    var target = e.target;
    if(target === $modalContainer){
      hideModal();
    }
  });


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal
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
