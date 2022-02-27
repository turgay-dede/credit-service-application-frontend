import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import CreditService from "../services/CreditService";
import CreditSearch from "./CreditSearch";

export default function CreditList() {
  const [credits, setCredits] = useState([]);
  let creditService = new CreditService();

  useEffect(() => {
    getAllMethod();
  });

  const onClickDelete = (identityNumber) => {
    creditService
      .delete(identityNumber)
      .then((result) => toast.success(result.data.message));
    getAllMethod();
  };

  const getAllMethod = () => {
    creditService.getAll().then((result) => setCredits(result.data.data));
  };

  return (
    <div>
      <CreditSearch />
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Kimlik Numarası</th>
            <th scope="col">Limit</th>
            <th scope="col">Durum</th>
            <th colSpan={2}>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {credits.map((credit) => (
            <tr key={credit.id}>
              <th scope="row">{credit.id}</th>
              <td>{credit.identityNumber}</td>
              <td>{credit.creditLimit}</td>
              <td>{credit.creditConsent==='CONFIRM' ? <img src="assets/css/images/confirm.png" height={50}/>: <img src="assets/css/images/reject.png" height={50}/>}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onClickDelete(credit.identityNumber)}
                >
                  Sil
                </button>
              </td>

              <td>
                <Link to={`/update/credit/${credit.identityNumber}`}>
                  <button className="btn btn-success">Güncelle</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
