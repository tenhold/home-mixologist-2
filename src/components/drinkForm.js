import { throwStatement } from '@babel/types';
// import React from 'react';
import React, { Component } from 'react';
import axios from 'axios';
import DrinkList from './drinkList';
import { findOneAndUpdate } from '../../database/models/user.model';

// import { drinks } from '../../data.json';
const {getCocktails} = require('../../database/helpers/api');



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
    this.changeRating = this.changeRating.bind(this);
  }

  componentDidMount() {
    this.getFavs()
  }

  componentDidUpdate() {
    this.getFavs();
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
        // console.log(this.state)
      })
      .catch(err => console.log('error in getCocktails ', err));
  }

  deleteItem(id) {
    const { name } = id.target;
    axios.delete(`http://localhost:8080/drinks/${name}`)
      .then(res => {
        console.log('in front end delete', res)
      })
      .catch(err => console.log('error!!!!!', err))
  }

  changeRating(e) {
    const { name } = e.target;
    axios.put(`http://localhost:8080/drinks/${name}`)
      .then(() => {
        console.log('change rating!')
      })
      .catch(err => console.log('error!!!!', err));
  }


  render() {
    const { drinks, liquor, favorites } = this.state;
    return (
      <div>
        <div style={{display: 'flex',  justifyContent:'center', padding:'50px'}}>
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
            {/* <button onClick={this.getFavs} type='button'>get your favs</button> */}
        </form>
        <div class='container' style={{padding:'25px'}}>
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
                <div style={{padding: '5px'}}>{fav.rating ? fav.rating : ''}</div>
                <button rating={fav.rating} name={fav.name} 
                  onClick={this.changeRating}>
                  like
                </button>
              </div>
            ))}
          </div>
          <div class='row' style={{padding:'25px'}}>
            {drinks.map((drink, i) => ( 
              <div class='col' key={i} style={{padding: '10px', display: 'flex'
            }}>
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
        </div> 
      </div>
    );
  }
}

export default DrinkForm;