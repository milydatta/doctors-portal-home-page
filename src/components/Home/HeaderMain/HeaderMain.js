import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
      <main style={{height:'600px'}} className="row d-flex align-items-center">
          <div className="col-md-4 offset-md-1">
             <h1 style={{color:'#3A4256'}}>Your New Smile <br/>Starts Here</h1>
             <p className="text-secondary">lorem ipsum dolor emit lorem ipsum dolor emit lorem ipsum dolor emit lorem ipsum dolor emit  </p>
             <button style={{backgroundColor:'#1CC7C1',color:'white',border:'none'}}>GET APPOINTMENT</button>
          </div>

          <div className="col-md-6">
            <img src={chair} alt="" className="img-fluid"/>
          </div>

      </main>
    );
};

export default HeaderMain;