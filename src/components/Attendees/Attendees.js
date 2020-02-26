import React from 'react';
import './Attendees.css';
import image from './harishan.jpg';
import image1 from './stefan.jpg';
import image2 from './swapnil.jpg';

const Attendees = () => {
    return (
        <div className='attendees-container'>
            <h1>Attendees</h1>
            <section className='attendees'>
                <div className='image-cropper'>
                    <img className='circular' src={image} alt='img'></img>
                </div>
                <div className='image-cropper'>
                    <img className='circular' src={image1} alt='img'></img>
                </div>
                <div className='image-cropper'>
                    <img className='circular' src={image2} alt='img'></img>
                </div>
                <div className='image-cropper'>
                    <img className='circular' src={image} alt='img'></img>
                </div>
                <div className='image-cropper'>
                    <img className='circular' src={image1} alt='img'></img>
                </div>
                <div className='image-cropper'>
                    <img className='circular' src={image2} alt='img'></img>
                </div>      

                <div className='image-cropper'>
                    <img className='circular' src={image} alt='img'></img>
                </div>
                <div className='image-cropper'>
                    <img className='circular' src={image1} alt='img'></img>
                </div>
                <div className='image-cropper'>
                    <img className='circular' src={image2} alt='img'></img>
                </div>
                <div className='image-cropper'>
                    <img className='circular' src={image} alt='img'></img>
                </div>
                <div className='image-cropper'>
                    <img className='circular' src={image1} alt='img'></img>
                </div>
                <div className='image-cropper'>
                    <img className='circular' src={image2} alt='img'></img>
                </div>              
            </section>
        </div>
    )
}

export default Attendees;