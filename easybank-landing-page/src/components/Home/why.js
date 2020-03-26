import React, { Component } from 'react';
import "./home.scss";

class Why extends Component {
  render() {
    return(
      <section className="why">
        <h2 className="why-lead">Why choose Easybank?</h2>

        <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
        your finances like never before.</p>

        <span className="choose-icons online-banking"></span>
        <h3 className="why-title">Online Banking</h3>
        <p>Our modern web and mobile applications allow you to keep track of your finances 
        wherever you are in the world.
</p>
        <span className="choose-icons simple-budgeting"></span>
        <h3 className="why-title">Simple Budgeting</h3>
        <p>See exactly where your money goes each month. Receive notifications when you’re 
        close to hitting your limits.
</p>
        <span className="choose-icons fast-onboarding"></span>
        <h3 className="why-title">Fast Onboarding</h3>
        <p>We don’t do branches. Open your account in minutes online and start taking control 
        of your finances right away.</p>

        <span className="choose-icons open-api"></span>
        <h3 className="why-title">Open API</h3>
        <p>Manage your savings, investments, pension, and much more from one account. Tracking 
        your money has never been easier.</p>
      </section>
    )
  }
}

export default Why;
