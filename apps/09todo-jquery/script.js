'use strict';

$(document).ready(function() {
    // App logic goes here
    //Inside your callback prevent the default event from occuring when you submit.
    //Then within the $(this) context, .find() the value of #todo and assign it to a variable called todoText.
    $('form').submit(function(event) {
        event.preventDefault();
        var todoText = $(this).find('#todo').val();
        $('#todo-list').append('<li><input type="checkbox">' + todoText + '</li>').sortable();
        todoText = $(this).find('#todo').val(" ");
    });

    $('body').on('click', 'button', function(){
      $(this).parent().remove();
    });
});
