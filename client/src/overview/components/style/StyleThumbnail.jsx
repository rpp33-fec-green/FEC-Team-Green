import React, {useState} from 'react';
import StyleList from './StyleList.jsx';

//this is the button container for specific image
const StyleThumbnail = (props) => {

  //props
  //StyleThumbnail img;
  //setSelectedImageUrl
  //setSelectedThumbnailUrl
  var onClick = () => {
    console.log('clicked');
    props.setSelectedStyle(props.style);
  };

  return (
    <li>
      <img className ='style-thumbnail' src={props.style.photos[0].thumbnail_url} onClick={onClick}>
      </img>
    </li>

  );
};

export default StyleThumbnail;

//displays thespecific thumbnail image
// if clicked with change the selected image
// the selcted style will also have a checkmark on it
//

/*
test if clicking this changes selected thumbnail
test if when this button is clicked, if the selected thumbnail is changed'
test if class is thumbnail
test if image url does not work
Test if image is clicked if checkmark is added.


*/