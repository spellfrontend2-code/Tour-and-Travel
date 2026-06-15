
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import PackageDetail from './pages/PackageDetail'
import DestinationDetail from './pages/DestinationDetail'
import Destination from './pages/Destination'
import MainLayout from './layouts/MainLayout'

function App() {
return(
 <>
  <Routes>
     <Route element={<MainLayout />}>
    <Route path="/" element={<Home/>} />
    <Route path="/packages/:id" element={<PackageDetail/>} />
    <Route path="/destinations/:id" element={<DestinationDetail/>} />
    <Route path="/destinations" element={<Destination/>} />
 </Route>
  </Routes>
 </>
)
}

export default App
