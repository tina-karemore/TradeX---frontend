import React from 'react';
import "../index.css";

function Footer() {
    return (
        <footer style={{backgroundColor:"rgb(250,250,250)"}}>
        <div className='container border-top-mt-5'>
            <div className='row mt-5 '>
                <div className='col-3 p-5'>
                    <a className="navbar-brand" href="#">
                        <img src="media/logo.svg" alt="logo" style={{ width: "50%" }} />
                    </a>
                    <br></br>
                    <br></br>
                    <p> © 2010 - 2025, Zerodha Broking Ltd.<br />
                        All rights reserved.</p>
                        <div className='row '>
                            <div className='col d-flex gap-3'>
                            
                            <i className="fa-brands fa-x-twitter"></i>
                            <i className="fa-brands fa-square-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            
                            </div>

                            <hr class="my-4"></hr>
                            <div className='row '>
                            <div className='col d-flex gap-3'>
                             <i class="fa-brands fa-youtube"></i>
                             <i class="fa-brands fa-whatsapp"></i>
                             <i class="fa-brands fa-telegram"></i> 

                            </div>
                            </div>
                            </div>
                    
                </div>


                <div className='col-3 mb-3 text-muted'>
                    <p className="fw-semibold text-dark mt-5">Account</p>
                    <a href="#" style={{ textDecoration: "none"}}className="text-muted">Open demat account</a><br /><br />
                    <a href="#" style={{ textDecoration: "none" }}
                    className="text-muted">Minor demat account</a><br /><br />
                    <a href="#" style={{ textDecoration: "none" }}className="text-muted">NRI demat account</a><br /><br />
                    <a href="#" style={{ textDecoration: "none" }}className="text-muted">Commodity</a><br /><br />
                    <a href="#" style={{ textDecoration: "none" }}className="text-muted">Dematerialisation</a><br /><br />
                    <a href="#" style={{ textDecoration: "none" }}className="text-muted">Fund transfer</a><br /><br />
                    <a href="#" style={{ textDecoration: "none" }}className="text-muted">MTF</a><br /><br />
                    <a href="#" style={{ textDecoration: "none" }}className="text-muted">Referral program</a><br /><br />
                </div>
                <div className="col-3 text-muted">
                    <p className="fw-semibold text-dark mt-5">Support</p>
                    <a href="" style={{ textDecoration: "none" }}className="text-muted">Contact us</a><br /><br />
                    <a href="" style={{ textDecoration: "none" }}className="text-muted">Support portal</a><br /><br />
                    <a href="" style={{ textDecoration: "none" }}className="text-muted">How to file a complaint?</a><br /><br />
                    <a href="" style={{ textDecoration: "none" }}className="text-muted">Status of your complaints</a><br /><br />
                    <a href="" style={{ textDecoration: "none" }}className="text-muted">Bulletin</a><br /><br />
                    <a href="" style={{ textDecoration: "none" }}className="text-muted">Circular</a><br /><br />
                    <a href="" style={{ textDecoration: "none" }}className="text-muted">Z-Connect blog</a><br /><br />
                    <a href="" style={{ textDecoration: "none" }}className="text-muted">Downloads</a><br /><br />
                </div>

                <div className='col-3 text-muted '>
                    <p className="fw-semibold text-dark mt-5">Company</p>
                   
                    <a href="" style={{ textDecoration: "none" }}className="text-muted">About</a><br /><br />
                    <a href="" style={{ textDecoration: "none" }}className="text-muted">Philosophy</a><br /><br />
                    <a href="" style={{ textDecoration: "none" }}className="text-muted">Press & media</a><br /><br />
                    <a href="" style={{ textDecoration: "none" }}className="text-muted">Careers</a><br /><br />
                    <a href="" style={{ textDecoration: "none" }}className="text-muted">Zerodha Cares (CSR)</a><br /><br />
                    <a href="" style={{ textDecoration: "none" }}className="text-muted">Zerodha.tech</a><br /><br />
                    <a href="" style={{ textDecoration: "none" }}className="text-muted">Open source</a><br /><br />
                    

                </div>
            </div>

            <div className="mt-5 text-muted p-4" style={{fontSize:"13px"}}>

            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='' className='link' >complaints@zerodha.com</a>, for DP related to <a href='' className='link'>dp@zerodha.com.</a> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

            <p>Procedure to file a complaint on <a href='' className='link'>SEBI SCORES: </a>Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

            <p><a href='' className='link'>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>

            Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

            <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

            <p>India's largest broker based on networth as per NSE. <a className='link'>NSE broker factsheet</a></p>
            

            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href=''className='link'>create a ticket here.</a></p>

            
            <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>

            <p>NSE BSE MCX Terms & conditions Policies & procedures Privacy policy Disclosure For investor's attention Investor charter</p>
            </div>
        </div>
     </footer>
    );
    
}
export default Footer;