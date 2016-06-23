console.log('here we go again script.js sourced');

var myApp = angular.module( "myApp", [] );


//here is my controller
myApp.controller( "testController", [ "$scope", "$http", function( $scope, $http ){

// makeing an array
$scope.allInput = [];
   $scope.getTestInput = function(){
     $scope.allInput.push( $scope.testBinder );
      console.log('all input: ' + $scope.allInput);
     $scope.allInput.push( $scope.testBinder );
     };

  // making an object
$scope.getTestInput = function(){
    $scope.newObject={
      input1: $scope.testBinder,
      input2: $scope.testBinder2
    };
    $scope.allInput.push( $scope.newObject );
      console.log( 'inputs captured: ' + $scope.allInput.length );

      var outputText ='';
      for( var i=0; i<$scope.allInput.length; i++ ){
        outputText += $scope.allInput[i].input1 + ' ' + $scope.allInput[i].input2;
        console.log( 'input ' + i + ': ' + outputText );
      }//end of loop
        $scope.testBinder = " ";//clears input from in box
        $scope.testBinder2 = " ";//clears input2 from in box

        $http({
            method : "GET",
            url : "/getSomething"
          }).then( function mySuccess( response ) {
            console.log( 'ladybug ' + response.data ) ;
          }, function myError( response ) {
              console.log( response.statusText ) ;
          });

        var objectToSend = {
          testField: "thingamabob"
        };
          $http({
            method : "POST",
            url : "/postSomething",
            data : objectToSend,
            }).then( function mySuccess( response ) {
              console.log( 'tiny mouse ' + response.data ) ;
            }, function myError( response ) {
                console.log( response.statusText ) ;
          });
    };//end of getTestInput
  }]);//end of controller
