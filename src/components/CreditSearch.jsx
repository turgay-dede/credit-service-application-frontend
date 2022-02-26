import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CreditSearch() {    
  const [identityNumber,setIdentityNumber] = useState('')
  return (
    <div>
        <div className="credit-search">
     
     <form class="d-flex">
       <input
         class="form-control me-2 ml-4"
         type="search"
         placeholder="Kimlik numarası"
         aria-label="Kimlik numarası"
         onChange={e=>{setIdentityNumber(e.target.value)}}
       />
       <Link to={`/get/${identityNumber}`} class="btn btn-outline-success" type="submit">
         Ara
       </Link>
     </form>
  
     </div>
    </div>
  )
}
