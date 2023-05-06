import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Meal from './Meal';
import { getMeals } from '../../redux/actions/meals/getMeals';
import { useNavigate } from 'react-router-dom';

const Meals = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const meals = useSelector(store => store.meals.meals)

    useEffect(() => {
        dispatch(getMeals())
    }, [])

    const redirectEdit = (id) => {
        navigate(`/meals/edit/${id > 0 ? id : ''}`)
    }

    return (
        <div className='meals'>
            <h2>Comidas</h2>
            <p>Menu</p>
            {
                meals.map((meal) => 
                    <Meal 
                        key={meal.id} 
                        meal={meal}
                        redirectEdit={redirectEdit}
                    />
                ) 
            }
            <button onClick={redirectEdit}>Create meal</button>
        </div>
    );
};

export default Meals;