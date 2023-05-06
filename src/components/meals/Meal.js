import React from 'react';

const Meal = ({meal, redirectEdit}) => {
    return (
        <div>
            <h2>{meal.name}</h2>
            <p>{meal.price}</p>
            <button onClick={() => redirectEdit(meal.id)}>update</button>
        </div>
    );
};

export default Meal;