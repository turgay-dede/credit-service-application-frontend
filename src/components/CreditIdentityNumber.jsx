import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreditService from "../services/CreditService";

export default function CreditIdentityNumber() {
  const [credit, setCredit] = useState({});

  const { identityNumber } = useParams();

  useEffect(() => {
    let creditService = new CreditService();
    creditService
      .getCreditByIdentityNumber(identityNumber)
      .then((result) => setCredit(result.data.data));
  });
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Kimlik Numarası</th>
            <th scope="col">Limit</th>
            <th scope="col">Durum</th>
          </tr>
        </thead>
        <tbody>
          <tr key={credit.id}>
            <th scope="row">{credit.id}</th>
            <td>{credit.identityNumber}</td>
            <td>{credit.creditLimit}</td>
            <td>{credit.creditConsent}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
