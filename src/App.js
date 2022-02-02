import {
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import  { useState, useEffect } from 'react';


import Sidebar from './pages/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from'./pages/auth/login';
import Counter from './testRedux/counter';
import AdminAcceuil from './components/admin/Acceuil'
import Livreurs from './components/admin/Livreurs'
import Managers from './components/admin/Managers'
import ResponsableLivraison from './components/admin/ResponsableLivraison'
import Vehicules from './components/admin/Vehicules'
import './index.css'
import { useSelector,useDispatch } from "react-redux";
import {setUser,setUserByToken} from './redux/user-slice';
import Auth from './provider/Auth'



function App() {

 
  return (

    <div className="App">
      <BrowserRouter>
    
 <Routes>    
 
 
 <Route path="login/:acteur" element={<Login />} />  

 <Route  path="dashboard" element={<Auth><Dashboard /></Auth>}>
   <Route path="admin">

   <Route index element={<Managers />} />
    <Route path="acceuil" element={<AdminAcceuil />} />
    <Route path="managers" element={<Managers />} />
    <Route path="responsableLivraison" element={<ResponsableLivraison />} />
    <Route path="chauffeur" element={<Livreurs />} />
    <Route path="vehicule" element={<Vehicules />} />

   </Route>

</Route>
 </Routes>
    
      </BrowserRouter>
    </div>
    
     
  );
}

export default App;
