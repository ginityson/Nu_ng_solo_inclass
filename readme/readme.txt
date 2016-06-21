Angular INTRO (part2)
2
----------------------------
3
​
4
set up a new project with
5
server/app,js
6
views/index.html
7
public/scripts/script.js
8
public/vendors/angular.min.js (download it)
9
​
10
npm init
11
npm install express --save
12
​
13
add "start" to package.json
14
​
15
add server spin up to app.js
16
add app.use for 'public' as static folder to app.js
17
add a get route to "/" that responds 'views/index.html'
18
​
19
src in script.js and angular.min.js
20
​
21
test and make sure everything is running and sourced
22
​
23
--------------------------
24
// simple 2-way bind example
25
​
26
in index.html add a text input:
27
  <input type="text" ng-model="testBinder" value="" placeholder='2-way bind input'>
28
​
29
also, add a line below that will test the 2-way bind:
30
  <p>2-way data bind output: {{ testBinder }}</p>
31
​
32
edit <html> tag:
33
  <html ng-app>
34
​
35
run and test 2-way bind
36
---------------------------
37
// in script.js:
38
add myApp
39
  var myApp = angular.module( "myApp", [] );
40
​
41
// add a controller
42
myApp.controller( "testController", [ "$scope", function( $scope ){
43
}]);
44
​
45
// in index.html
46
update the "ng-app" from the html tag
47
  <html ng-app="myApp">
48
​
49
add a div with an ng-controller tag and place the example 2-way bind within it:
50
  <div ng-controller="testController">
51
    <input type="text" ng-model="testBinder" value="" placeholder='2-way bind input'>
52
    <p>2-way data bind output: {{ testBinder }}</p>
53
  </div>
54
​
55
run and test. You should see no changes in behavior, but we've set up a scope here
56
​
57
---------------------------
58
let's get a value from the input box and do a click event
59
​
60
// in index.html
61
// add a button within the div with an ng-click event
62
  <button ng-click="getTestInput()">Get Input</button>
63
​
64
// in script.js
65
// add a function within the controller
66
  myApp.controller( "testController", [ "$scope", function( $scope ){
67
    $scope.getTestInput = function(){
68
      console.log( 'input captured: ' + $scope.testBinder );
69
    };
70
  }]);
71
​
72
test and make sure it works
73
​
74
----------------------------
75
// let's try an array
76
  $scope.getTestInput = function(){
77
    $scope.allInput.push( $scope.testBinder );
78
    console.log( 'inputs captured: ' + $scope.allInput.length );
79
    $scope.allInput.push( $scope.testBinder ); 
80
  };
81
​
82
----------------------------
83
// how about an object?
84
// in html, add a second input field
85
​
86
<input type="text" ng-model="testBinder2" value="" placeholder='2-way bind input'>
87
​
88
// in script.js
89
$scope.getTestInput = function(){
90
  $scope.newObject={
91
    input1: $scope.testBinder,
92
    input2: $scope.testBinder2
93
  };
94
  $scope.allInput.push( $scope.newObject );
95
  console.log( 'inputs captured: ' + $scope.allInput.length );
96
  console.log( 'all input: ' + $scope.allInput );
97
};
98
​
99
you'll just see an array of objects, let's update that to be more descriptive
100
  console.log( 'inputs captured: ' + $scope.allInput.length );
101
  var outputText ='';
102
  for( var i=0; i<$scope.allInput.length; i++ ){
103
    outputText += $scope.allInput[i].input1 + ' ' + $scope.allInput[i].input2;
104
    console.log( 'input' + i + ': ' + outputText );
105
  }
106
​
107
-------------------------------------
108
// append to dom
109
// this could blow your mind so prepare yourself...
110
// in index.html add this within the div, below the button
111
  <ul>
112
      <li ng-repeat="record in allInput">{{ record.input1 }} {{ record.input2 }}</li>
113
  </ul>
114
​
115
-----------------------------------
116
// how about a call to another url that returns data?
117
// set up a new route in app.js
118
app.get('/getSomething', function( req, res ){
119
  console.log( 'in getSomething' );
120
  res.send( 'sent from get' );
121
});
122
​
123
// in script.js, add this to the button click
124
​
125
  $http({
126
      method : "GET",
127
      url : "/getSomething"
128
  }).then( function mySuccess( response ) {
129
      console.log( response.data ) ;
130
  }, function myError( response ) {
131
      console.log( response.statusText ) ;
132
  });
133
​
134
----------------------------------------
135
/// how about a post where we send some data from the client?
136
// set up a new route in app.js
137
​
138
  app.post('/postSomething', urlencodedParser, function( req, res ){
139
    console.log( 'in postSomething: ' + req.body );
140
    res.send( 'sent from post' );
141
  });
142
​
143
// then add a post to the button click
144
​
145
  var objectToSend = {
146
    testField: "thingamabob"
147
  };
148
  $http({
149
      method : "POST",
150
      url : "/postSomething",
151
      data : objectToSend,
152
  }).then( function mySuccess( response ) {
153
      console.log( response.data ) ;
154
  }, function myError( response ) {
155
      console.log( response.statusText ) ;
156
  });
157
​
