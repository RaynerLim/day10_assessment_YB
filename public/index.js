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
        regCon.message = "";
         
        regCon.submit = function(vf){

            var p = $http.get("/registration", {
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
            })

            //var currentTime = new Date();
            //console.log(currentTime.getFullYear());
            //console.log(regCon.dob.getDate());
            //console.log(regCon.dob.getMonth());
            //console.log(regCon.dob.getFullYear());

            if(vf){
                
                //Check password with regex
                var a = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(regCon.password);
                //console.log(a);

                //Check age
                var currentTime = new Date();
                var curYear = currentTime.getFullYear();
                var curMonth = currentTime.getMonth() + 1;
                var curDay = currentTime.getDate();
                console.log(curYear + " " + curMonth + " " + curDay);
                var day = regCon.dob.getDate();
                var month = regCon.dob.getMonth() + 1;
                var year = regCon.dob.getFullYear();
                console.log(year + " " + month + " " + day);
                age = curYear - year;
                if(curMonth < month){
                    age--;
                }
                if((month == curMonth) && (curDay < day)){
                    age--;
                }
                
                //Check Phone number
                var ph = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(regCon.contact);

                //return message and do prcess accordingly
                if(a == true && age >= 18 && ph == true){
                    console.log("hi");
                    p.then(function(result) {
                        regCon.message = "Registration Completed";
                    })
                }else{
                    p.then(function() {
                        console.log("hi2");
                        regCon.message = "Registration Failed";
                    })
                }
            }
        }
    };

    //Define the properties to be injected into RegCon
    RegCon.$inject = ["$http"];

    //Register function constructor as controller
    RegApp.controller("RegCon", RegCon);

})();