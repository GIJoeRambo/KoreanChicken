import React, { Fragment, useEffect, useState } from 'react';
import $ from 'jquery';
import 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './Homepage.scss';
import MenuIcon from '../assets/menu-icon.png';
import carousel01 from '../assets/0001.jpg';
import carousel02 from '../assets/0002.jpg';
import carousel03 from '../assets/0003.jpg';
import carousel04 from '../assets/0004.jpg';
import Navbar from '../Navbar/Navbar';

function Homepage(props){
    const [navState, setNavBar] =  useState(true);

    //set window's height and width to fit the feature
    const setWindows = () => {
        $('.home').css({"height":props.height - 40,"width":props.width - 40});
        $('.home-placeholer').css({"height":props.height - 40,"width":props.width - 40});
    }

    const slideCarouselPage = (direction) => {
        if(direction === 'left'){
            $('.carousel').carousel('prev');
        }
        else if(direction === 'right'){
            $('.carousel').carousel('next');
        }
    }

    const showMenu = () => {
        setNavBar(true);
    }

    setWindows();

    return(
        <Fragment>
            {
                navState ?
                <Navbar
                    height={props.height}
                    width={props.width}
                >

                </Navbar>
                :
                <div className='home'>
                    <div className='home-menu'>
                        <img 
                            src= {MenuIcon}
                            onClick={() => {
                                showMenu();
                            }}
                        >
                        </img>
                    </div>

                    <div className='row home-placeholer'>
                        <div 
                            className='home-placeholder-left col-6'
                            onClick={() => {
                                slideCarouselPage('left');
                            }}
                        >
                        </div>
                        <div 
                            className='home-placeholder-right col-6'
                            onClick={() => {
                                slideCarouselPage('right');
                            }}
                        >    
                        </div>
                    </div>

                    <div className='home-carousel'>
                        <div id="carouselExampleSlidesOnly" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={carousel01} className="d-block w-100" alt=''>
                                    </img>
                                </div>
                                <div className="carousel-item">
                                    <img src={carousel02} className="d-block w-100" alt=''>
                                    </img>
                                </div>
                                <div className="carousel-item">
                                    <img src={carousel03} className="d-block w-100" alt=''>
                                    </img>
                                </div>
                                <div className="carousel-item">
                                    <img src={carousel04} className="d-block w-100" alt=''>
                                    </img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
    
}

export default Homepage;