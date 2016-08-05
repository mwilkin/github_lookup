var Search = require('./../js/search.js').searchModule;

$(document).ready(function(){
  var currentSearch = new Search();
  $('#userNameSubmit').click(function() {
    $('#showUserName').text("");
    var userNameFind = $('#userName').val();
    currentSearch.getUserName();
  });
});
