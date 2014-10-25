//Module definition
var app=angular.module('Myapp',[])
//AngularJS: factory $http.get JSON file
app.factory('mainInfo', function($http) {

    return {
        getdata: function(callback) {
            // Recovering data from URL
            $http.get('https://script.google.com/macros/s/AKfycbzrnl4RsjevblKaA71SbqQxfL2_lYWezClDLDMZyX4yy2VlEOM_/exec').success(callback);

        }
    };
});


app.controller('myApp.Ctrl',function($scope,mainInfo,$filter){
    $scope.templatebook='loader.html';
    //------------------------------Retrieving Data--------------------------
    // the first page is loader.html then when data is already loaded list.htm will apprear
    mainInfo.getdata(function(results) {
       $scope.templatebook='list.html'
       $scope.data = results.values;
    });


   //---------------------------sort ----------------------------
    var orderBy = $filter('orderBy');
    $scope.order = function(predicate, reverse) {
        $scope.data= orderBy($scope.data, predicate, reverse);
    };
    $scope.order('name.v',false);
  //--------------------calculate date------------------------
    var _MS_PER_DAY = 1000 * 60 * 60 * 24;

        // a and b are javascript Date objects

    $scope.test=function(a){
        var b=new Date(a);
        var currentdate=new Date();
        var utc1 = Date.UTC(10, currentdate.getMonth(), currentdate.getDate());
        var utc2 = Date.UTC(10, b.getMonth(), b.getDate());
        var diff= Math.floor((utc2 - utc1) / _MS_PER_DAY) //Get difference between 2 dates
        // if the diffrence between the current date and the date of the birthday >30 and <16 warning
        if(diff>16&&diff<30){
        return {'warning':true}
            // if the diffrence between the current date and the date of the birthday >16 danger
        }else if(diff<30&&diff>0){
        return {'danger':true}
        }
    }
    //------------------telephone click alerte------------------------
     $scope.telephone=function(tel){
        alert("passer un telephone a "+tel)
    }




});