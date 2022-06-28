import React, {useState} from 'react';
import $ from 'jquery';

var scroll = function() {
  // $('#answer-letter')[0].scrollIntoView();
  $('.sc-AjmGg bJxUpT')[0].scrollIntoView();

  //
};

const ReadReviewsLink = (props)=> {
  console.log('hasreviews', props.hasReviews);
  return (
    <a
      onClick={scroll}
      id='read-reviews'
      href="#answer-letter"
      style={props.hasReviews ? {display: 'block'} : {display: 'none'}}>Read all Reviews</a>
  );
};

export default ReadReviewsLink;