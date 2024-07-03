import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Shop/>} />
      <Route exact path='/Men' element={<ShopCategory banner={men_banner} category="men"/>} />
      <Route exact path='/Women' element={<ShopCategory banner={women_banner} category="women"/>} />
      <Route exact path='/Kids' element={<ShopCategory banner={kids_banner} category="kid"/>} />
      <Route exact path='/product' element={<Product/>}>
        <Route exact path=':productId' element={<Product/>}/>
      </Route>
      <Route exact path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
