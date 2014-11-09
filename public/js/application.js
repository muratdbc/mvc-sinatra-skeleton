$(document).ready(function() {
  $('#signup').click(function(event) {
    event.preventDefault();
    $("#signup-form").toggle();
    $("#login-form").hide();
  });

  $('#login').click(function(event) {
    event.preventDefault();
    $("#login-form").toggle();
    $("#signup-form").hide();
  });

  $('.cancel-btn').click(function(e) {
    e.preventDefault();
    $(e.target).closest('form').toggle();
  });
});
