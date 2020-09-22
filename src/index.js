import React from 'react';
import ReactDOM from 'react-dom';
import { BrowerRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  return (
    <div>Hello</div>
    // <Router>
    //   {/* <Route path='/' exact componet={Home} /> */}
    // </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));