import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-white bg-white">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
  <Link to="/" className="navbar-brand">
    <img src='assets/images/innova.png' height={130} />
  </Link>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
      <Link to="/" className="nav-link text-dark">Anasayfa <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
      <Link to="/customers" className="nav-link text-dark">Kullanıcılar</Link>
      </li>
      <li className="nav-item">
      <Link to="/credits" className="nav-link text-dark">Hesaplar</Link>
      </li>
    </ul> 
    <div class="main-red-button-hover credit-app-button"><Link to="credit-application" className="main-red-button-hover">Kredi Başvurusu Yap</Link></div>
    
       
  </div>
</nav>
    </div>
  )
}
