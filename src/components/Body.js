import React from 'react';
import './Body.css';
import DogBreed from './OptionComponents/DogBreed';

const Body = (args) => {
    return (
        <div>
            <div className='bg-dark margin-top'>
                <h1 className='fw-bold text-white p-3'>Thunderpaws</h1>
                <h5 className='text-white'>Basically a Dog essential. Explore everything about four legged angel.</h5>
            </div>
            <div className='col-md-12'>
                <div className='row ms-1 me-1'>
                    <DogBreed />
                </div>
            </div>
        </div>

        );
}

export default Body;