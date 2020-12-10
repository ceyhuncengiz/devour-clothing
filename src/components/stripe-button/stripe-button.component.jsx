import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HilkiHSdlLaFh9otJqXgRtpISKWMEq8WxL2xFq9a0WDBLWf1trWaf2Cxyai5K8aOh22Q2gNWKznTTia7zSXgUvE00Is7KmJc8';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful, Thank You!')
    }

    return (
        <StripeCheckout 
          label='Pay Now'
          name='Devour Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://sendeyo.com/up/d/f3eb2117da'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;