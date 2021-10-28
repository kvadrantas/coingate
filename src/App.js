
import './App.scss';
import FormXl from './Components/FormXl';
import FormXs from './Components/FormXs';


function App() {
  return (
    <div className="main">
      <div className="bg-block"></div>
      <div className="content">
        
        <div className="section1">
          <h1>
            Buy Bitcoin, <span>Ethereum, Litecoin and other crypto</span> online
          </h1>
          <FormXs className="FormXs"/>
          <p>Why bother going through complicated exchanges? Buy cryptocurrency with top payment methods like SEPA bank transfer, Credit and Debit Card, Apple Pay, Mobile balance or Klarna. You can buy Bitcoin, Ethereum or any other popular crypto directly to your personal wallet without making any initial deposits. It's as easy as it gets!</p>
          <a className="start-now" href="">Start now &gt;</a>
        </div>

        <div className="section2">
          <FormXl className="FormXl"/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
