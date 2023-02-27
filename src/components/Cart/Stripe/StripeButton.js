import React, { Component } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Button } from '../../LandingPage/Product/Product'
import styled from 'styled-components'
import config from "../../../config";

class StripeButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  componentDidMount () {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)

    if (query.get('success')) {
      this.setState('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled')) {
      this.setState(
        'Order canceled -- continue to shop around and checkout when you\'re ready.'
      )
    }
  }

  handleClick = async () => {
    const stripePromise = loadStripe(config.stripePublicKey)
    const stripe = await stripePromise

    const response = await fetch(config.apiUrl + '/create-checkout-session', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })

    const session = await response.json()

    // When the customer clicks on the button, redirect them to Checkout.
    await stripe.redirectToCheckout({
      sessionId: session.id
    })

    // if (result.error) {
    //   // If `redirectToCheckout` fails due to a browser or network
    //   // error, display the localized error message to your customer
    //   Using custom error messaging
    //   console.log(result.error.message)
    // }
  }

  render () {
    const Button = ({ handleClick }) => (
      <CheckoutButton type="button" id="checkout-button" role="link" onClick={handleClick}>
        Checkout
      </CheckoutButton>
    )

    const Message = ({ message }) => (
      <section>
        <p>{message}</p>
      </section>
    )

    return this.state.message ? <Message message={this.state.message} /> : <Button handleClick={this.handleClick} />
  }
}

const CheckoutButton = styled(Button)`
  margin: 30px 0;
  max-width: 200px;
  float: right;
  background-color: rgb(0,116,102);
  color: white;
`

export default StripeButton
