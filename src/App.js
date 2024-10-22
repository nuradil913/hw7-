import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import DetailPage from './pages/DetailPage/DetailPage';
import { useDispatch } from 'react-redux';
import { getCategories } from './redux/reducer';
import { useEffect } from 'react';
import './style.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories())
  }, [dispatch])
  return (
    <BrowserRouter>
      <Header />
        <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/category/:category' element={<CategoryPage/>} />
          <Route path='/product/:id' element={<DetailPage/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
