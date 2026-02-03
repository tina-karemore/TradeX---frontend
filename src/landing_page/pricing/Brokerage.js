import React, { useState } from 'react'; //imports

const tables = {
  Equity:{
    headers:[
      "Equity delivery",
      "Equity intraday",
      "F&O - Futures",
      "F&O - Options",
    ],
    rows:[
      {
        name:"Brokerage",
        data:[
          "Zero Brokerage",
          "0.03% or Rs. 20/executed order whichever is lower",
          "0.03% or Rs. 20/executed order whichever is lower",
          "Flat Rs. 20 per executed order"
        ]
      },
      {
        name:"STT/CTT",
        data:[
          	"0.1% on buy & sell",
            "0.025% on the sell side",
            "0.02% on the sell side",
            "0.125% on intrinsic value on exercise + 0.1% on sell side"
        ]
      },
      {
        name:"Transaction charges",
        data:[
          "NSE: 0.00297%, BSE: 0.00375%",
          "NSE: 0.00297%, BSE: 0.00375%",
          "NSE: 0.00173%, BSE: 0",
          "NSE: 0.03503%, BSE: 0.0325%"
        ]
      },
      {
        name: "GST",
        data: [
          "18% on (brokerage + SEBI + transaction charges)",
          "18% on (brokerage + SEBI + transaction charges)",
          "18% on (brokerage + SEBI + transaction charges)",
          "18% on (brokerage + SEBI + transaction charges)"
        ]
      },
      {
        name: "SEBI charges",
        data: [
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore"
        ]
      },
      {
        name:"Stamp charges",
        data: [
          "0.015% or ₹1500 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side"
        ]
      }
    ]
  },
  Currency:{
    headers:[
      "Currency futures",
      "Currency options"
    ],
    rows:[
      {
        name:"Brokerage",
        data:[
          "0.03% or ₹ 20/executed order whichever is lower",
          "₹ 20/executed order"
        ]
      },
      {
        name:"STT/CTT",
        data:[
          "	No STT",
          "	No STT"
        ]
      },
      {
        name:"Transaction charges",
        data:[
          "NSE: 0.00035%, BSE: 0.00045%",
          "NSE: 0.0311%, BSE: 0.001%",
        ]
      },
      {
        name: "GST",
        data: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ]
      },
      {
        name: "SEBI charges",
        data: [
          "₹10 / crore",
          "₹10 / crore"
        ]
      },
      {
        name:"Stamp charges",
        data: [
          "0.0001% or ₹10 / crore on buy side",
          "0.0001% or ₹10 / crore on buy side",
        ]
      }
    ]
},
Commodity:{
  headers:[
    "Commodity futures",
    "Commodity options"
  ],
  rows:[
    {
      name:"Brokerage",
      data:[
        "	0.03% or Rs. 20/executed order whichever is lower",
        "₹ 20/executed order"
      ]
    },
    {
      name:"STT/CTT",
      data:[
        "0.01% on sell side (Non-Agri)",
        "0.05% on sell side"
      ]
    },
    {
      name:"Transaction charges",
      data:[
        "MCX: 0.0021%  NSE: 0.0001%",
        "MCX: 0.0418%  NSE: 0.001%"
      ]
    },
    {
      name:"GST",
      data:[
        "18% on (brokerage + SEBI charges + transaction charges)",
        "	18% on (brokerage + SEBI charges + transaction charges)"
      ]
    },
    {
      name:"SEBI charges",
      data:[
        "Agri:₹1 / crore Non-agri:₹10 / crore",
        "₹10 / crore"
      ]
    },
    {
      name:"Stamp charges",
      data:[
        "0.002% or ₹200 / crore on buy side",
        "0.003% or ₹300 / crore on buy side"
      ]
    }

  ]
}
};


function Brokerage() {
  const [active,setActive] = useState("Equity");

    return (  
        <div className="container my-5 ">
               <div className="d-flex gap-3 ">
                
                <h3 className="fs-3 link " 
                onClick ={()=>setActive("Equity")} style={{cursor:"pointer"}}>
                  Equity
                </h3>
              
                <h3 className="fs-3 link"
                onClick={() =>setActive("Currency")} style={{cursor:"pointer"}}>Currency</h3>
                
                <h3 className="fs-3 link"
                onClick={() =>setActive("Commodity")} style={{cursor:"pointer"}}>Commodity</h3>
        
              </div>

             
              <div className="table-container border-top">
               {tables[active]&&(
                  <table className="table mt-4 ">
            
              
  <thead>
    <tr>
         <th>&nbsp;</th>  
         {tables[active].headers.map((h,i)=>(
          <th key={i}>{h}</th>
         ))}

    </tr>
  </thead>


  <tbody>
    {tables[active].rows.map((row,i)=>(
      <tr key={i} className={i % 2 === 1 ? "table-light":""}> 
        <th>{row.name}</th>
        {row.data.map((cell,j)=>(
          
          <td key={j}>{cell}</td>
            

         ))}
      </tr>
    ))}
    </tbody>

    </table>
               )}

               <div className="container p-5">
                <div className="row mt-5 p-5">
                <h3 >Charges Explained</h3>
               </div>
                  <div className="row  p-5 ">
               <div className="col-6 " style={{fontSize:"14px"}}>
                <h5  className='text-muted '>Securities / Commodities transaction tax</h5><br/>
                <p>Tax by the government when transacting on the exchanges. Charged as above on both buy 
                and sell sides when trading equity delivery. Charged only on selling side when trading 
                intraday or on F&O.</p>
                <p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                <br/>
                <h5  className='text-muted '>Transaction/Turnover Charges</h5><br/>
                <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                <p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                 <br/>
                <h5  className='text-muted'>NRI brokerage Charges</h5><br/>
                <ul>
                  <li>
                    For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).
                  </li>
                   <li>
                  For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).

                  </li>
                   <li>
                    ₹500 + GST as yearly account maintenance charges (AMC) charges.
                  </li>
                </ul>
                 <br/>
                <h5  className='text-muted'>Account with debit balance</h5>
                <p>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
             
               
               </div>
              <div className="col-1"></div>
               <div className="col-5" style={{fontSize:"14px"}}> 
                 <h5  className='text-muted'>Charges for Investor's Protection Fund Trust </h5>
                  <ul>
                  <li>
                    Equity and Futures - ₹10 per crore + GST of the traded value.
                  </li>
                   <li>
                    Options - ₹50 per crore + GST traded value (premium value).

                  </li>
                   <li>
                   Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.
                  </li>
                </ul> 

                  <br/>
                <h5  className='text-muted'>GST</h5>
                <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                   <br/>
                  <h5  className='text-muted '>DP (Depository participant) charges</h5>
                <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                <p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                <p>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                  <br/>
                <h5>AMC (Account maintenance charges)</h5>
                <p>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. </p>
                <p>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days).</p>
                  <br/>
                <h5  className='text-muted'>Corporate action order charges</h5>
                <p>₹20 plus GST will be charged for OFS delisting orders placed through Console.</p>
                
              </div>
              <div class="row mt-4 ">
                <h5 className="text-muted mt-3">Disclaimer</h5>
                <p  className="text-muted mt-2" style={{fontSize:"14px"}}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. 
                  Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. 
                  Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will
                   be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free 
                   investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to 
                   pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for 
                   contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of
                    0.1% will be charged.</p>
              </div>

              </div>
              
               </div>
    </div>
   </div>

     );
}

export default Brokerage;