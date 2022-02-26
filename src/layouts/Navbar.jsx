import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
  <Link to="/" className="navbar-brand" href="#">INNOVA BANK</Link>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
      <Link to="/" className="nav-link" href="#">Anasayfa <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
      <Link to="/customers" className="nav-link" href="#">Kullanıcılar</Link>
      </li>
      <li className="nav-item">
      <Link to="/credits" className="nav-link" href="#">Hesaplar</Link>
      </li>
    </ul> 
    <Link to="credit-application" className="btn btn-success">Kredi Başvurusu Yap</Link>   
  </div>
</nav>
    </div>
  )
}
