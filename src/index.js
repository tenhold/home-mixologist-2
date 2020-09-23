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
      users: [],
      username: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }


  componentDidMount() {
    // get all the users in the database and update the state array with the users
    axios.get('http://localhost:8080/users')
      .then(res => {
        const { data } = res;
        this.setState({
          users: data
        });
      })
      .catch((err) => console.log('GET error in mount'))
  }

    displayName() {

    }


  handleChange(e) {
    this.setState({
      username: e.target.value
    });
  
  
  }
  
  handleSearch(username) {
    // posting the server not to the database adding username to database

    axios.post(`http://localhost:8080/users/add`, { username: username.toLowerCase() })
    .then(data => {
      const {data: { username }} = data;
      this.setState(prevState => ({
        users: [...prevState.users, data], 
        username: username
      }))
    })
    .catch(err => console.log('ERROR in handleSearch', err));
  
  }
  
  handleClick() {
    console.log(this.state.username)
    const { username } = this.state;
  
    this.handleSearch(username);
  
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
            <input value={username} onChange={this.handleChange}></input>
            <button onClick={this.handleClick} type='button'>log in</button>
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



// handleChange(e) {
//   this.setState({
//     username: e.target.value
//   });


// }

// handleSearch(username) {
//   // posting the server not to the database adding username to database
//   axios.post(`http://localhost:8080/users/add`, { username })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => console.log('ERROR in handleSearch', err));

// }

// handleClick() {
//   console.log(this.state.username)
//   const { username } = this.state;

//   this.handleSearch(username);

//   this.setState({
//     username: ''
//   });
  
// }
// render() {
//   const { username } = this.state;
//   return (
//     <div>
//       <div>Hello World</div>
//       <div>
//         <form>
//           <input value={username} onChange={this.handleChange}></input>
//           <button onClick={this.handleClick} type='button'>log in</button>
//         </form>
//       </div>
//       <DrinkForm onChange={this.handleSearh}/>
//     </div>
//   );
// }