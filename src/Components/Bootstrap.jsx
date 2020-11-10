// import React, { useState } from 'react';

// export default function Bootstrap() {
//   return (
//     <div className="color-list">
//       <nav className="site-header sticky-top py-1">
//         <div className="container d-flex flex-column flex-md-row justify-content-between">
//           <a className="py-2" href="#!" aria-label="Product">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="d-block mx-auto"
//               role="img"
//               viewBox="0 0 24 24"
//               focusable="false"
//             >
//               <title>Product</title>
//               <circle cx="12" cy="12" r="10" />
//               <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
//             </svg>
//           </a>
//           <a className="py-2 d-none d-md-inline-block" href="#!">
//             Tour
//           </a>
//           <a className="py-2 d-none d-md-inline-block" href="#!">
//             Product
//           </a>
//           <a className="py-2 d-none d-md-inline-block" href="#!">
//             Features
//           </a>
//           <a className="py-2 d-none d-md-inline-block" href="#!">
//             Enterprise
//           </a>
//           <a className="py-2 d-none d-md-inline-block" href="#!">
//             Support
//           </a>
//           <a className="py-2 d-none d-md-inline-block" href="#!">
//             Pricing
//           </a>
//           <a className="py-2 d-none d-md-inline-block" href="#!">
//             Cart
//           </a>
//         </div>
//       </nav>

//       <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
//         <div className="col-md-5 p-lg-5 mx-auto my-5">
//           <h1 className="display-4 font-weight-normal">Playing around with Bootstrap</h1>
//           <p className="lead font-weight-normal">
//             An even wittier subheading to boot. Jumpstart your marketing efforts with this example
//             based on Apple’s marketing pages.
//           </p>
//           <a className="btn btn-outline-secondary" href="#!">
//             Coming soon
//           </a>
//         </div>
//         <div className="product-device shadow-sm d-none d-md-block"></div>
//         <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
//       </div>

//       <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
//         <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
//           <div className="my-3 py-3">
//             <h2 className="display-5">Another headline</h2>
//             <p className="lead">And an even wittier subheading.</p>
//           </div>
//           <div
//             className="bg-light shadow-sm mx-auto"
//             style={{ width: '80%', height: '300px' }}
//           ></div>
//         </div>
//         <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
//           <div className="my-3 p-3">
//             <h2 className="display-5">Another headline</h2>
//             <p className="lead">And an even wittier subheading.</p>
//           </div>
//           <div
//             className="bg-dark shadow-sm mx-auto"
//             style={{ width: '80%', height: '300px' }}
//           ></div>
//         </div>
//       </div>

//       <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
//         <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
//           <div className="my-3 p-3">
//             <h2 className="display-5">Another headline</h2>
//             <p className="lead">And an even wittier subheading.</p>
//           </div>
//           <div
//             className="bg-dark shadow-sm mx-auto"
//             style={{ width: '80%', height: '300px' }}
//           ></div>
//         </div>
//         <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
//           <div className="my-3 py-3">
//             <h2 className="display-5">Another headline</h2>
//             <p className="lead">And an even wittier subheading.</p>
//           </div>
//           <div
//             className="bg-light shadow-sm mx-auto"
//             style={{ width: '80%', height: '300px' }}
//           ></div>
//         </div>
//       </div>

//       <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
//         <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
//           <div className="my-3 p-3">
//             <h2 className="display-5">Another headline</h2>
//             <p className="lead">And an even wittier subheading.</p>
//           </div>
//           <div
//             className="bg-white shadow-sm mx-auto"
//             style={{ width: '80%', height: '300px' }}
//           ></div>
//         </div>
//         <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
//           <div className="my-3 py-3">
//             <h2 className="display-5">Another headline</h2>
//             <p className="lead">And an even wittier subheading.</p>
//           </div>
//           <div
//             className="bg-white shadow-sm mx-auto"
//             style={{ width: '80%', height: '300px' }}
//           ></div>
//         </div>
//       </div>

//       <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
//         <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
//           <div className="my-3 p-3">
//             <h2 className="display-5">Another headline</h2>
//             <p className="lead">And an even wittier subheading.</p>
//           </div>
//           <div
//             className="bg-white shadow-sm mx-auto"
//             style={{ width: '80%', height: '300px' }}
//           ></div>
//         </div>
//         <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
//           <div className="my-3 py-3">
//             <h2 className="display-5">Another headline</h2>
//             <p className="lead">And an even wittier subheading.</p>
//           </div>
//           <div
//             className="bg-white shadow-sm mx-auto"
//             style={{ width: '80%', height: '300px' }}
//           ></div>
//         </div>
//       </div>

//       <main role="main">
//         <div id="myCarousel" className="carousel slide" data-ride="carousel">
//           <ol className="carousel-indicators">
//             <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//             <li data-target="#myCarousel" data-slide-to="1"></li>
//             <li data-target="#myCarousel" data-slide-to="2"></li>
//           </ol>
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <svg
//                 className="bd-placeholder-img"
//                 width="100%"
//                 height="100%"
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="xMidYMid slice"
//                 focusable="false"
//                 role="img"
//               >
//                 <rect width="100%" height="100%" fill="#777" />
//               </svg>
//               <div className="container">
//                 <div className="carousel-caption text-left">
//                   <h1>Example headline.</h1>
//                   <p>
//                     Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
//                     mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
//                     elit.
//                   </p>
//                   <p>
//                     <a className="btn btn-lg btn-primary" href="#!" role="button">
//                       Sign up today
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="carousel-item">
//               <svg
//                 className="bd-placeholder-img"
//                 width="100%"
//                 height="100%"
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="xMidYMid slice"
//                 focusable="false"
//                 role="img"
//               >
//                 <rect width="100%" height="100%" fill="#777" />
//               </svg>
//               <div className="container">
//                 <div className="carousel-caption">
//                   <h1>Another example headline.</h1>
//                   <p>
//                     Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
//                     mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
//                     elit.
//                   </p>
//                   <p>
//                     <a className="btn btn-lg btn-primary" href="#!" role="button">
//                       Learn more
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="carousel-item">
//               <svg
//                 className="bd-placeholder-img"
//                 width="100%"
//                 height="100%"
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="xMidYMid slice"
//                 focusable="false"
//                 role="img"
//               >
//                 <rect width="100%" height="100%" fill="#777" />
//               </svg>
//               <div className="container">
//                 <div className="carousel-caption text-right">
//                   <h1>One more for good measure.</h1>
//                   <p>
//                     Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
//                     mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
//                     elit.
//                   </p>
//                   <p>
//                     <a className="btn btn-lg btn-primary" href="#!" role="button">
//                       Browse gallery
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="sr-only">Previous</span>
//           </a>
//           <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="sr-only">Next</span>
//           </a>
//         </div>

//         {/* <!-- Marketing messaging and featurettes */}
//         {/* ================================================== --> */}
//         {/* <!-- Wrap the rest of the page in another container to center all the content. --> */}

//         <div className="container marketing">
//           {/* <!-- Three columns of text below the carousel --> */}
//           <div className="row">
//             <div className="col-lg-4">
//               <svg
//                 className="bd-placeholder-img rounded-circle"
//                 width="140"
//                 height="140"
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="xMidYMid slice"
//                 focusable="false"
//                 role="img"
//                 aria-label="Placeholder: 140x140"
//               >
//                 <title>Placeholder</title>
//                 <rect width="100%" height="100%" fill="#777" />
//                 <text x="50%" y="50%" fill="#777" dy=".3em">
//                   140x140
//                 </text>
//               </svg>
//               <h2>Heading</h2>
//               <p>
//                 Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor
//                 id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac,
//                 vestibulum at eros. Praesent commodo cursus magna.
//               </p>
//               <p>
//                 <a className="btn btn-secondary" href="#!" role="button">
//                   View details &raquo;
//                 </a>
//               </p>
//             </div>
//             {/* <!-- /.col-lg-4 --> */}
//             <div className="col-lg-4">
//               <svg
//                 className="bd-placeholder-img rounded-circle"
//                 width="140"
//                 height="140"
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="xMidYMid slice"
//                 focusable="false"
//                 role="img"
//                 aria-label="Placeholder: 140x140"
//               >
//                 <title>Placeholder</title>
//                 <rect width="100%" height="100%" fill="#777" />
//                 <text x="50%" y="50%" fill="#777" dy=".3em">
//                   140x140
//                 </text>
//               </svg>
//               <h2>Heading</h2>
//               <p>
//                 Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
//                 sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus,
//                 tellus ac cursus commodo, tortor mauris condimentum nibh.
//               </p>
//               <p>
//                 <a className="btn btn-secondary" href="#!" role="button">
//                   View details &raquo;
//                 </a>
//               </p>
//             </div>
//             {/* <!-- /.col-lg-4 --> */}
//             <div className="col-lg-4">
//               <svg
//                 className="bd-placeholder-img rounded-circle"
//                 width="140"
//                 height="140"
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="xMidYMid slice"
//                 focusable="false"
//                 role="img"
//                 aria-label="Placeholder: 140x140"
//               >
//                 <title>Placeholder</title>
//                 <rect width="100%" height="100%" fill="#777" />
//                 <text x="50%" y="50%" fill="#777" dy=".3em">
//                   140x140
//                 </text>
//               </svg>
//               <h2>Heading</h2>
//               <p>
//                 Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
//                 Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus
//                 commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
//               </p>
//               <p>
//                 <a className="btn btn-secondary" href="#!" role="button">
//                   View details &raquo;
//                 </a>
//               </p>
//             </div>
//             {/* <!-- /.col-lg-4 --> */}
//           </div>
//           {/* <!-- /.row --> */}

//           {/* <!-- START THE FEATURETTES --> */}

//           <hr className="featurette-divider" />

//           <div className="row featurette">
//             <div className="col-md-7">
//               <h2 className="featurette-heading">
//                 First featurette heading. <span className="text-muted">It’ll blow your mind.</span>
//               </h2>
//               <p className="lead">
//                 Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
//                 euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                 Fusce dapibus, tellus ac cursus commodo.
//               </p>
//             </div>
//             <div className="col-md-5">
//               <svg
//                 className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
//                 width="500"
//                 height="500"
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="xMidYMid slice"
//                 focusable="false"
//                 role="img"
//                 aria-label="Placeholder: 500x500"
//               >
//                 <title>Placeholder</title>
//                 <rect width="100%" height="100%" fill="#eee" />
//                 <text x="50%" y="50%" fill="#aaa" dy=".3em">
//                   500x500
//                 </text>
//               </svg>
//             </div>
//           </div>

//           <hr className="featurette-divider" />

//           <div className="row featurette">
//             <div className="col-md-7 order-md-2">
//               <h2 className="featurette-heading">
//                 Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span>
//               </h2>
//               <p className="lead">
//                 Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
//                 euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                 Fusce dapibus, tellus ac cursus commodo.
//               </p>
//             </div>
//             <div className="col-md-5 order-md-1">
//               <svg
//                 className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
//                 width="500"
//                 height="500"
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="xMidYMid slice"
//                 focusable="false"
//                 role="img"
//                 aria-label="Placeholder: 500x500"
//               >
//                 <title>Placeholder</title>
//                 <rect width="100%" height="100%" fill="#eee" />
//                 <text x="50%" y="50%" fill="#aaa" dy=".3em">
//                   500x500
//                 </text>
//               </svg>
//             </div>
//           </div>

//           <hr className="featurette-divider" />

//           <div className="row featurette">
//             <div className="col-md-7">
//               <h2 className="featurette-heading">
//                 And lastly, this one. <span className="text-muted">Checkmate.</span>
//               </h2>
//               <p className="lead">
//                 Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
//                 euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                 Fusce dapibus, tellus ac cursus commodo.
//               </p>
//             </div>
//             <div className="col-md-5">
//               <svg
//                 className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
//                 width="500"
//                 height="500"
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="xMidYMid slice"
//                 focusable="false"
//                 role="img"
//                 aria-label="Placeholder: 500x500"
//               >
//                 <title>Placeholder</title>
//                 <rect width="100%" height="100%" fill="#eee" />
//                 <text x="50%" y="50%" fill="#aaa" dy=".3em">
//                   500x500
//                 </text>
//               </svg>
//             </div>
//           </div>

//           <hr className="featurette-divider" />

//           {/* <!-- /END THE FEATURETTES --> */}
//         </div>
//         {/* <!-- /.container --> */}

//         <footer className="container py-5">
//           <div className="row">
//             <div className="col-12 col-md">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 className="d-block mb-2"
//                 role="img"
//                 viewBox="0 0 24 24"
//                 focusable="false"
//               >
//                 <title>Product</title>
//                 <circle cx="12" cy="12" r="10" />
//                 <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
//               </svg>
//               <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
//             </div>
//             <div className="col-6 col-md">
//               <h5>Features</h5>
//               <ul className="list-unstyled text-small">
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Cool stuff
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Random feature
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Team feature
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Stuff for developers
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Another one
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Last time
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-6 col-md">
//               <h5>Resources</h5>
//               <ul className="list-unstyled text-small">
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Resource
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Resource name
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Another resource
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Final resource
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-6 col-md">
//               <h5>Resources</h5>
//               <ul className="list-unstyled text-small">
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Business
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Education
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Government
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Gaming
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-6 col-md">
//               <h5>About</h5>
//               <ul className="list-unstyled text-small">
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Team
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Locations
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Privacy
//                   </a>
//                 </li>
//                 <li>
//                   <a className="text-muted" href="#!">
//                     Terms
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </footer>
//       </main>
//       <script
//         src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
//         integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
//         crossOrigin="anonymous"
//       ></script>
//       <script>
//         window.jQuery || document.write('
//         <script src="../assets/js/vendor/jquery.slim.min.js" />
//       </script>
//       <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
//     </div>
//   );
// }
