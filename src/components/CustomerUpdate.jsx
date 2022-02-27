import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CustomerService from "../services/CustomerService";

export default function CustomerUpdate() {
  let customerService = new CustomerService();
  const { identityNumber } = useParams();
  const [customer, setCustomer] = useState({});

  console.log(customer);
  useEffect(() => {
    customerService
      .getCustomerByIdentityNumber(identityNumber)
      .then((result) => {
        setCustomer(result.data.data);
        console.log(result.data);
      });
  }, []);

  const onClickUpdateSubmit = (e) => {
    e.preventDefault();
    var idValue = customer.id;
    var fullNameValue = document.getElementById("fullName").value;
    var identityNumberValue = document.getElementById("identityNumber").value;
    var monthlyIncomeValue = document.getElementById("monthlyIncome").value;
    var phoneNumberValue = document.getElementById("phoneNumber").value;

    const body = {
      id: idValue,
      fullName: fullNameValue,
      identityNumber: identityNumberValue,
      monthlyIncome: monthlyIncomeValue,
      phoneNumber: phoneNumberValue,
    };
    customerService.update(body).then((result) => {
      toast.success(result.data.message);
    });
  };

  return (
    <div>
      <div class="row">
        <div class="container-form">
          <div class="title">Kullanıcı Güncelle</div>
          <form>
            <div class="customer-details">
              <div class="input-box">
                <span class="details">Ad Soyad</span>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Adınızı ve Soyadınızı giriniz"
                  defaultValue={customer.fullName}
                />
              </div>

              <div class="input-box">
                <span class="details">Kimlik Numarası</span>
                <input
                  id="identityNumber"
                  name="identityNumber"
                  type="text"
                  placeholder="Kimlik Numaranızı giriniz"
                  defaultValue={customer.identityNumber}
                />
              </div>

              <div class="input-box">
                <span class="details">Aylık Gelir</span>
                <input
                  id="monthlyIncome"
                  name="monthlyIncome"
                  type="number"
                  placeholder="Aylık Gelirinizi giriniz"
                  defaultValue={customer.monthlyIncome}
                />
              </div>

              <div class="input-box">
                <span class="details">Telefon Numarası</span>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="Telefon Numaranızı giriniz"
                  defaultValue={customer.phoneNumber}
                />
              </div>
            </div>
            <div class="button">
              <input
                type="submit"
                value="Güncelle"
                onClick={onClickUpdateSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
