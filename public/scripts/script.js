console.log('here we go again script.js sourced');

var myApp = angular.module( "myApp", [] );

myApp.controller( "testController", [ "$scope", function( $scope ){
  $scope.allInput = [];
  $scope.getTestInput = function(){
    console.log( 'input captured: ' + $scope.testBinder );
      $scope.allInput.push( $scope.testBinder );
      console.log('all input: ' + $scope.allInput);
  };
}]);//end of controller
