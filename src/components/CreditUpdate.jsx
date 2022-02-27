import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreditService from "../services/CreditService";
import { toast } from "react-toastify";

export default function CreditUpdate() {
  let creditService = new CreditService();

  const { identityNumber } = useParams();
  const [credit, setCredit] = useState({});

  useEffect(() => {
    creditService.getCreditByIdentityNumber(identityNumber).then((result) => {
      setCredit(result.data.data);
      console.log(result.data);
    });
  }, []);

  const onClickUpdateSubmit = (e) => {
    e.preventDefault();
    var creditConsentValue = document.getElementById("creditConsent").value;
    var identityNumberValue = document.getElementById("identityNumber").value;
    var creditLimitValue = document.getElementById("creditLimit").value;
    var idValue = credit.id;

    const body = {
      id: idValue,
      identityNumber: identityNumberValue,
      creditLimit: creditLimitValue,
      creditConsent: creditConsentValue,
    };
    creditService.update(body).then((result) => {
      toast.success(result.data.message);
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
                  type="text"
                  placeholder="Kimlik Numaranızı giriniz"
                  defaultValue={credit.identityNumber}
                />
              </div>

              <div class="input-box">
                <span class="details">Limit</span>
                <input
                  id="creditLimit"
                  name="creditLimit"
                  defaultValue={credit.creditLimit}
                  type="number"
                  placeholder="Aylık Gelirinizi giriniz"
                />
              </div>

              <div class="input-box">
                <span class="details">Onay Bilgisi</span>
                <select
                  id="creditConsent"
                  name="creditConsent"
                  class="form-control"
                >
                  <option selected>
                    {credit.creditConsent === "CONFIRM" ? "CONFIRM" : "REJECT"}
                  </option>
                  <option value={"CONFIRM"}>CONFIRM</option>
                  <option value={"REJECT"}>REJECT</option>
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
