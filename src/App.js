import React, { Fragment, useEffect, useState, Component, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Homepage from './Homepage/Homepage';

function App() {
  const [windowHeight, setHeight] = useState(0);
  const [windowWidth, setWidth] = useState(0);

  //component did mount hook
  useEffect(() => {
    //init browser's height and width
    const getWindowData = () => {
      let width = $('body').width() ;
      let height = $('body').height();
      setHeight(height);
      setWidth(width);
    }

    //get browser's height and width while resizing
    $(window).resize(() => {
      let width = $('body').width();
      let height = $('body').height();
      setHeight(height);
      setWidth(width);
    })

    getWindowData();
  })

 
  return (
    <Fragment>
      <div className='main'>
          <Homepage
            height = {windowHeight}
            width = {windowWidth}
          >
          </Homepage>
      </div>
    </Fragment>
  );
  
}

export default App;
