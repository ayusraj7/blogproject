import {Routes,Route,BrowserRouter} from 'react-router-dom';
import {useContext} from 'react'
import About from './pages/about/About'
import {AppContext} from './context/Appcontext'
import Contact from './pages/contact/Contact'
import Topbar from './components/topbar/topbar.jsx'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Write from './pages/write/write'
import Settings from './pages/settings/settings'
import Single from './pages/home/Single'

export default function App() {
  const {user}=useContext(AppContext);
  return (
    <BrowserRouter>
      <div>
        <Topbar />
        
        <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/register' element={user?<Home/>:<Register/>}></Route>
         <Route path='/login' element={user?<Home/>:<Login/>}></Route>
         <Route path='/settings' element={user?<Settings/>:<Register/>}> 
         </Route>
         <Route path='/post/:postId' element={<Single/>}></Route>
         <Route path='/write' element={user?<Write/> : <Register/>}></Route> 
         <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          
       </Routes>
     </div>
    </BrowserRouter>
  )
}
