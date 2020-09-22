import React from 'react';
import ReactDOM from 'react-dom';
import { BrowerRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import DrinkForm from './components/drinkForm';
import { thisExpression, throwStatement } from '@babel/types';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  
  handleChange(e) {
    this.setState({
      username: e.target.value
    });


  }
  
  handleSearch(username) {
    axios.post('mongodb://localhost/mixologist/users')
    .then(res => {
      console.log(res);
    })

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
        <div>Hello World</div>
        <div>
          <form>
            <input value={username} onChange={this.handleChange}></input>
            <button onClick={this.handleClick} type='button'>log in</button>
          </form>
        </div>
        <DrinkForm />
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