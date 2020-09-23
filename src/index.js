import React from 'react';
import ReactDOM from 'react-dom';
import { BrowerRouter as Router, Route } from 'react-router-dom';
import { thisExpression, throwStatement } from '@babel/types';
import axios from 'axios';
import DrinkForm from './components/drinkForm';
import DrinkList from './components/drinkList';

import { drinks } from '../data.json';
const getCocktails = require('../database/helpers/api');




class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUser = this.handleUser.bind(this);
    // this.filterDrinks = this.filterDrinks.bind(this);
  }

  
  handleChange(e) {
    this.setState({
      username: e.target.value
    });


  }

  // filterDrinks() {
  //   // getCocktails('Gin')
  //   //   .then(data => {
  //   //     console.log(data)
  //   //   })
  //   //   .catch(err => console.log('error in getCocktails ', err));
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
        <div>
          <h1>Welcome {username}!</h1>
        </div>
        <div>
          <form>
            <input value={username} onChange={this.handleChange} placeholder='guest'></input>
            <button onClick={this.filterDrinks} type='button'>log in</button>
          </form>
        </div>
        <DrinkForm user={username} />
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