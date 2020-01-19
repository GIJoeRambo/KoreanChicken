import React, { Fragment, useEffect } from 'react';
import $ from 'jquery';
import './Navbar.scss'

function Navbar(props) {

    const setWindows = () => {
        $('.navbar').css({"height":props.height - 40,"width":props.width - 40});
    }

    setWindows();

    return(
        <Fragment>
            <div className='navbar'>
                <div className='row'>
                    <div className='col-3'>
a
                    </div>
                    <div className='col-3'>
a
                    </div>
                    <div className='col-3'>
a
                    </div>
                    <div className='col-3'>
a
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar;