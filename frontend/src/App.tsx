
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import TourDetail from './pages/TourDetail'
import DestinationDetail from './pages/DestinationDetail'
import DestinationList from './pages/DestinationList'
import MainLayout from './layouts/MainLayout'
import TourList from './pages/TourList'
import BlogList from './pages/BlogList'
import BlogDetail from './pages/BlogDetail'

function App() {
return(
 <>
  <Routes>
     <Route element={<MainLayout />}>
    <Route path="/" element={<Home/>} />
    <Route path="/tours" element={<TourList/>} />
        <Route path="/tours/:id" element={<TourDetail/>} />
    <Route path="/destinations/:id" element={<DestinationDetail/>} />
    <Route path="/destinations" element={<DestinationList/>} />
        <Route path="/blogs" element={<BlogList/>} />
                <Route path="/blogs/:id" element={<BlogDetail/>} />


 </Route>
  </Routes>
 </>
)
}

export default App
