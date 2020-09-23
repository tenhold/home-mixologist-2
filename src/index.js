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
  }

  
  handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleUser(username) {
    // posting the server not to the database adding username to database
    // axios.get(`http://localhost:8080/users/add`, { username })
    //   .then((data) => {
    //     console.log(data)
    //   })

    axios.post(`http://localhost:8080/users/add`, { username })
      .then(data => {        
        console.log('User Added!');
      })
      .catch(err => console.log('ERROR in handleSearch', err));

  }

  handleClick() {
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
        <div style={{display: 'flex',  justifyContent:'center'}}>
          {/* <h1>Welcome {username}!</h1> */}
        </div>
        <div style={{display: 'flex',  justifyContent:'center'}}>
          <form>
            <input value={username} onChange={this.handleChange} placeholder='guest'></input>
            <button onClick={this.handleUser} type='button'>log in</button>
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