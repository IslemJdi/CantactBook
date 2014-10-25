// Definition of filter
angular.module('Myapp').filter('Age',function(){
    // the function implemented for the filter
    return function(birthdate){
        //search in the birthdate object for T then we will use substring to take only the date
        var n=birthdate.search('T')
        var birth= birthdate.substring(0,n)
        var year=Number(birth.substring(0,4))
        var d = new Date();
        var n = d.getFullYear();
        //age calcul
        var ages=n-year
        return  ages+' ('+birth+')';
    }

});




