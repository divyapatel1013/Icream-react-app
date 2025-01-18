import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Product from './Pages/Product';
import Gallary from './Pages/Gallary';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/product' element={<Product />} />
            <Route path='/service' element={<Service />} />
            <Route path='/product' element={<Product />} />
            <Route path='/gallary' element={ <Gallary />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<NoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  );
};

export default App;
