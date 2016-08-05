var apiKey = require('./../.env').apiKey;

function SearchGit() {
}

SearchGit.prototype.getUserInfo = function(userName) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
  $('#showUserName').append("Github username: " + response.login + "<br>" + "<h4>");
  $('#showRepoNumber').append("Number of public repositories: " + response.public_repos);
});
  $.get('https://api.github.com/users/' + userName + '/repos?&per_page=500&access_token=' + apiKey).then(function(response){
    for (var i = 0; i<response.length; i++) {
      $('#showRepoList').append("<li>" + response[i].name + " : " + response[i].description + "</li>");
    }
    // attempt to list all entries instead of just 30
    // response.forEach(function(repo) {
    //   $('#showRepoList').append("<li>" + response[i].name + " : " + response[i].description + "</li>");
    // });

console.log(response.watchers_count);
  }).fail(function(error){
  $('#showUserName').text(error.responseJSON.message);
  });
};

exports.searchgitModule = SearchGit;
