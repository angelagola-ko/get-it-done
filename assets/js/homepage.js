//var getUserRepos= function(){
 //   console.log("function was called");
//};

var getUserRepos = function(user) {
    //format the github api url.

    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    //make a request to get url

    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    });
    //fetch("https://api.github.com/users/octocat/repos").then(function(response) {
     //   response.json().then(function(data) {

    // //       console.log(data);
     //   });
    //});
console.log("outside");
};

var response = fetch("https://api.github.com/users/facebook/repos");
console.log(response);
getUserRepos();