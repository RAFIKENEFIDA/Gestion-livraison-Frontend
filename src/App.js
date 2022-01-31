import {
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Sidebar from './pages/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from'./pages/auth/login';
import Counter from './testRedux/counter';
import './index.css'

function App() {
  return (

    <div className="App">
      <BrowserRouter>
    
 <Routes>    
  <Route  path="redux" element={<Counter />}  />

  <Route  path="dashboard" element={<Dashboard />}>
 </Route>
 <Route path="login/:acteur" element={<Login />} />  
 </Routes>
    
      </BrowserRouter>
    </div>
    
     
  );
}

export default App;
