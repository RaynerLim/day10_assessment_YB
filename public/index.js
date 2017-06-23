//Create an IIFE
(function(){

     //Create an angular app/module
    var RegApp = angular.module("RegApp", []);

    //Create a function constructor to be used as our controller
    var RegCon = function($http){
        var regCon = this;
        regCon.email = "";
        regCon.password = "";
        regCon.name ="";
        regCon.gender ="";
        regCon.dob = "";
        regCon.address = "";
        regCon.country = "";
        regCon.contact = ""; 

        regCon.submit = function(){
            $http.get("/registration", {
                params: {
                    email: regCon.email,
                    password: regCon.password,
                    name: regCon.name,
                    gender: regCon.gender,
                    dob: regCon.dob,
                    address: regCon.address,
                    country: regCon.country,
                    contact: regCon.contact, 
                }
            }).then(function(result){
                regCon.message = "Registration Successful";
                console.log(params[0] + params[1] + params[2] + params[3] + params[4] + params[5] + params[6]);
            }).catch(function() {
                regCon.message = "Registration failed Please check form"
            })
        }
    };

    //Define the properties to be injected into RegCon
    RegCon.$inject = ["$http"];

    //Register function constructor as controller
    RegApp.controller("RegCon", RegCon);

})();