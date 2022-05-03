//var getUserRepos= function(){
 //   console.log("function was called");
//};

var repoContainerE1 = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");

var getUserRepos = function(user) {
    //format the github api url.

    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    //make a request to get url

    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            displayRepos(data,user);
            //console.log(data);
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

var userFormE1 = document.querySelector("#user-form");
var nameInputE1 = document.querySelector("#username");

var formSubmitHandler = function(event) {
    event.preventDefault();
    //get value from input element
    var username = nameInputE1.value.trim();
    if (username) {
        getUserRepos(username);
        nameInputE1.value="";
    } else {
        alert("Please enter a GitHub username");
    }
    console.log(event);
};

var displayRepos = function(repos, searchTerm) {
    //clear old content
    repoContainerE1.textContent="";
    repoSearchTerm.textContent = searchTerm;
    console.log(repos);
    console.log(searchTerm);

    //loop over repos
    for (var i=0; i<repos.length; i++) {
        //format repo name
        var repoName = repos[i].owner.login + "/" + repos[i].name;

        //create a container for each repo
        var repoE1 = document.createElement("div");
        repoE1.classList = "list-item flex-row justify-space-between align-center";

        //create a span element to hold reposity name
        var titleE1 = document.createElement("span");
        titleE1.textContent = repoName;

        //append to container
        repoE1.appendChild(titleE1);
        //create a status element
        var statusE1 = document.createElement("span");
        statusE1.classList = "flex-row align-center";

        //check if current repo has issues or not
        if (repos[i].open_issues_count > 0) {
            statusE1.innerHTML = "<i class = 'fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + "issue(s)";
        } else {
            statusE1.innerHTML = "<i class = 'fas fa-check-square status-icon icon-success'></i>";
        }

        //append to container
        repoE1.appendChild(statusE1);

        // append container to the dom
        repoContainerE1.appendChild(repoE1);
    }

}
//getUserRepos();
userFormE1.addEventListener("submit", formSubmitHandler);