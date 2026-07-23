import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [conversionType, setConversionType] = useState('INR_TO_EUR');
  const [result, setResult] = useState(null);

  // Conversion rates (Fixed for demo purposes: 1 Euro = 90 Rupees)
  const RATE_EUR_TO_INR = 90;
  const RATE_INR_TO_EUR = 1 / RATE_EUR_TO_INR;

  const handleSubmit = (e) => {
    // Prevent default form submission behaviour
    e.preventDefault();

    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      setResult('Please enter a valid positive number.');
      return;
    }

    let calculated;
    if (conversionType === 'INR_TO_EUR') {
      calculated = numericAmount * RATE_INR_TO_EUR;
      setResult(`₹${numericAmount.toLocaleString('en-IN')} INR = €${calculated.toFixed(2)} EUR`);
    } else {
      calculated = numericAmount * RATE_EUR_TO_INR;
      setResult(`€${numericAmount.toLocaleString('en-US')} EUR = ₹${calculated.toLocaleString('en-IN', { maximumFractionDigits: 2 })} INR`);
    }
  };

  return (
    <div className="converter-card">
      <div className="converter-header">
        <h4>💱 Currency Convertor</h4>
        <p>Convert between Indian Rupees (INR) and Euros (EUR)</p>
      </div>

      <form onSubmit={handleSubmit} className="converter-form">
        {/* Conversion Type Selector */}
        <div className="input-group">
          <label htmlFor="conversion-select">Direction</label>
          <select 
            id="conversion-select"
            value={conversionType} 
            onChange={(e) => {
              setConversionType(e.target.value);
              setResult(null);
            }}
          >
            <option value="INR_TO_EUR">Indian Rupees (INR) to Euro (EUR)</option>
            <option value="EUR_TO_INR">Euro (EUR) to Indian Rupees (INR)</option>
          </select>
        </div>

        {/* Amount Input */}
        <div className="input-group">
          <label htmlFor="amount-input">Amount</label>
          <input 
            id="amount-input"
            type="number" 
            placeholder={conversionType === 'INR_TO_EUR' ? "Enter amount in ₹" : "Enter amount in €"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            step="any"
            required
          />
        </div>

        {/* Submit button invoking handleSubmit */}
        <button type="submit" className="convert-button">
          Convert
        </button>
      </form>

      {/* Render result */}
      {result && (
        <div className="converter-result animate-fade-in">
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default CurrencyConvertor;
