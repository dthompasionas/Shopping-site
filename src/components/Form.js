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

            document.getElementById('thank-you').innerHTML= '';
            document.getElementById('valid-card').innerHTML= 'Please enter valid card information*';
            

            

        } else {
            console.log(paymentMethod);
            
            document.getElementById('valid-card').innerHTML = '';
            document.getElementById('thank-you').innerHTML = 'Thank you for your purchase!';
        }
        
    }



    return (
        <form onSubmit={handleSubmit}>
            <div className='card-input'>
                <CardElement/>
            </div>
            <p id='valid-card'></p>
            <div className='pay-btn'>
                <Button type='submit' disabled= {!stripe} onClick={handleSubmit}>
                    Pay Now
                </Button>
            </div>
            <p id='thank-you'></p>
            
        </form>
    )
}

export default CheckoutForm
