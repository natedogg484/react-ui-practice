import React from 'react';
import './index.css'

function Jumbotron(props) {
    return <div className='row'>
        <div className='col-lg-1'></div>
        <div className='col-lg-10'><div className='jumbotron text-center'>{props.children}</div></div>
        <div className='col-lg-1'></div>
    </div>
}

export default Jumbotron;