import React from 'react';


const DrinkForm = ({ username }) => (
  <div>
      <label for='drinks'>Choose you favorite liquor</label>
        <select id="liquor" name="liquor" value={username}>
          <option value="whiskey">Whiskey</option>
          <option value="vodka">Vodka</option>
          <option value="rum">Rum</option>
          <option value="tequila">Tequila</option>
          <option value="gin">Gin</option>
          <option value="brandy">Brandy</option>
        </select>
      <button>find your drink</button>
  </div>
)

export default DrinkForm;