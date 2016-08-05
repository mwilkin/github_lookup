var apiKey = require('./../.env').apiKey;

function SearchGit() {
}

SearchGit.prototype.getUserInfo = function(userName) {
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    // $('#showUserName').show();

    for (var i = 0; i<response.length; i++) {
      $('#showRepoList').append("<li>" + response[i].name + " : " + response[i].description + "</li>");
    }

  }).fail(function(error){
  $('#showUserName').text(error.responseJSON.message);
  });
};

exports.searchgitModule = SearchGit;
