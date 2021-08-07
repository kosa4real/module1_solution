(function (){
  'use strict';
  var app = angular.module("myApp", []);

  app.controller("mySplitController",mySplitController);
  mySplitController.$inject = ['$scope'];

  function mySplitController($scope){
    $scope.food ="";
    $scope.msg = "";

    
    $scope.displayMessage = function(){
      var myStrLength = checkLength();
      if(myStrLength == 0){
        $scope.msg = "Please enter data first";
      }else if(myStrLength >=1  && myStrLength <=3){
        $scope.msg = "Enjoy!"
      }else{
        $scope.msg="Too much!!!"
      }
    }
    
    function checkLength() {
      var strLength = splitString();
      strLength = strLength.length;
      return strLength;
    }

    function splitString (){
      let myString = $scope.food;
      let splits = !myString ? [] : myString.split(',');
      return splits;

    }

  }

})();