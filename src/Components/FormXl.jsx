import sepa from "../img/sepa.jpeg"
import paysera from "../img/paysera.jpeg"
import paypal from "../img/paypal.jpeg"
import Icon from "react-crypto-icons";
import { useEffect } from "react";
import validateNGo from "../js/validateNGo";


function FormXl({paymentMethod, pickPaymentMethod, payCurrency, pickPayCurrency, payCurrencies, buyCurrency, pickBuyCurrency, buyCurrencies, payValue, setPayValue, buyValue, setBuyValue}) {

// console.log(payCurrency)
// console.log(buyCurrency)


const calcCurency = (which, e) => {
    if(which === 'pay') {
        setPayValue(e.target.value);
        document.getElementById('buyField').value = financial(e.target.value * parseFloat(buyCurrency[1]));
        document.getElementById('buyFieldSm').value = financial(e.target.value * parseFloat(buyCurrency[1]));
    } else {
        setBuyValue(e.target.value);
        document.getElementById('payField').value = financial(e.target.value / parseFloat(buyCurrency[1]));
        document.getElementById('payFieldSm').value = financial(e.target.value / parseFloat(buyCurrency[1]));
    }
}



useEffect(() => {
    document.getElementById('payFieldSm').value = payValue;
},[payValue])
useEffect(() => {
    document.getElementById('buyFieldSm').value = buyValue;
},[buyValue])

function financial(x) {
    if(x === 0) return ''
    return Number.parseFloat(x).toFixed(2);
}

useEffect(() => {
    document.getElementById('buyField').value = financial(payValue * parseFloat(buyCurrency[1]));
    document.getElementById('buyFieldSm').value = financial(payValue * parseFloat(buyCurrency[1]));
    document.getElementById('buySelectSm').value = buyCurrency;
    //eslint-disable-next-line react-hooks/exhaustive-deps
}, [buyCurrency])
useEffect(() => {
    document.getElementById('paySelectSm').value = payCurrency;
}, [payCurrency])  
useEffect(() => {
    document.getElementById('PMSelectSm').value = paymentMethod;
}, [paymentMethod]) 


    return (
            <section className="FormXl">
                <div className="back-block">

                </div>
                <div className="front-block">
                    <div className="pay">
                        <label htmlFor="">Pay</label>
                        <input id="payField" onChange={(e) => calcCurency('pay', e)} type="number" />
                        <div className="icon-cnt"><Icon className="icon" name={('' + payCurrency).toLowerCase()} /></div>
                        <select id="paySelect" onChange={(e) => pickPayCurrency(e)} defaultValue="EUR" name="">
                            {payCurrencies.map((e, id) => <option key={id} value={e} >{e}</option>)}
                        </select>
                    </div>
                    <div className="buy">
                        <label htmlFor="">Buy</label>
                        <input id="buyField" onChange={(e) => calcCurency('buy', e)} type="number" />
                        <div className="icon-cnt"><Icon className="icon" name={('' + buyCurrency[0]).toLowerCase()} /></div>
                        <select id="buySelect" onChange={(e) => pickBuyCurrency(e)} defaultValue="BTC" name="">
                            {buyCurrencies.map((e, id) => <option key={id} value={e}>{e[0]}</option>)}
                        </select>
                    </div>
                    <p className="payment-method">Payment method</p>
                    <div className="payment-method-box">
                        <img src={paymentMethod} alt="sepa" />
                        <select id="PMSelect" onChange={(e) => pickPaymentMethod(e)} defaultValue={sepa} name="" >
                            <option value={sepa}>Bank transfer</option>
                            <option value={paysera}>Paysera</option>
                            <option value={paypal}>Paypal</option>
                        </select>
                    </div>
                    {/* <button>Buy {buyCurrency[0]}</button> */}
                    <button onClick={validateNGo}>Buy {buyCurrency[0]}</button>
                </div>
            </section>
    )

}

export default FormXl;