import Image from "next/image";


export default function Home() {
  return (
   
     
      <>


   
    <main id="content">
      <div className="container">
        <div className="row">
       
          <div className="col-12 mt-05">
          
            <div className="row py-2">
            
              <div className="col-2 col-sm-1 col-md-3 col-lg-2 py-1 pe-md-0 mb-md-1">
                <div className="d-inline-block d-md-block bg-primary text-white text-center breaking-caret py-1 px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-lightning-fill" viewBox="0 0 16 16">
                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                  </svg>
                  <span className="d-none d-md-inline-block">أخبار عاجلة</span>
                </div>
              </div>
           
              <div className="col-10 col-sm-11 col-md-9 col-lg-10 ps-1 ps-md-2">
                <div className="breaking-box position-relative py-2">
                  <div className="box-carousel" data-flickity='{ "cellAlign": "left", "rightToLeft": true, "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "autoPlay": 5000, "pageDots": false, "imagesLoaded": true }'>
                    
                    <div className="col-12 aribudin">
                        <a className="h6 font-weight-light" href="#">موظفو Google يحتجون على العمل السري على محرك البحث الخاضع للرقابة في الصين</a>
                    </div>
                    
                    <div className="col-12 aribudin">
                      <a className="h6 font-weight-light" href="#">حقق المستثمرون الذين يراهنون ضد تسلا مليار دولار يوم الجمعة</a>
                    </div>
                    
                    <div className="col-12 aribudin">
                      <a className="h6 font-weight-light" href="#">وقع كارميلو أنتوني رسميًا مع فريق هيوستن روكتس</a>
                    </div>
                    
                    <div className="col-12 aribudin">
                      <a className="h6 font-weight-light" href="#">الليمون يجعل بشرتك نضرة ومتوهجة</a>
                    </div>
                    
                    <div className="col-12 aribudin">
                      <a className="h6 font-weight-light" href="#">5 نصائح من مقابلة Elon Musk مع التايمز حول Tesla</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="row featured-1 mb-5">
           
              <div className="col-md-6 pb-05 pt-05 pe-md-05">
                <div className="position-relative overflow-hidden">
                  <div className="nav-slider-hover nav-dots-top-right light-dots" data-flickity='{ "cellAlign": "right", "rightToLeft": true, "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "pageDots": true, "imagesLoaded": true }'>
                  
                    <article className="col-12">
                      <div className="card card-full text-light overflow zoom">
                     
                        <div className="height-ratio image-wrapper">
                          <a href="#">
                            <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/568x484/img1.jpg" alt="وصف الصورة" />
                          </a>
                          <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
                                                  <a href="#">
                              <h2 className="h1-sm h2-md display-4-lg font-weight-500 text-white">رئيس البنك يحذر من تحركات موظفي بريكست</h2>
                            </a>
                           
                            <div className="news-meta">
                              <span className="news-author">بواسطة <a className="text-white font-weight-bold" href="#">John Doe</a></span>
                              <time className="news-date" >22 أكتوبر 2019</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                   
                    <article className="col-12">
                      <div className="card card-full text-light overflow zoom">
                       
                        <div className="height-ratio image-wrapper">
                          <a href="#">
                            <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/568x484/img2.jpg" alt="وصف الصورة" />
                          </a>
                          <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
                                                  <a href="#">
                              <h2 className="h1-sm h2-md display-4-lg font-weight-500 text-white">أول مزرعة عائمة في العالم تحدث الأمواج في روتردام</h2>
                            </a>
                          
                            <div className="news-meta">
                              <span className="news-author">بواسطة <a className="text-white font-weight-bold" href="#">John Doe</a></span>
                              <time className="news-date" >22 أكتوبر 2019</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                   
                    <article className="col-12">
                      <div className="card card-full text-light overflow zoom">
                        
                        <div className="height-ratio image-wrapper">
                          <a href="#">
                            <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/568x484/img3.jpg" alt="وصف الصورة" />
                          </a>
                          <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
                                                   <a href="#">
                              <h2 className="h1-sm h2-md display-4-lg font-weight-500 text-white">سهم Walmart يزيد بنسبة 10 ٪ في زيادة المبيعات عبر الإنترنت</h2>
                            </a>
                           
                            <div className="news-meta">
                              <span className="news-author">بواسطة <a className="text-white font-weight-bold" href="#">John Doe</a></span>
                              <time className="news-date" >22 أكتوبر 2019</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                 
                    <article className="col-12">
                      <div className="card card-full text-light overflow zoom">
                        
                        <div className="height-ratio image-wrapper">
                          <a href="#">
                            <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/568x484/img4.jpg" alt="وصف الصورة" />
                          </a>
                          <div className="position-absolute p-3 b-0 w-100 bg-lg-shadow">
                                                  <a href="#">
                              <h2 className="h1-sm h2-md display-4-lg font-weight-500 text-white">أول مزرعة عائمة في العالم تحدث الأمواج في روتردام</h2>
                            </a>
                          
                            <div className="news-meta">
                              <span className="news-author">بواسطة <a className="text-white font-weight-bold" href="#">John Doe</a></span>
                              <time className="news-date" >22 أكتوبر 2019</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                   
                  </div>
                </div>
              </div>
             
              <div className="col-md-6 pt-05 ps-md-05">
                <div className="row newsbox">
                                    <article className="col-6">
                    <div className="card card-full text-white overflow zoom">
                      <div className="height-ratio image-wrapper">
                        
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/282x240/img1.jpg" alt="وصف الصورة" />
                        </a>
                      
                        <div className="position-absolute px-3 pb-3 pt-0 b-0 w-100 bg-shadow">
                          <a className="p-1 badge bg-primary text-white" href="#">اعمال</a>
                          <a href="#">
                            <h2 className="h6 h4-sm h6-md h5-lg text-white my-1">هل يجب أن ترى تتمة Fantastic Beasts؟</h2>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                                    <article className="col-6">
                    <div className="card card-full text-white overflow zoom">
                      <div className="height-ratio image-wrapper">
                        
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/282x240/img2.jpg" alt="وصف الصورة" />
                        </a>
                      
                        <div className="position-absolute px-3 pb-3 pt-0 b-0 w-100 bg-shadow">
                          <a className="p-1 badge bg-primary text-white" href="#">علم</a>
                          <a href="#">
                            <h2 className="h6 h4-sm h6-md h5-lg text-white my-1">ثلاث خرافات حول انتخابات فلوريدا</h2>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                                    <article className="col-6">
                    <div className="card card-full text-white overflow zoom">
                      <div className="height-ratio image-wrapper">
                        
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/282x240/img3.jpg" alt="وصف الصورة" />
                        </a>
                     
                        <div className="position-absolute px-3 pb-3 pt-0 b-0 w-100 bg-shadow">
                          <a className="p-1 badge bg-primary text-white" href="#">السفر</a>
                          <a href="#">
                            <h2 className="h6 h4-sm h6-md h5-lg text-white my-1">إيجاد التمكين في عجلتين وخوذة</h2>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                                   <article className="col-6">
                    <div className="card card-full text-white overflow zoom">
                      <div className="height-ratio image-wrapper">
                        
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/282x240/img4.jpg" alt="وصف الصورة" />
                        </a>
                      
                        <div className="position-absolute px-3 pb-3 pt-0 b-0 w-100 bg-shadow">
                          <a className="p-1 badge bg-primary text-white" href="#">أسلوب الحياة</a>
                          <a href="#">
                            <h2 className="h6 h4-sm h6-md h5-lg text-white my-1">إيصالات الاستلام وأربع نصائح أخرى لتكون متسوقًا صديقًا للبيئة</h2>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                
                </div>
              </div>
             
            </div>
      
          </div>

        
          <div className="col-md-8">
         
						<div className="block-area">
						
						  <div className="block-title-6">
						    <h4 className="h5 border-primary">
						      <span className="bg-primary text-white">رياضات</span>
						    </h4>
						  </div>
						
						  <div className="row">
						   
						    <div className="col-lg-6">
						      <article className="card card-full hover-a mb-4">
						        
						        <div className="ratio_360-202 image-wrapper">
						          <a href="#">
						            <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/360x202/img1.jpg" alt="وصف الصورة" />
						          </a>
						        </div>
						        <div className="card-body">
						          				          <h2 className="card-title h1-sm h3-lg">
						            <a href="#">تفوز بانكس من جي بي بالميدالية الفضية على الجليد في بطولة العالم للأبطال</a>
						          </h2>
						        
						          <div className="card-text mb-2 text-muted small">
						            <span className="d-none d-sm-inline me-1">
						              <a className="font-weight-bold" href="#">فلان الفلاني</a>
						            </span>
						            <time >22 أكتوبر 2019</time>
						            <span title="9 تعليق" className="float-end">
						              <span className="icon-comments"></span> 9
						            </span>
						          </div>
						       
						          <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.</p>
						        </div>
						      </article>
						    </div>
				
						    <div className="col-lg-6">
						      
						      <article className="card card-full hover-a mb-4">
						        <div className="row">
						          
						          <div className="col-3 col-md-4 pe-2 pe-md-0">
						            <div className="ratio_115-80 image-wrapper">
						              <a href="#">
						                <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img1.jpg" alt="وصف الصورة" />
						              </a>
						            </div>
						          </div>
						     
						          <div className="col-9 col-md-8">
						            <div className="card-body pt-0">
						              <h3 className="card-title h6 h5-sm h6-lg">
						                <a href="#">حفلة يانكيز مثلها 1998 ، على الأقل ليوم واحد</a>
						              </h3>
						              <div className="card-text small text-muted">
						                <time >22 أكتوبر 2019</time>
						              </div>
						            </div>
						          </div>
						        </div>
						      </article>
						      
						      <article className="card card-full hover-a mb-4">
						        <div className="row">
						          
						          <div className="col-3 col-md-4 pe-2 pe-md-0">
						            <div className="ratio_160-112 image-wrapper">
						              <a href="#">
						                <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img2.jpg" alt="وصف الصورة" />
						              </a>
						            </div>
						          </div>
						    
						          <div className="col-9 col-md-8">
						            <div className="card-body pt-0">
						              <h3 className="card-title h6 h5-sm h6-lg">
						                <a href="#">Dale Earnhardt Jr. يعود إلى مضمار السباق وهواية قديمة</a>
						              </h3>
						              <div className="card-text small text-muted">
						                <time >21 أكتوبر 2019</time>
						              </div>
						            </div>
						          </div>
						        </div>
						      </article>
						      
						      <article className="card card-full hover-a mb-4">
						        <div className="row">
						          
						          <div className="col-3 col-md-4 pe-2 pe-md-0">
						            <div className="ratio_160-112 image-wrapper">
						              <a href="#">
						                <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img3.jpg" alt="وصف الصورة" />
						              </a>
						            </div>
						          </div>
						   
						          <div className="col-9 col-md-8">
						            <div className="card-body pt-0">
						              <h3 className="card-title h6 h5-sm h6-lg">
						                <a href="#">وقع كارميلو أنتوني رسميًا مع فريق هيوستن روكتس</a>
						              </h3>
						              <div className="card-text small text-muted">
						                <time >20 أكتوبر 2019</time>
						              </div>
						            </div>
						          </div>
						        </div>
						      </article>
						      
						      <article className="card card-full hover-a mb-4">
						        <div className="row">
						          
						          <div className="col-3 col-md-4 pe-2 pe-md-0">
						            <div className="ratio_160-112 image-wrapper">
						              <a href="#">
						                <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img4.jpg" alt="وصف الصورة" />
						              </a>
						            </div>
						          </div>
						         
						          <div className="col-9 col-md-8">
						            <div className="card-body pt-0">
						              <h3 className="card-title h6 h5-sm h6-lg">
						                <a href="#">جاكوب ديغروم يذهب بعيدا كما ميتس يتصدر الفيليز</a>
						              </h3>
						              <div className="card-text small text-muted">
						                <time >17 أكتوبر 2019</time>
						              </div>
						            </div>
						          </div>
						        </div>
						      </article>
						    
						    </div>
						   
						  </div>
						
						</div>
						

          
            <div className="block-area">
              <div className="row">
                
                <div className="col-lg-6">
                  
                  <div className="block-title-6">
                    <h4 className="h5 border-primary">
                      <span className="bg-primary text-white">السيارات</span>
                    </h4>
                  </div>
                  
                  <div className="big-post">
                    <article className="card card-full hover-a mb-4">
                      
                      <div className="ratio_360-202 image-wrapper">
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/360x202/img6.jpg" alt="وصف الصورة" />
                        </a>
                      </div>
                      <div className="card-body">
                                           <h2 className="card-title h1-sm h3-lg">
                          <a href="#">يحسن Ferrari عملية الرسم بشكل مثالي</a>
                        </h2>
                    
                        <div className="card-text mb-2 text-muted small">
                          <span className="d-none d-sm-inline me-1">
                            <a className="font-weight-bold" href="#">فلان الفلاني</a>
                          </span>
                          <time >22 أكتوبر 2019</time>
                          <span title="9 تعليق" className="float-end">
                            <span className="icon-comments"></span> 9
                          </span>
                        </div>
                     
                        <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.</p>
                      </div>
                    </article>
                  </div>
              
                  <div className="small-post">
                    
                    <article className="card card-full hover-a mb-4">
                      <div className="row">
                        
                        <div className="col-3 col-md-4 pe-2 pe-md-0">
                          <div className="ratio_115-80 image-wrapper">
                            <a href="#">
                              <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img21.jpg" alt="وصف الصورة" />
                            </a>
                          </div>
                        </div>
                 
                        <div className="col-9 col-md-8">
                          <div className="card-body pt-0">
                            <h3 className="card-title h6 h5-sm h6-lg">
                              <a href="#">ترتكز استراتيجية نيسان للسيارات الرياضية على العبقرية الثابتة لسيارات GT-R</a>
                            </h3>
                            <div className="card-text small text-muted">
                              <time >16 أكتوبر 2019</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    
                    <article className="card card-full hover-a mb-4">
                      <div className="row">
                        
                        <div className="col-3 col-md-4 pe-2 pe-md-0">
                          <div className="ratio_115-80 image-wrapper">
                            <a href="#">
                              <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img22.jpg" alt="وصف الصورة" />
                            </a>
                          </div>
                        </div>
                     
                        <div className="col-9 col-md-8">
                          <div className="card-body pt-0">
                            <h3 className="card-title h6 h5-sm h6-lg">
                              <a href="#">معدلات تويوتا سيينا هامشية في اختبار تصادم جانب الركاب</a>
                            </h3>
                            <div className="card-text small text-muted">
                              <time >15 أكتوبر 2019</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    
                    <article className="card card-full hover-a mb-4">
                      <div className="row">
                        
                        <div className="col-3 col-md-4 pe-2 pe-md-0">
                          <div className="ratio_115-80 image-wrapper">
                            <a href="#">
                              <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img23.jpg" alt="وصف الصورة" />
                            </a>
                          </div>
                        </div>
                   
                        <div className="col-9 col-md-8">
                          <div className="card-body pt-0">
                            <h3 className="card-title h6 h5-sm h6-lg">
                              <a href="#">تكشف فورد عن فلسفات المركبات المستقلة وأولوياتها</a>
                            </h3>
                            <div className="card-text small text-muted">
                              <time >14 أكتوبر 2019</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
               
                </div>  

           
                <div className="col-lg-6">
               
                  <div className="block-title-6">
                    <h4 className="h5 border-primary">
                      <span className="bg-primary text-white">علم</span>
                    </h4>
                  </div>
                 
                  <div className="big-post">
                    <article className="card card-full hover-a mb-4">
                      
                      <div className="ratio_360-202 image-wrapper">
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/360x202/img7.jpg" alt="وصف الصورة" />
                        </a>
                      </div>
                      <div className="card-body">
                          <h2 className="card-title h1-sm h3-lg">
                          <a href="#">تسوية الحجج حول الهيدروجين باستخدام 168 ليزر عملاق</a>
                        </h2>
                      
                        <div className="card-text mb-2 text-muted small">
                          <span className="d-none d-sm-inline me-1">
                            <a className="font-weight-bold" href="#">فلان الفلاني</a>
                          </span>
                          <time >22 أكتوبر 2019</time>
                          <span title="9 تعليق" className="float-end">
                            <span className="icon-comments"></span> 9
                          </span>
                        </div>
                      
                        <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.</p>
                      </div>
                    </article>
                  </div>
                
                  <div className="small-post">
                    
                    <article className="card card-full hover-a mb-4">
                      <div className="row">
                        
                        <div className="col-3 col-md-4 pe-2 pe-md-0">
                          <div className="ratio_115-80 image-wrapper">
                            <a href="#">
                              <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img24.jpg" alt="وصف الصورة" />
                            </a>
                          </div>
                        </div>
                       
                        <div className="col-9 col-md-8">
                          <div className="card-body pt-0">
                            <h3 className="card-title h6 h5-sm h6-lg">
                              <a href="#">مات مئات من حيوانات الرنة بسبب البرق.</a>
                            </h3>
                            <div className="card-text small text-muted">
                              <time >9 أكتوبر 2019</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    
                    <article className="card card-full hover-a mb-4">
                      <div className="row">
                        
                        <div className="col-3 col-md-4 pe-2 pe-md-0">
                          <div className="ratio_115-80 image-wrapper">
                            <a href="#">
                              <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img25.jpg" alt="وصف الصورة" />
                            </a>
                          </div>
                        </div>
                      
                        <div className="col-9 col-md-8">
                          <div className="card-body pt-0">
                            <h3 className="card-title h6 h5-sm h6-lg">
                              <a href="#">أحدث جاذبية في المتنزه الفرنسي: الغربان التي تلتقط القمامة</a>
                            </h3>
                            <div className="card-text small text-muted">
                              <time >7 أكتوبر 2019</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    
                    <article className="card card-full hover-a mb-4">
                      <div className="row">
                        
                        <div className="col-3 col-md-4 pe-2 pe-md-0">
                          <div className="ratio_115-80 image-wrapper">
                            <a href="#">
                              <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img26.jpg" alt="وصف الصورة" />
                            </a>
                          </div>
                        </div>
                      
                        <div className="col-9 col-md-8">
                          <div className="card-body pt-0">
                            <h3 className="card-title h6 h5-sm h6-lg">
                              <a href="#">قدم تلميحات عن كيفية تدجين الكلاب</a>
                            </h3>
                            <div className="card-text small text-muted">
                              <time >18 أكتوبر 2019</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                
                </div>
               
              </div>
            </div>
            

         
						<div className="block-area">
						  
						  <div className="block-title-6">
						    <h4 className="h5 border-primary">
						      <span className="bg-primary text-white">دولي</span>
						    </h4>
						  </div>
						 
						  <div className="big-post">
						    <article className="card card-full hover-a mb-4">
						      <div className="row">
						        <div className="col-lg-6">
						       
						          <div className="ratio_360-202 image-wrapper">
						            <a href="#">
						              <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/360x202/img8.jpg" alt="وصف الصورة" />
						            </a>
						          </div>
						        </div>
						        <div className="col-lg-6">
						          <div className="card-body pt-3 pt-lg-0">
						            			            <h2 className="card-title h1-sm h3-lg">
						              <a href="#">كاميرا Leica D-Lux 7 صغيرة الحجم مزودة بمستشعر رباعي الأضلاع بدقة 17 ميجابكسل</a>
						            </h2>
						        
						            <div className="card-text mb-2 text-muted small">
						              <span className="d-none d-sm-inline me-1">
						                <a className="font-weight-bold" href="#">فلان الفلاني</a>
						              </span>
						              <time >21 أكتوبر 2019</time>
						              <span title="5 تعليق" className="float-end">
						                <span className="icon-comments"></span> 5
						              </span>
						            </div>
						         
						            <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي ...</p>
						          </div>
						        </div>
						      </div>
						    </article>
						  </div>
						
						  <div className="row small-post">
						  
						    <article className="col-lg-6">
						      <div className="card card-full hover-a mb-4">
						        <div className="row">
						          
						          <div className="col-3 col-md-4 pe-2 pe-md-0">
						            <div className="ratio_115-80 image-wrapper">
						              <a href="#">
						                <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img27.jpg" alt="وصف الصورة" />
						              </a>
						            </div>
						          </div>
						        
						          <div className="col-9 col-md-8">
						            <div className="card-body pt-0">
						              <h3 className="card-title h6 h5-sm h6-lg">
						                <a href="#">كانت العروس حلما في Dirndl ، لكن بوتين سرق العرض</a>
						              </h3>
						              <div className="card-text small text-muted">
						                <time >19 أكتوبر 2019</time>
						              </div>
						            </div>
						          </div>
						        </div>
						      </div>
						    </article>
						  
						    <article className="col-lg-6">
						      <div className="card card-full hover-a mb-4">
						        <div className="row">
						          
						          <div className="col-3 col-md-4 pe-2 pe-md-0">
						            <div className="ratio_115-80 image-wrapper">
						              <a href="#">
						                <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img28.jpg" alt="وصف الصورة" />
						              </a>
						            </div>
						          </div>
						          <div className="col-9 col-md-8">
						         
						            <div className="card-body pt-0">
						              <h3 className="card-title h6 h5-sm h6-lg">
						                <a href="#">أثار مضيف "راديو القمامة" في كيبيك غضبًا وتصنيفات كبيرة</a>
						              </h3>
						              <div className="card-text small text-muted">
						                <time >18 أكتوبر 2019</time>
						              </div>
						            </div>
						          </div>
						        </div>
						      </div>
						    </article>
						  
						    <article className="col-lg-6">
						      <div className="card card-full hover-a mb-4">
						        <div className="row">
						          
						          <div className="col-3 col-md-4 pe-2 pe-md-0">
						            <div className="ratio_115-80 image-wrapper">
						              <a href="#">
						                <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img29.jpg" alt="وصف الصورة" />
						              </a>
						            </div>
						          </div>
						        
						          <div className="col-9 col-md-8">
						            <div className="card-body pt-0">
						              <h3 className="card-title h6 h5-sm h6-lg">
						                <a href="#">كان الغرب يأمل في الديمقراطية في تركيا. كانت لدى أردوغان أفكار أخرى</a>
						              </h3>
						              <div className="card-text small text-muted">
						                <time >17 أكتوبر 2019</time>
						              </div>
						            </div>
						          </div>
						        </div>
						      </div>
						    </article>
						  
						    <article className="col-lg-6">
						      <div className="card card-full hover-a mb-4">
						        <div className="row">
						          
						          <div className="col-3 col-md-4 pe-2 pe-md-0">
						            <div className="ratio_115-80 image-wrapper">
						              <a href="#">
						                <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/115x80/img30.jpg" alt="وصف الصورة" />
						              </a>
						            </div>
						          </div>
						        
						          <div className="col-9 col-md-8">
						            <div className="card-body pt-0">
						              <h3 className="card-title h6 h5-sm h6-lg">
						                <a href="#">لماذا دخلت Apple في حرب مع Facebook و Google هذا الأسبوع</a>
						              </h3>
						              <div className="card-text small text-muted">
						                <time >16 أكتوبر 2019</time>
						              </div>
						            </div>
						          </div>
						        </div>
						      </div>
						    </article>  
						  </div>
						</div>
					

          
            <div className="block-area">
             
              <div className="block-title-6">
                <h4 className="h5 border-primary">
                  <span className="bg-primary text-white">السفر</span>
                </h4>
              </div>
             
              <div className="row">
                
                <article className="col-sm-6 col-md-12 col-lg-6">
                  <div className="card card-full hover-a mb-4">
                    
                    <div className="ratio_360-202 image-wrapper">
                      <a href="#">
                        <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/360x202/img13.jpg" alt="وصف الصورة" />
                      </a>
                    </div>
                    <a className="bg-full-shadow" aria-label="overlay post" href="#"></a>
                    <div className="position-absolute px-3 top-3 w-100 z-index-5 text-center">
                                         <a href="#">
                        <h5 className="card-title h3 h4-sm h3-md text-white my-1">94 وصفة دجاج سهلة لعشاء عائلي خالٍ من الضجة</h5>
                      </a>
                                          <span className="d-inline d-sm-none d-md-inline me-1">
                        <a className="font-weight-bold text-white" href="#">فلان الفلاني</a>
                      </span>
                                        <time className="d-sm-none d-md-inline m-0 text-white" >21 أكتوبر 2019</time>
                    </div>
                  </div>
                </article>
                
                <article className="col-sm-6 col-md-12 col-lg-6">
                  <div className="card card-full hover-a mb-4">
                    
                    <div className="ratio_360-202 image-wrapper">
                      <a href="#">
                        <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/360x202/img14.jpg" alt="وصف الصورة" />
                      </a>
                    </div>
                    <a className="bg-full-shadow" aria-label="overlay post" href="#"></a>
                    <div className="position-absolute px-3 top-3 w-100 z-index-5 text-center">
                                         <a href="#">
                        <h5 className="card-title h3 h4-sm h3-md text-white my-1">5 نصائح لتوفير المال لحجز غرفتك الفندقية التالية</h5>
                      </a>
                                          <span className="d-inline d-sm-none d-md-inline me-1">
                        <a className="font-weight-bold text-white" href="#">فلان الفلاني</a>
                      </span>
                                        <time className="d-sm-none d-md-inline m-0 text-white" >21 أكتوبر 2019</time>
                    </div>
                  </div>
                </article>
              
                <article className="col-sm-6 col-md-12 col-lg-6">
                  <div className="card card-full hover-a mb-4">
               
                    <div className="ratio_360-202 image-wrapper">
                      <a href="#">
                        <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/360x202/img15.jpg" alt="وصف الصورة" />
                      </a>
                    </div>
                    <a className="bg-full-shadow" aria-label="overlay post" href="#"></a>
                    <div className="position-absolute px-3 top-3 w-100 z-index-5 text-center">
                                      <a href="#">
                        <h5 className="card-title h3 h4-sm h3-md text-white my-1">مسافر الأماكن الـ 52: الصيف في فرنسا ، بطريقتين مختلفتين للغاية</h5>
                      </a>
                                      <span className="d-inline d-sm-none d-md-inline me-1">
                        <a className="font-weight-bold text-white" href="#">فلان الفلاني</a>
                      </span>
                                     <time className="d-sm-none d-md-inline m-0 text-white" >21 أكتوبر 2019</time>
                    </div>
                  </div>
                </article>
              
                <article className="col-sm-6 col-md-12 col-lg-6">
                  <div className="card card-full hover-a mb-4">
                   
                    <div className="ratio_360-202 image-wrapper">
                      <a href="#">
                        <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/360x202/img16.jpg" alt="وصف الصورة" />
                      </a>
                    </div>
                    <a className="bg-full-shadow" aria-label="overlay post" href="#"></a>
                    <div className="position-absolute px-3 top-3 w-100 z-index-5 text-center">
                                      <a href="#">
                        <h5 className="card-title h3 h4-sm h3-md text-white my-1">6 نصائح بسيطة لمساعدة المسافرين النباتيين أو النباتيين على تناول الطعام بشكل جيد في أي مكان</h5>
                      </a>
                                     <span className="d-inline d-sm-none d-md-inline me-1">
                        <a className="font-weight-bold text-white" href="#">فلان الفلاني</a>
                      </span>
                                  <time className="d-sm-none d-md-inline m-0 text-white" >21 أكتوبر 2019</time>
                    </div>
                  </div>
                </article>
             
                <div className="gap-05"></div>
              </div>
        
            </div>
            
          </div>
       
     
          <aside className="col-md-4 end-sidebar-lg">
            <div className="sticky">
         
              <aside className="widget">
            
                <div className="block-title-4">
                  <h4 className="h5 title-arrow">
                    <span>شبكة اجتماعية</span>
                  </h4>
                </div>
               
                <ul className="list-unstyled social-two">
                  <li className="facebook"><a className="bg-facebook text-white" href="#" target="_blank" rel="noopener noreferrer" aria-label="فيس بوك">فيس بوك</a></li>
                  <li className="twitter"><a className="bg-twitter text-white" href="#" target="_blank" rel="noopener noreferrer" aria-label="تويتر">تويتر</a></li>
                  <li className="instagram"><a className="bg-instagram text-white" href="#" target="_blank" rel="noopener noreferrer" aria-label="الانستغرام">انستغرام</a></li>
                  <li className="youtube"><a className="bg-youtube text-white" href="#" target="_blank" rel="noopener noreferrer" aria-label="يوتيوب">يوتيوب</a></li>
                  <li className="linkedin"><a className="bg-linkedin text-white" href="#" target="_blank" rel="noopener noreferrer" aria-label="ينكدين">ينكدين</a></li>
                  <li className="vimeo"><a className="bg-vimeo text-white" href="#" target="_blank" rel="noopener noreferrer" aria-label="فيميو">فيميو</a></li>
                  <li className="pinterest"><a className="bg-pinterest text-white" href="#" target="_blank" rel="noopener noreferrer" aria-label="بينتيريست">بينتيريست</a></li>
                  <li className="telegram"><a className="bg-telegram text-white" href="#" target="_blank" rel="noopener noreferrer" aria-label="برقية">برقية</a></li>
                </ul>
                
                <div className="gap-15"></div>
              </aside>

              
              <aside className="widget">
                
                <div className="block-title-4">
                  <h4 className="h5 title-arrow">
                    <span>منشور مشهور</span>
                  </h4>
                </div>
              
                <ul className="post-number list-unstyled border-bottom-last-0 rounded mb-3">
                  <li className="hover-a">
                    <a className="h5 h6-md h5-lg" href="#">لماذا سينتهي العالم بدون انتخابات سياسية</a>
                  </li>
                  <li className="hover-a">
                    <a className="h5 h6-md h5-lg" href="#">قابل الرجل الذي صمم وحش دوكاتي</a>
                  </li>
                  <li className="hover-a">
                    <a className="h5 h6-md h5-lg" href="#">إطلاق لقطات تجسس لأودي R8 سبايدر 2020</a>
                  </li>
                  <li className="hover-a">
                    <a className="h5 h6-md h5-lg" href="#">Lamborghini تجعل سباق Huracán GT3 أسرع لعام 2019</a>
                  </li>
                  <li className="hover-a">
                    <a className="h5 h6-md h5-lg" href="#">تخطط ZF لدفع 14 مليار دولار للمركبة المستقلة ، مفهوم فان</a>
                  </li>
                </ul>
              
                <div className="gap-0"></div>
              </aside>
            

           
              <aside className="widget">
               
                <div className="block-title-4">
                  <h4 className="h5 title-arrow">
                    <span>أحدث الأخبار</span>
                  </h4>
                </div>
              
                <div className="big-post">
                  <article className="card card-full hover-a mb-4">
                    
                    <div className="ratio_360-202 image-wrapper">
                      <a href="#">
                        <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/360x202/img55.jpg" alt="وصف الصورة" />
                      </a>
                    </div>
                    <div className="card-body">
                                         <h2 className="card-title h1-sm h3-md">
                        <a href="#">MotoGP: أي فريق يحتاج ماذا في عام 2019؟</a>
                      </h2>
                  
                      <div className="card-text mb-2 text-muted small">
                        <span className="d-none d-sm-inline me-1">
                          <a className="font-weight-bold" href="#">فلان الفلاني</a>
                        </span>
                        <time >22 أكتوبر 2019</time>
                      </div>
                  
                      <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.</p>
                    </div>
                  </article>
                </div>
            
                <div className="small-post">
                  
                  <article className="card card-full hover-a mb-4">
                    <div className="row">
                      
                      <div className="col-3 col-md-4 pe-2 pe-md-0">
                        <div className="ratio_110-77 image-wrapper">
                          <a href="#">
                            <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/110x77/img5.jpg" alt="وصف الصورة" />
                          </a>
                        </div>
                      </div>
                  
                      <div className="col-9 col-md-8">
                        <div className="card-body pt-0">
                          <h3 className="card-title h6 h5-sm h6-md">
                            <a href="#">اصطحب الأطفال إلى Windermere Jetty ، Lake District</a>
                          </h3>
                          <div className="card-text small text-muted">
                            <time >16 أكتوبر 2019</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                 
                  <article className="card card-full hover-a mb-4">
                    <div className="row">
                  
                      <div className="col-3 col-md-4 pe-2 pe-md-0">
                        <div className="ratio_110-77 image-wrapper">
                          <a href="#">
                            <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/110x77/img6.jpg" alt="وصف الصورة" />
                          </a>
                        </div>
                      </div>
                 
                      <div className="col-9 col-md-8">
                        <div className="card-body pt-0">
                          <h3 className="h6 h4-sm h6-md">
                            <a href="#">استعراض الموجة: Under - مطعم النرويج الجديد تحت الماء</a>
                          </h3>
                          <div className="small text-muted">
                            <time >15 أكتوبر 2019</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                
                  <article className="card card-full hover-a mb-4">
                    <div className="row">
                      
                      <div className="col-3 col-md-4 pe-2 pe-md-0">
                        <div className="ratio_110-77 image-wrapper">
                          <a href="#">
                            <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/110x77/img7.jpg" alt="وصف الصورة" />
                          </a>
                        </div>
                      </div>
                    
                      <div className="col-9 col-md-8">
                        <div className="card-body pt-0">
                          <h3 className="h6 h4-sm h6-md">
                            <a href="#">تمتلك شركة الطيران الأمريكية هذه مساحة للساقين أكثر من أي شركة أخرى</a>
                          </h3>
                          <div className="small text-muted">
                            <time >14 أكتوبر 2019</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
               
                </div>
               
                <div className="gap-0"></div>
              </aside>
            

             
              <aside className="widget">
                <div className="hover-a text-center">
                            <div className="py-2">
                    <span className="text-mute small">- الإعلانات -</span>
                  </div>
                                <a href="#" target="_blank">
                    <img className="img-fluid bg-light" src="../../assets/img/ads/300-demo.png" alt="ads space" />
                  </a>
                </div>
                <div className="gap-15"></div>
              </aside>
            
            </div>
          </aside>
        

        
          <div className="col-12 mb-4">
         
            <div className="block-area p-4 border bg-light-black">
           
              <div className="block-title-13">
                <h4 className="h5 title-box-dot">
                  <span>تصميم داخلي</span>
                </h4>
                <div className="dot-line"></div>
              </div>
          
              <div className="nav-slider-hover nav-dots-top-right light-dots" data-flickity='{ "cellAlign": "right", "rightToLeft": true, "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "pageDots": true, "imagesLoaded": true }'>
              
                <article className="col-12 col-sm-6 col-lg-4 me-2">
                  <div className="mb-4">
                    <div className="card card-full hover-a">
                      <div className="ratio_327-278 image-wrapper">
                      
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/400x340/img1.jpg" alt="Image description" />
                        </a>
                        <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                        
                          <h4 className="h3 h4-sm h3-md card-title">
                            <a className="text-white" href="#">تصميم مكتب حديث أنيق في كاليفورنيا ونيفادا</a>
                          </h4>
                        
                          <div className="small text-light">
                            <time >18 أكتوبر 2019</time>
                         
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
               
                <article className="col-12 col-sm-6 col-lg-4 me-2">
                  <div className="mb-4">
                    <div className="card card-full hover-a">
                      <div className="ratio_327-278 image-wrapper">
                    
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/400x340/img2.jpg" alt="Image description" />
                        </a>
                        <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                       
                          <h4 className="h3 h4-sm h3-md card-title">
                            <a className="text-white" href="#">إليك جميع أخبار العقارات التي فاتتك هذا الأسبوع</a>
                          </h4>
                        
                          <div className="small text-light">
                            <time >18 أكتوبر 2019</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              
                <article className="col-12 col-sm-6 col-lg-4 me-2">
                  <div className="mb-4">
                    <div className="card card-full hover-a">
                      <div className="ratio_327-278 image-wrapper">
                     
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/400x340/img3.jpg" alt="Image description" />
                        </a>
                        <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                        
                          <h4 className="h3 h4-sm h3-md card-title">
                            <a className="text-white" href="#">لماذا نحب مظهر رخام كلكتا الأبيض؟</a>
                          </h4>
                        
                          <div className="small text-light">
                            <time >18 أكتوبر 2019</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
               
                <article className="col-12 col-sm-6 col-lg-4 me-2">
                  <div className="mb-4">
                    <div className="card card-full hover-a">
                      <div className="ratio_327-278 image-wrapper">
                      
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/400x340/img4.jpg" alt="Image description" />
                        </a>
                        <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                         
                          <h4 className="h3 h4-sm h3-md card-title">
                            <a className="text-white" href="#">يعرض الحدث منتجات مثل الأدوات المنزلية والأثاث</a>
                          </h4>
                        
                          <div className="small text-light">
                            <time >18 أكتوبر 2019</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              
                <article className="col-12 col-sm-6 col-lg-4 me-2">
                  <div className="mb-4">
                    <div className="card card-full hover-a">
                      <div className="ratio_327-278 image-wrapper">
                      
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/400x340/img5.jpg" alt="Image description" />
                        </a>
                        <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                       
                          <h4 className="h3 h4-sm h3-md card-title">
                            <a className="text-white" href="#">أفضل إطلالات على طراز ستريت ستايل من معرض نيويورك للعقارات</a>
                          </h4>
                          <div className="small text-light">
                            <time >18 أكتوبر 2019</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              
              </div>
             
            </div>
          
          </div>
        
         
          <div className="col-md-8">
          
            <div className="block-area">
              
              <div className="block-title-6">
                <h4 className="h5 border-primary">
                  <span className="bg-primary text-white">آخر مشاركة</span>
                </h4>
              </div>
             
              <div className="border-bottom-last-0 first-pt-0">
             
                <article className="card card-full hover-a py-4">
                  <div className="row">
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      
                      <div className="ratio_360-202 image-wrapper">
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/360x202/img17.jpg" alt="وصف الصورة" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                                             <h3 className="card-title h2 h3-sm h2-md">
                          <a href="#">يبدأ مسار أسهم Apple وينتهي مع iPhone</a>
                        </h3>
                     
                        <div className="card-text mb-2 text-muted small">
                          <span className="d-none d-sm-inline me-1">
                            <a className="font-weight-bold" href="#">فلان الفلاني</a>
                          </span>
                          <time >21 أكتوبر 2019</time>
                        </div>
                      
                        <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. يتدفق نهر صغير بمكانهم و ...</p>
                      </div>
                    </div>
                  </div>
                </article>
               
                <article className="card card-full hover-a py-4">
                  <div className="row">
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      
                      <div className="ratio_360-202 image-wrapper">
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/360x202/img18.jpg" alt="وصف الصورة" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                                             <h3 className="card-title h2 h3-sm h2-md">
                          <a href="#">هل تريد أفضل عروض الجمعة البيضاء؟ توجه إلى متجر متعدد الأقسام</a>
                        </h3>
                      
                        <div className="card-text mb-2 text-muted small">
                          <span className="d-none d-sm-inline me-1">
                            <a className="font-weight-bold" href="#">فلان الفلاني</a>
                          </span>
                          <time >21 أكتوبر 2019</time>
                        </div>
                     
                        <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. يتدفق نهر صغير بمكانهم و ...</p>
                      </div>
                    </div>
                  </div>
                </article>
              
                <article className="card card-full hover-a py-4">
                  <div className="row">
                  
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      
                      <div className="ratio_360-202 image-wrapper">
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/360x202/img14.jpg" alt="وصف الصورة" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                                             <h3 className="card-title h2 h3-sm h2-md">
                          <a href="#">5 نصائح لتوفير المال لحجز غرفتك الفندقية التالية</a>
                        </h3>
                       
                        <div className="card-text mb-2 text-muted small">
                          <span className="d-none d-sm-inline me-1">
                            <a className="font-weight-bold" href="#">فلان الفلاني</a>
                          </span>
                          <time >21 أكتوبر 2019</time>
                        </div>
                       
                        <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. يتدفق نهر صغير بمكانهم و ...</p>
                      </div>
                    </div>
                  </div>
                </article>
               
                <article className="card card-full hover-a py-4">
                  <div className="row">
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      
                      <div className="ratio_360-202 image-wrapper">
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/360x202/img15.jpg" alt="وصف الصورة" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                                             <h3 className="card-title h2 h3-sm h2-md">
                          <a href="#">دبي تطلق تجربة لخزان القرش في الشرق الأوسط</a>
                        </h3>
                    
                        <div className="card-text mb-2 text-muted small">
                          <span className="d-none d-sm-inline me-1">
                            <a className="font-weight-bold" href="#">فلان الفلاني</a>
                          </span>
                          <time >21 أكتوبر 2019</time>
                        </div>
                      
                        <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. يتدفق نهر صغير بمكانهم و ...</p>
                      </div>
                    </div>
                  </div>
                </article>
                
                <article className="card card-full hover-a py-4">
                  <div className="row">
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      
                      <div className="ratio_360-202 image-wrapper">
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/360x202/img16.jpg" alt="وصف الصورة" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                                             <h3 className="card-title h2 h3-sm h2-md">
                          <a href="#">حصلت رينج روفر إيفوك المدمجة والرائدة والشعبية على تحول كبير</a>
                        </h3>
                      
                        <div className="card-text mb-2 text-muted small">
                          <span className="d-none d-sm-inline me-1">
                            <a className="font-weight-bold" href="#">فلان الفلاني</a>
                          </span>
                          <time >21 أكتوبر 2019</time>
                        </div>
                       
                        <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. يتدفق نهر صغير بمكانهم و ...</p>
                      </div>
                    </div>
                  </div>
                </article>
               
                <article className="card card-full hover-a py-4">
                  <div className="row">
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      
                      <div className="ratio_360-202 image-wrapper">
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/360x202/img19.jpg" alt="وصف الصورة" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                                             <h3 className="card-title h2 h3-sm h2-md">
                          <a href="#">تكافح الأسواق الأوروبية لتغلق أعلى ؛ النفط في التركيز</a>
                        </h3>
                      
                        <div className="card-text mb-2 text-muted small">
                          <span className="d-none d-sm-inline me-1">
                            <a className="font-weight-bold" href="#">فلان الفلاني</a>
                          </span>
                          <time >21 أكتوبر 2019</time>
                        </div>
                       
                        <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. يتدفق نهر صغير بمكانهم و ...</p>
                      </div>
                    </div>
                  </div>
                </article>
               
                <article className="card card-full hover-a py-4">
                  <div className="row">
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      
                      <div className="ratio_360-202 image-wrapper">
                        <a href="#">
                          <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/360x202/img5.jpg" alt="وصف الصورة" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                                             <h3 className="card-title h2 h3-sm h2-md">
                          <a href="#">MotoGP: أي فريق يحتاج ماذا في عام 2019؟</a>
                        </h3>
                       
                        <div className="card-text mb-2 text-muted small">
                          <span className="d-none d-sm-inline me-1">
                            <a className="font-weight-bold" href="#">فلان الفلاني</a>
                          </span>
                          <time >21 أكتوبر 2019</time>
                        </div>
                     
                        <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. يتدفق نهر صغير بمكانهم و ...</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
           
            </div>
            

            <div className="clearfix my-4">
              <nav className="float-start" aria-label="مثال على التنقل في الصفحة">
              
                <ul className="pagination">
                  <li className="page-item active"><span className="page-link">1</span></li>
                  <li className="page-item"><a className="page-link" href="category.html">2</a></li>
                  <li className="page-item"><a className="page-link" href="category.html">3</a></li>
                  <li className="page-item"><a className="page-link" href="category.html">4</a></li>
                  <li className="page-item"><span className="page-link disabled">....</span></li>
                  <li className="page-item"><a className="page-link" href="category.html">12</a></li>
                  <li className="page-item">
                    <a className="page-link" href="category.html" aria-label="التالى" title="الصفحة التالية">
                      <span aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" className="rotate-180" width="1.2rem" height="1.2rem" fill="currentColor" viewBox="0 0 512 512"><polyline points="184 112 328 256 184 400" 
                        /></svg>
                      </span>
                      <span className="visually-hidden">التالى</span>
                    </a>
                  </li>
                </ul>
              
              </nav>
              <span className="py-2 float-end">الصفحة 1 من 12</span>
            </div>
          
          </div>
       

      
          <aside className="col-md-4 end-sidebar-lg">
           
            <div className="sticky">
           
              <aside className="widget">
             
                <div className="block-title-4">
                  <h4 className="h5 title-arrow">
                    <span>الأكثر قراءة</span>
                  </h4>
                </div>
               
                <div className="small-post">
                  
                  <article className="card card-full hover-a mb-4">
                    <div className="row">
                      
                      <div className="col-3 col-md-4 pe-2 pe-md-0">
                        <div className="ratio_110-77 image-wrapper">
                          <a href="#">
                            <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/110x77/img1.jpg" alt="وصف الصورة" />
                          </a>
                        </div>
                      </div>
                    
                      <div className="col-9 col-md-8">
                        <div className="card-body pt-0">
                          <h3 className="card-title h6 h5-sm h6-md">
                            <a href="#">يبدأ مسار أسهم Apple وينتهي مع iPhone</a>
                          </h3>
                          <div className="card-text small text-muted">
                            <time >16 أكتوبر 2019</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  
                  <article className="card card-full hover-a mb-4">
                    <div className="row">
                      
                      <div className="col-3 col-md-4 pe-2 pe-md-0">
                        <div className="ratio_110-77 image-wrapper">
                          <a href="#">
                            <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/110x77/img2.jpg" alt="وصف الصورة" />
                          </a>
                        </div>
                      </div>
                    
                      <div className="col-9 col-md-8">
                        <div className="card-body pt-0">
                          <h3 className="card-title h6 h5-sm h6-md">
                            <a href="#">94 وصفة دجاج سهلة لعشاء عائلي خالٍ من الضجة</a>
                          </h3>
                          <div className="card-text small text-muted">
                            <time >15 أكتوبر 2019</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  
                  <article className="card card-full hover-a mb-4">
                    <div className="row">
                      
                      <div className="col-3 col-md-4 pe-2 pe-md-0">
                        <div className="ratio_110-77 image-wrapper">
                          <a href="#">
                            <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/110x77/img3.jpg" alt="وصف الصورة" />
                          </a>
                        </div>
                      </div>
                     
                      <div className="col-9 col-md-8">
                        <div className="card-body pt-0">
                          <h3 className="card-title h6 h4-sm h6-md">
                            <a href="#">تكشف فورد عن فلسفات المركبات المستقلة وأولوياتها</a>
                          </h3>
                          <div className="card-text small text-muted">
                            <time >14 أكتوبر 2019</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  
                  <article className="card card-full hover-a mb-4">
                    <div className="row">
                      
                      <div className="col-3 col-md-4 pe-2 pe-md-0">
                        <div className="ratio_110-77 image-wrapper">
                          <a href="#">
                            <img className="img-fluid lazy" src="../../assets/img/assets/lazy-empty.png" data-src="../../assets/img/110x77/img4.jpg" alt="وصف الصورة" />
                          </a>
                        </div>
                      </div>
                   
                      <div className="col-9 col-md-8">
                        <div className="card-body pt-0">
                          <h3 className="card-title h6 h4-sm h6-md">
                            <a href="#">خطط لعبة Bowen's Super Bowl LIII: أي دفاع سيتوقف؟</a>
                          </h3>
                          <div className="card-text small text-muted">
                            <time >16 أكتوبر 2019</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                
                </div>
              
                <div className="gap-0"></div>
              </aside>
             
              <aside className="widget">
              
                <div className="p-4 border bg-light-dark text-center mb-4">
                                 <h4>احصل على التحديثات</h4>
                  <p className="text-dark">اشترك في النشرة الإخبارية لدينا للحصول على آخر تحديث في صندوق الوارد الخاص بك!</p>
               
                  <div className="mx-auto">
                    <form id="subscribe" className="needs-validation" action="#" >
                      <div className="input-group">
                        <input type="email" aria-label="email form" className="form-control" name="email" placeholder="أدخل عنوان بريدك الإلكتروني" />
                        <span className="input-group-append">
                          <button className="btn btn-primary" type="submit">الإشتراك</button>
                        </span>
                        <div className="invalid-feedback">
                          الرجاء إدخال عنوان البريد الإلكتروني.
                        </div>
                      </div>
                    </form>
                  </div>
                                    <p className="small text-center text-dark mt-3">يكره مرسلي البريد العشوائي ، ولا يكرهون البريد العشوائي أبدًا</p>
                </div>
             
                <div className="gap-0"></div>
              </aside>

             
              <aside className="widget">
                <div className="block-title-4">
                  <h4 className="h5 title-arrow"><span>سفر</span></h4>
                </div>
                               <div className="small-post">
                  
                  <article className="card card-full hover-a mb-2">
                    <div className="card-body pt-0">
                                         <h3 className="card-title h5">
                        <a href="#">يحتفل المشجعون في باريس بعد وصول الفريق إلى نهائي كأس العالم</a>
                      </h3>
                                        <div className="card-text small text-muted">
                        <time >16 يونيو 2019</time>
                      </div>
                    </div>
                  </article>
                  
                  <article className="card card-full hover-a mb-2">
                    <div className="card-body pt-0">
                                         <h3 className="card-title h5">
                        <a href="#">5 نصائح لتوفير المال لحجز غرفتك الفندقية التالية</a>
                      </h3>
                                        <div className="card-text small text-muted">
                        <time >16 يونيو 2019</time>
                      </div>
                    </div>
                  </article>
                  
                  <article className="card card-full hover-a mb-2">
                    <div className="card-body pt-0">
                                         <h3 className="card-title h5">
                        <a href="#">مسافر الأماكن الـ 52: الصيف في فرنسا ، بطريقتين مختلفتين للغاية</a>
                      </h3>
                                        <div className="card-text small text-muted">
                        <time >16 يونيو 2019</time>
                      </div>
                    </div>
                  </article>
                  
                  <article className="card card-full hover-a mb-2">
                    <div className="card-body pt-0">
                                         <h3 className="card-title h5">
                        <a href="#">6 نصائح بسيطة لمساعدة المسافرين النباتيين أو النباتيين على تناول الطعام بشكل جيد في أي مكان</a>
                      </h3>
                                        <div className="card-text small text-muted">
                        <time >16 يونيو 2019</time>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="gap-0"></div>
              </aside>
            </div>
         
          </aside>
      
        </div>
      </div>
    </main>
   
</>
 

  
 
    
  );
}
