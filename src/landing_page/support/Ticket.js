import React from 'react'

function Ticket() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
                <h1 style={{textAlign:"center"}}>
                    To create a ticket , select a relevant topic
                </h1>
            </div>
            <div className='row p-4 mt-4 mb-4'>
                <div className='col-4 p-4 mt-4 mb-4'>
                    <h4 ><i class="fa-solid fa-circle-plus"></i>
                        Account Opening
                    </h4>
                   
                     <a href="https://support.zerodha.com/category/account-opening/resident-individual" className="Link" style={{lineHeight:"2.5"}}>Resident individual</a><br />
                     <a href="https://support.zerodha.com/category/account-opening/minor" className="Link" style={{lineHeight:"2.5"}}>Minor</a><br />
                     <a href="https://support.zerodha.com/category/account-opening/nri-account-opening" className="Link" style={{lineHeight:"2.5"}}>Non Resident Indian(NRI)</a><br />
                     <a href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening" className="Link" style={{lineHeight:"2.5"}}>Company,Partnership,HUF and LLP </a><br />
                     <a href="https://support.zerodha.com/category/account-opening/glossary" className="Link" style={{lineHeight:"2.5"}}>Glossary</a><br />
                    
                </div>
                <div className='col-4 p-4 mt-4 mb-4'>
                    <h4 >
                        <i class="fa-solid fa-circle-plus"></i>
                       Kite
                    </h4>
                    <a href="https://support.zerodha.com/category/trading-and-markets/ipo" className="Link" style={{lineHeight:"2.5"}}>IPO</a><br />
                    <a href="https://support.zerodha.com/category/trading-and-markets/trading-faqs" className="Link" style={{lineHeight:"2.5"}}>Trading FAQs</a><br />
                    <a href="https://support.zerodha.com/category/trading-and-markets/margins" className="Link" style={{lineHeight:"2.5"}}>Margin Trading Facility (MTF) and Margins</a><br />
                    <a href="https://support.zerodha.com/category/trading-and-markets/charts-and-orders" className="Link" style={{lineHeight:"2.5"}}>Charts and orders</a><br />
                    <a href="https://support.zerodha.com/category/trading-and-markets/alerts-and-nudges" className="Link" style={{lineHeight:"2.5"}}>Alerts and Nudges</a><br />
                    <a href="https://support.zerodha.com/category/trading-and-markets/general-kite" className="Link" style={{lineHeight:"2.5"}}>General</a><br />

                </div>
                <div className='col-4 p-4 mt-4 mb-4'>
                    <h4 >
                       <i class="fa-regular fa-circle-user"></i>
                        Your Zerodha Account
                    </h4>
                    <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile" className="Link" style={{lineHeight:"2.5"}}>Your Profile</a><br />
                    <a href="https://support.zerodha.com/category/your-zerodha-account/account-modification-and-segment-addition" className="Link" style={{lineHeight:"2.5"}}>Account modification</a><br />
                    <a href="https://support.zerodha.com/category/your-zerodha-account/dp-id-and-bank-details" className="Link" style={{lineHeight:"2.5"}}>Client Master Report (CMR) and Depository Participant(DP)</a><br />
                    <a href="https://support.zerodha.com/category/your-zerodha-account/nomination-process" className="Link" style={{lineHeight:"2.5"}}>Nomination</a><br />
                    <a href="https://support.zerodha.com/category/your-zerodha-account/transfer-of-shares-and-conversion-of-shares" className="Link" style={{lineHeight:"2.5"}}>Transfer and conversion of securities</a><br />
  
                </div>

            </div>
            <div className='row p-3 mt-3 mb-3'>
                <div className='col-4 p-4 mt-4 mb-4'>
                    <h4> <i class="fa-solid fa-circle-plus"></i>
                        Funds
                    </h4>
                    <a href="https://support.zerodha.com/category/funds/adding-funds" className="Link" style={{lineHeight:"2.5"}}>Add money</a><br />
                    <a href="https://support.zerodha.com/category/funds/fund-withdrawal" className="Link" style={{lineHeight:"2.5"}}>Withdraw money</a><br />
                    <a href="https://support.zerodha.com/category/funds/adding-bank-accounts" className="Link" style={{lineHeight:"2.5"}}>Add bank accounts</a><br />
                    <a href="https://support.zerodha.com/category/funds/mandate" className="Link" style={{lineHeight:"2.5"}}>eMandates</a><br />

                </div>
                <div className='col-4 p-4 mt-4 mb-4'>
                    <h4 >
                        <i class="fa-solid fa-circle-plus"></i>
                       Console
                    </h4>
                    <a href="https://support.zerodha.com/category/console/portfolio" className="Link" style={{lineHeight:"2.5"}}>Portfolio</a><br />
                    <a href="https://support.zerodha.com/category/console/corporate-actions" className="Link" style={{lineHeight:"2.5"}}>Corporate actions</a><br />
                    <a href="https://support.zerodha.com/category/console/ledger" className="Link" style={{lineHeight:"2.5"}}>Funds statement</a><br />
                    <a href="https://support.zerodha.com/category/console/reports" className="Link" style={{lineHeight:"2.5"}}>Reports</a><br />
                    <a href="https://support.zerodha.com/category/console/profile" className="Link" style={{lineHeight:"2.5"}}>Profile</a><br />
                    <a href="https://support.zerodha.com/category/console/segments" className="Link" style={{lineHeight:"2.5"}}>Segments</a><br />
           
                </div>
                <div className='col-4 p-4 mt-4 mb-4'>
                    <h4 >
                       <i class="fa-solid fa-circle-plus"></i>
                        Coin
                    </h4>
                    <a href="https://support.zerodha.com/category/mutual-funds/understanding-mutual-funds" className="Link" style={{lineHeight:"2.5"}}>Mutual funds</a><br />
                    <a href="https://support.zerodha.com/category/mutual-funds/nps" className="Link" style={{lineHeight:"2.5"}}>National Pension Scheme(NPS)</a><br />
                    <a href="https://support.zerodha.com/category/mutual-funds/features-on-coin" className="Link" style={{lineHeight:"2.5"}}>Features on Coin</a><br />
                    <a href="https://support.zerodha.com/category/mutual-funds/payments-and-orders" className="Link" style={{lineHeight:"2.5"}}>Payments and Orders</a><br />
                    <a href="https://support.zerodha.com/category/mutual-funds/coin-general" className="Link" style={{lineHeight:"2.5"}}>General</a><br />
  
                </div>

            </div>
        </div>
    );
}
export default Ticket;