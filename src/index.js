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
      drinks: getCocktails(drinks)
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filterDrinks = this.filterDrinks.bind(this);
    this.handleUser = this.handleUser.bind(this);
  }

  
  handleChange(e) {
    this.setState({
      username: e.target.value
    });


  }

  filterDrinks() {
    
  }
  
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
    const { username, drinks } = this.state;
    return (
      <div>
        <div>
          <form>
            <input value={username} onChange={this.handleChange}></input>
            <button onClick={this.handleClick} type='button'>log in</button>
          </form>
        </div>
        <DrinkForm  />
        <div>
          <ul>
            {drinks.map((drink, i) => <li key={i}>{drink.name}</li>)}
          </ul>
        </div>
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