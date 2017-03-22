var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('ninjaController', ['$scope', function($scope){
  $scope.ninjas = [
    {
      name: 'Andrew',
      belt: 'orange',
      rate: 145.67,
      thumb: 'http://i.telegraph.co.uk/multimedia/archive/03519/potd-squirrel_3519920k.jpg',
      available: true
    },
    {
      name: 'David',
      belt: 'blue',
      rate: 123.12,
      thumb: 'http://i.telegraph.co.uk/multimedia/archive/03519/potd-bat_3519917k.jpg',
      available: true
    },
    {
      name: 'Paul',
      belt: 'red',
      rate: 454.32,
      thumb: 'http://i.telegraph.co.uk/multimedia/archive/03519/potd-sunfish_3519926k.jpg',
      available: true
    },
    {
      name: 'Eric',
      belt: 'purple',
      rate: 423.76,
      thumb: 'http://i.telegraph.co.uk/multimedia/archive/03519/potd-malham-cove-2_3519750k.jpg',
      available: true
    }
  ]
}]);
