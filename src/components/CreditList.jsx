import React, { useEffect, useState } from "react";
import CreditService from "../services/CreditService";

export default function CreditList() {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    let creditService = new CreditService();
    creditService.getAll().then((result) => setCredits(result.data.data));
  }, []);
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
          {credits.map((credit) => (
            <tr key={credit.id}>
              <th scope="row">{credit.id}</th>
              <td>{credit.identityNumber}</td>
              <td>{credit.creditLimit}</td>
              <td>{credit.creditConsent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
