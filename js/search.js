var apiKey = require('./../.env').apiKey;

function SearchGit() {
}

SearchGit.prototype.getUserInfo = function(userName) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
  $('#showActualName').append("Github Actual Name: " + response.name);
  $('#showUserName').append("Github username: " + response.login);
  $('#showUserLocation').append("Location: " + response.location);
  $('#showRepoNumber').append("Number of public repositories: " + response.public_repos);
   $('#showFollowers').append("Number of Followers: " + response.followers);
   $('#showFollowing').append("Number Following: " + response.following);
  $('#showRepoImg').append("<img src=" + response.avatar_url + '>' + '<hr>' + 'Repository Name : Description');
  // console.log(response.avatar_url);
});
  $.get('https://api.github.com/users/' + userName + '/repos?&per_page=500&access_token=' + apiKey).then(function(response){
    console.log(response);
    for (var i = 0; i<response.length; i++) {
      if (response[i].description !== null && response[i].description.length > 0) {
        $('#showRepoList').append("<li>" + response[i].name + " : " + response[i].description + "<br>" + "Created: " + moment(response[i].created_at).format("dddd, MMMM Do YYYY") + "<br>" + "Updated: " + moment(response[i].updated_at).format("dddd, MMMM Do YYYY") + "</li>");
      } else if (response[i].description === null || response[i].description.length === 0) {
        $('#showRepoList').append("<li>" + response[i].name + " : " + "No Description Given" + "<br>" + "Created: " + moment(response[i].created_at).format("dddd, MMMM Do YYYY") + "<br>" + "Updated: " + moment(response[i].updated_at).format("dddd, MMMM Do YYYY") + "</li>");
      } else {
        $('#showRepoList').append("<li>" + response[i].name + " : " + response[i].description + "<br>" + "Created: " + moment(response[i].created_at).format("dddd, MMMM Do YYYY") + "<br>" + "Updated: " + moment(response[i].updated_at).format("dddd, MMMM Do YYYY") + "</li>");
      }
    }
  }).fail(function(error){
  $('#showUserName').text(error.responseJSON.message);
  });
};

exports.searchgitModule = SearchGit;
