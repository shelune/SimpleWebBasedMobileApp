'use strict';

/**
 * @ngdoc function
 * @name experimentalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the experimentalApp
 */
angular.module('myTodoApp')
  .controller('PokemonCtrl', ['$http', function ($http) {
  	var pokemon = this;

    pokemon.name, pokemon.number, pokemon.sprite,
    pokemon.data = {};

    pokemon.findPokemon = function (number) {
    	$http.get('http://pokeapi.co/api/v1/pokemon/' + number)
	    	.then(function successCallback(data) {	
	    		//this.catch_rate = data.catch_rate;
	    		pokemon.data = data.data;
	    		pokemon.number = pokemon.data.pkdx_id;
	    		pokemon.name = pokemon.data.name;
	    		pokemon.abilities = [];
	    		for (var i = 0; i < pokemon.data.abilities.length; i += 1) {
	    			pokemon.abilities.push(pokemon.data.abilities[i].name);
	    		}
	    		pokemon.sprite = "http://pokeapi.co/media/img/" + pokemon.number + ".png";
	    		console.log(pokemon.abilities);
	    	}, function errorCallback(response) {
	    		console.log("error" + response);
	    	});
    };
  }]);