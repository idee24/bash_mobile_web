import React from "react";
import './Boxes.css';

const Boxes = () => {
  return (
    <div className='boxes-container'>
      <section className="boxes">
        <div className="box">
          {/* <i className="fa fa-lightbulb-o fa-4x main-icon"></i> */}
          <h3>Features</h3>
          <div className="features-box">
                <p className='date'>Games</p>
            </div>
          <div className="features-box">
              <p className='date'>Food</p>
          </div>
          <div className="features-box">
              <p className='date'>Karoke</p>
          </div>
          <i className="fa fa-globe icons fa-3x globe" aria-hidden="true"></i>
              <span className='spanner'> 
              <p className='i
              con-value'>Public Event</p>
                </span>
                <i className="fa fa-users fa-3x icons users" aria-hidden="true"></i>
                <span className='spanner-users'> 
                    <p>100</p>
                </span>
                <i className="fa fa-lightbulb-o fa-3x age"></i>
                <span className='spanner-age'> 
                    <p>18-25|26-35|36-45</p>
                </span>
          {/* </p> */}                   
        </div>


        {/* <div className="box">
          <i className="fa fa-address-card fa-4x"></i>
          <h3>Contact</h3>
          <p>Address : Abuja, Nigeria</p>
          <p>Phone: +234 78*****</p>
        </div> */}
      </section>

    </div>
  );
};

export default Boxes;
