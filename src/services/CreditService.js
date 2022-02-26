import axios from 'axios'

export default class CreditService {
      creditApplication(customerDto)  {
        return axios.post("/credits/credit-application", customerDto);
      };

      getAll()  {
        return axios.get("/credits/getall");
      };
  }