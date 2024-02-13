'use strict';

const $moviesContainer = $('#movie-rating-container');
const $title = $('#title');
const $rating = $('#rating');
const $submit = $('#submit-button');

$submit.on('click', function(evt) {
  evt.preventDefault();
  addMovie();
});

$moviesContainer.on('click', ".remove-button", function(evt) {
  evt.preventDefault();
  // if(evt.target.hasClass("remove-button")) {
  //   evt.target.parent().remove();
  // }
});

function addMovie() {
  const $movie = $('<div>', { class: 'movie' });
  $moviesContainer.append($movie);
  $movie
    .append($title.val(), $rating.val())
    .append($('<button>', {class: 'remove-button', text: 'Remove'}));
}

