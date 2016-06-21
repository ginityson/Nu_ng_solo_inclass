console.log('here we go again script.js sourced');

var myApp = angular.module( "myApp", [] );

myApp.controller( "chezTablesController", [ "$scope", function( $scope ){

  $scope.allTables = [];

  $scope.capacity = [
    {capacity: 'two'},
    {capacity: 'four'},
    {capacity: 'six'},
    {capacity: 'eight'}
  ];
  $scope.createTable = function(){
      $scope.newTable = {
        name: $scope.tableNameBinder,
        capacity: $scope.capacityIn
      };
      $scope.allTables.push( $scope.newTable );
      console.log($scope.newTable);
      console.log('all tables: ' + $scope.allTables);

      var outputText = '';
      for(var i=0; i<$scope.allTables.length; i++){
        console.log($scope.allTables);
        outputText +=  $scope.allTables[i].name + $scope.allTables[i].capacityIn;

      }

  };
}]);//end of controller
