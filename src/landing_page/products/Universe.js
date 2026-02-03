import React from 'react'

function Universe() {
    return (
        <div className="container mt-5 p-5">
            <div className="row text-center " >
                <h2 className="mt-5 text-muted">The Zerodha Universe</h2>
                <p className="mt-3">Extend your trading and investment experience even further with our partner platforms</p>
                <div className="d-flex gap-3">
                <div className="col-4 p-3 mt-5 ">
                    <img src="media/smallcaseLogo.png" alt="smallcase Logo" />
                    <p className="text-small text-muted mt-3">
                    Thematic investing platform <br/>
                    that helps you invest in diversified<br/>
                     baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/StreakLogo.png " style={{ width: "30%" }} alt="Streak Logo" />
                    <p className="text-small text-muted mt-4">

                    Systematic trading platform<br/>
                    that allows you to create and backtest<br/>
                    strategies without coding.<br/>
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/sensibullLogo.svg" style={{ width: "40%" }} alt="sensibull Logo" />
                    <p className="text-small text-muted mt-4 ">
                        Options trading platform that lets you<br/>
                        create strategies, analyze positions, and examine<br/>
                        data points like open interest, FII/DII, and more.<br/>

                    </p>
                </div>
                </div>
                <div className="d-flex gap-3">
                <div className="col-4 p-3 mt-5">
                    <img src="media/zerodhaFundhouse.png" style={{ width: "40%" }} alt="zerodhaFundhouse" />
                    <p className="text-small text-muted mt-3">
                        Our asset management venture<br/>
                        that is creating simple and transparent index<br/>
                        funds to help you save for your goals.<br/>
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/goldenpiLogo.png" alt="goldenpi Logo" />
                    <p className="text-small text-muted mt-3">Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/dittoLogo.png" style={{ width: "30%" }} alt="ditto Logo" />
                    <p className="text-small text-muted mt-3">
                    Personalized advice on life<br/>
                    and health insurance. No spam<br/>
                    and no mis-selling.<br/>
                    </p>
                </div>
                </div>
                
                 <button className ='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
                </div>
            </div>
     
    );
}

export default Universe;