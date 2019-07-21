import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>

    { /*Main jumbotron for a primary marketing message or call to action*/ }
    <div className="jumbotron">
      <h1 className="display-3">Welcome, </h1>
      <p>Home page</p>
      
    </div>

    { /*Example row of columns*/ }
    <div className="row text-justify">
      <div className="col-md-12">
        <h2>Latest Blogs</h2>
        <p>The front-end client is built as a simple-page-application using React and Redux (for middlewares and reducers). Besides, React-Router is used for navigation. Redux-Thunk is used for processing asynchronous requests. Bootstrap 4 is used for page styling.</p>
      </div>
    </div>

  </div>
);