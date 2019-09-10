import React from 'react';
import Wrapper from '../Wrapper'
import './index.css'


function Extras() {
    return <Wrapper>
        <div className='row' id='extra-one'>
            <div className='col-md-2 text-center' id='ad-space-one'><h2>Ad space</h2></div>
            <div className='col-md-8 text-center' id='home-content-one'>
                <h3>This is the extras page</h3>
                <p>Extra is just short for extraneous, prove me wrong.</p>
            </div>
            <div className='col-md-2 text-center' id='ad-space-two'><h4>Ad-Space</h4></div>
        </div>
        <div className='row' id='extra-two'>
            <div className='col-md-2 text-center' id='ad-space-three'>ad space</div>
            <div className='col-md-8 text-center' id='home-content-two'>
                <h3>Extras Content</h3>
                <p>WEEEEEEE</p>
            </div>
            <div className='col-md-2 text-center' id='ad-space-four'><h1>ad space</h1></div>
        </div>
        <div className='row' id='extra-three'>
            <div className='col-lg-12 text-center'><h1>This is going to be just a little bit extra!!!!!!!!!!!!!!</h1></div>
        </div>
    </Wrapper>
}

export default Extras; 