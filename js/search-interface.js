
var SearchGit = require('./../js/search.js').searchgitModule;

$(document).ready(function(){
  var currentSearch = new SearchGit();
  $('#userNameSubmit').click(function() {
    var userNameFind = $('#userName').val();
    $('#UserName').text("");
    currentSearch.getUserInfo(userNameFind);
  });
});
