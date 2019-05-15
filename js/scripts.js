// This array will become the repository of Pokémon to display in your application

var repositary = [
  { name: 'Bulbasaur',
    height: 2.4,
    type: ['grass' , 'poison']
  },
  { name: 'Charmander',
    height: 5.7,
    type: ['fire' , 'flying']
  },
  { name: 'Squirtle',
    height: 3.7,
    type: ['water' , 'physchic']
  },
];

for (var i = 0; i < repositary.length; i++){
    document.write(repository[i].name + '\'s height is: ' + repository[i].height + ' feet. Wow thats big..');
};
