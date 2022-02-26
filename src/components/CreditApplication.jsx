import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CreditService from "../services/CreditService"

export default function Home() {
  const [customerDto, setCustomerDto] = useState({
    fullName: null,
    identityNumber: null,
    monthlyIncome: null,
    phoneNumber: null,
  });

  let creditService = new CreditService()

  const onChange = (event) => {
    const { name, value } = event.target;
    const assignForm = { ...customerDto };
    assignForm[name] = value;
    setCustomerDto(assignForm);
  };

  const onClickSubmit = (event) => {
    event.preventDefault();
    const { fullName, identityNumber, monthlyIncome, phoneNumber } =
      customerDto;

    const body = {
      fullName: fullName,
      identityNumber: identityNumber,
      monthlyIncome: monthlyIncome,
      phoneNumber: phoneNumber,
    };
    console.log(body);
    creditService.creditApplication(body).then((result) => {
    //  console.log(result.data.message);
      console.log(result.data.data.creditLimit);
      console.log(result.data.data.creditConsent);
      result.data.data.creditConsent === 'CONFIRM' ?
      toast.success(`BASVURUNUZ ONAYLANDI. Limit: ${result.data.data.creditLimit}`) : toast.error("BASVURUNUZ REDDEDILDI")
    });
  };

  return (    
    <div class="row">
    <div class="container-form">
      <div class="title">Kredi Başvurusu</div>
      <form>
        <div class="customer-details">     
          <div class="input-box">
            <span class="details">Ad Soyad</span>
            <input id="fullName" name="fullName" type="text" placeholder="Adınızı ve Soyadınızı giriniz" onChange={onChange} />
          </div>
  
          <div class="input-box">
            <span class="details">Kimlik Numarası</span>
            <input id="identityNumber" name="identityNumber" type="text" placeholder="Kimlik Numaranızı giriniz" onChange={onChange} />
          </div>
  
          <div class="input-box">
            <span class="details">Aylık Gelir</span>
            <input id="monthlyIncome" name="monthlyIncome" type="number" placeholder="Aylık Gelirinizi giriniz" onChange={onChange} />
          </div>
  
          <div class="input-box">
            <span class="details">Telefon Numarası</span>
            <input id="phoneNumber" name="phoneNumber" type="text" placeholder="Telefon Numaranızı giriniz" onChange={onChange} />
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Başvur" onClick={onClickSubmit} />
        </div>
      </form>
    </div>
  </div> 
  );
}
