"use client"

import GooglePayButton from '@google-pay/button-react';
import React from 'react'

export const PaymentButton = () => {
  return (
    <div>
    <GooglePayButton
        environment="TEST" // Use "PRODUCTION" for live payments
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example', // Replace with your payment gateway
                  gatewayMerchantId: 'exampleGatewayMerchantId', // Replace with your gateway merchant ID
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '17613812255336763067',
            merchantName: 'Demo Only',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '10.00', // Amount in INR
            currencyCode: 'INR', // Use INR for Indian Rupees
            countryCode: 'IN',
          },
          shippingAddressRequired: true,
          shippingAddressParameters: {
            allowedCountryCodes: ['IN'],
            phoneNumberRequired: true,
          },
        }}
        buttonSizeMode="fill"
      />
    </div>
  )
}
