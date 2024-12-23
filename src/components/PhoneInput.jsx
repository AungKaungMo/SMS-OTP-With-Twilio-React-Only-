import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import axios from "axios";

const PhoneNumberInput = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otpSent, setOtpSent] = useState(false)

    const sendOTP = async () => {
        const accountSid = import.meta.env.VITE_APP_ACCOUNT_SID;
        const authToken = import.meta.env.VITE_APP_AUTH_TOKEN;
        const fromPhoneNumber = import.meta.env.VITE_APP_FROM_PHONE;

        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        try {
            const response = await axios.post(
                `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
                new URLSearchParams({
                    To: '+' + phoneNumber,
                    From: fromPhoneNumber,
                    Body: `Your OTP is: ${otp}`,
                }),
                {
                    auth: {
                        username: accountSid,
                        password: authToken,
                    },
                }
            );
            if (!response.error_code) {
                setOtpSent(true)
            }

        } catch (error) {

        }
    }

    return (
        <div className="w-full max-w-md mx-auto p-4">
            <div className="flex flex-col gap-2">
                <label className="font-bold">Phone Number</label>
                <PhoneInput country={"mm"} value={phoneNumber} onChange={setPhoneNumber} />
            </div>

            <div className="mt-9 mb-4">
                <button onClick={sendOTP} className={`p-2 rounded-md bg-red-500 text-white hover:opacity-80 transition-all duration-150 px-4 font-bold `} disabled={otpSent}>Submit</button>
            </div>
            {otpSent && <p>OTP Send Successfully.</p>}
        </div >
    );
};

export default PhoneNumberInput;
