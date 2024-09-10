import React from 'react';
import Head from 'next/head';
import { PaymentButton } from '../components/PaymentButton'; // Adjust the path if needed

const PaymentPage = () => {
  return (
    <div>
      <Head>
        <title>Payment Page</title>
        <meta name="description" content="Complete your payment with Google Pay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Complete Your Payment</h1>
        <p>Please click the button below to proceed with Google Pay.</p>
        <PaymentButton />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </footer>

      <style jsx>{`
        div {
          text-align: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
        }
        footer {
          padding: 2rem 0;
          border-top: 1px solid #eaeaea;
          text-align: center;
        }
        footer p {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default PaymentPage;
