import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
      <div className="app">
          <header className="header">
            <div className="grid wide">
                <div className="header__navbar">
                    <div className="header__navbar-item">
                        <img src="assets/img/logo.png" srcSet="assets/img/logo@2x.png 2x,assets/img/logo@3x.png 3x" alt="" className="logo"/>

                    </div>
                    <div className="header__navbar-item">
                        <span className="Introduction">
                  Introduction
                </span>
                        <span className="solution Text-Style-11">
                  solution
                </span>
                        <span className="Rate-plan Text-Style-11">
                  Rate plan
                </span>
                        <div className="Rectangle-662"></div>

                        <span className="login Text-Style-11">
                  login
                </span>
                        <span className="Apply-for-free-use Text-Style-11">
                  Apply for free use
                </span>
                    </div>
                </div>

            </div>


        </header>

        <div className="banner">
            <img src="assets/img/main-banner.png" srcSet="assets/img/main-banner@2x.png 2x,
                         assets/img/main-banner@3x.png 3x" className="main_banner"/>
        </div>
        <div className="happenBanner">
            <img src="assets/img/introduction-bg.png" srcSet="assets/img/introduction-bg@2x.png 2x,
              assets/img/introduction-bg@3x.png 3x" className="introduction_bg"/>

            <span className="What-Happened">
        What Happened!
     </span>
            <span className="How-to-create-mobile-optimized-videos-in-minutes-Not-a-designe-happenBanner Text-Style-6">
        How to create mobile-optimized videos in minutes. Not a designer, 
      every team makes a lot of videos Can be trimmed. Take the first 
      step to your brand's success. How to create <br/>
      mobile-optimized videos in minutes.
      </span>
        </div>

        <div className="best-product">
            <img src="assets/img/bes-bg.png" srcSet="assets/img/bes-bg@2x.png 2x,
             assets/img/bes-bg@3x.png 3x" className="Bes_bg" />
            <span className="Best-Product Text-Style-5">
                    Best Product
        </span>
            <span className="How-to-create-mobile-optimized-videos-in-minutes-Not-a-designe-1 Text-Style-16">
            How to create mobile-optimized videos in minutes. Not a designer, 
          every team makes a lot of videos Can be trimmed. Take the first
          </span>

            <div className="image__product">
                <div className="image__product-item">
                    <img src="assets/img/best-image-01.png" srcSet="assets/img/best-image-01@2x.png 2x,
                              assets/img/best-image-01@3x.png 3x" className="BestImage_01"/>
                  
                    <img src="assets/img/producticon-01.png" srcSet="assets/img/producticon-01@2x.png 2x,
                          assets/img/producticon-01@3x.png 3x" className="Producticon_01"/>
                    <div className="box">
                        <span className="How-to-create-mobile-optimized Text-Style-20">
                  How to create 
                mobile-optimized
                </span>
                        <img src="assets/img/go-icon.png" srcSet="assets//go-icon@2x.png 2x,
                            assets//go-icon@3x.png 3x" className="go_icon"/>

                    </div>

                </div>
                <div className="image__product-item">
                    <img src="assets/img/best-image-02.png" srcSet="assets/img/best-image-02@2x.png 2x,
                           assets/img/best-image-02@3x.png 3x" className="BestImage_02"/>

                    <img src="assets/img/producticon-02.png" srcSet="assets/img/producticon-02@2x.png 2x,
                          assets/img/producticon-02@3x.png 3x" className="Producticon_02"/>

                    <div className="box">
                        <span className="How-to-create-mobile-optimized Text-Style-20">
                      How to create 
                    mobile-optimized
                    </span>
                        <img src="assets/img/go-icon.png" srcSet="assets//go-icon@2x.png 2x,
                                assets//go-icon@3x.png 3x" className="go_icon"/>

                    </div>


                </div>
                <div className="image__product-item">
                    <img src="assets/img/best-image-03.png" srcSet="assets/img/best-image-03@2x.png 2x,
                          assets/img/best-image-03@3x.png 3x" className="BestImage_03"/>

                    <img src="assets/img/producticon-03.png" srcSet="assets/img/producticon-03@2x.png 2x,
                          assets/img/producticon-03@3x.png 3x" className="Producticon_03"/>


                    <div className="box">
                        <span className="How-to-create-mobile-optimized Text-Style-20">
                      How to create 
                    mobile-optimized
                    </span>
                        <img src="assets/img/go-icon.png" srcSet="assets//go-icon@2x.png 2x,
                                assets//go-icon@3x.png 3x" className="go_icon"/>

                    </div>

                </div>

            </div>
            <div className="clear">

            </div>

        </div>

        <div className="product__list">
            <div className="grid">
                <div className="row">
                    <div className="grid__column-2-4 ">
                        <div className="product__list-item">
                            <img src="assets/img/img-01.png" srcSet="assets/img/img-01@2x.png 2x,
                                    assets/img/img-01@3x.png 3x" className="img_01"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                                      [what happen] How to create
                              </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                                  2,500 won
                                </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                          assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                                    236
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-2-4 ">
                        <div className="product__list-item">
                            <img src="assets/img/img-02.png" srcSet="assets/img/img-02@2x.png 2x,
                            assets/img/img-02@3x.png 3x" className="img_02"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                              [what happen] How to create
                      </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                          2,500 won
                        </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                  assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                            236
                        </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-2-4 ">
                        <div className="product__list-item">
                            <img src="assets/img/img-03.png" srcSet="assets/img/img-03@2x.png 2x,
                                                  assets/img/img-03@3x.png 3x" className="img_03"/>
                        </div>
                        <span className="what-happen-How-to-create-copy Text-Style-14">
                          [what happen] How to create
                  </span>

                        <div className="product__price">

                            <span className="-won-copy Text-Style-20">
                      2,500 won
                    </span>

                            <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                              assets/img/hearticon@3x.png 3x" className="Hearticon" />
                            <span className="-copy">
                        236
                    </span>
                        </div>
                    </div>
                    <div className="grid__column-2-4 ">
                        <div className="product__list-item">
                            <img src="assets/img/img-04.png" srcSet="assets/img/img-04@2x.png 2x,
                                          assets/img/img-04@3x.png 3x" className="img_04"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                                            [what happen] How to create
                                    </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                                        2,500 won
                                      </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                                assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                                          236
                                      </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-2-4 ">
                        <div className="product__list-item">
                            <img src="assets/img/img-05.png" srcSet="assets/img/img-05@2x.png 2x,
                                  assets/img/img-05@3x.png 3x" className="img_05"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                                    [what happen] How to create
                            </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                                2,500 won
                              </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                        assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                                  236
                              </span>
                            </div>
                        </div>
                    </div>



                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-06.png" srcSet="assets/img/img-06@2x.png 2x,
                                               assets/img/img-06@3x.png 3x" className="img_06"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                                      [what happen] How to create
                              </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                                  2,500 won
                                </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                          assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                                    236
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-07.png" srcSet="assets/img/img-07@2x.png 2x,
                                              assets/img/img-07@3x.png 3x" className="img_07"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                              [what happen] How to create
                      </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                          2,500 won
                        </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                  assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                            236
                        </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-08.png" srcSet="assets/img/img-08@2x.png 2x,
                                              assets/img/img-08@3x.png 3x" className="img_08"/>
                        </div>
                        <span className="what-happen-How-to-create-copy Text-Style-14">
                          [what happen] How to create
                  </span>

                        <div className="product__price">

                            <span className="-won-copy Text-Style-20">
                      2,500 won
                    </span>

                            <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                              assets/img/hearticon@3x.png 3x" className="Hearticon" />
                            <span className="-copy">
                        236
                    </span>
                        </div>
                    </div>
                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-09.png" srcSet="assets/img/img-09@2x.png 2x,
                                              assets/img/img-09@3x.png 3x" className="img_09"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                                            [what happen] How to create
                                    </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                                        2,500 won
                                      </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                                assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                                          236
                                      </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-10.png" srcSet="assets/img/img-10@2x.png 2x,
                                                assets/img/img-10@3x.png 3x" className="img_10"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                                    [what happen] How to create
                            </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                                2,500 won
                              </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                        assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                                  236
                              </span>
                            </div>
                        </div>
                    </div>




                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-11.png" srcSet="assets/img/img-11@2x.png 2x,
                                 assets/img/img-11@3x.png 3x" className="img_11"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                                    [what happen] How to create
                            </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                                2,500 won
                              </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                        assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                                  236
                              </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-12.png" srcSet="assets/img/img-12@2x.png 2x,
                                          assets/img/img-12@3x.png 3x" className="img_12"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                            [what happen] How to create
                    </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                        2,500 won
                      </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                          236
                      </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-13.png" srcSet="assets/img/img-13@2x.png 2x,
                                                assets/img/img-13@3x.png 3x" className="img_13"/>
                        </div>
                        <span className="what-happen-How-to-create-copy Text-Style-14">
                        [what happen] How to create
                </span>

                        <div className="product__price">

                            <span className="-won-copy Text-Style-20">
                    2,500 won
                  </span>

                            <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                            assets/img/hearticon@3x.png 3x" className="Hearticon" />
                            <span className="-copy">
                      236
                  </span>
                        </div>
                    </div>
                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-14.png" srcSet="assets/img/img-14@2x.png 2x,
                                        assets/img/img-14@3x.png 3x" className="img_04"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                                          [what happen] How to create
                                  </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                                      2,500 won
                                    </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                              assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                                        236
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-15.png" srcSet="assets/img/img-15@2x.png 2x,
                                assets/img/img-15@3x.png 3x" className="img_05"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                                  [what happen] How to create
                          </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                              2,500 won
                            </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                      assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                                236
                            </span>
                            </div>
                        </div>
                    </div>




                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-16.png" srcSet="assets/img/img-16@2x.png 2x,
                               assets/img/img-16@3x.png 3x" className="img_11"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                                  [what happen] How to create
                          </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                              2,500 won
                            </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                      assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                                236
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-17.png" srcSet="assets/img/img-17@2x.png 2x,
                                        assets/img/img-17@3x.png 3x" className="img_17"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                          [what happen] How to create
                  </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                      2,500 won
                    </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                              assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                        236
                    </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-2-4" style={{width: "311 px",
                    height: "301px"
                    }}>
                        <div className="product__list-item">
                            <img src="assets/img/img-18.png" srcSet="assets/img/img-18@2x.png 2x,
                                              assets/img/img-18@3x.png 3x" className="img_18"/>
                        </div>
                        <span className="what-happen-How-to-create-copy Text-Style-14">
                      [what happen] How to create
              </span>

                        <div className="product__price">

                            <span className="-won-copy Text-Style-20">
                  2,500 won
                </span>

                            <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                          assets/img/hearticon@3x.png 3x" className="Hearticon" />
                            <span className="-copy">
                    236
                </span>
                        </div>
                    </div>
                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-19.png" srcSet="assets/img/img-19@2x.png 2x,
                                      assets/img/img-19@3x.png 3x" className="img_04"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                                        [what happen] How to create
                                </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                                    2,500 won
                                  </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                            assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                                      236
                                  </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-20.png" srcSet="assets/img/img-20@2x.png 2x,
                              assets/img/img-20@3x.png 3x" className="img_05"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                                [what happen] How to create
                        </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                            2,500 won
                          </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                    assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                              236
                          </span>
                            </div>
                        </div>
                    </div>



                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-21.png" srcSet="assets/img/img-21@2x.png 2x,
                             assets/img/img-21@3x.png 3x" className="img_11"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                                [what happen] How to create
                        </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                            2,500 won
                          </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                    assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                              236
                          </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-22.png" srcSet="assets/img/img-22@2x.png 2x,
                                      assets/img/img-22@3x.png 3x" className="img_17"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                        [what happen] How to create
                </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                    2,500 won
                  </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                            assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                      236
                  </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-23.png" srcSet="assets/img/img-23@2x.png 2x,
                                            assets/img/img-23@3x.png 3x" className="img_13"/>
                        </div>
                        <span className="what-happen-How-to-create-copy Text-Style-14">
                    [what happen] How to create
            </span>

                        <div className="product__price">

                            <span className="-won-copy Text-Style-20">
                2,500 won
              </span>

                            <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                        assets/img/hearticon@3x.png 3x" className="Hearticon" />
                            <span className="-copy">
                  236
              </span>
                        </div>
                    </div>
                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-24.png" srcSet="assets/img/img-24@2x.png 2x,
                                    assets/img/img-24@3x.png 3x" className="img_04"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                                      [what happen] How to create
                              </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                                  2,500 won
                                </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                          assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                                    236
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-2-4">
                        <div className="product__list-item">
                            <img src="assets/img/img-25.png" srcSet="assets/img/img-25@2x.png 2x,
                            assets/img/img-25@3x.png 3x" className="img_05"/>
                            <span className="what-happen-How-to-create-copy Text-Style-14">
                              [what happen] How to create
                      </span>

                            <div className="product__price">

                                <span className="-won-copy Text-Style-20">
                          2,500 won
                        </span>

                                <img src="assets/img/hearticon.png" srcSet="assets/img/hearticon@2x.png 2x,
                                  assets/img/hearticon@3x.png 3x" className="Hearticon" />
                                <span className="-copy">
                            236
                        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>



        <div className="Rectangle-702">
            <span className="see-more">
          see more
        </span>
        </div>


        <div className="product__story">
            <span className="Brand-Story Text-Style-3">
            Brand Story
          </span>

            <span className="Brand-Text">
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
          다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </span>


            <img src=" assets/img/object-06.png" srcSet="assets/img/object-06@2x.png 2x,
                      assets/img/object-06@3x.png 3x" className="Object_06" />
            <img src="assets/img/object-01.png" srcSet="assets/img/object-01@2x.png 2x,
                              assets/img/object-01@3x.png 3x" className="Object_01" />
            <img src="assets/img/object-07.png" srcSet="assets/img/object-07@2x.png 2x,
                                      assets/img/object-07@3x.png 3x" className="Object_07" />
            <img src="assets/img/object-02.png" srcSet="assets/img/object-02@2x.png 2x,
                                              assets/img/object-02@3x.png 3x" className="Object_02" />
            <img src="assets/img/object-03.png" srcSet="assets/img/object-03@2x.png 2x,
                                                      assets/img/object-03@3x.png 3x" className="Object_03" />


            <img src="assets/img/object-04.png" srcSet="assets/img/object-04@2x.png 2x,
                                                assets/img/object-04@3x.png 3x" className="Object_04" />


            <img src="assets/img/object-05.png" srcSet="assets/img/object-05@2x.png 2x,
                        assets/img/object-05@3x.png 3x" className="Object_05"/>
            <div className="brand-poster">
                <div className="brand-poster-rectangle">
                 
                </div>
                <div className="brand-poster-body">
                
                    <img src="assets/img/window.png" srcSet="assets/img/window@2x.png 2x,
                                assets/img/window@3x.png 3x" className="window"/>
                    <span className="What-Happeneds-Brand-story Text-Style-22">
                                  What Happened’s Brand story
                                </span>
                    <span className="brand-poster-story Text-Style-8">
                                  청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을 
                                봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                                긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                                인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                                아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
                      </span>

                    <div className="Rectangle-702-1">
                        <span className="see-more">
                      see more
                    </span>
                    </div>

                </div>
            </div>
        </div>


        <div className="happen__issue">
            <div className="box-2">
                <div className="Happeneds-issue Text-Style-23">
                    Happened’s issue
                </div>

                <span className="happen__issue-text-1 Text-Style-9">
                  모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                </span>
                <div className="Rectangle-702-2">
                    <span className="see-more">
                      see more
                    </span>
                </div>


                <div className="happen__issue-container">
                    <div className="happen__issue-item">

                        <div className="Rectangle-678"></div>
                        <div className="whpn-issue Text-Style-25">
                            whpn issue
                        </div>

                        <img src="assets/img/news-img-01.png" srcSet="assets/img/news-img-01@2x.png 2x,
                                  assets/img/news-img-01@3x.png 3x" className="NewsImg_01" />

                        <img src="assets/img/news-object-03.png" srcSet="assets/img/news-object-03@2x.png 2x,
                                          assets/img/news-object-03@3x.png 3x" className="NewsObject_03" />
                    </div>
                    <div className="happen__issue-item">
                        <div className="Rectangle-678-copy-3">
                            <div className="rectangle-5-heading dark-brown"  >
                                <div className="D-brand Text-Style-24">
                                    B brand
                                </div>
                            </div>
                            <div className="rectagle-5-body">
                                <img src="assets/img/news-img-04.png" srcSet="assets/img/news-img-04@2x.png 2x,
                                            assets/img/news-img-04@3x.png 3x" className="NewsImg_04" />
                            </div>
                            <img src="assets/img/news-object-04.png" srcSet="assets/img/news-object-04@2x.png 2x,
                                          assets/img/news-object-04@3x.png 3x" className="NewsObject_04" />
                        </div>

                    </div>
                    <div className="happen__issue-item">
                        <div className="Rectangle-678-copy-4">
                            <div className="rectangle-4-heading">
                                <div className="c-brand Text-Style-24">
                                    c brand
                                </div>
                            </div>
                            <div className="rectagle-4-body">
                                <img src="assets/img/news-img-03.png" srcSet="assets/img/news-img-03@2x.png 2x,
                                          assets/img/news-img-03@3x.png 3x" className="NewsImg_03" />
                            </div>

                        </div>

                    </div>
                    <div className="happen__issue-item">
                        <div className="Rectangle-678-copy-5">
                            <div className="rectangle-5-heading">
                                <div className="D-brand Text-Style-24">
                                    D brand
                                </div>
                            </div>
                            <div className="rectagle-5-body">
                                <img src="assets/img/news-img-04.png" srcSet="assets/img/news-img-04@2x.png 2x,
                                                assets/img/news-img-04@3x.png 3x" className="NewsImg_04" />
                            </div>
                            <img src="assets/img/news-object-05.png" srcSet="assets/img/news-object-05@2x.png 2x,
                                        assets/img/news-object-05@3x.png 3x" className="NewsObject_05"/>
                        </div>
                    </div>
                    <div className="happen__issue-item">
                        <div className="Rectangle-678-copy-6">
                            <div className="rectangle-6-heading">
                                <div className="E-brand Text-Style-24">
                                    E brand
                                </div>
                            </div>
                            <div className="rectagle-6-body">
                                <img src="assets/img/news-img-05.png" srcSet="assets/img/news-img-05@2x.png 2x,
                                              assets/img/news-img-05@3x.png 3x" className="NewsImg_05" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
        <div className="what__happen">
            <div className="what__happen-relative">

                <img src="assets/img/video-object-05.png" srcSet="assets/img/video-object-05@2x.png 2x,
                        assets/img/video-object-05@3x.png 3x" className="VideoObject_05"/>


                <div className="what-happened">
                    what happened
                </div>
                <span className="How-to-create-mobile-optimized-videos-in-minutes-Not-a-designe">
              How to create mobile-optimized videos in minutes. Not a designer, 
            every team makes a lot of videos Can be trimmed. Take the first
            </span>

                <div className="Rectangle-702-3"><span className="see-more">
              see more
            </span></div>

                <img src="assets/img/video.png" srcSet="assets/img/video@2x.png 2x,
                        assets/img/video@3x.png 3x" className="Video" />
                <img src="assets/img/video-object-04.png" srcSet="assets/img/video-object-04@2x.png 2x,
                                assets/img/video-object-04@3x.png 3x" className="VideoObject_04" />
                <img src="assets/img/video-object-07.png" srcSet="assets/img/video-object-07@2x.png 2x,
                                        assets/img/video-object-07@3x.png 3x" className="VideoObject_07" />
                <img src="assets/img/video-object-06.png" srcSet="assets/img/video-object-06@2x.png 2x,
                                                assets/img/video-object-06@3x.png 3x" className="VideoObject_06"/>
                <img src="assets/img/video-object-09.png" srcSet="assets/img/video-object-09@2x.png 2x,
                                                        assets/img/video-object-09@3x.png 3x" className="VideoObject_09" />

                <img src="assets/img/video-object-08.png" srcSet="assets/img/video-object-08@2x.png 2x,
                                                                assets/img/video-object-08@3x.png 3x" className="VideoObject_08" />
                <img src="assets/img/video-object-03.png" srcSet="assets/img/video-object-03@2x.png 2x,
                                                                        assets/img/video-object-03@3x.png 3x" className="VideoObject_03" />
                <img src="assets/img/video-object-01.png" srcSet="assets/img/video-object-01@2x.png 2x,
                                                                                assets/img/video-object-01@3x.png 3x" className="VideoObject_01" />
                <img src="assets/img/video-object-02.png" srcSet="assets/img/video-object-02@2x.png 2x,
                                                                                        assets/img/video-object-02@3x.png 3x" className="VideoObject_02" />
            </div>

        </div>

        <div className="Rectangle-12-copy-3"></div>
        
        
        <div className="footer">
            <div className="footer-box">
                <span className="what-happened1 Text-Style-15">
                what happened
              </span>
                <span className="what-happened1-text 9CM- Text-Style-26">
                [공지] 개인 정보 처리 방침 변경 사전 안내
              [공지] 29CM 강남 스토어 영업 종료
              [공지] 개인 정보 처리 방침 변경 사전 안내
              [공지] iOS 10 이하 버전 지원 중단 안내
              [공지] 개인 정보 처리 방침 변경 사전 안내
              </span>
                <span className="what-happened1-contact">
                © 2020-2021 what happened corp  l  (주) 왓헤픈<span className="text-style-1">｜</span> 대표자 : 홍길<span className="text-style-2">｜</span> 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr 서울특별시 강남구 도산대로 8길 1<span className="text-style-3">｜</span>                FAX : 070-0000-0000 l 서비스 이용약관
                <span className="text-style-4">개인정보처리방침</span>
                </span>
                <span className="about-us">
                  about us
                </span>
                <span className="about-us-text">
                  회사 소개
                인재 채용
                상시 할인 혜택
                </span>

                <span className="my-order">
                  my order
                </span>
                <span className="my-order-text">
                  내 주문
                주문 배송
                취소 / 교환 / 반품 내역
                상품 리뷰 내역
                증빙 서류 발급
                </span>

                <span className="my-account">
                  my account
                </span>
                <span className="my-account-text">
                  회원 정보 수정
                회원 등급
                마일리지 현황
                쿠폰
                </span>
                <span className="help">
                  help
                </span>
                <div className="help-text">
                    1 : 1 상담 내역 상품 Q & A 내역 공지 사항 자주하는 질문 고객의 소리
                </div>
                <img src="assets/img/snsicon-01.png" srcSet="assets/img/snsicon-01@2x.png 2x,
                              assets/img/snsicon-01@3x.png 3x" className="snsicon_01" />
                <img src="assets/img/snsicon-02.png" srcSet="assets/img/snsicon-02@2x.png 2x,
                                      assets/img/snsicon-02@3x.png 3x" className="snsicon_02" />
                <img src="assets/img/snsicon-03.png" srcSet="assets/img/snsicon-03@2x.png 2x,
                                              assets/img/snsicon-03@3x.png 3x" className="snsicon_03" />


            </div>
        </div>          




      </div>
    
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))

