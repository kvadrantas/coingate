import sepa from "../img/sepa.jpeg"
import paysera from "../img/paysera.jpeg"
import paypal from "../img/paypal.jpeg"
import Icon from "react-crypto-icons";


function FormXl({paymentMethod, pickPaymentMethod, payCurrency, pickPayCurrency, payCurrencies, buyCurrency, pickBuyCurrency, buyCurrencies}) {
// console.log(payCurrencies)
    return (
            <section className="FormXl">
                <div className="back-block">

                </div>
                <div className="front-block">
                    <div className="pay">
                        <label htmlFor="">Pay</label>
                        <input type="text" />
                        <div className="icon-cnt"><Icon className="icon" name={('' + payCurrency).toLowerCase()} /></div>
                        <select onChange={(e) => pickPayCurrency(e)} name="" id="">
                            {payCurrencies.map(e => <option value={e}>{e}</option>)}
                        </select>
                    </div>
                    <div className="buy">
                        <label htmlFor="">Buy</label>
                        <input type="text" />
                        <div className="icon-cnt"><Icon className="icon" name={('' + buyCurrency).toLowerCase()} /></div>
                        <select onChange={(e) => pickBuyCurrency(e)} name="" id="">
                            {buyCurrencies.map(e => <option value={e}>{e}</option>)}
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
                    <button>Buy {buyCurrency}</button>
                </div>
            </section>
    )

}

export default FormXl;