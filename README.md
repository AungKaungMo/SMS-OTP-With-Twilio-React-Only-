# Mini SMS OTP Service

## Overview

This is a lightweight service for sending SMS-based OTP (One-Time Password) notifications. It is designed for seamless integration with applications that require user authentication or verification. The service uses Twilio for SMS delivery and React for the frontend interface.

## Features

1. Send OTPs via SMS

- Twilio-powered SMS delivery.

- Configurable OTP length and validity duration.

## Tech Stack

### Backend

- Twilio: For sending SMS messages.

### Frontend

React: For building a dynamic user interface.

Axios: For making API requests.

## Prerequisites

- Twilio Account: You need a Twilio account and an API key.
  
## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AungKaungMo/SMS-OTP-With-React-Only
cd SMS-OTP-With-React-Only
````

2. Set Up Environment Variables

Create a .env file in the root directory and add the following configurations:

```bash
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number
````

3. Installation & Run Project

   - npm install
  
   - npm run dev

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries or feedback, feel free to contact us at moeaungkaung91@gmail.com.

