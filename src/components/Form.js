import React from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { Button } from 'react-bootstrap';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    async function handleSubmit(e) {
        e.preventDefault()

        const { error, paymentMethod } = await stripe.createPaymentMethod(
            {
                type: 'card',
                card: elements.getElement(CardElement),
            },
        );

        if(error) {
            console.log(error);
        } else {
            console.log(paymentMethod);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='card-input'>
                <CardElement/>
            </div>
            <div className='pay-btn'>
                <Button type='submit' disabled= {!stripe} onClick={handleSubmit}>
                    Pay Now
                </Button>
            </div>
            
        </form>
    )
}

export default CheckoutForm
