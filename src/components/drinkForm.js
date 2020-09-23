import { throwStatement } from '@babel/types';
// import React from 'react';
import React, { Component } from 'react';
import axios from 'axios';
import DrinkList from './drinkList';

// import { drinks } from '../../data.json';
const {getCocktails, filterDrinks} = require('../../database/helpers/api');



class DrinkForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liquor: '',
      drinks: []
      
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    const { user } = this.props;
    const { name, src, liquor } = e.target

    // // Possible to get the userId of each user
    // axios.get('http://localhost:8080/users/', {username: user})
    //   .then((user) =>  console.log(user))

    axios.post('http://localhost:8080/drinks/add', {
      name: name,
      image: src,
      alcohol: liquor,
      userId: user
    })
    .then(results => {
      console.log('added drink!');
    })
    .catch(err => console.log('error in click ', err));
  }

  /**
   * after getting the list of drinks the user should be able to click on a drink and add it to there list.
   * 
   */
  handleSearch(e) {
    const liquor = e.target.value;
    getCocktails(liquor)
      .then(data => {
        const { drinks } = data.data;
        this.setState({
          liquor,
          drinks
        });
        console.log(this.state)
      })
      .catch(err => console.log('error in getCocktails ', err));
    this.setState({
      
    });
  }

  render() {
    const { drinks, liquor } = this.state;
    return (
      <div>
        <div>
          <label for='drinks'>Choose you favorite liquor</label>
            <select id="liquor" name="liquor" onChange={this.handleSearch}>
              <option value="Select">Select</option>
              <option value="Whiskey">Whiskey</option>
              <option value="Vodka">Vodka</option>
              <option value="Rum">Rum</option>
              <option value="Tequila">Tequila</option>
              <option value="Gin">Gin</option>
              <option value="Brandy">Brandy</option>
            </select>
          {/* <button >find your drink</button> */}
        </div>
          {drinks.map((drink, i) => ( 
            <div key={i}>
              <a href={'#'} onClick={this.handleClick} width='75' height='75'>
                <img src={drink.strDrinkThumb} 
                name={drink.strDrink} 
                liquor={liquor} 
                width='75' height='75'>
                </img>
              </a>
            </div>
          ))}
      </div>
    );
  }
}



// const DrinkForm = ({ username }) => (
//   <div>
//       <label for='drinks'>Choose you favorite liquor</label>
//         <select id="liquor" name="liquor" value={username}>
//           <option value="whiskey">Whiskey</option>
//           <option value="vodka">Vodka</option>
//           <option value="rum">Rum</option>
//           <option value="tequila">Tequila</option>
//           <option value="gin">Gin</option>
//           <option value="brandy">Brandy</option>
//         </select>
//       <button>find your drink</button>
//   </div>
// );

export default DrinkForm;