import sepa from "../img/sepa.jpeg"

function FormXs() {

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
                    <img src={sepa} alt="sepa" />
                    <select name="" id="">
                        <option value="">Bank transfer</option>
                        <option value="">Paysera</option>
                        <option value="">Paypal</option>
                    </select>
                </div>
                <button>Buy BTC</button>
            </div>
        </div>
    )

}

export default FormXs;