'use strict';

const $moviesContainer = $('#movie-rating-container');
const $title = $('#title');
const $rating = $('#rating');
const $submit = $('#submit-button');

$($submit).on('click', addMovie($title, $rating));

$moviesContainer.on('click', '.remove-button', () => {

})

function addMovie(title, rating) {
  const $movie = $('<div>', { class: 'movie' });
  $moviesContainer.append($movie);
  $movie
    .append(title.val(), rating.val())
    .append($('<button>', {class: 'remove-button', text: 'Remove'}));
}

