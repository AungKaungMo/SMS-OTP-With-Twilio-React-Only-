import { useState } from 'react'
import './App.css'
import CustomPhoneNumberInput from './components/PhoneInput';

function App() {
  const [phone, setPhone] = useState('');

  return (
    <>
      <CustomPhoneNumberInput

      />
    </>
  )
}

export default App
