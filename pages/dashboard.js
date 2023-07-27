import React from 'react'
import Head from 'next/head'

const Dashboard = (props) => {
  return (
    <>
      <div className="dashboard-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="dashboard-dashboard">
          <div className="dashboard-frame1">
            <div className="dashboard-frame4">
              <div className="dashboard-frame2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path d="M2.78249 12.7175C2.71116 12.6492 2.62705 12.5957 2.53499 12.56C2.3524 12.485 2.14759 12.485 1.96499 12.56C1.87293 12.5957 1.78882 12.6492 1.71749 12.7175C1.64921 12.7888 1.59569 12.8729 1.55999 12.965C1.50256 13.1016 1.48686 13.2521 1.5149 13.3976C1.54293 13.5431 1.61342 13.677 1.71749 13.7825C1.79039 13.8487 1.8741 13.902 1.96499 13.94C2.05477 13.9797 2.15184 14.0002 2.24999 14.0002C2.34814 14.0002 2.44522 13.9797 2.53499 13.94C2.62588 13.902 2.70959 13.8487 2.78249 13.7825C2.88656 13.677 2.95706 13.5431 2.98509 13.3976C3.01312 13.2521 2.99743 13.1016 2.93999 12.965C2.9043 12.8729 2.85077 12.7888 2.78249 12.7175ZM5.24999 6.5H15.75C15.9489 6.5 16.1397 6.42098 16.2803 6.28033C16.421 6.13968 16.5 5.94891 16.5 5.75C16.5 5.55109 16.421 5.36032 16.2803 5.21967C16.1397 5.07902 15.9489 5 15.75 5H5.24999C5.05108 5 4.86031 5.07902 4.71966 5.21967C4.57901 5.36032 4.49999 5.55109 4.49999 5.75C4.49999 5.94891 4.57901 6.13968 4.71966 6.28033C4.86031 6.42098 5.05108 6.5 5.24999 6.5ZM2.78249 8.9675C2.67702 8.86343 2.54309 8.79293 2.3976 8.7649C2.25211 8.73687 2.10157 8.75257 1.96499 8.81C1.8741 8.84798 1.79039 8.90125 1.71749 8.9675C1.64921 9.03883 1.59569 9.12294 1.55999 9.215C1.52031 9.30478 1.49982 9.40185 1.49982 9.5C1.49982 9.59815 1.52031 9.69522 1.55999 9.785C1.59797 9.87589 1.65124 9.9596 1.71749 10.0325C1.79039 10.0987 1.8741 10.152 1.96499 10.19C2.05477 10.2297 2.15184 10.2502 2.24999 10.2502C2.34814 10.2502 2.44522 10.2297 2.53499 10.19C2.62588 10.152 2.70959 10.0987 2.78249 10.0325C2.84874 9.9596 2.90201 9.87589 2.93999 9.785C2.97967 9.69522 3.00017 9.59815 3.00017 9.5C3.00017 9.40185 2.97967 9.30478 2.93999 9.215C2.9043 9.12294 2.85077 9.03883 2.78249 8.9675ZM15.75 8.75H5.24999C5.05108 8.75 4.86031 8.82902 4.71966 8.96967C4.57901 9.11032 4.49999 9.30109 4.49999 9.5C4.49999 9.69891 4.57901 9.88968 4.71966 10.0303C4.86031 10.171 5.05108 10.25 5.24999 10.25H15.75C15.9489 10.25 16.1397 10.171 16.2803 10.0303C16.421 9.88968 16.5 9.69891 16.5 9.5C16.5 9.30109 16.421 9.11032 16.2803 8.96967C16.1397 8.82902 15.9489 8.75 15.75 8.75ZM2.78249 5.2175C2.71116 5.14922 2.62705 5.0957 2.53499 5.06C2.39841 5.00257 2.24787 4.98687 2.10238 5.0149C1.95689 5.04293 1.82296 5.11343 1.71749 5.2175C1.65124 5.2904 1.59797 5.37411 1.55999 5.465C1.52031 5.55478 1.49982 5.65185 1.49982 5.75C1.49982 5.84815 1.52031 5.94522 1.55999 6.035C1.59797 6.12589 1.65124 6.2096 1.71749 6.2825C1.79039 6.34875 1.8741 6.40202 1.96499 6.44C2.10157 6.49743 2.25211 6.51313 2.3976 6.4851C2.54309 6.45707 2.67702 6.38657 2.78249 6.2825C2.84874 6.2096 2.90201 6.12589 2.93999 6.035C2.97967 5.94522 3.00017 5.84815 3.00017 5.75C3.00017 5.65185 2.97967 5.55478 2.93999 5.465C2.90201 5.37411 2.84874 5.2904 2.78249 5.2175ZM15.75 12.5H5.24999C5.05108 12.5 4.86031 12.579 4.71966 12.7197C4.57901 12.8603 4.49999 13.0511 4.49999 13.25C4.49999 13.4489 4.57901 13.6397 4.71966 13.7803C4.86031 13.921 5.05108 14 5.24999 14H15.75C15.9489 14 16.1397 13.921 16.2803 13.7803C16.421 13.6397 16.5 13.4489 16.5 13.25C16.5 13.0511 16.421 12.8603 16.2803 12.7197C16.1397 12.579 15.9489 12.5 15.75 12.5Z" fill="white"/>
              </svg>
                <span className="dashboard-text">
                  <span>Home</span>
                </span>
              </div>
              <div className="dashboard-frame3">
                <img
                  alt="ulistul7802"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-ulistul"
                />
                <span className="dashboard-text002">
                  <span>Contents</span>
                </span>
              </div>
              <div className="dashboard-frame41">
                <img
                  alt="ulistuialt7802"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-ulistuialt"
                />
                <span className="dashboard-text004">
                  <span>Categories</span>
                </span>
              </div>
              <div className="dashboard-frame5">
                <img
                  alt="ucog7803"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-ucog"
                />
                <span className="dashboard-text006">
                  <span>Settings</span>
                </span>
              </div>
            </div>
            <div className="dashboard-frame6">
              <img
                alt="Ellipse17803"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="dashboard-ellipse1"
              />
              <span className="dashboard-text008">
                <span>İsmail İhsan Bülbül</span>
              </span>
            </div>
          </div>
          <div className="dashboard-frame7">
            <div className="dashboard-frame13">
              <div className="dashboard-frame19">
                <div className="dashboard-frame18">
                  <img
                    alt="uplus7813"
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    className="dashboard-uplus"
                  />
                  <span className="dashboard-text010">
                    <span>New Item</span>
                  </span>
                </div>
              </div>
              <div className="dashboard-frame9">
                <div className="dashboard-frame8">
                  <div className="dashboard-darhboard">
                    <img
                      alt="Rectangle34I780"
                      src
                      className="dashboard-rectangle34"
                    />
                    <img
                      alt="Rectangle35I780"
                      src
                      className="dashboard-rectangle35"
                    />
                    <img
                      alt="Rectangle36I780"
                      src
                      className="dashboard-rectangle36"
                    />
                    <img
                      alt="Rectangle37I780"
                      src
                      className="dashboard-rectangle37"
                    />
                  </div>
                  <span className="dashboard-text012">
                    <span>Dashboard</span>
                  </span>
                </div>
                <img
                  alt="Expandup7805"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-expandup"
                />
              </div>
              <div className="dashboard-frame12">
                <span className="dashboard-text014">
                  <span>Commarce</span>
                </span>
                <span className="dashboard-text016">
                  <span>Analytics</span>
                </span>
                <span className="dashboard-text018">
                  <span>Cyrpto</span>
                </span>
                <span className="dashboard-text020">
                  <span>Helpdesk</span>
                </span>
                <span className="dashboard-text022">
                  <span>Monitoring</span>
                </span>
                <span className="dashboard-text024">
                  <span>Fitnes</span>
                </span>
              </div>
              <div className="dashboard-frame10">
                <div className="dashboard-frame81">
                  <div className="dashboard-darhboard1">
                    <img
                      alt="Rectangle34I780"
                      src
                      className="dashboard-rectangle341"
                    />
                    <img
                      alt="Rectangle35I780"
                      src
                      className="dashboard-rectangle351"
                    />
                    <img
                      alt="Rectangle36I780"
                      src
                      className="dashboard-rectangle361"
                    />
                    <img
                      alt="Rectangle37I780"
                      src
                      className="dashboard-rectangle371"
                    />
                  </div>
                  <span className="dashboard-text026">
                    <span>Application</span>
                  </span>
                </div>
                <img
                  alt="Expanddown7805"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-expanddown"
                />
              </div>
              <div className="dashboard-frame11">
                <div className="dashboard-frame82">
                  <div className="dashboard-darhboard2">
                    <img
                      alt="Rectangle34I780"
                      src
                      className="dashboard-rectangle342"
                    />
                    <img
                      alt="Rectangle35I780"
                      src
                      className="dashboard-rectangle352"
                    />
                    <img
                      alt="Rectangle36I780"
                      src
                      className="dashboard-rectangle362"
                    />
                    <img
                      alt="Rectangle37I780"
                      src
                      className="dashboard-rectangle372"
                    />
                  </div>
                  <span className="dashboard-text028">
                    <span>Elements</span>
                  </span>
                </div>
                <img
                  alt="Expanddown7806"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-expanddown01"
                />
              </div>
              <div className="dashboard-frame131">
                <div className="dashboard-frame83">
                  <div className="dashboard-darhboard3">
                    <img
                      alt="Rectangle34I780"
                      src
                      className="dashboard-rectangle343"
                    />
                    <img
                      alt="Rectangle35I780"
                      src
                      className="dashboard-rectangle353"
                    />
                    <img
                      alt="Rectangle36I780"
                      src
                      className="dashboard-rectangle363"
                    />
                    <img
                      alt="Rectangle37I780"
                      src
                      className="dashboard-rectangle373"
                    />
                  </div>
                  <span className="dashboard-text030">
                    <span>Forms</span>
                  </span>
                </div>
                <img
                  alt="Expanddown7808"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-expanddown02"
                />
              </div>
              <div className="dashboard-frame14">
                <div className="dashboard-frame84">
                  <div className="dashboard-darhboard4">
                    <img
                      alt="Rectangle34I780"
                      src
                      className="dashboard-rectangle344"
                    />
                    <img
                      alt="Rectangle35I780"
                      src
                      className="dashboard-rectangle354"
                    />
                    <img
                      alt="Rectangle36I780"
                      src
                      className="dashboard-rectangle364"
                    />
                    <img
                      alt="Rectangle37I780"
                      src
                      className="dashboard-rectangle374"
                    />
                  </div>
                  <span className="dashboard-text032">
                    <span>Plugins</span>
                  </span>
                </div>
                <img
                  alt="Expanddown7809"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-expanddown03"
                />
              </div>
              <div className="dashboard-frame15">
                <div className="dashboard-frame85">
                  <div className="dashboard-darhboard5">
                    <img
                      alt="Rectangle34I781"
                      src
                      className="dashboard-rectangle345"
                    />
                    <img
                      alt="Rectangle35I781"
                      src
                      className="dashboard-rectangle355"
                    />
                    <img
                      alt="Rectangle36I781"
                      src
                      className="dashboard-rectangle365"
                    />
                    <img
                      alt="Rectangle37I781"
                      src
                      className="dashboard-rectangle375"
                    />
                  </div>
                  <span className="dashboard-text034">
                    <span>Elements</span>
                  </span>
                </div>
                <img
                  alt="Expanddown7810"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-expanddown04"
                />
              </div>
              <div className="dashboard-frame16">
                <div className="dashboard-frame86">
                  <div className="dashboard-darhboard6">
                    <img
                      alt="Rectangle34I781"
                      src
                      className="dashboard-rectangle346"
                    />
                    <img
                      alt="Rectangle35I781"
                      src
                      className="dashboard-rectangle356"
                    />
                    <img
                      alt="Rectangle36I781"
                      src
                      className="dashboard-rectangle366"
                    />
                    <img
                      alt="Rectangle37I781"
                      src
                      className="dashboard-rectangle376"
                    />
                  </div>
                  <span className="dashboard-text036">
                    <span>Datagrid</span>
                  </span>
                </div>
                <img
                  alt="Expanddown7811"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-expanddown05"
                />
              </div>
              <div className="dashboard-frame17">
                <div className="dashboard-frame87">
                  <div className="dashboard-darhboard7">
                    <img
                      alt="Rectangle34I781"
                      src
                      className="dashboard-rectangle347"
                    />
                    <img
                      alt="Rectangle35I781"
                      src
                      className="dashboard-rectangle357"
                    />
                    <img
                      alt="Rectangle36I781"
                      src
                      className="dashboard-rectangle367"
                    />
                    <img
                      alt="Rectangle37I781"
                      src
                      className="dashboard-rectangle377"
                    />
                  </div>
                  <span className="dashboard-text038">
                    <span>Settings</span>
                  </span>
                </div>
                <img
                  alt="Expanddown7812"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-expanddown06"
                />
              </div>
            </div>
          </div>
          <div className="dashboard-frame20">
            <div className="dashboard-frame21">
              <span className="dashboard-text040">
                <span>Add new post</span>
              </span>
              <div className="dashboard-frame42">
                <div className="dashboard-frame43">
                  <img
                    alt="uplus7815"
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    className="dashboard-uplus1"
                  />
                  <span className="dashboard-text042">
                    <span>Add Content</span>
                  </span>
                </div>
                <div className="dashboard-frame51">
                  <img
                    alt="ucog7815"
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    className="dashboard-ucog1"
                  />
                  <span className="dashboard-text044">
                    <span>Settings</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="dashboard-frame22">
              <span className="dashboard-text046">
                <span>Search content..</span>
              </span>
              <img
                alt="usearch7816"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="dashboard-usearch"
              />
            </div>
          </div>
          <div className="dashboard-frame32">
            <div className="dashboard-frame26">
              <div className="dashboard-info-box">
                <a
                  href="http://www.w3.org/2000/svg"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dashboard-link"
                >
                  <img
                    alt="ushoppingbagI782"
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    className="dashboard-ushoppingbag"
                  />
                </a>
                <div className="dashboard-frame23">
                  <span className="dashboard-text048">
                    <span>Total Sales</span>
                  </span>
                  <span className="dashboard-text050">
                    <span>$2,456</span>
                  </span>
                </div>
              </div>
              <div className="dashboard-info-box1">
                <img
                  alt="ushopI782"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-ushop"
                />
                <div className="dashboard-frame231">
                  <span className="dashboard-text052">
                    <span>Total Expenses</span>
                  </span>
                  <span className="dashboard-text054">
                    <span>$3,326</span>
                  </span>
                </div>
              </div>
              <div className="dashboard-info-box2">
                <img
                  alt="uusersaltI782"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-uusersalt"
                />
                <div className="dashboard-frame232">
                  <span className="dashboard-text056">
                    <span>Total Visitors</span>
                  </span>
                  <span className="dashboard-text058">
                    <span>5,325</span>
                  </span>
                </div>
              </div>
              <div className="dashboard-info-box3">
                <img
                  alt="ulistuialtI782"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-ulistuialt1"
                />
                <div className="dashboard-frame233">
                  <span className="dashboard-text060">
                    <span>Total Orders</span>
                  </span>
                  <span className="dashboard-text062">
                    <span>1,326</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="dashboard-frame27">
              <div className="dashboard-form-title">
                <span className="dashboard-text064">
                  <span>Form title</span>
                </span>
                <span className="dashboard-text066">
                  <span>
                    Sed tortor, sed velit ridiculus ipsum pharetra lacus odio
                    gravida augue enim.
                  </span>
                </span>
              </div>
              <div className="dashboard-alert-box">
                <img
                  alt="uinfocircleI401"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-uinfocircle"
                />
                <span className="dashboard-text068">
                  <span>
                    Senectus malesuada suspendisse bibendum elit amet vitae.
                  </span>
                </span>
              </div>
              <div className="dashboard-form-table">
                <div className="dashboard-frame66">
                  <div className="dashboard-frame64">
                    <span className="dashboard-text070">
                      <span>Table Title</span>
                    </span>
                  </div>
                  <div className="dashboard-frame65">
                    <span className="dashboard-text072">
                      <span>Etiam purus in</span>
                    </span>
                  </div>
                  <div className="dashboard-frame661">
                    <span className="dashboard-text074">
                      <span>Duis eget habitant</span>
                    </span>
                  </div>
                  <div className="dashboard-frame67">
                    <span className="dashboard-text076">
                      <span>Aliquam velit lacus</span>
                    </span>
                  </div>
                  <div className="dashboard-frame68">
                    <span className="dashboard-text078">
                      <span>Fermentum scelerisque ultricies</span>
                    </span>
                  </div>
                  <div className="dashboard-frame69">
                    <span className="dashboard-text080">
                      <span>Integer semper pellentesque</span>
                    </span>
                  </div>
                  <div className="dashboard-frame70">
                    <span className="dashboard-text082">
                      <span>Parturient at id</span>
                    </span>
                  </div>
                  <div className="dashboard-frame71">
                    <span className="dashboard-text084">
                      <span>Amet, pretium eget</span>
                    </span>
                  </div>
                  <div className="dashboard-frame72">
                    <span className="dashboard-text086">
                      <span>Risus consequat sollicitudin</span>
                    </span>
                  </div>
                  <div className="dashboard-frame73">
                    <span className="dashboard-text088">
                      <span>Risus consequat sollicitudin</span>
                    </span>
                  </div>
                </div>
                <div className="dashboard-frame671">
                  <div className="dashboard-frame641">
                    <span className="dashboard-text090">
                      <span>Table Title</span>
                    </span>
                  </div>
                  <div className="dashboard-frame651">
                    <span className="dashboard-text092">
                      <span>Curabitur donec duis</span>
                    </span>
                  </div>
                  <div className="dashboard-frame662">
                    <span className="dashboard-text094">
                      <span>At amet odio</span>
                    </span>
                  </div>
                  <div className="dashboard-frame672">
                    <span className="dashboard-text096">
                      <span>Pellentesque egestas placerat</span>
                    </span>
                  </div>
                  <div className="dashboard-frame681">
                    <span className="dashboard-text098">
                      <span>Morbi sagittis nulla</span>
                    </span>
                  </div>
                  <div className="dashboard-frame691">
                    <span className="dashboard-text100">
                      <span>Neque turpis enim</span>
                    </span>
                  </div>
                  <div className="dashboard-frame701">
                    <span className="dashboard-text102">
                      <span>Sem neque, mattis</span>
                    </span>
                  </div>
                  <div className="dashboard-frame711">
                    <span className="dashboard-text104">
                      <span>In ipsum volutpat</span>
                    </span>
                  </div>
                  <div className="dashboard-frame721">
                    <span className="dashboard-text106">
                      <span>Adipiscing odio nulla</span>
                    </span>
                  </div>
                  <div className="dashboard-frame731">
                    <span className="dashboard-text108">
                      <span>Adipiscing odio nulla</span>
                    </span>
                  </div>
                </div>
                <div className="dashboard-frame682">
                  <div className="dashboard-frame642">
                    <span className="dashboard-text110">
                      <span>Table Title</span>
                    </span>
                  </div>
                  <div className="dashboard-frame652">
                    <span className="dashboard-text112">
                      <span>Morbi pharetra, accumsan</span>
                    </span>
                  </div>
                  <div className="dashboard-frame663">
                    <span className="dashboard-text114">
                      <span>Commodo eget scelerisque</span>
                    </span>
                  </div>
                  <div className="dashboard-frame673">
                    <span className="dashboard-text116">
                      <span>Tortor habitant sit</span>
                    </span>
                  </div>
                  <div className="dashboard-frame683">
                    <span className="dashboard-text118">
                      <span>Quam semper quis</span>
                    </span>
                  </div>
                  <div className="dashboard-frame692">
                    <span className="dashboard-text120">
                      <span>Egestas non sociis</span>
                    </span>
                  </div>
                  <div className="dashboard-frame702">
                    <span className="dashboard-text122">
                      <span>Pellentesque facilisis massa</span>
                    </span>
                  </div>
                  <div className="dashboard-frame712">
                    <span className="dashboard-text124">
                      <span>Ut feugiat egestas</span>
                    </span>
                  </div>
                  <div className="dashboard-frame722">
                    <span className="dashboard-text126">
                      <span>Pharetra id sit</span>
                    </span>
                  </div>
                  <div className="dashboard-frame732">
                    <span className="dashboard-text128">
                      <span>Pharetra id sit</span>
                    </span>
                  </div>
                </div>
                <div className="dashboard-frame693">
                  <div className="dashboard-frame643">
                    <span className="dashboard-text130">
                      <span>Table Title</span>
                    </span>
                  </div>
                  <div className="dashboard-frame653">
                    <button className="dashboard-button-mini">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave"
                      />
                      <span className="dashboard-text132">
                        <span>Edit</span>
                      </span>
                    </button>
                    <button className="dashboard-button-mini01">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave01"
                      />
                      <span className="dashboard-text134">
                        <span>Delete</span>
                      </span>
                    </button>
                  </div>
                  <div className="dashboard-frame733">
                    <button className="dashboard-button-mini02">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave02"
                      />
                      <span className="dashboard-text136">
                        <span>Edit</span>
                      </span>
                    </button>
                    <button className="dashboard-button-mini03">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave03"
                      />
                      <span className="dashboard-text138">
                        <span>Delete</span>
                      </span>
                    </button>
                  </div>
                  <div className="dashboard-frame74">
                    <button className="dashboard-button-mini04">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave04"
                      />
                      <span className="dashboard-text140">
                        <span>Edit</span>
                      </span>
                    </button>
                    <button className="dashboard-button-mini05">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave05"
                      />
                      <span className="dashboard-text142">
                        <span>Delete</span>
                      </span>
                    </button>
                  </div>
                  <div className="dashboard-frame75">
                    <button className="dashboard-button-mini06">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave06"
                      />
                      <span className="dashboard-text144">
                        <span>Edit</span>
                      </span>
                    </button>
                    <button className="dashboard-button-mini07">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave07"
                      />
                      <span className="dashboard-text146">
                        <span>Delete</span>
                      </span>
                    </button>
                  </div>
                  <div className="dashboard-frame76">
                    <button className="dashboard-button-mini08">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave08"
                      />
                      <span className="dashboard-text148">
                        <span>Edit</span>
                      </span>
                    </button>
                    <button className="dashboard-button-mini09">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave09"
                      />
                      <span className="dashboard-text150">
                        <span>Delete</span>
                      </span>
                    </button>
                  </div>
                  <div className="dashboard-frame77">
                    <button className="dashboard-button-mini10">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave10"
                      />
                      <span className="dashboard-text152">
                        <span>Edit</span>
                      </span>
                    </button>
                    <button className="dashboard-button-mini11">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave11"
                      />
                      <span className="dashboard-text154">
                        <span>Delete</span>
                      </span>
                    </button>
                  </div>
                  <div className="dashboard-frame78">
                    <button className="dashboard-button-mini12">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave12"
                      />
                      <span className="dashboard-text156">
                        <span>Edit</span>
                      </span>
                    </button>
                    <button className="dashboard-button-mini13">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave13"
                      />
                      <span className="dashboard-text158">
                        <span>Delete</span>
                      </span>
                    </button>
                  </div>
                  <div className="dashboard-frame79">
                    <button className="dashboard-button-mini14">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave14"
                      />
                      <span className="dashboard-text160">
                        <span>Edit</span>
                      </span>
                    </button>
                    <button className="dashboard-button-mini15">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave15"
                      />
                      <span className="dashboard-text162">
                        <span>Delete</span>
                      </span>
                    </button>
                  </div>
                  <div className="dashboard-frame80">
                    <button className="dashboard-button-mini16">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave16"
                      />
                      <span className="dashboard-text164">
                        <span>Edit</span>
                      </span>
                    </button>
                    <button className="dashboard-button-mini17">
                      <img
                        alt="usaveI887"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-usave17"
                      />
                      <span className="dashboard-text166">
                        <span>Delete</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="dashboard-pagination">
                <img
                  alt="ExpandleftdoubleI362"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-expandleftdouble"
                />
                <button className="dashboard-button-page">
                  <span className="dashboard-text168">1</span>
                </button>
                <button className="dashboard-button-page1">
                  <span className="dashboard-text169">2</span>
                </button>
                <button className="dashboard-button-page2">
                  <span className="dashboard-text170">3</span>
                </button>
                <button className="dashboard-button-page3">
                  <span className="dashboard-text171">4</span>
                </button>
                <button className="dashboard-button-page4">
                  <span className="dashboard-text172">5</span>
                </button>
                <img
                  alt="ExpandrightdoubleI362"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="dashboard-expandrightdouble"
                />
              </div>
            </div>
            <div className="dashboard-frame321">
              <div className="dashboard-form-title1">
                <span className="dashboard-text173">
                  <span>Form title</span>
                </span>
                <span className="dashboard-text175">
                  <span>
                    Sed tortor, sed velit ridiculus ipsum pharetra lacus odio
                    gravida augue enim.
                  </span>
                </span>
              </div>
              <div className="dashboard-frame88">
                <button className="dashboard-button-lang">
                  <span className="dashboard-text177">
                    <span>English</span>
                  </span>
                  <img
                    alt="FlagI362"
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    className="dashboard-flag"
                  />
                </button>
                <button className="dashboard-button-lang1">
                  <div className="dashboard-flag1">
                    <div className="dashboard-group">
                      <img
                        alt="VectorI362"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-vector"
                      />
                      <img
                        alt="VectorI362"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-vector1"
                      />
                      <img
                        alt="VectorI362"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-vector2"
                      />
                      <img
                        alt="VectorI362"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="dashboard-vector3"
                      />
                    </div>
                  </div>
                  <span className="dashboard-text179">
                    <span>Turkish</span>
                  </span>
                </button>
              </div>
              <div className="dashboard-form-input">
                <span className="dashboard-text181">
                  <span>Label title</span>
                </span>
                <div className="dashboard-frame28">
                  <span className="dashboard-text183">
                    <span>Placeholder content</span>
                  </span>
                </div>
              </div>
              <div className="dashboard-frame29">
                <div className="dashboard-form-select-box">
                  <span className="dashboard-text185">
                    <span>Label title</span>
                  </span>
                  <div className="dashboard-frame2801">
                    <span className="dashboard-text187">
                      <span>Chose</span>
                    </span>
                    <img
                      alt="ExpanddownI886"
                      src="https://play.teleporthq.io/static/svg/default-img.svg"
                      className="dashboard-expanddown07"
                    />
                  </div>
                </div>
                <div className="dashboard-form-input1">
                  <span className="dashboard-text189">
                    <span>Label title</span>
                  </span>
                  <div className="dashboard-frame2802">
                    <span className="dashboard-text191">
                      <span>Placeholder content</span>
                    </span>
                  </div>
                </div>
                <div className="dashboard-form-input2">
                  <span className="dashboard-text193">
                    <span>Label title</span>
                  </span>
                  <div className="dashboard-frame2803">
                    <span className="dashboard-text195">
                      <span>Placeholder content</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="dashboard-frame30">
                <div className="dashboard-form-input3">
                  <span className="dashboard-text197">
                    <span>Label title</span>
                  </span>
                  <div className="dashboard-frame2804">
                    <span className="dashboard-text199">
                      <span>Placeholder content</span>
                    </span>
                  </div>
                </div>
                <div className="dashboard-form-input4">
                  <span className="dashboard-text201">
                    <span>Label title</span>
                  </span>
                  <div className="dashboard-frame2805">
                    <span className="dashboard-text203">
                      <span>Placeholder content</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="dashboard-form-textarea">
                <span className="dashboard-text205">
                  <span>Label Title</span>
                </span>
                <div className="dashboard-frame2806">
                  <span className="dashboard-text207">
                    <span>Placeholder content</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="dashboard-frame31">
              <div className="dashboard-frame2807">
                <div className="dashboard-form-title2">
                  <span className="dashboard-text209">
                    <span>Form title</span>
                  </span>
                  <span className="dashboard-text211">
                    <span>
                      Sed tortor, sed velit ridiculus ipsum pharetra lacus odio
                      gravida augue enim.
                    </span>
                  </span>
                </div>
                <div className="dashboard-form-input5">
                  <span className="dashboard-text213">
                    <span>Label title</span>
                  </span>
                  <div className="dashboard-frame2808">
                    <span className="dashboard-text215">
                      <span>Placeholder content</span>
                    </span>
                  </div>
                </div>
                <div className="dashboard-form-select-box1">
                  <span className="dashboard-text217">
                    <span>Label title</span>
                  </span>
                  <div className="dashboard-frame2809">
                    <span className="dashboard-text219">
                      <span>Chose</span>
                    </span>
                    <img
                      alt="ExpanddownI884"
                      src="https://play.teleporthq.io/static/svg/default-img.svg"
                      className="dashboard-expanddown08"
                    />
                  </div>
                </div>
                <div className="dashboard-frame301">
                  <div className="dashboard-form-input6">
                    <span className="dashboard-text221">
                      <span>Label title</span>
                    </span>
                    <div className="dashboard-frame2810">
                      <span className="dashboard-text223">
                        <span>Placeholder content</span>
                      </span>
                    </div>
                  </div>
                  <div className="dashboard-form-input7">
                    <span className="dashboard-text225">
                      <span>Label title</span>
                    </span>
                    <div className="dashboard-frame2811">
                      <span className="dashboard-text227">
                        <span>Placeholder content</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="dashboard-form-textarea1">
                  <span className="dashboard-text229">
                    <span>Label Title</span>
                  </span>
                  <div className="dashboard-frame2812">
                    <span className="dashboard-text231">
                      <span>Placeholder content</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="dashboard-frame291">
                <div className="dashboard-form-title3">
                  <span className="dashboard-text233">
                    <span>Form title</span>
                  </span>
                </div>
                <div className="dashboard-form-input8">
                  <span className="dashboard-text235">
                    <span>Label title</span>
                  </span>
                  <div className="dashboard-frame2813">
                    <span className="dashboard-text237">
                      <span>Placeholder content</span>
                    </span>
                  </div>
                </div>
                <div className="dashboard-form-select-box2">
                  <span className="dashboard-text239">
                    <span>Label title</span>
                  </span>
                  <div className="dashboard-frame2814">
                    <span className="dashboard-text241">
                      <span>Chose</span>
                    </span>
                    <img
                      alt="ExpanddownI883"
                      src="https://play.teleporthq.io/static/svg/default-img.svg"
                      className="dashboard-expanddown09"
                    />
                  </div>
                </div>
                <div className="dashboard-form-textarea2">
                  <span className="dashboard-text243">
                    <span>Label Title</span>
                  </span>
                  <div className="dashboard-frame2815">
                    <span className="dashboard-text245">
                      <span>Placeholder content</span>
                    </span>
                  </div>
                </div>
                <button className="dashboard-button">
                  <span className="dashboard-text247">
                    <span>Button title</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .dashboard-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .dashboard-dashboard {
            width: 100%;
            height: 2307px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-frame1 {
            top: -1px;
            left: 0px;
            width: 1440px;
            height: 55px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral900);
          }
          .dashboard-frame4 {
            gap: 25px;
            top: 17px;
            left: 30px;
            width: 408px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .dashboard-frame2 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .dashboard-uhomealt {
            width: 18px;
            height: 18px;
          }
          .dashboard-text {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame3 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .dashboard-ulistul {
            width: 18px;
            height: 18px;
          }
          .dashboard-text002 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame41 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .dashboard-ulistuialt {
            width: 18px;
            height: 18px;
          }
          .dashboard-text004 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame5 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .dashboard-ucog {
            width: 18px;
            height: 18px;
          }
          .dashboard-text006 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame6 {
            gap: 5px;
            top: 9px;
            left: 1227px;
            width: 183px;
            display: flex;
            padding: 3px 15px 3px 3px;
            position: absolute;
            align-items: center;
            border-radius: 36px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-ellipse1 {
            width: 30px;
            height: 30px;
          }
          .dashboard-text008 {
            color: var(--dl-color-default-gray900);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame7 {
            top: 55px;
            left: 0px;
            width: 260px;
            height: 2252px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral800);
          }
          .dashboard-frame13 {
            top: 0px;
            left: 0px;
            width: 260px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dashboard-frame19 {
            gap: 10px;
            display: flex;
            padding: 15px 30px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-frame18 {
            gap: 5px;
            display: flex;
            padding: 10px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-radius: 5px;
            background-color: var(--dl-color-default-neutral200);
          }
          .dashboard-uplus {
            width: 24px;
            height: 24px;
          }
          .dashboard-text010 {
            color: var(--dl-color-default-neutral900);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame9 {
            gap: 21px;
            display: flex;
            padding: 15px 30px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(23, 23, 23, 1);
            border-style: solid;
            border-width: 1px 0 0;
            justify-content: space-between;
          }
          .dashboard-frame8 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .dashboard-darhboard {
            width: 18px;
            height: 18px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-rectangle34 {
            top: 3px;
            left: 3px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle35 {
            top: 10.5px;
            left: 3px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle36 {
            top: 10.5px;
            left: 10.5px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle37 {
            top: 3px;
            left: 10.5px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-text012 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-expandup {
            width: 18px;
            height: 18px;
          }
          .dashboard-frame12 {
            gap: 10px;
            display: flex;
            padding: 0 0 15px 50px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-text014 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-text016 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-text018 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-text020 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-text022 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-text024 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame10 {
            gap: 21px;
            display: flex;
            padding: 15px 30px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(23, 23, 23, 1);
            border-style: solid;
            border-width: 1px 0 0;
            justify-content: space-between;
          }
          .dashboard-frame81 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .dashboard-darhboard1 {
            width: 18px;
            height: 18px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-rectangle341 {
            top: 3px;
            left: 3px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle351 {
            top: 10.5px;
            left: 3px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle361 {
            top: 10.5px;
            left: 10.5px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle371 {
            top: 3px;
            left: 10.5px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-text026 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-expanddown {
            width: 18px;
            height: 18px;
          }
          .dashboard-frame11 {
            gap: 21px;
            display: flex;
            padding: 15px 30px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(23, 23, 23, 1);
            border-style: solid;
            border-width: 1px 0 0;
            justify-content: space-between;
          }
          .dashboard-frame82 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .dashboard-darhboard2 {
            width: 18px;
            height: 18px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-rectangle342 {
            top: 3px;
            left: 3px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle352 {
            top: 10.5px;
            left: 3px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle362 {
            top: 10.5px;
            left: 10.5px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle372 {
            top: 3px;
            left: 10.5px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-text028 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-expanddown01 {
            width: 18px;
            height: 18px;
          }
          .dashboard-frame131 {
            gap: 21px;
            display: flex;
            padding: 15px 30px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(23, 23, 23, 1);
            border-style: solid;
            border-width: 1px 0 0;
            justify-content: space-between;
          }
          .dashboard-frame83 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .dashboard-darhboard3 {
            width: 18px;
            height: 18px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-rectangle343 {
            top: 3px;
            left: 3px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle353 {
            top: 10.5px;
            left: 3px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle363 {
            top: 10.5px;
            left: 10.5px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle373 {
            top: 3px;
            left: 10.5px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-text030 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-expanddown02 {
            width: 18px;
            height: 18px;
          }
          .dashboard-frame14 {
            gap: 21px;
            display: flex;
            padding: 15px 30px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(23, 23, 23, 1);
            border-style: solid;
            border-width: 1px 0 0;
            justify-content: space-between;
          }
          .dashboard-frame84 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .dashboard-darhboard4 {
            width: 18px;
            height: 18px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-rectangle344 {
            top: 3px;
            left: 3px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle354 {
            top: 10.5px;
            left: 3px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle364 {
            top: 10.5px;
            left: 10.5px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle374 {
            top: 3px;
            left: 10.5px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-text032 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-expanddown03 {
            width: 18px;
            height: 18px;
          }
          .dashboard-frame15 {
            gap: 21px;
            display: flex;
            padding: 15px 30px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(23, 23, 23, 1);
            border-style: solid;
            border-width: 1px 0 0;
            justify-content: space-between;
          }
          .dashboard-frame85 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .dashboard-darhboard5 {
            width: 18px;
            height: 18px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-rectangle345 {
            top: 3px;
            left: 3px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle355 {
            top: 10.5px;
            left: 3px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle365 {
            top: 10.5px;
            left: 10.5px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle375 {
            top: 3px;
            left: 10.5px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-text034 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-expanddown04 {
            width: 18px;
            height: 18px;
          }
          .dashboard-frame16 {
            gap: 21px;
            display: flex;
            padding: 15px 30px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(23, 23, 23, 1);
            border-style: solid;
            border-width: 1px 0 0;
            justify-content: space-between;
          }
          .dashboard-frame86 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .dashboard-darhboard6 {
            width: 18px;
            height: 18px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-rectangle346 {
            top: 3px;
            left: 3px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle356 {
            top: 10.5px;
            left: 3px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle366 {
            top: 10.5px;
            left: 10.5px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle376 {
            top: 3px;
            left: 10.5px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-text036 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-expanddown05 {
            width: 18px;
            height: 18px;
          }
          .dashboard-frame17 {
            gap: 21px;
            display: flex;
            padding: 15px 30px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(23, 23, 23, 1);
            border-style: solid;
            border-width: 1px 0 0;
            justify-content: space-between;
          }
          .dashboard-frame87 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .dashboard-darhboard7 {
            width: 18px;
            height: 18px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-rectangle347 {
            top: 3px;
            left: 3px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle357 {
            top: 10.5px;
            left: 3px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle367 {
            top: 10.5px;
            left: 10.5px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-rectangle377 {
            top: 3px;
            left: 10.5px;
            width: 4px;
            height: 4px;
            position: absolute;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 1px;
          }
          .dashboard-text038 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-expanddown06 {
            width: 18px;
            height: 18px;
          }
          .dashboard-frame20 {
            top: 55px;
            left: 260px;
            width: 1180px;
            height: 77px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-frame21 {
            gap: 30px;
            top: 22px;
            left: 30px;
            width: 433px;
            display: flex;
            position: absolute;
            align-items: center;
          }
          .dashboard-text040 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 22px;
            font-style: SemiBold;
            text-align: left;
            font-family: Poppins;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame42 {
            gap: 25px;
            display: flex;
            align-items: flex-start;
          }
          .dashboard-frame43 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .dashboard-uplus1 {
            width: 24px;
            height: 24px;
          }
          .dashboard-text042 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame51 {
            gap: 5px;
            display: flex;
            align-items: center;
          }
          .dashboard-ucog1 {
            width: 24px;
            height: 24px;
          }
          .dashboard-text044 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame22 {
            gap: 29px;
            top: 16px;
            left: 800px;
            width: 350px;
            display: flex;
            padding: 10px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: space-between;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-text046 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-usearch {
            width: 24px;
            height: 24px;
          }
          .dashboard-frame32 {
            gap: 30px;
            top: 162px;
            left: 290px;
            width: 1120px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-frame26 {
            gap: 20px;
            width: 1120px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-info-box {
            gap: 10px;
            display: flex;
            padding: 20px;
            flex-grow: 1;
            align-items: flex-start;
            border-radius: 10px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-link {
            display: contents;
          }
          .dashboard-ushoppingbag {
            width: 45px;
            height: 45px;
            text-decoration: none;
          }
          .dashboard-frame23 {
            width: 170px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dashboard-text048 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-text050 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 22px;
            font-style: SemiBold;
            text-align: left;
            font-family: Poppins;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-info-box1 {
            gap: 10px;
            display: flex;
            padding: 20px;
            flex-grow: 1;
            align-items: flex-start;
            border-radius: 10px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-ushop {
            width: 45px;
            height: 45px;
          }
          .dashboard-frame231 {
            width: 170px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dashboard-text052 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-text054 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 22px;
            font-style: SemiBold;
            text-align: left;
            font-family: Poppins;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-info-box2 {
            gap: 10px;
            display: flex;
            padding: 20px;
            flex-grow: 1;
            align-items: flex-start;
            border-radius: 10px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-uusersalt {
            width: 45px;
            height: 45px;
          }
          .dashboard-frame232 {
            width: 170px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dashboard-text056 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-text058 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 22px;
            font-style: SemiBold;
            text-align: left;
            font-family: Poppins;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-info-box3 {
            gap: 10px;
            display: flex;
            padding: 20px;
            flex-grow: 1;
            align-items: flex-start;
            border-radius: 10px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-ulistuialt1 {
            width: 45px;
            height: 45px;
          }
          .dashboard-frame233 {
            width: 170px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dashboard-text060 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 12px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-text062 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 22px;
            font-style: SemiBold;
            text-align: left;
            font-family: Poppins;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame27 {
            gap: 20px;
            width: 1120px;
            display: flex;
            padding: 30px;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            flex-direction: column;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-form-title {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-text064 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 22px;
            font-style: SemiBold;
            text-align: left;
            font-family: Poppins;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-text066 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-alert-box {
            gap: 10px;
            display: flex;
            padding: 15px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(248, 113, 113, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            background-color: var(--dl-color-default-red50);
          }
          .dashboard-uinfocircle {
            width: 24px;
            height: 24px;
          }
          .dashboard-text068 {
            color: var(--dl-color-default-red900);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-form-table {
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: center;
          }
          .dashboard-frame66 {
            width: 293.3333435058594px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-frame64 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral300);
          }
          .dashboard-text070 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame65 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-text072 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame661 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-text074 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame67 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-text076 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame68 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-text078 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame69 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-text080 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame70 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-text082 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame71 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-text084 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame72 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-text086 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame73 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-text088 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame671 {
            width: 293.3333435058594px;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(229, 229, 229, 1);
            border-style: solid;
            border-width: 0 0 0 1px;
            flex-direction: column;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-frame641 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral300);
          }
          .dashboard-text090 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame651 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-text092 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame662 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-text094 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame672 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-text096 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame681 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-text098 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame691 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-text100 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame701 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-text102 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame711 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-text104 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame721 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-text106 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame731 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-text108 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame682 {
            width: 293.3333435058594px;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(229, 229, 229, 1);
            border-style: solid;
            border-width: 0 0 0 1px;
            flex-direction: column;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-frame642 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral300);
          }
          .dashboard-text110 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame652 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-text112 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame663 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-text114 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame673 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-text116 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame683 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-text118 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame692 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-text120 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame702 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-text122 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame712 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-text124 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame722 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-text126 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame732 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-text128 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame693 {
            width: 180px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(229, 229, 229, 1);
            border-style: solid;
            border-width: 0 0 0 1px;
            flex-direction: column;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-frame643 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral300);
          }
          .dashboard-text130 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 18px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame653 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .dashboard-button-mini {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-blue700);
          }
          .dashboard-usave {
            width: 18px;
            height: 18px;
          }
          .dashboard-text132 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-button-mini01 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-amber600);
          }
          .dashboard-usave01 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text134 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame733 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-button-mini02 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-blue700);
          }
          .dashboard-usave02 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text136 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-button-mini03 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-amber600);
          }
          .dashboard-usave03 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text138 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame74 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .dashboard-button-mini04 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-blue700);
          }
          .dashboard-usave04 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text140 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-button-mini05 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-amber600);
          }
          .dashboard-usave05 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text142 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame75 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-button-mini06 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-blue700);
          }
          .dashboard-usave06 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text144 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-button-mini07 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-amber600);
          }
          .dashboard-usave07 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text146 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame76 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .dashboard-button-mini08 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-blue700);
          }
          .dashboard-usave08 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text148 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-button-mini09 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-amber600);
          }
          .dashboard-usave09 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text150 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame77 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-button-mini10 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-blue700);
          }
          .dashboard-usave10 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text152 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-button-mini11 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-amber600);
          }
          .dashboard-usave11 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text154 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame78 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .dashboard-button-mini12 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-blue700);
          }
          .dashboard-usave12 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text156 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-button-mini13 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-amber600);
          }
          .dashboard-usave13 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text158 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame79 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-default-neutral100);
          }
          .dashboard-button-mini14 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-blue700);
          }
          .dashboard-usave14 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text160 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-button-mini15 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-amber600);
          }
          .dashboard-usave15 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text162 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame80 {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .dashboard-button-mini16 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-blue700);
          }
          .dashboard-usave16 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text164 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-button-mini17 {
            gap: 5px;
            display: flex;
            padding: 3px 5px;
            align-items: center;
            border-radius: 3px;
            background-color: var(--dl-color-default-amber600);
          }
          .dashboard-usave17 {
            width: 18px;
            height: 18px;
          }
          .dashboard-text166 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-pagination {
            gap: 5px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .dashboard-expandleftdouble {
            width: 18px;
            height: 18px;
            opacity: 0.4;
          }
          .dashboard-button-page {
            gap: 5px;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(163, 163, 163, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: center;
          }
          .dashboard-text168 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-button-page1 {
            gap: 5px;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-default-blue600);
          }
          .dashboard-text169 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-button-page2 {
            gap: 5px;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(163, 163, 163, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: center;
          }
          .dashboard-text170 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-button-page3 {
            gap: 5px;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(163, 163, 163, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: center;
          }
          .dashboard-text171 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-button-page4 {
            gap: 5px;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(163, 163, 163, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: center;
          }
          .dashboard-text172 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-expandrightdouble {
            width: 18px;
            height: 18px;
          }
          .dashboard-frame321 {
            gap: 20px;
            width: 1120px;
            display: flex;
            padding: 30px;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            flex-direction: column;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-form-title1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-text173 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 22px;
            font-style: SemiBold;
            text-align: left;
            font-family: Poppins;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-text175 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame88 {
            gap: 10px;
            display: flex;
            align-items: flex-start;
          }
          .dashboard-button-lang {
            gap: 5px;
            display: flex;
            padding: 5px 10px 5px 5px;
            align-items: center;
            border-color: rgba(217, 119, 6, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            background-color: var(--dl-color-default-amber200);
          }
          .dashboard-text177 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-flag {
            width: 25px;
            height: 25px;
          }
          .dashboard-button-lang1 {
            gap: 5px;
            display: flex;
            padding: 5px 10px 5px 5px;
            align-items: center;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
          }
          .dashboard-flag1 {
            width: 25px;
            height: 25px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 3px;
          }
          .dashboard-group {
            top: 0px;
            left: 0px;
            width: 25px;
            height: 25px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .dashboard-vector {
            top: 0px;
            left: 0px;
            width: 25px;
            height: 25px;
            position: absolute;
          }
          .dashboard-vector1 {
            top: 6.645508289337158px;
            left: 4.326171875px;
            width: 13px;
            height: 12px;
            position: absolute;
          }
          .dashboard-vector2 {
            top: 7.8955078125px;
            left: 7.1875px;
            width: 10px;
            height: 10px;
            position: absolute;
          }
          .dashboard-vector3 {
            top: 9.970703125px;
            left: 16.0595703125px;
            width: 6px;
            height: 6px;
            position: absolute;
          }
          .dashboard-text179 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-form-input {
            gap: 5px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-text181 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame28 {
            gap: 10px;
            display: flex;
            padding: 10px 15px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-text183 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame29 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-form-select-box {
            gap: 5px;
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dashboard-text185 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame2801 {
            gap: 10px;
            display: flex;
            padding: 10px 15px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: space-between;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-text187 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-expanddown07 {
            width: 24px;
            height: 24px;
          }
          .dashboard-form-input1 {
            gap: 5px;
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dashboard-text189 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame2802 {
            gap: 10px;
            display: flex;
            padding: 10px 15px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-text191 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-form-input2 {
            gap: 5px;
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dashboard-text193 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame2803 {
            gap: 10px;
            display: flex;
            padding: 10px 15px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-text195 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame30 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-form-input3 {
            gap: 5px;
            width: 520px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dashboard-text197 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame2804 {
            gap: 10px;
            display: flex;
            padding: 10px 15px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-text199 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-form-input4 {
            gap: 5px;
            width: 520px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dashboard-text201 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame2805 {
            gap: 10px;
            display: flex;
            padding: 10px 15px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-text203 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-form-textarea {
            gap: 5px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-text205 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame2806 {
            gap: 10px;
            display: flex;
            padding: 10px 15px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-text207 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame31 {
            gap: 30px;
            width: 1120px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-frame2807 {
            gap: 20px;
            width: 780px;
            display: flex;
            padding: 30px;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            flex-direction: column;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-form-title2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-text209 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 22px;
            font-style: SemiBold;
            text-align: left;
            font-family: Poppins;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-text211 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-form-input5 {
            gap: 5px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-text213 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame2808 {
            gap: 10px;
            display: flex;
            padding: 10px 15px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-text215 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-form-select-box1 {
            gap: 5px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-text217 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame2809 {
            gap: 10px;
            display: flex;
            padding: 10px 15px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: space-between;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-text219 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-expanddown08 {
            width: 24px;
            height: 24px;
          }
          .dashboard-frame301 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .dashboard-form-input6 {
            gap: 5px;
            width: 350px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dashboard-text221 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame2810 {
            gap: 10px;
            display: flex;
            padding: 10px 15px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-text223 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-form-input7 {
            gap: 5px;
            width: 350px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .dashboard-text225 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame2811 {
            gap: 10px;
            display: flex;
            padding: 10px 15px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-text227 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-form-textarea1 {
            gap: 5px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-text229 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame2812 {
            gap: 10px;
            display: flex;
            padding: 10px 15px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-text231 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame291 {
            gap: 20px;
            width: 310px;
            display: flex;
            padding: 30px;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            flex-direction: column;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-form-title3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-text233 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 22px;
            font-style: SemiBold;
            text-align: left;
            font-family: Poppins;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-form-input8 {
            gap: 5px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-text235 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame2813 {
            gap: 10px;
            display: flex;
            padding: 10px 15px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-text237 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-form-select-box2 {
            gap: 5px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-text239 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame2814 {
            gap: 10px;
            display: flex;
            padding: 10px 15px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            justify-content: space-between;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-text241 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-expanddown09 {
            width: 24px;
            height: 24px;
          }
          .dashboard-form-textarea2 {
            gap: 5px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-text243 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 14px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-frame2815 {
            gap: 10px;
            display: flex;
            padding: 10px 15px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(212, 212, 212, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
            background-color: var(--dl-color-default-white);
          }
          .dashboard-text245 {
            color: var(--dl-color-default-neutral800);
            height: auto;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Poppins;
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .dashboard-button {
            gap: 10px;
            display: flex;
            padding: 10px 20px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-radius: 5px;
            justify-content: center;
            background-color: var(--dl-color-default-blue600);
          }
          .dashboard-text247 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Dashboard
