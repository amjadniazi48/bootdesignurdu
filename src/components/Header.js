import React from 'react'

const Header = () => {
  return (
   
    <header className="header">
      <div className="mobile-sticky fs-6 bg-secondary">
        <div className="container">   
          <nav className="navbar navbar-expand-lg navbar-dark px-0 py-0">    
            <a id="showStartPush" aria-label="sidebar menu" className="navbar-toggler sidebar-menu-trigger side-hamburger border-0 px-0" href="javascript:;">
              <span className="hamburger-icon">
                <span></span><span></span><span></span><span></span>
              </span>
            </a>
       
            <a href="index.html">
              <img className="mobile-logo img-fluid d-lg-none mx-auto" src="../../assets/img/logo/logo-mobile.png" alt="موقع ويب الشعار" />
            </a>
          
            <button className="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo2" aria-controls="navbarTogglerDemo2" aria-expanded="false" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" viewBox="0 0 512 512"><path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z" 
             /><line x1="338.29" y1="338.29" x2="448" y2="448" /></svg>
            </button>
          
            <div id="navbarTogglerDemo" className="collapse navbar-collapse">
            
              <div className="date-area d-none d-lg-block">
                <time className="navbar-text me-2" >الاثنين 28 أكتوبر 2019</time>
              </div>
             
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link active" href="#">الصفحة الرئيسية</a></li>
                <li className="nav-item"><a className="nav-link" href="about-us.html">معلومات عنا</a></li>
                <li className="nav-item"><a className="nav-link" href="contact-us.html">اتصل بنا</a></li>
                <li className="nav-item"><a className="nav-link" href="#" target="_blank">اشتري الآن</a></li>
              </ul>
             
              <ul className="navbar-nav ms-auto text-center">
                <li className="nav-item"><a className="nav-link" href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a></li>
                <li className="nav-item"><a className="nav-link" href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a></li>
                <li className="nav-item"><a className="nav-link" href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="youtube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                  </svg>
                </a></li>
                <li className="nav-item"><a className="nav-link" href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 512 512"><path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"/><path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"/><path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"/></svg>
                </a></li>
                <li className="nav-item"><a className="nav-link" href="https://vimeo.com/" target="_blank" rel="noopener noreferrer" aria-label="vimeo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 512 512"><path d="M476.9,114c-5-23.39-17.51-38.78-40.61-46.27s-64.92-4.5-94.12,16.79c-26.79,19.51-46.26,54.42-54,78.28a4,4,0,0,0,5.13,5c10.77-3.8,21.72-7.1,34-6.45,15,.8,24.51,12,24.91,25.29.3,9.79-.2,18.69-3.6,27.68C337.87,243,321,270.78,301.06,295.07a72.49,72.49,0,0,1-10,9.89c-10.21,8.29-18.81,6.1-25.41-5.2-5.4-9.29-9-18.88-12.2-29.08-12.4-39.67-16.81-80.84-23.81-121.52-3.3-19.48-7-39.77-18-56.86-11.6-17.79-28.61-24.58-50-22-14.7,1.8-36.91,17.49-47.81,26.39,0,0-56,46.87-81.82,71.35l21.2,27s17.91-12.49,27.51-18.29c5.7-3.39,12.4-4.09,17.2.2,4.51,3.9,9.61,9,12.31,14.1,5.7,10.69,11.2,21.88,14.7,33.37,13.2,44.27,25.51,88.64,37.81,133.22,6.3,22.78,13.9,44.17,28,63.55,19.31,26.59,39.61,32.68,70.92,21.49,25.41-9.09,46.61-26.18,66-43.87,33.11-30.18,59.12-65.36,85.52-101.14C433.59,270,450.49,242,464.59,210.72,478.5,179.74,484,147.26,476.9,114Z"/></svg>
                </a></li>
              </ul>
       
            </div>
          </nav>
        
          <div className="collapse navbar-collapse col-12 py-2" id="navbarTogglerDemo2">
            <form className="form-inline" action="https://demo.bootstrap.news/bootnews/html/rtl/search.html">
              <div className="input-group w-100">
                <input type="text" className="form-control border border-end-0" placeholder="بحث..." aria-label="بحث" />
                <button className="btn btn-primary" type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 512 512"><path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z" 
                  />
                
                </svg>
                </button>
              </div>
            </form>
          </div>
        
        </div>
      </div>
    </header>
  )
}

export default Header