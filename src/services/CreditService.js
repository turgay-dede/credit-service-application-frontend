import axios from 'axios'

export default class CreditService {
      creditApplication(customerDto)  {
        return axios.post("/credits/credit-application", customerDto);
      };

      getAll()  {
        return axios.get("/credits/getall");
      };

      getCreditByIdentityNumber(identityNumber)  {
        return axios.get("/credits/get-credit/identity-number?identityNumber="+identityNumber);
      };

      delete(identityNumber)  {
        return axios.delete("/credits/delete?identityNumber="+identityNumber);
      };

      update(customerDto)  {
        return axios.post("/credits/update", customerDto);
      };

      
  }