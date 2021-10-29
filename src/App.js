
import './App.scss';
import { useState } from "react";
import FormXl from './Components/FormXl';
import FormXs from './Components/FormXs';
import sepa from "./img/sepa.jpeg";


function App() {

  const [paymentMethod, setPaymentMethod] = useState(sepa);

  // async function getJson() {
  //   let jsonData = await fetch('https://api.coingate.com/v2/rates');
  //   return jsonData
  // }



// --------
// const data = { funny: "Absolutely not", educational: "yas" }

  // fetch('https://api.coingate.com/v2/rates', {
  //   method: 'POST', // The method
  //   mode: 'no-cors', // It can be no-cors, cors, same-origin
  //   // credentials: 'same-origin', // It can be include, same-origin, omit
  //   headers: {
  //     'Content-Type': 'application/json', // Your headers
  //   },
  //   body: JSON.stringify(data),
  // }).then(returnedData => {
  //   // Do whatever with returnedData
  //   console.log(returnedData)
  // }).catch(err => {
  //   // In case it errors.
  // })
// --------
// fetch('https://api.coingate.com/v2/rates')
//   .then(blob => blob.json())
//   .then(data => {
//     console.table(data);
//     document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
//     return data;
//   })
//   .catch(e => {
//     console.log(e);
//     return e;
//   });
// --------
fetch('https://cors-anywhere.herokuapp.com/https://api.coingate.com/v2/rates')
  .then(response => response.json())
  .then(data => console.log(data));





  

  const pickPaymentMethod = e => {
      setPaymentMethod(e.target.value);
  }


  return (
    <div className="main">
      <div className="bg-block"></div>
      <div className="content">

        <div className="section1">
          <h1>
            Buy Bitcoin, <span>Ethereum, Litecoin and other crypto</span> online
          </h1>
          <FormXs className="FormXs" paymentMethod={paymentMethod} pickPaymentMethod={pickPaymentMethod}/>
          <p>Why bother going through complicated exchanges? Buy cryptocurrency with top payment methods like SEPA bank transfer, Credit and Debit Card, Apple Pay, Mobile balance or Klarna. You can buy Bitcoin, Ethereum or any other popular crypto directly to your personal wallet without making any initial deposits. It's as easy as it gets!</p>
          <a className="start-now" href="">Start now &gt;</a>
        </div>

        <div className="section2">
          <FormXl className="FormXl" paymentMethod={paymentMethod} pickPaymentMethod={pickPaymentMethod}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
