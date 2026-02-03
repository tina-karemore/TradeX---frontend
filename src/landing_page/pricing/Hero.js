import React from 'react'
import '../../index.css'

function Hero() {
    return ( 
       <div className='container'>
            <div className='row p-5 mt-5 text-center'>
            <h1>Charges</h1>
            <h3 className="text-muted mt-3">List of all charges and taxes</h3>
            </div>
            
            <div className="row p-5 mt-5 text-center">
            <div className="col-4 p-5">
           
            <img src="media/pricing.svg" alt="pricing" />
            <h3 >Free equity delivery</h3>
            <p className="text-muted">All equity delivery investments (NSE, BSE),<br/>
            are absolutely free — ₹ 0 brokerage.</p>
            </div>
           
            
            <div className="col-4 p-5">
            
            <img src="media/pricing20.svg" alt="pricing20" />
            <h3 >Intraday and F&O trades</h3>
            <p  className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per <br/>executed order on intraday trades across <br/>equity, currency, and commodity trades. Flat <br/>₹20 on all option trades.</p>
            </div>
           

            <div className="col-4 p-5">
           
            <img src="media/pricing.svg" alt="pricing" className="images"/>
            <h3 className="">Free direct MF</h3>
            <p  className="text-muted">All direct mutual fund investments are <br/>absolutely free — ₹ 0 commissions & DP <br/>charges.</p>
            </div>
            </div>
            </div>
         

          
       
         
     )
}

export default Hero;