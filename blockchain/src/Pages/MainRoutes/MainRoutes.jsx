import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CheckOutPage from '../../Componetes/myPage/CheckOutPage'
import CardanoExpert from '../CardanoExpert'
import CartPage from '../CartPage'
import EtheriumDeveloper from '../EtheriumDeveloper'
import Home from '../nachiketHome/Home'
import PaymentPage from '../PaymentPage'
import Polkadot from '../Polkadot'
import Signup from '../Signup'
import Login from "../Login"
import { Thankyou } from '../Thankyou'
import { useDispatch,useSelector} from 'react-redux';

const MainRoutes = () => {
  const data=useSelector((state)=>{
    return (state.Sign.data)
  })

  return (
    <Routes>
          <Route path='/'       element={<Home/>}/>
          <Route path='/login'  element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
         
    
              {/* <Route path='/eterium/cart' element={<CartPage/>} /> */}
              <Route path='/cart/:id' element={<CartPage/>} />
        {/* <Route path='/polkadot/cart' element={<CartPage/>} /> */}
        <Route path='/eterium' element={<EtheriumDeveloper/>} />
        <Route path='/cardano' element={<CardanoExpert/>} />
        <Route path='/polkadot' element={<Polkadot/>} />
        <Route path='/checkoutpage' element={  <CheckOutPage/>} />
        <Route path='/paymentpage' element={<PaymentPage/>} />
        <Route path ="/thankyou" element ={<Thankyou />}/>
      
    </Routes>
  )
}

export default MainRoutes
