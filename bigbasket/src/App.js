
import './App.css';
import AllRoutes from './All-Routes/AllRoutes';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      {/* <Checkout /> */}
      <Cart/>
  <AllRoutes/>
    </div>
  );
}

export default App;
