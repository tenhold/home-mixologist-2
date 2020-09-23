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
      drinks: [],
      favorites: []
      
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getFavs = this.getFavs.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.getFavs()
  }

  getFavs() {
    axios.get('http://localhost:8080/drinks/')
      .then(res => {
        this.setState({
          favorites: res.data
        });
      });
  }

  handleClick(e) {
    e.preventDefault();
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
  }

  deleteItem(id) {
    const { name } = id.target;
    axios.delete(`http://localhost:8080/drinks/:${id.target.name}`)
      .then(res => {
        console.log('in front end delete', res)
      })
      .catch(err => console.log('error!!!!!', err))

  }


  render() {
    const { drinks, liquor, favorites } = this.state;
    return (
      <div>
        <div style={{display: 'flex',  justifyContent:'center'}}>
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
        <form style={{display: 'flex',  justifyContent:'center'}}>
            <button onClick={this.getFavs} type='button'>get your favs</button>
        </form>
        <div class='container'>
          <div class='row'>
            {drinks.map((drink, i) => ( 
              <div class='col' key={i} style={{padding: '10px', display: 'flex'}}>
                <a href={'#'} onClick={this.handleClick}>
                  <img src={drink.strDrinkThumb} 
                  name={drink.strDrink} 
                  liquor={liquor} 
                  width='75' height='75'>
                  </img>
                </a>
                <div>{drink.strDrink}</div>
              </div>
            ))}
          </div>
          <div class='row'>
            {favorites.map((fav, i) => (
              <div class='col' key={i} style={{padding: '10px'}}>
                <a href={'#'}>
                  <img src={fav.image}
                  onClick={this.deleteItem}
                  name={fav.name}
                  liquor={liquor}
                  width='75' height='75'>
                  </img>
                </a>
                <div>{fav.name}</div>
                <button>delete</button>
              </div>
            ))}
          </div>
        </div>
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