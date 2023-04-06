import React, { useState } from 'react'
import styled from 'styled-components'

function CheckoutForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    setLoading(false);
    setIsPaymentSuccessful(true);
  };

  const handleModalClose = () => {
    setIsPaymentSuccessful(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Card number:
          <input
            type="text"
            value={cardNumber}
            onChange={(event) => {
              const formattedValue = event.target.value
                .replace(/[^0-9]/g, '') 
                .replace(/(.{4})/g, '$1 ') 
                .trim()
                .slice(0, 19); 
              setCardNumber(formattedValue);
            }}
            placeholder="4242 4242 4242 4242"
            required
          />
        </label>
        <label>
          Expiry date:
          <input
            type="text"
            value={expiry}
            onChange={(event) => {
              const formattedValue = event.target.value
              .replace(
                /^([1-9]\/|[2-9])$/g,
                "0$1/"
              )
              .replace(
                /^(0[1-9]|1[0-2])$/g,
                "$1/"
              )
              .replace(
                /^([0-1])([3-9])$/g,
                "0$1/$2"
              )
              .replace(
                /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
                "$1/$2"
              )
              .replace(
                /^([0]+)\/|[0]+$/g,
                "0"
              )
              .replace(
                /[^\d/]|^[/]*$/g,
                ""
              )
              .replace(
                /\/\//g,
                "/"
              )
              .slice(0, 5)
              setExpiry(formattedValue)}
            }
            placeholder="MM/YY"
            required
          />
        </label>
        <label>
          CVC:
          <input
            type="text"
            value={cvc}
            onChange={(event) => setCvc(event.target.value)}
            placeholder="123"
            pattern="\d{3}"
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? <div className="spinner"></div> : "Pay"}
        </button>
      </form>
      {isPaymentSuccessful && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <p>Payment is successful!</p>
          </div>
        </div>
      )}
    </div>
  );
}

const StripeCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  form {
    width: 30vw;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
  }
  input {
    border-radius: 6px;
    margin-bottom: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  .result-message {
    line-height: 22px;
    font-size: 16px;
  }
  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
  }
  .hidden {
    display: none;
  }
  #card-error {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    text-align: center;
  }
  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  #payment-request-button {
    margin-bottom: 32px;
  }
  /* Buttons and links */
  button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }
  button:hover {
    filter: contrast(115%);
  }
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }
  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }
  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .spinner:before,
  .spinner:after {
    position: absolute;
    content: '';
  }
  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }
  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .modal {
    position: fixed; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-content {
    background-color: white;
    padding: 40px 60px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    position: relative;
    text-align: center;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  p {
    font-size: 18px;
    margin: 10px 0;
    color: green
  }
  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
    }
  }
`

export default StripeCheckout

