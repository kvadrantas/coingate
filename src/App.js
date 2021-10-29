
import './App.scss';
import { useState, useEffect } from "react";
import FormXl from './Components/FormXl';
import FormXs from './Components/FormXs';
import sepa from "./img/sepa.jpeg";


function App() {

  const [paymentMethod, setPaymentMethod] = useState(sepa);
  const [payCurrency, setPayCurrency] = useState(['EUR']);
  const [payCurrencies, setPayCurrencies] = useState();
  const [buyCurrencies, setBuyCurrencies] = useState();


  useEffect(() => {
     fetchData();
    // console.log(payCurrencies)
  }, [])



const fetchData = (what) => {
  fetch('https://secret-ocean-49799.herokuapp.com/https://api.coingate.com/v2/rates')
  // fetch('https://cors-anywhere.herokuapp.com/https://api.coingate.com/v2/rates')
    .then(response => response.json())
    .then(data => {
      const {merchant} = data;
      setPayCurrencies(Object.keys(merchant));
      
      console.log('ID FETCHO ', merchant[what]);

      // return {
      //   payCurrencies: Object.keys(merchant),

      // }
  })
}
  

// console.log(payCurrency)



  

  const pickPaymentMethod = e => {
      setPaymentMethod(e.target.value);
  }

  const pickPayCurrency = e => {
    setPayCurrency(e.target.value);
    fetchData(e.target.value)
  }

  const pickBuyCurrency = e => {
    setPayCurrency(e.target.value);
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
          <FormXl className="FormXl" paymentMethod={paymentMethod} pickPaymentMethod={pickPaymentMethod} payCurrency={payCurrency} pickPayCurrency={pickPayCurrency} payCurrencies={payCurrencies}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
