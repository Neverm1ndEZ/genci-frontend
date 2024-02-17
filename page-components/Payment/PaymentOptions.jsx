import React, { useState } from 'react';
import { Card } from 'iconsax-react'; // Import the Card icon from Iconsax
import Image from "next/image";
import chase from "@/assets/img/payment/p1.svg"
import mastercard from "@/assets/img/payment/mastercard.svg"
import visa from "@/assets/img/payment/visa.svg"
const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [cardInfo, setCardInfo] = useState({
    name: '',
    cardNumber: '',
    securityCode: '',
    expiryDate: '',
  });

  const paymentOptions = [
    { id: 1, name: 'Credit Card' },
    { id: 2, name: 'PayPal' },
    // Add more payment options here
  ];

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  return (
    <div>
      <ul>
        {paymentOptions.map((option) => (
          <li key={option.id} className="border-2  bg-darkAccent1 border-grayBorderLight">
            <div className="gap-2 w-full justify-between  flex items-center px-4 py-3 font-medium">
              <div className="flex gap-1.5  items-center">
              <input
                type="radio"
                name="paymentOption"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
              />
              {selectedOption === option.id && option.id === 1 && (
                <div className="bg-darkBackgroundPrimary rounded p-1.5">
                  <Card size="24" color="#ffffff" />
                </div>
              )}
              <p className="text-sm md:text-base">
              {option.name}
              </p>
              </div>
              {selectedOption === option.id && option.id === 1 && (
                <div className="flex gap-1.5 rounded p-1.5 self-end">
                  <Image src={chase} alt="chase"/>
                  <Image src={mastercard} alt="mastercard" className="bg-white w-[52px] h-[32px] p-2 rounded"/>
                  <Image src={visa} alt="visa" className="bg-white w-[52px] h-[32px] p-2 rounded"/>
                </div>
              )}
            </div>
            {selectedOption === option.id && option.id === 1 && (
              <div className="bg-darkBackgroundSecondary p-5">
                <form className="flex flex-col gap-5">
                  <input
                    type="text"
                    name="name"
                    value={cardInfo.name}
                    onChange={handleInputChange}
                    className="bg-darkAccent1 outline-none p-2 md:p-4 text-sm w-full border border-grayBorderLight rounded-lg md:rounded-xl placeholder-white"
                    placeholder="Name on Card"
                  />
                  <input
                    type="number"
                    name="cardNumber"
                    value={cardInfo.cardNumber}
                    onChange={handleInputChange}
                    className="bg-darkAccent1 outline-none p-2 md:p-4 text-sm w-full border border-grayBorderLight rounded-lg md:rounded-xl placeholder-white"
                    placeholder="Card Number"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      name="securityCode"
                      value={cardInfo.securityCode}
                      onChange={handleInputChange}
                      placeholder="Security Code"
                      className="bg-darkAccent1 outline-none p-2 md:p-4 text-sm w-full border border-grayBorderLight rounded-lg md:rounded-xl placeholder-white"
                    />
                    <input
                      type="text"
                      name="expiryDate"
                      value={cardInfo.expiryDate}
                      onChange={handleInputChange}
                      className="bg-darkAccent1 outline-none p-2 md:p-4 text-sm w-full border border-grayBorderLight rounded-lg md:rounded-xl placeholder-white"
                      placeholder="MM/YY"
                    />
                  </div>
                </form>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentOptions;
