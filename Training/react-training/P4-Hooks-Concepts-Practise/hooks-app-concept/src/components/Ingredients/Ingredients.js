import React, { useEffect, useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);
  const [ingredientData, setIngredientData] = useState([]);


  useEffect(() => {
    fetch('https://hook-conept-default-rtdb.firebaseio.com/hocksDB.json')
      .then(response => response.json)
      .then(data=>{
        console.log(data, "data");
        let newIngredients=[]
        for (let k in data) {
          newIngredients.push({
            id: k,
            title: data[k].title,
            amount:data[k].amount
          })
        }
        console.log(newIngredients, 'new');
        setIngredientData(newIngredients)
      })
  }, [userIngredients]);

  console.log(ingredientData,'output')

  const addIngredientHandler = (ingredient) => {
    fetch('https://hook-conept-default-rtdb.firebaseio.com/hocksDB.json', {
      method: 'POST',
      body: JSON.stringify({
        // id: ingredient.id,
        // title: ingredient.title,
        // amount: ingredient.amount
        ingredient
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(responseData => {
        setUserIngredients(prevIngredients => [
          ...prevIngredients,
          { id: responseData.name, ...ingredient }
        ]);
      })

  }

  const removeIngredientHandler = (removeId) => {
    setUserIngredients(prevIngredients =>
      prevIngredients.filter(e => e.id !== removeId)
    );
  };

  console.log(userIngredients);


  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />
      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
};

export default Ingredients;
