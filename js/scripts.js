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

for (var i = 0; i < repositary.length; i++){
    document.write(repository[i].name + '\'s height is: ' + repository[i].height + ' feet. Wow thats big..');
}
