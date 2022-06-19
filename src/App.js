import { Navbar } from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import { About } from './components/About';
import { Home } from './components/Home';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { Featured } from './components/Featured';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { UserOne } from './components/UserOne';
import { UserTwo } from './components/UserTwo';
import { UserThree } from './components/UserThree';


function App() { 

  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='order-summary' element={<OrderSummary />} />
      <Route path='products' element={<Products />} >
        <Route index element={<Featured />} />
        <Route path='featured' element={<Featured />}/>
        <Route path='new' element={<NewProducts />}/>
      </Route>
      <Route path='users' element={<Users />} >
      <Route path=':userId' element={<UserDetails />}/>
      <Route path='admin' element={<Admin />}/>
      <Route path='user1' element={<UserOne />}/>
      <Route path='user2' element={<UserTwo />}/>
      <Route path='user3' element={<UserThree />}/> 
      </Route>
      <Route path='*' element={<NoMatch />} />
    </Routes> 
    </>
  );
}

export default App;
