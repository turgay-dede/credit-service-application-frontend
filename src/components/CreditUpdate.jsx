import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreditService from "../services/CreditService";

export default function CreditUpdate() {
  let creditService = new CreditService();
  const [credit, setCredit] = useState({});
  const [creditDto, setCreditDto] = useState({
    fullName: null,
    identityNumber: null,
    monthlyIncome: null,
    phoneNumber: null,
  });
  console.log(credit);

  const { identityNumber } = useParams();

  useEffect(() => {
    creditService
      .getCreditByIdentityNumber(identityNumber)
      .then((result) => setCredit(result.data.data));
  });

  const onChangeIdentityNumber = (event) => {
    this.useState({
      [event.target.name]: event.target.value,
    });
  };
  const onChangeCreditLimit = (event) => {
    this.useState({
      [event.target.name]: event.target.value,
    });
  };
  const onChangeCreditConsent = (event) => {
    this.useState({
      [event.target.name]: event.target.value,
    });
  };

  const onClickUpdateSubmit = () => {
    const { identityNumber, creditLimit, creditConsent } = this.state;

    const body = {
      identityNumber: identityNumber,
      creditLimit: creditLimit,
      creditConsent: creditConsent,
    };
    creditService.update(body).then((result) => {
      console.log(result.data.data);
    });
  };
  return (
    <div>
      <div class="row">
        <div class="container-form">
          <div class="title">Kredi Bilgilerini Güncelle</div>
          <form>
            <div class="customer-details">
              <div class="input-box">
                <span class="details">Kimlik Numarası</span>
                <input
                  id="identityNumber"
                  name="identityNumber"
                  value={credit.identityNumber}
                  type="text"
                  placeholder="Kimlik Numaranızı giriniz"
                  onChange={onChangeIdentityNumber.bind(this)}
                />
              </div>

              <div class="input-box">
                <span class="details">Limit</span>
                <input
                  id="creditLimit"
                  name="creditLimit"
                  value={credit.creditLimit}
                  type="number"
                  placeholder="Aylık Gelirinizi giriniz"
                  onChange={onChangeCreditLimit.bind(this)}
                />
              </div>

              <div class="input-box">
                <span class="details">Onay Bilgisi</span>
                <select id="creditConsent" name="creditConsent" class="form-control">
                  <option selected>Durum</option>
                  <option>CONFIRM</option>
                  <option>REJECT</option>
                </select>
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
