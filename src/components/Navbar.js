import React from 'react'
const Navbar = () => {

  return (
      <>
    <div id="showbacktop" className="showbacktop full-nav bg-white border-none border-lg-1 border-bottom shadow-b-sm py-0">
      <div className="container">
        <nav id="main-menu" className="main-menu navbar navbar-expand-lg navbar-light px-2 px-lg-0 py-0">
        
          <div id="navbarTogglerDemo1" className="collapse navbar-collapse hover-mode">
        
            <div className="logo-showbacktop">
              <a href="index.html">
                <img className="img-fluid" src="../../assets/img/logo/default-logo.png" alt="موقع ويب الشعار" />
              </a>
            </div>

         
            <ul id="start-main" className="navbar-nav main-nav navbar-uppercase first-start-lg-0">
              <li className="nav-item dropdown">
                <a id="navbarhome" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"  href="#">الصفحة الرئيسية</a>
             
                <ul className="dropdown-menu" aria-labelledby="navbarhome">
                  <li><a className="dropdown-item" href="index.html">الصفحة الرئيسية - افتراضي</a></li>
                  <li><a className="dropdown-item" href="index-boxed.html">الصفحة الرئيسية - محاصر</a></li>
                </ul>
              
              </li>

              <li className="nav-item"><a className="nav-link" href="category.html">اعمال</a></li>

           
              <li className="nav-item mega-dropdown dropdown">
                <a id="navbarmega2" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"  href="#">ميجا</a>
                <div id="vertical-tabs" className="dropdown-menu mega w-100 px-3 py-0" aria-labelledby="navbarmega2">
                  <div className="row mega-hovers">
                    <div className="col-sm-3 col-md-2 vertical-tabs hover-tabs px-0 border-end-sm">
                   
                      <ul className="nav nav-tabs text-center py-4 border-start-0 border-end-0 w-100" role="tablist">
                        <li className="nav-item">
                          <a id="nav-one" className="nav-link fw-normal active" href="#mega-one" role="tab" data-bs-toggle="tab" aria-controls="mega-one" aria-selected="true">اعمال</a>
                        </li>
                        <li className="nav-item">
                          <a id="nav-two" className="nav-link fw-normal" href="#mega-two" role="tab" data-bs-toggle="tab" aria-controls="mega-two" aria-selected="false">السفر</a>
                        </li>
                        <li className="nav-item">
                          <a id="nav-three" className="nav-link fw-normal" href="#mega-three" role="tab" data-bs-toggle="tab" aria-controls="mega-three" aria-selected="false">رياضات</a>
                        </li>
                        <li className="nav-item">
                          <a id="nav-four" className="nav-link fw-normal" href="#mega-four" role="tab" data-bs-toggle="tab" aria-controls="mega-three" aria-selected="false">موضه</a>
                        </li>
                      </ul>
                    
                    </div>
                    <div className="col-sm-9 col-md-10 p-4">
                    
                      <div id="mega-tabs" className="tab-content">
                     
                        <div id="mega-one" className="tab-pane show active" role="tabpanel" aria-labelledby="nav-one">
                          <div className="row">
                          
                            <article className="col-6 col-lg-3">
                              <div className="card card-full hover-a mb-4">
                            
                                <div className="ratio_203-114 image-wrapper">
                                  <a href="single.html">
                                    <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/203x114/img1.jpg" alt="وصف الصورة" />
                                  </a>
                                </div>
                              
                                <div className="card-body">
                                  <h3 className="card-title h6">
                                    <a href="single.html">يبدأ مسار أسهم Apple وينتهي مع iPhone</a>
                                  </h3>
                                  <div className="card-text text-muted small">
                                    <time >22 أكتوبر 2019</time>
                                    <span title="12 تعليق" className="float-end">
                                      <span className="icon-comments"></span> 12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                         
                            <article className="col-6 col-lg-3">
                              <div className="card card-full hover-a mb-4">
                              
                                <div className="ratio_203-114 image-wrapper">
                                  <a href="single.html">
                                    <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/203x114/img2.jpg" alt="وصف الصورة" />
                                  </a>
                                </div>
                              
                                <div className="card-body">
                                  <h3 className="card-title h6">
                                    <a href="single.html">هل تريد أفضل عروض الجمعة البيضاء؟ توجه إلى المتجر</a>
                                  </h3>
                                  <div className="card-text text-muted small">
                                    <time >22 أكتوبر 2019</time>
                                    <span title="12 تعليق" className="float-end">
                                      <span className="icon-comments"></span> 12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                           
                            <article className="col-6 col-lg-3">
                              <div className="card card-full hover-a mb-4">
                               
                                <div className="ratio_203-114 image-wrapper">
                                  <a href="single.html">
                                    <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/203x114/img3.jpg" alt="وصف الصورة" />
                                  </a>
                                </div>
                             
                                <div className="card-body">
                                  <h3 className="card-title h6">
                                    <a href="single.html">دبي تطلق تجربة لخزان القرش في الشرق الأوسط</a>
                                  </h3>
                                  <div className="card-text text-muted small">
                                    <time >22 أكتوبر 2019</time>
                                    <span title="12 تعليق" className="float-end">
                                      <span className="icon-comments"></span> 12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                          
                            <article className="col-6 col-lg-3">
                              <div className="card card-full hover-a mb-4">
                               
                                <div className="ratio_203-114 image-wrapper">
                                  <a href="single.html">
                                    <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/203x114/img4.jpg" alt="وصف الصورة" />
                                  </a>
                                </div>
                              
                                <div className="card-body">
                                  <h3 className="card-title h6">
                                    <a href="single.html">تكافح الأسواق الأوروبية لتغلق أعلى ؛ النفط في التركيز</a>
                                  </h3>
                                  <div className="card-text text-muted small">
                                    <time >22 أكتوبر 2019</time>
                                    <span title="12 تعليق" className="float-end">
                                      <span className="icon-comments"></span> 12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                           
                          </div>
                        </div>
                     
                        <div id="mega-two" className="tab-pane" role="tabpanel" aria-labelledby="nav-two">
                          <div className="row">
                        
                            <article className="col-6 col-lg-3">
                              <div className="card card-full hover-a mb-4">
                               
                                <div className="ratio_203-114 image-wrapper">
                                  <a href="single.html">
                                    <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/203x114/img5.jpg" alt="وصف الصورة" />
                                  </a>
                                </div>
                             
                                <div className="card-body">
                                  <h3 className="card-title h6">
                                    <a href="single.html">تعرف على نادي راكبي الدراجات النارية لجميع النساء في نيو أورلينز</a>
                                  </h3>
                                  <div className="card-text text-muted small">
                                    <time >22 أكتوبر 2019</time>
                                    <span title="12 تعليق" className="float-end">
                                      <span className="icon-comments"></span> 12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                        
                            <article className="col-6 col-lg-3">
                              <div className="card card-full hover-a mb-4">
                              
                                <div className="ratio_203-114 image-wrapper">
                                  <a href="single.html">
                                    <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/203x114/img6.jpg" alt="وصف الصورة" />
                                  </a>
                                </div>
                             
                                <div className="card-body">
                                  <h3 className="card-title h6">
                                    <a href="single.html">يعتمد مستقبل ناسكار على هؤلاء البالغين من العمر 5 سنوات</a>
                                  </h3>
                                  <div className="card-text text-muted small">
                                    <time >22 أكتوبر 2019</time>
                                    <span title="12 تعليق" className="float-end">
                                      <span className="icon-comments"></span> 12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                          
                            <article className="col-6 col-lg-3">
                              <div className="card card-full hover-a mb-4">
                            
                                <div className="ratio_203-114 image-wrapper">
                                  <a href="single.html">
                                    <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/203x114/img7.jpg" alt="وصف الصورة" />
                                  </a>
                                </div>
                              
                                <div className="card-body">
                                  <h3 className="card-title h6">
                                    <a href="single.html">قرية في الهند أصبحت فيها الحياة النظيفة عامل جذب</a>
                                  </h3>
                                  <div className="card-text text-muted small">
                                    <time >22 أكتوبر 2019</time>
                                    <span title="12 تعليق" className="float-end">
                                      <span className="icon-comments"></span> 12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                         
                            <article className="col-6 col-lg-3">
                              <div className="card card-full hover-a mb-4">
                              
                                <div className="ratio_203-114 image-wrapper">
                                  <a href="single.html">
                                    <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/203x114/img8.jpg" alt="وصف الصورة" />
                                  </a>
                                </div>
                              
                                <div className="card-body">
                                  <h3 className="card-title h6">
                                    <a href="single.html">مفوض مدينة نيويورك باركس حول تجربة المكان</a>
                                  </h3>
                                  <div className="card-text text-muted small">
                                    <time >22 أكتوبر 2019</time>
                                    <span title="12 تعليق" className="float-end">
                                      <span className="icon-comments"></span> 12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                          
                          </div>
                        </div>
                       
                        <div id="mega-three" className="tab-pane" role="tabpanel" aria-labelledby="nav-three">
                          <div className="row">
                          
                            <article className="col-6 col-lg-3">
                              <div className="card card-full hover-a mb-4">
                             
                                <div className="ratio_203-114 image-wrapper">
                                  <a href="single.html">
                                    <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/203x114/img9.jpg" alt="وصف الصورة" />
                                  </a>
                                </div>
                               
                                <div className="card-body">
                                  <h3 className="card-title h6">
                                    <a href="single.html">بطل العالم والأولمبياد فون يتقاعد قائلا إن جسده مكسور</a>
                                  </h3>
                                  <div className="card-text text-muted small">
                                    <time >22 أكتوبر 2019</time>
                                    <span title="12 تعليق" className="float-end">
                                      <span className="icon-comments"></span> 12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                         
                            <article className="col-6 col-lg-3">
                              <div className="card card-full hover-a mb-4">
                             
                                <div className="ratio_203-114 image-wrapper">
                                  <a href="single.html">
                                    <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/203x114/img10.jpg" alt="وصف الصورة" />
                                  </a>
                                </div>
                              
                                <div className="card-body">
                                  <h3 className="card-title h6">
                                    <a href="single.html">سيلعب برشلونة مع ريال في نصف نهائي كأس الملك</a>
                                  </h3>
                                  <div className="card-text text-muted small">
                                    <time >22 أكتوبر 2019</time>
                                    <span title="12 تعليق" className="float-end">
                                      <span className="icon-comments"></span> 12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                        
                            <article className="col-6 col-lg-3">
                              <div className="card card-full hover-a mb-4">
                               
                                <div className="ratio_203-114 image-wrapper">
                                  <a href="single.html">
                                    <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/203x114/img11.jpg" alt="وصف الصورة" />
                                  </a>
                                </div>
                              
                                <div className="card-body">
                                  <h3 className="card-title h6">
                                    <a href="single.html">تفوز بانكس من جي بي بالميدالية الفضية على الجليد في بطولة العالم للأبطال</a>
                                  </h3>
                                  <div className="card-text text-muted small">
                                    <time >22 أكتوبر 2019</time>
                                    <span title="12 تعليق" className="float-end">
                                      <span className="icon-comments"></span> 12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                           
                            <article className="col-6 col-lg-3">
                              <div className="card card-full hover-a mb-4">
                              
                                <div className="ratio_203-114 image-wrapper">
                                  <a href="single.html">
                                    <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/203x114/img12.jpg" alt="وصف الصورة" />
                                  </a>
                                </div>
                              
                                <div className="card-body">
                                  <h3 className="card-title h6">
                                    <a href="single.html">يؤمن Laugher &amp; Goodfellow الذهب في المنافسة الأولى كزوج</a>
                                  </h3>
                                  <div className="card-text text-muted small">
                                    <time >22 أكتوبر 2019</time>
                                    <span title="12 تعليق" className="float-end">
                                      <span className="icon-comments"></span> 12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                          
                          </div>
                        </div>
                      
                        <div id="mega-four" className="tab-pane" role="tabpanel" aria-labelledby="nav-four">
                     
                          <div className="row">
                         
                            <article className="col-6 col-lg-3">
                              <div className="card card-full hover-a mb-4">
                            
                                <div className="ratio_203-114 image-wrapper">
                                  <a href="single.html">
                                    <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/203x114/img13.jpg" alt="وصف الصورة" />
                                  </a>
                                </div>
                            
                                <div className="card-body">
                                  <h3 className="card-title h6">
                                    <a href="single.html">إذا كان صوتها فقط هو الذي يمكنه تغيير طريقة لعب ميتس</a>
                                  </h3>
                                  <div className="card-text text-muted small">
                                    <time >22 أكتوبر 2019</time>
                                    <span title="12 تعليق" className="float-end">
                                      <span className="icon-comments"></span> 12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                         
                            <article className="col-6 col-lg-3">
                              <div className="card card-full hover-a mb-4">
                              
                                <div className="ratio_203-114 image-wrapper">
                                  <a href="single.html">
                                    <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/203x114/img14.jpg" alt="وصف الصورة" />
                                  </a>
                                </div>
                               
                                <div className="card-body">
                                  <h3 className="card-title h6">
                                    <a href="single.html">إيجاد التمكين في عجلتين وخوذة</a>
                                  </h3>
                                  <div className="card-text text-muted small">
                                    <time >22 أكتوبر 2019</time>
                                    <span title="12 تعليق" className="float-end">
                                      <span className="icon-comments"></span> 12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                          
                            <article className="col-6 col-lg-3">
                              <div className="card card-full hover-a mb-4">
                              
                                <div className="ratio_203-114 image-wrapper">
                                  <a href="single.html">
                                    <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/203x114/img15.jpg" alt="وصف الصورة" />
                                  </a>
                                </div>
                              
                                <div className="card-body">
                                  <h3 className="card-title h6">
                                    <a href="single.html">يحتفل المشجعون في باريس بعد وصول الفريق إلى نهائي كأس العالم</a>
                                  </h3>
                                  <div className="card-text text-muted small">
                                    <time >22 أكتوبر 2019</time>
                                    <span title="12 تعليق" className="float-end">
                                      <span className="icon-comments"></span> 12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                           
                            <article className="col-6 col-lg-3">
                              <div className="card card-full hover-a mb-4">
                              
                                <div className="ratio_203-114 image-wrapper">
                                  <a href="single.html">
                                    <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/203x114/img16.jpg" alt="وصف الصورة" />
                                  </a>
                                </div>
                               
                                <div className="card-body">
                                  <h3 className="card-title h6">
                                    <a href="single.html">لماذا يخسر MoviePass الكثير من المال؟</a>
                                  </h3>
                                  <div className="card-text text-muted small">
                                    <time >22 أكتوبر 2019</time>
                                    <span title="12 تعليق" className="float-end">
                                      <span className="icon-comments"></span> 12
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                          
                          </div>
                        </div>
                     
                      </div>
                   
                    </div>
                  </div>
                </div>
              </li>

            
              <li className="nav-item mega-dropdown dropdown">
                <a id="navbarmega3" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"  href="#">فيديو</a>
                <div className="dropdown-menu mega w-100 p-4" aria-labelledby="navbarmega3">
                  <div className="row">
                  
                    <article className="col-6 col-lg-3">
                      <div className="card card-full hover-a mb-4">
                    
                        <div className="ratio_251-141 image-wrapper">
                          <a href="single.html">
                            <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/251x141/img1.jpg" alt="وصف الصورة" />
                            <div className="post-type-icon">
                              <span className="fa-stack-sea text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                  <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                </svg>
                              </span>
                            </div>
                          </a>
                          <a className="position-absolute m-2 t-0 p-1 badge badge-primary" href="category.html">موضه</a>
                        </div>
                       
                        <div className="card-body">
                          <h3 className="card-title h6">
                            <a href="single.html">لماذا قد يكون الجلوس ضارًا بصحة دماغك</a>
                          </h3>
                          <div className="card-text text-muted small">
                            <time >22 أكتوبر 2019</time>
                            <span title="12 تعليق" className="float-end">
                              <span className="icon-comments"></span> 12
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  
                    <article className="col-6 col-lg-3">
                      <div className="card card-full hover-a mb-4">
                      
                        <div className="ratio_360-202 image-wrapper">
                          <a href="single.html">
                            <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/251x141/img2.jpg" alt="وصف الصورة" />
                            <div className="post-type-icon">
                              <span className="fa-stack-sea text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                  <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                </svg>
                              </span>
                            </div>
                          </a>
                          <a className="position-absolute m-2 t-0 p-1 badge badge-primary" href="category.html">أسلوب الحياة</a>
                        </div>
                     
                        <div className="card-body">
                          <h3 className="card-title h6">
                            <a href="single.html">مفتاح النجاح في الكلية لا يحظى بالتقدير الكافي: النوم</a>
                          </h3>
                          <div className="card-text text-muted small">
                            <time >21 أكتوبر 2019</time>
                            <span title="17 تعليق" className="float-end">
                              <span className="icon-comments"></span> 17
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  
                    <article className="col-6 col-lg-3">
                      <div className="card card-full hover-a mb-4">
                      
                        <div className="ratio_360-202 image-wrapper">
                          <a href="single.html">
                            <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/251x141/img3.jpg" alt="وصف الصورة" />
                            <div className="post-type-icon">
                              <span className="fa-stack-sea text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                  <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                </svg>
                              </span>
                            </div>
                          </a>
                          <a className="position-absolute m-2 t-0 p-1 badge badge-primary" href="category.html">موضه</a>
                        </div>
                      
                        <div className="card-body">
                          <h3 className="card-title h6">
                            <a href="single.html">5 نصائح بسيطة لمساعدة المسافرين النباتيين أو النباتيين على تناول الطعام جيدًا في أي مكان</a>
                          </h3>
                          <div className="card-text text-muted small">
                            <time >20 أكتوبر 2019</time>
                            <span title="8 تعليق" className="float-end">
                              <span className="icon-comments"></span> 8
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  
                    <article className="col-6 col-lg-3">
                      <div className="card card-full hover-a mb-4">
                    
                        <div className="ratio_360-202 image-wrapper">
                          <a href="single.html">
                            <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/251x141/img4.jpg" alt="وصف الصورة" />
                            <div className="post-type-icon">
                              <span className="fa-stack-sea text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                  <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                </svg>
                              </span>
                            </div>
                          </a>
                          <a className="position-absolute m-2 t-0 p-1 badge badge-primary" href="category.html">مجوهرات</a>
                        </div>
                     
                        <div className="card-body">
                          <h3 className="card-title h6">
                            <a href="single.html">يميل العديد من الناخبين إلى تصديق كريستين بلاسي فورد</a>
                          </h3>
                          <div className="card-text text-muted small">
                            <time >19 أكتوبر 2019</time>
                            <span title="13 تعليق" className="float-end">
                              <span className="icon-comments"></span> 13
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                 
                  </div>
                </div>
              </li>

           
              <li className="nav-item dropdown">
                <a id="navbarDropdown" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"  href="#">المميزات</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                
                  <li className="dropdown-submenu">
                    <a id="sub1" className="dropdown-item dropdown-toggle" href="#">قوالب النشر</a>
                  
                    <ul className="submenu dropdown-menu" aria-labelledby="sub1">
                      <li><a className="dropdown-item" href="single.html">نمط المشاركة </a></li>
                    </ul>
                  </li>

                 
                  <li className="dropdown-submenu">
                    <a id="sub2" className="dropdown-item dropdown-toggle" href="#">الفئة</a>
                   
                    <ul className="submenu dropdown-menu" aria-labelledby="sub2">
                      <li className="dropdown-submenu">
                        <a id="sub350" className="dropdown-item dropdown-toggle" href="#">
                        وحدة الفئة</a>
                      
                        <ul className="submenu dropdown-menu" aria-labelledby="sub350">
                          <li><a className="dropdown-item" href="category.html">نمط الفئة </a></li>
                        </ul>
                      
                      </li>
                      <li><a className="dropdown-item" href="search.html">نتيجة البحث</a></li>
                      <li><a className="dropdown-item" href="search-none.html">لا بحث</a></li>
                      <li><a className="dropdown-item" href="tags.html">العلامات</a></li>
                      <li><a className="dropdown-item" href="author.html">مؤلف</a></li>
                      <li><a className="dropdown-item" href="archive.html">أرشيف</a></li>
                    </ul>
                  </li>

                
                  <li className="dropdown-submenu">
                    <a id="sub5" className="dropdown-item dropdown-toggle" href="#">الصفحات</a>
                  
                    <ul className="submenu dropdown-menu" aria-labelledby="sub5">
                      <li><a className="dropdown-item" href="404.html">404</a></li>
                      <li><a className="dropdown-item" href="about-us.html">معلومات عنا</a></li>
                      <li><a className="dropdown-item" href="advertisement.html">الإعلانات</a></li>
                      <li><a className="dropdown-item" href="contact-us.html">اتصل بنا</a></li>
                      <li><a className="dropdown-item" href="term-of-use.html">شروط الاستخدام</a></li>
                      <li><a className="dropdown-item" href="privacy-policy.html">سياسة خاصة</a></li>
                    </ul>
                  </li>

                 
                  <li className="dropdown-submenu">
                    <a id="sub10" className="dropdown-item dropdown-toggle" href="#">القائمة الفرعية</a>
                    <ul className="submenu dropdown-menu" aria-labelledby="sub10">
                     
                      <li className="dropdown-submenu">
                        <a id="sub10a" className="dropdown-item dropdown-toggle" href="#">الطفل Submenu</a>
                        <ul className="submenu dropdown-menu" aria-labelledby="sub10a">
                          <li><a className="dropdown-item" href="#">الطفل Submenu</a></li>
                          <li><a className="dropdown-item" href="#">الطفل Submenu</a></li>
                          <li><a className="dropdown-item" href="#">الطفل Submenu</a></li>
                        </ul>
                      </li>
                     
                      <li><a className="dropdown-item" href="#">الطفل Submenu</a></li>
                      <li><a className="dropdown-item" href="#">الطفل Submenu</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

            
              <li className="nav-item mega-dropdown dropdown">
                <a id="navbarmega4" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">كتلة الأخبار</a>
               
                <div className="dropdown-menu mega w-100 px-3 py-0 fw-normal" aria-labelledby="navbarmega4">
                  <ul className="row list-unstyled border-end-last-lg-0">
                   
                    <li className="col-sm-6 col-lg-3 mb-3 mb-lg-0 px-0 py-2 py-lg-4">
                   
                      <h5 className="title-nav"><strong>كتلة الأخبار أ</strong></h5>
                     
                      <ul className="list-unstyled mega-link">
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 1</a></li>
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 2</a></li>
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 3</a></li>
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 4</a></li>
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 5</a></li>
                      </ul>
                    </li>
                    
                    <li className="col-sm-6 col-lg-3 mb-3 mb-lg-0 px-0 py-2 py-lg-4">
                                         <h5 className="title-nav"><strong>كتلة الأخبار ب</strong></h5>
                                        <ul className="list-unstyled mega-link">
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 6</a></li>
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 7</a></li>
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 8</a></li>
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 9</a></li>
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 10</a></li>
                      </ul>
                    </li>
                    
                    <li className="col-sm-6 col-lg-3 mb-3 mb-lg-0 px-0 py-2 py-lg-4">
                                         <h5 className="title-nav"><strong>كتلة الأخبار ج</strong></h5>
                                        <ul className="list-unstyled mega-link">
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 11</a></li>
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 12</a></li>
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 13</a></li>
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 14</a></li>
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 15</a></li>
                      </ul>
                    </li>
                    
                    <li className="col-sm-6 col-lg-3 mb-3 mb-lg-0 px-0 py-2 py-lg-4">
                                         <h5 className="title-nav"><strong>كتلة الأخبار د</strong></h5>
                                        <ul className="list-unstyled mega-link">
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 16</a></li>
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 17</a></li>
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 18</a></li>
                        <li><a className="dropdown-item" href="#">كتلة - تخطيط 19</a></li>
                        <li><a className="dropdown-item" href="#">بلوك - تخطيط 20</a></li>
                      </ul>
                    </li>
                   
                  </ul>
                </div>
              </li>

            
              <li className="nav-item dropdown">
                <a id="navbarDropdown1" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">أكثر</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <li><a className="dropdown-item" href="https://demo.bootstrap.news/bootnews/docs/index.html">توثيق</a></li>
                  <li><a className="dropdown-item" href="https://demo.bootstrap.news/bootnews/docs/components/alerts.html">مكونات</a></li>
                  <li><a className="dropdown-item" href="https://demo.bootstrap.news/bootnews/docs/index-wordpress.html">نسخة وورد</a></li>
                </ul>
              </li>
            </ul>
          

           
            <div className="navbar-nav ms-auto d-none d-lg-block">
              <div className="search-box">
              
                <div className="search-menu no-shadow border-0 py-0">
                  <form className="form-src form-inline" action="https://demo.bootstrap.news/bootnews/html/category/search.html">
                    <div className="input-group">
                      <input type="text" className="form-control end-0" name="keywords" value="" placeholder="Search..." aria-label="search" />
                       <span className="icones">
                          <svg xmlns="http://www.w3.org/2000/svg" className="ms-n4" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 512 512"><path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                        /><line x1="338.29" y1="338.29" x2="448" y2="448" /></svg>
                       </span>
                    </div>
                  </form>
                </div>
              
              </div>
            </div>
           
          </div>
        
        </nav>
      </div>
    </div>
   

   
    <div className="mobile-side">
    
      <div id="back-menu" className="back-menu back-menu-start">
        <span className="hamburger-icon open">
          <svg className="bi bi-x" width="2rem" height="2rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"></path>
            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"></path>
          </svg>
        </span>
      </div>

      <nav id="mobile-menu" className="menu-mobile d-flex flex-column push push-start shadow-r-sm bg-white">
     
        <div className="mobile-content mb-auto">
              <div className="logo-sidenav p-2">
            <a href="index.html">
              <img src="../../assets/img/logo/default-logo.png" className="img-fluid" alt="شعار" />
            </a>
          </div>
         
          <div className="sidenav-menu">
            <nav className="navbar navbar-light navbar-inverse">
              <ul id="side-menu" className="nav navbar-nav list-group list-unstyled side-link">
                <li className="menu-item nav-item"><a href="#" className="nav-link active list-group-item">الصفحة الرئيسية</a></li>

              
                <li className="menu-item menu-item-has-children dropdown mega-dropdown nav-item">
                  <a href="#" className="dropdown-toggle nav-link list-group-item" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="menu-11">السيارات</a>
                
                  <ul className="dropdown-menu border-bottom-last-0" aria-labelledby="menu-11" role="menu">
                    <li className="menu-item nav-item">
                      <a href="category.html" className="dropdown-item list-group-item">سيارات</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item nav-item"><a href="category.html" className="nav-link list-group-item">اعمال</a></li>

              
                <li className="menu-item menu-item-has-children dropdown mega-dropdown nav-item">
                  <a href="#" className="dropdown-toggle nav-link list-group-item" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="menu-12">أسلوب الحياة</a>
                
                  <ul className="dropdown-menu border-bottom-last-0" aria-labelledby="menu-12" role="menu">
                    <li className="menu-item nav-item"><a href="category.html" className="dropdown-item list-group-item">موضه</a></li>
                    <li className="menu-item menu-item-has-children dropdownfirst mega-dropdown nav-item">
                      <a href="#" className="dropdown-item dropdown-toggle list-group-item" id="menu-13">السفر</a>
                   
                      <ul className="submenu dropdown-menu border-bottom-last-0" aria-labelledby="menu-13" role="menu">
                        <li className="menu-item nav-item"><a href="category.html" className="dropdown-item list-group-item">مغامرة</a></li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children dropdownfirst mega-dropdown nav-item">
                      <a href="#" className="dropdown-item dropdown-toggle list-group-item" id="menu-14">علم</a>
                      <ul className="submenu dropdown-menu border-bottom-last-0" aria-labelledby="menu-14" role="menu">
                        <li className="menu-item nav-item"><a href="category.html" className="dropdown-item list-group-item">الصحة</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>

             
                <li className="menu-item menu-item-has-children dropdown mega-dropdown nav-item">
                  <a href="#" className="dropdown-toggle nav-link list-group-item" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="menu-15">رياضات</a>
                
                  <ul className="dropdown-menu border-bottom-last-0" aria-labelledby="menu-15" role="menu">
                    <li className="menu-item nav-item"><a href="category.html" className="dropdown-item list-group-item">كرة القدم</a></li>
                    <li className="menu-item nav-item"><a href="category.html" className="dropdown-item list-group-item">موتو جي بي</a></li>
                    <li className="menu-item nav-item"><a href="category.html" className="dropdown-item list-group-item">سلة</a></li>
                    <li className="menu-item nav-item"><a href="category.html" className="dropdown-item list-group-item">اتحاد كرة القدم الأميركي</a></li>
                  </ul>
                </li>

                <li className="menu-item nav-item"><a href="category.html" className="nav-link list-group-item">دولي</a></li>
              </ul>
            </nav>
          </div>
        </div>
      
        <div className="mobile-copyright mt-5 text-center">
          <p>حقوق النشر <a href="index.html">Bootnews</a> - جميع الحقوق محفوظة</p>
        </div>
      </nav>
    </div>
   </>
  )
}

export default Navbar