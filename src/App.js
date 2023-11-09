import logo from './logo.svg';
import './App.css';
import Main from './components/pages/Main/Main';
import Cart from './components/pages/Cart/Cart';

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Catalog from './components/pages/Catalog/Catalog';
import CatalogItem from './components/pages/CatalogItem/CatalogItem';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path = '/' element = {<Main />} />
          <Route path = '/cart' element = {<Cart />} />
          <Route path = '/catalog' element = {<Catalog />} />
          <Route path = '/item' element = {<CatalogItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
