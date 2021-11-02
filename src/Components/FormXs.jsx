import sepa from "../img/sepa.jpeg"
import paysera from "../img/paysera.jpeg"
import paypal from "../img/paypal.jpeg"
import Icon from "react-crypto-icons";
import { useEffect } from "react";
import validateNGo from "../js/validateNGo";


function FormXs({paymentMethod, pickPaymentMethod, payCurrency, pickPayCurrency, payCurrencies, buyCurrency, pickBuyCurrency, buyCurrencies, payValue, setPayValue, buyValue, setBuyValue}) {

// console.log(payCurrency)
// console.log(buyCurrency)


const calcCurency = (which, e) => {
    if(which === 'pay') {
        setPayValue(e.target.value);
        document.getElementById('buyFieldSm').value = financial(e.target.value * parseFloat(buyCurrency[1]));
        document.getElementById('buyField').value = financial(e.target.value * parseFloat(buyCurrency[1]));
    } else {
        setBuyValue(e.target.value);
        document.getElementById('payFieldSm').value = financial(e.target.value / parseFloat(buyCurrency[1]));
        document.getElementById('payField').value = financial(e.target.value / parseFloat(buyCurrency[1]));
    }
}

useEffect(() => {
    document.getElementById('payField').value = payValue;
},[payValue])
useEffect(() => {
    document.getElementById('buyField').value = buyValue;
},[buyValue])

function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}

useEffect(() => {
    document.getElementById('buyFieldSm').value = financial(payValue * parseFloat(buyCurrency[1]));
    document.getElementById('buyField').value = financial(payValue * parseFloat(buyCurrency[1]));
    document.getElementById('buySelect').value = buyCurrency;
    //eslint-disable-next-line react-hooks/exhaustive-deps
}, [buyCurrency])
useEffect(() => {
    document.getElementById('paySelect').value = payCurrency;
}, [payCurrency])  
useEffect(() => {
    document.getElementById('PMSelect').value = paymentMethod;
}, [paymentMethod]) 


    return (

        <div className="FormXs">
            <div className="front-block2">
                <div className="pay">
                    <label htmlFor="">Pay</label>
                    <input id="payFieldSm" onChange={(e) => calcCurency('pay', e)} type="number" />
                    <div className="icon-cnt"><Icon className="icon" name={('' + payCurrency).toLowerCase()} /></div>
                    <select id="paySelectSm" onChange={(e) => pickPayCurrency(e)} defaultValue='EUR' name="">
                        {payCurrencies.map((e, id) => <option key={id} value={e} >{e}</option>)}
                    </select>
                </div>
                <div className="buy">
                    <label htmlFor="">Buy</label>
                    <input id="buyFieldSm" onChange={(e) => calcCurency('buy', e)} type="number" />
                    <div className="icon-cnt"><Icon className="icon" name={('' + buyCurrency[0]).toLowerCase()} /></div>
                    <select id="buySelectSm" onChange={(e) => pickBuyCurrency(e)} defaultValue='BTC' name="">
                        {buyCurrencies.map((e, id) => <option key={id} value={e}>{e[0]}</option>)}
                    </select>
                </div>
                <p className="payment-method">Payment method</p>
                <div className="payment-method-box">
                    <img src={paymentMethod} alt="sepa" />
                    <select id="PMSelectSm" className="selectSm" onChange={(e) => pickPaymentMethod(e)} defaultValue={sepa} name="">
                        <option value={sepa}>Bank transfer</option>
                        <option value={paysera}>Paysera</option>
                        <option value={paypal}>Paypal</option>
                    </select>
                </div>
                {/* <button>Buy {buyCurrency[0]}</button> */}
                <button onClick={validateNGo}>Buy {buyCurrency[0]}</button>

            </div>
        </div>
    )

}

export default FormXs;