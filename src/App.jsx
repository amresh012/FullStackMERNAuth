import './App.css'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Sign from './Pages/Sign'
import SignUp from './Pages/SignUp'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'

function App() {

  return (
   <BrowserRouter>
   {/* Header */}
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/Sign" element={<Sign/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
