import React from 'react';

function RightSection({
    productName,
    productDescription,
    learnMore,
    imageURL,
}) {
    return ( 
        <div className="container mt-5">
            <div className="row " >
                <div className="col-6 p-5 mt-5">
                   <h2 >{productName}</h2>
                   <p >{productDescription}</p>
                   <a href="" className="Link" >Learn More <i class="fa fa-long-arrow-right"></i></a>

                </div>
                
                <div className="col-6  mb-5">
                   <img src={imageURL} />
                </div>
            </div>
        </div>
     );
}

export default  RightSection;