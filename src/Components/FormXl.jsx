import sepa from "../img/sepa.jpeg"
import paysera from "../img/paysera.jpeg"
import paypal from "../img/paypal.jpeg"
import Icon from "react-crypto-icons";
import { useState, useEffect } from "react";


function FormXl({paymentMethod, pickPaymentMethod, payCurrency, pickPayCurrency, payCurrencies, buyCurrency, pickBuyCurrency, buyCurrencies}) {

console.log(payCurrency)
console.log(buyCurrency)

const [payValue, setPayValue] = useState(0);
const [buyValue, setBuyValue] = useState(0);

const calcCurency = (which, e) => {
    // console.log(e.target.value, buyCurrency)
    if(which === 'pay') {
        setPayValue(e.target.value);
        document.getElementById('buyField').value = financial(e.target.value * parseFloat(buyCurrency[1]));
    } else {
        setBuyValue(e.target.value);
        document.getElementById('payField').value = financial(e.target.value / parseFloat(buyCurrency[1]));
    }
}

function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}

useEffect(() => {
    // console.log(parseFloat(buyCurrency[1]))
    document.getElementById('buyField').value = payValue * parseFloat(buyCurrency[1]);
}, [buyCurrency])

// useEffect(() => {
//     const ind = buyCurrencies.findIndex(e => e[0] === buyCurrency[0]);
//     console.log(ind, buyCurrencies[ind]);
//     setBuyValue(buyCurrencies[ind]);

//     // console.log(parseFloat(buyCurrency[1]));
//     document.getElementById('buyField').value = payValue * parseFloat(buyCurrency[1]);
// }, [payCurrency])

// useEffect(() => {
//     console.log(parseFloat(payCurrency[1]))
//     document.getElementById('payField').value = payValue * parseFloat(payCurrency[1]);
// }, [payCurrency])

    return (
            <section className="FormXl">
                <div className="back-block">

                </div>
                <div className="front-block">
                    <div className="pay">
                        <label htmlFor="">Pay</label>
                        <input id="payField" onChange={(e) => calcCurency('pay', e)} type="text" />
                        <div className="icon-cnt"><Icon className="icon" name={('' + payCurrency).toLowerCase()} /></div>
                        <select onChange={(e) => pickPayCurrency(e)} defaultValue={payCurrency} name="" id="">
                            {payCurrencies.map((e, id) => <option key={id} value={e} >{e}</option>)}
                        </select>
                    </div>
                    <div className="buy">
                        <label htmlFor="">Buy</label>
                        <input id="buyField" onChange={(e) => calcCurency('buy', e)} type="text" />
                        {/* {console.log(buyCurrencies.findIndex((e) => e[0] === buyCurrency[0]))} */}
                        <div className="icon-cnt"><Icon className="icon" name={('' + buyCurrency[0]).toLowerCase()} /></div>
                        <select onChange={(e) => pickBuyCurrency(e)} defaultValue={buyCurrency[0]} name="" id="">
                            {
                            buyCurrencies.map((e, id) => {
                                return <option key={id} value={e}>{e[0]}</option>
                                // if(buyCurrencies.length - 1 != id) {
                                //     return <option key={id} value={e[0]}>{e[0]}</option>
                                // } else {
                                //     return(
                                //         <>
                                //             <option key={id} value={e[0]}>{e[0]}</option>
                                //             <option value={buyCurrency[0]} disabled>...........</option>
                                //         </>
                                //     )
                                // }
 
                            }
                            ) 
                            
                            }
                        </select>
                    </div>
                    <p className="payment-method">Payment method</p>
                    <div className="payment-method-box">
                        <img src={paymentMethod} alt="sepa" />
                        <select onChange={(e) => pickPaymentMethod(e)} name="" id="">
                            <option value={sepa}>Bank transfer</option>
                            <option value={paysera}>Paysera</option>
                            <option value={paypal}>Paypal</option>
                        </select>
                    </div>
                    <button>Buy {buyCurrency[0]}</button>
                </div>
            </section>
    )

}

export default FormXl;