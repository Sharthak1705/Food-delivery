import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sucess from './pages/Sucess';
import Error from './pages/Error';
import Fooditems from './components/Fooditems';


const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/sucess' element={<Sucess/>} />
  <Route path='/*' element={<Error/>} />
  <Route path='/food' element={<Fooditems />} />
</Routes>

</BrowserRouter>
    </div>
  )
}

export default App
