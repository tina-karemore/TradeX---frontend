import React from 'react'

function Pricing() {
    return ( 
      <div className='container p-3'>
         <div className='row p-5'>
          <div className='col-4 p-3'>
          <h1 className='mb-4 fs-3'>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India.
             Flat fees and no hidden charges.</p>
             <a href='/kite demo'style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
       
          <div className='col-8 '>
            <div className='row '>
              <div className='col  d-flex align-items-center mt-3' >
                <img src='media/pricing.svg' alt='pricing pic' style={{width:"50%"}}/>
                <p className='text-muted mt-5'>Free account opening</p>
               </div>
               <div className='col d-flex align-items-center mt-3 '>
                <img src='media/pricing.svg' alt='pricing pic' style={{width:"50%"}}/>
                <p className='text-muted mt-5'>Free equity delivery</p>
                {/* and direct mutual funds</p> */}
               </div>
                <div className='col  d-flex align-items-center mt-3'>
                <img src='media/pricing20.svg' alt='pricing pic' style={{width:"50%"}}/>
                <p className='text-muted mt-5'>Intraday and <br/>F & O</p>
               </div>
            </div>
          </div>
      </div>
      </div>
     );
}

export default Pricing;