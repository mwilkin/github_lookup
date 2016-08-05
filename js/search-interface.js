
var SearchGit = require('./../js/search.js').searchgitModule;

$(document).ready(function(){
  var currentSearch = new SearchGit();
  $('#userNameSubmit').click(function() {
    var userNameFind = $('#userName').val();
    $('#UserName').text("");
    $('#showUserName').empty();
    $('#showActualName').empty();
    $('#showUserLocation').empty();
    $('#showRepoNumber').empty();
    $('#showRepoList').empty();
    $('#showRepoImg').empty();
    $('#showFollowers').empty();
    $('#showFollowing').empty();

    currentSearch.getUserInfo(userNameFind);
  });
});
