import { throwStatement } from '@babel/types';
// import React from 'react';
import React, { Component } from 'react';

import { drinks } from '../../data.json';
const getCocktails = require('../../database/helpers/api');



class DrinkForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: []
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    // this.setState({
    //   drinks: getCocktails(drinks)              // adding array of drinks to the state
    // });
  }

  render() {
    const { drinks } = this.state;
    return (
      <div>
        <label for='drinks'>Choose you favorite liquor</label>
          <select id="liquor" name="liquor">
            <option value="whiskey">Whiskey</option>
            <option value="vodka">Vodka</option>
            <option value="rum">Rum</option>
            <option value="tequila">Tequila</option>
            <option value="gin">Gin</option>
            <option value="brandy">Brandy</option>
          </select>
        <button onClick={this.handleSearch} >find your drink</button>
        <ul>
          <li>{drinks}</li>
        </ul>
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
// )

export default DrinkForm;