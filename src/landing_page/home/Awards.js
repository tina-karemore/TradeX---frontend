import React from 'react'

function Awards() {
    return ( 
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 mt-4'>
                <img src='media/largestBroker.svg' alt='awards pic'/>
            </div>
            <div className='col-6 p-2 mb-1'>
                <h1>Largest stock broker in India</h1>
                <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all
                    volumes in India daily by trading and investing in: </p>
                    <div className='row'>
                        <div className='col-6 p-5 '>
                    <ul>
                        <li>
                            <p>Futures and options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>
                        </div>
                         <div className='col-6 p-5'>
                            <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and Govt. securities</p>
                        </li>
                    </ul>
                         </div>
                    </div>
                   <img src ='media/pressLogos.png' alt='presslogos pic'  style={{width:"90%"}}/> 
            </div>
        </div>

       </div>
     );
}

export default Awards;