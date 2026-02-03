import React from 'react';

function Leftsection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}){
    return (
    <div className="container mt-5">
        <div className="row ">
            <div className="col-5 ">
              <img src={imageURL}/>
            </div>
            <div className="col-1"></div>
            <div className="col-6 p-5 mt-5">
              <h2>{productName}</h2>
              <p className="mt-4">{productDescription}</p>
              <div>
                 <a href={tryDemo} className="Link">Try Demo <i class="fa fa-long-arrow-right"></i></a>
                 <a href={learnMore}className="Link" style={{marginLeft:"50px"}}>Learn More <i class="fa fa-long-arrow-right"></i></a>
              </div>
              <div className="mt-3 d-flex gap-3">
                <a href={googlePlay}>
                <img src="media/googlePlayBadge.svg"/>
                </a>
              <a href={appStore} >
                <img src="media/appstoreBadge.svg"/>
                </a>
              </div>
              
            </div>
        </div>
    </div>
    )
}

export default Leftsection;