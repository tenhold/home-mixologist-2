import React from 'react';
import ReactDOM from 'react-dom';
import { BrowerRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import DrinkForm from './components/drinkForm';
import { thisExpression, throwStatement } from '@babel/types';

// import { drinks } from '../data.json';
// const getCocktails = require('../database/helpers/api');

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
    this.handleUser = this.handleUser.bind(this);
  }

  
  handleChange(e) {
    this.setState({
      username: e.target.value
    });


  }

  // handleSearch(data) {
  //   getCocktails(ad);
  // }
  
  handleUser(username) {
    // posting the server not to the database adding username to database
    axios.post(`http://localhost:8080/users/add`, { username })
    .then(data => {
      console.log('User Added!');
    })
    .catch(err => console.log('ERROR in handleSearch', err));

  }

  handleClick() {
    console.log(this.state.username)
    const { username } = this.state;

    // run the handle user function
    this.handleUser(username);

    this.setState({
      username: ''
    });
    
  }
  render() {
    const { username } = this.state;
    return (
      <div>
        <div>Hello World</div>
        <div>
          <form>
            <input value={username} onChange={this.handleChange}></input>
            <button onClick={this.handleClick} type='button'>log in</button>
          </form>
        </div>
        <DrinkForm  />
      </div>
    );
  }
} 




// const App = () => {
//   return (
//     <div>
//       <DrinkForm />
//     </div>
//     // <Router>
//     //   <Route path='/' exact componet={DrinkForm} />
//     // </Router>
//   );
// };

ReactDOM.render(<App />, document.getElementById('app'));