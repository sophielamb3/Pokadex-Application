// This array will become the repository of Pokémon to display in your application

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

//for (var i = 0; i < repository.length; i++){
//  if (repository[i].height > 4){
//    document.write(repository[i].name + '\'s height is: ' + repository[i].height + ' feet.'  + "WOW! Thats big!" + '<br>' + "My powers are:" + repository[i].types + '<br>');
//  } else {
//    document.write(repository[i].name + '\'s height is: ' + repository[i].height + ' feet.' + '<br>'  + "My powers are:" + repository[i].types + '<br>');
//  }
// }


Object.keys(repository).forEach(function(property) {
  document.write(repository[property].name + ': ' + '<br>' + repository[property].height + '<br>' + repository[property].types + '<br>');
});
