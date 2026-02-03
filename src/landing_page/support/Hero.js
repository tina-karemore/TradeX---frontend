import React from 'react'

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className=" p-3 " id="supportWrapper">
            
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>

 </div>
  <div className=" row p-3 m-3 ">
                <div className="col-5 p-4 ">
                    <h1 className="fs-3">Search for an answer and browse help topics to create a ticket</h1>
                    <br/>
                    <input placeholder="Eg.how do I activate F&O"/>
                    <div className="herolinks mt-4">
                    <a href="" >Track account opening</a>&nbsp;&nbsp;&nbsp;
                    <a href="" >Track segment activation</a>&nbsp;&nbsp;&nbsp;
                    <a href="" >Intraday margins</a>&nbsp;&nbsp;&nbsp;
                    <a href="" >Kite user manual</a>&nbsp;&nbsp;&nbsp;
                    </div>
                   

                </div>
                <div className="col-1"></div>
                <div className="col-6 p-4 ">
                <h1 className="fs-3">Featured</h1>
                <ol className="mt-4">
                    <li>
                         <a href="">Current Takeovers and Delisting - January 2024</a>
                    </li>
                    <br/>
                    <li>
                          <a href="">Latest Intraday leverages - MIS & CO</a> 
                    </li>
                </ol>
                   
                </div>
 </div>
 </section>
    );
}

export default Hero;