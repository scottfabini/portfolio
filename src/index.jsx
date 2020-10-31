import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './product/product.css';
import App from './App.jsx';
import ColorProvider from './hooks.jsx';
import * as serviceWorker from './serviceWorker';
import AudioProvider from './AudioProvider';

// ReactDOM.render(
//   React.createElement(
//     "h1",
//     { style: { color: "blue" } },
//     React.createElement("li", null, "Hot Dogs"),
//     React.createElement("li", null, "Hamburgers")
//   ),
//   document.getElementById("root") // injected at id="root" in index.js
// );

ReactDOM.render(
  [
    <React.StrictMode>
      {/* <product /> */}
      <a href="./product/index.html">Redirect to Html page</a>
      {/* <html lang="en"> */}
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors" />
        <meta name="generator" content="Jekyll v4.1.1" />
        <title>Product example · Bootstrap</title>

        <link rel="canonical" href="https://getbootstrap.com/docs/4.5/examples/product/" />

        {/* <!-- Bootstrap core CSS --> */}
        <link href="/assets/dist/css/bootstrap.min.css" rel="stylesheet" />
        {/* <link href="./product/product.css" rel="stylesheet" /> */}
      </head>
      <body>
        <nav className="site-header sticky-top py-1">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            <a className="py-2" href="#!" aria-label="Product">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="d-block mx-auto"
                role="img"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <title>Product</title>
                <circle cx="12" cy="12" r="10" />
                <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
              </svg>
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#!">
              Tour
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#!">
              Product
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#!">
              Features
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#!">
              Enterprise
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#!">
              Support
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#!">
              Pricing
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#!">
              Cart
            </a>
          </div>
        </nav>

        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">Punny headline</h1>
            <p className="lead font-weight-normal">
              And an even wittier subheading to boot. Jumpstart your marketing efforts with this
              example based on Apple’s marketing pages.
            </p>
            <a className="btn btn-outline-secondary" href="#!">
              Coming soon
            </a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-light shadow-sm mx-auto"
              style={{ width: '80%', height: '300px' }}
            ></div>
          </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-dark shadow-sm mx-auto"
              style={{ width: '80%', height: '300px' }}
            ></div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-dark shadow-sm mx-auto"
              style={{ width: '80%', height: '300px' }}
            ></div>
          </div>
          <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-light shadow-sm mx-auto"
              style={{ width: '80%', height: '300px' }}
            ></div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-white shadow-sm mx-auto"
              style={{ width: '80%', height: '300px' }}
            ></div>
          </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-white shadow-sm mx-auto"
              style={{ width: '80%', height: '300px' }}
            ></div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-white shadow-sm mx-auto"
              style={{ width: '80%', height: '300px' }}
            ></div>
          </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-white shadow-sm mx-auto"
              style={{ width: '80%', height: '300px' }}
            ></div>
          </div>
        </div>

        <footer className="container py-5">
          <div className="row">
            <div className="col-12 col-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="d-block mb-2"
                role="img"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <title>Product</title>
                <circle cx="12" cy="12" r="10" />
                <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
              </svg>
              <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
            </div>
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#!">
                    Cool stuff
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Random feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Team feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Stuff for developers
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Another one
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#!">
                    Resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Resource name
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Another resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#!">
                    Business
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Education
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Government
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Gaming
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#!">
                    Team
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Locations
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script>
        <script>
          window.jQuery || document.write('
          {/* <script src="./assets/js/vendor/jquery.slim.min.js" /> */}
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" />
          <script src="/assets/dist/js/bootstrap.bundle.min.js" />
        </script>
      </body>
      {/* </html> */}

      <ColorProvider>
        <AudioProvider>
          <App />
        </AudioProvider>
      </ColorProvider>
    </React.StrictMode>,
  ],
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
