import React from 'react'

export default function Home() {
  return (
    <div className='home'><div id="about" class="about-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center">
          <div class="left-image">
            <img src="assets/images/about-left-image.png" alt="Two Girls working together"/>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="section-heading">
            <h2>Sana özel kampanyalardan yararlanmak için hemen <br/>
              <em>INNOVA</em> &amp; <span>BANK</span> <br/> Kredi Kartı’na başvurabilirsin.</h2>
             <p>Kredi Kartı, ihtiyaç kredisi ve
               hesap başvurularını takip edip
               hangi aşamada olduğunu öğren.</p>
            <div class="row">
              <div class="col-lg-4">
                <div class="fact-item">
                  <div class="count-area-content">
                    <div class="icon">
                      <img src="assets/images/service-icon-01.png" alt=""/>
                    </div>                  
                    <p>Özel avantajlara,</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="fact-item">
                  <div class="count-area-content">
                    <div class="icon">
                      <img src="assets/images/service-icon-02.png" alt=""/>
                    </div>            
                    <p>Güçlü ekonomiye.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="fact-item">
                  <div class="count-area-content">
                    <div class="icon">
                      <img src="assets/images/service-icon-03.png" alt=""/>
                    </div>                
                    <p>Daha fazla kazanmaya var mısın?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </div>
  )
}
