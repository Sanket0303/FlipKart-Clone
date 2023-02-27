import { Box } from '@mui/system';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

import DataProvider from './context/DataProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/cart';
import Payment from './components/Payment/Payment'


// using react-router-dom to route through all application like details page.
// using BrowserRouter wrap will help in routing, pages we need routing to mmust be wraped with Routes
// use of Route is required to define path

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <Box style={{marginTop: 54}}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<DetailView/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/payment' element={<Payment/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
