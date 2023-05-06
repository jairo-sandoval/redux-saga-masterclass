import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import Meals from './components/meals/Meals';
import MealEdit from './components/meals/MealEdit';
import Login from './components/login/Login';

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/meals' element={<Meals/>}/>


          <Route path='/meals/edit/' element={<MealEdit />}/>
          <Route path='/meals/edit/:id' element={<MealEdit />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
