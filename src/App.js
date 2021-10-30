
import './App.scss';
import axios from 'axios';
import { useState, useEffect } from "react";
import FormXl from './Components/FormXl';
import FormXs from './Components/FormXs';
import sepa from "./img/sepa.jpeg";


function App() {

  const [jsData, setJsData] = useState();
  const [paymentMethod, setPaymentMethod] = useState(sepa);
  const [payCurrency, setPayCurrency] = useState('EUR');
  const [payCurrencies, setPayCurrencies] = useState();
  const [buyCurrency, setBuyCurrency] = useState(['BTC', '']);
  const [buyCurrencies, setBuyCurrencies] = useState();

  const fetchData = (what) => {
    console.log('FUNKIJA ', jsData)
        setPayCurrencies(Object.keys(jsData));
  
        const m = [];
        for (const [key, value] of Object.entries(jsData[what])) {
          m.push([key, value]);
          if (key === buyCurrency[0]) setBuyCurrency([key, value]);
        }
        setBuyCurrencies(m);
        if (m.findIndex((e) => e[0] === buyCurrency[0]) < 0) setBuyCurrency(m[0]);
  }

  useEffect(() => {
    axios('https://secret-ocean-49799.herokuapp.com/https://api.coingate.com/v2/rates')
  // fetch('https://cors-anywhere.herokuapp.com/https://api.coingate.com/v2/rates')
    .then(response => {
      setJsData(response.data.merchant);
    })
    .catch(error => console.error("Error: ", error))
    .finally(() => {
      
    })

  }, [])

  useEffect( () => {
    if(jsData)
      fetchData('EUR');
  }, [jsData])
  


  const pickPaymentMethod = e => {
      setPaymentMethod(e.target.value);
  }

  const pickPayCurrency = e => {
    setPayCurrency(e.target.value);
    fetchData(e.target.value)
  }

  const pickBuyCurrency = e => {
    const m = e.target.value.split(',');
    setBuyCurrency(m);
  }

if(payCurrencies && buyCurrencies) {
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
          <a className="start-now" href="#">Start now &gt;</a>
        </div>

        <div className="section2">
          <FormXl className="FormXl" paymentMethod={paymentMethod} pickPaymentMethod={pickPaymentMethod} payCurrency={payCurrency} pickPayCurrency={pickPayCurrency} payCurrencies={payCurrencies} buyCurrency={buyCurrency} pickBuyCurrency={pickBuyCurrency} buyCurrencies={buyCurrencies}/>
        </div>
      </div>
      
    </div>
  );
} else {return(<></>)}
  
}

export default App;
