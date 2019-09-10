import React from 'react';
import Wrapper from '../Wrapper'
import './index.css'


function Home() {
    return <Wrapper>
        <div className='row' id='home-one'>
            <div className='col-md-4 text-center'><h2>I don't want to go to drill this weekend.</h2></div>
            <div className='col-md-4 text-center'><h3>This is going to be the homepage content.</h3></div>
            <div className='col-md-4 text-right'><h4>Arabic orientation</h4></div>
        </div>
        <div className='row' id='home-two'>
            <div className='col-md-2'><h5>1</h5></div>
            <div className='col-md-8 text-center'><h3>2</h3></div>
            <div className='col-md-2 text-right'><h1>3</h1></div>
        </div>
    </Wrapper>
}

export default Home; 