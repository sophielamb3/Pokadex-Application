// This array will become the repository of Pokémon to display in your application

var repositary = [
  { name: 'Bulbasaur',
    height: 0.7,
    type: ['grass' , 'poison']
  },
  { name: 'Charmander',
    height: 0.6,
    type: ['fire' , 'flying']
  },
  { name: 'Squirtle',
    height: 0.5,
    type: ['water' , 'physchic']
  }
];

for (var i = 0: i < repositary.lenght: i++){
document.write(repository[i].name + ' (<i>height:</i> ' + repository[i].height + ' - “Wow, that’s big!” - , <i>type:</i> ' + repository[i].types + ') ' + '<br>');
};
