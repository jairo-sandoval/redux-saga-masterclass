import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRestaurants } from '../../redux/actions/restaurants/getRestaurants';
import {createMeals} from '../../redux/actions/meals/createMeals'

const MealEdit = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const token = useSelector(store => store.auth.token)
    const meals = useSelector(store => store.meals.meals)
    const restaurants = useSelector(store => store.restaurants.restaurants)
    let mealFound;

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [restaurantSelectedId, setRestaurantSelectedId] = useState('')

    useEffect(() => {
        dispatch(getRestaurants())
    }, [])

    useEffect(() => {
        if(id){
            mealFound = meals.find((meal) => meal.id == id)

            setName(mealFound.name)
            setPrice(mealFound.price)
            setRestaurantSelectedId(mealFound.restaurantId)
        }
    }, [])

    const submitMeal = () => {
        if(!restaurantSelectedId) return;

        const meal = {
            name,
            price
        }

        dispatch(createMeals({token, data: meal, id: restaurantSelectedId}))
    }

    return (
        <div>
            <div>   
                <label>Nombre de la comida</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>   
                <label>Precio:</label>
                <input
                    type='number'
                    value={price}
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                />
            </div>
            <select 
                value={restaurantSelectedId} 
                onChange={(e) => setRestaurantSelectedId(e.target.value)}
            >
                {
                    restaurants.map(restaurant => 
                    <option 
                        key={restaurant.id}
                        value={restaurant.id}
                    >
                        {restaurant.name}
                    </option>
                    )
                }
            </select>
            <button onClick={submitMeal}>{id ? 'edit' : 'submit'}</button>
        </div>
    );
};

export default MealEdit;