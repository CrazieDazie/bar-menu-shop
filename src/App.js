import './App.css';
import AllCategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponents/Dishes';

function App() {
  return (
    <div className="App">
      <div className="block">
        <AllCategories/>
        <Cart/>
      </div>
      <div className="block">
        <Dishes/>
      </div>
    </div>
  );
}

export default App;
