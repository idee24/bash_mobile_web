import React from 'react';
import './Features.css';

const Features = () => {
    return(
        <div>
            <div className="grid-row">

                <div className='grid-item'>
                <div className='grid-item-container'>
                    <div className='grid-image'>
                        <i className='fa fa-globe fa-3x' ></i>
                    </div>
                    <div className='grid-item-content'>
                        <span className='item-title'> Public</span>
                    </div>
                </div>
                </div>

                <div className='grid-item'>
                <div className='grid-item-container'>
                    <div className='grid-image'>
                    <i className='fa fa-users fa-3x' ></i>
                        
                    </div>
                    <div className='grid-item-content'>
                        <span className='item-title'> Public</span>
                    </div>
                </div>
                </div>


            </div>
        </div>
    )
}
export default Features;