import sepa from "../img/sepa.jpeg"
import paysera from "../img/paysera.jpeg"
import paypal from "../img/paypal.jpeg"


function FormXs({paymentMethod, pickPaymentMethod}) {

    return (

        <div className="FormXs">
            <div className="front-block2">
                <div className="pay">
                    <label htmlFor="">Pay</label>
                    <input type="text" />
                    <i className="fas fa-euro-sign"></i>
                    <select name="" id="">
                        <option value="">EUR</option>
                        <option value="">BTC</option>
                    </select>
                </div>
                <div className="buy">
                    <label htmlFor="">Buy</label>
                    <input type="text" />
                    <i className="fas fa-euro-sign"></i>
                    <select name="" id="">
                        <option value="">EUR</option>
                        <option value="">BTC</option>
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
                <button>Buy BTC</button>
            </div>
        </div>
    )

}

export default FormXs;