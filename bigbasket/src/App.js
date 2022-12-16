
import './App.css';
import AllRoutes from './All-Routes/AllRoutes';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div>
      <Checkout />
      {/* <Navbar/> */}
      {/* <Cart/> */}
  <AllRoutes/>
    </div>
  );
}

export default App;
