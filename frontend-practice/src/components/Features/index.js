import React from 'react';
import Wrapper from '../Wrapper'
import './index.css'


function Features() {
    return <Wrapper>
        <div className='row' id='home-one'>
            <div className='col-md-2 text-center' id='ad-space-one'><h2>Ad space</h2></div>
            <div className='col-md-8 text-center' id='home-content-one'>
                <h3>features PAGE.</h3>
                <p>this is the tale of captain jack sparrowwwww......</p>
                </div>
            <div className='col-md-2 text-center' id='ad-space-two'><h4>Ad-Space</h4></div>
        </div>
        <div className='row' id='home-two'>
            <div className='col-md-2 text-center' id='ad-space-three'>ad space</div>
            <div className='col-md-8 text-center' id='home-content-two'>
                <h3>Homepage content</h3>
                <p>WEEEEEEE</p>
            </div>
            <div className='col-md-2 text-center' id='ad-space-four'><h1>ad space</h1></div>
        </div>
    </Wrapper>
}

export default Features; 