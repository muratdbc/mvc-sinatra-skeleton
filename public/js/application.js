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

  $('#login-form').submit(function(e) {
    e.preventDefault();
    $form = $(e.target);
    $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize(),
    })
    .done(function(response) {
      $form.toggle(400);
      $('header').replaceWith(response);
    });
  });

  $('#signup-form').submit(function(e) {
    e.preventDefault();
    $form = $(e.target);
    $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize(),
    })
    .done(function(response) {
      $form.toggle(400);
      $('header').replaceWith(response);
    });
  });
});
